import { useEffect, useState } from "react"

const API_ENPOINT = "https://www.omdbapi.com/?apikey=5f2ce01"

export const useFetch = (params) => {
    const [ isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState(null)

    const fetchMovie = (url) => {
        setLoading(true)
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(respuestaJson => {
            if (respuestaJson.Response === "True"){
                setData(respuestaJson.Search || respuestaJson);
                setError(false)
            }else{
                setError(true)
            }
            setLoading(false)
            console.log("data: ", respuestaJson)
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchMovie(`${API_ENPOINT}${params}`);
    }, [params])
    return{isLoading, error, data}
}