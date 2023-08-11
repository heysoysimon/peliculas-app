import React, { useContext, useState } from 'react'
import { DataContext } from '../context/DataContext'

const Formulario = () => {
    const [titulo , setTitulo] = useState("")
    const { setQuery, error } = useContext(DataContext)
    //const [data] = useFetch("")

    const handledSumit = e =>{
        e.preventDefault()
        setQuery(titulo)
        //console.log("Titulo: ", titulo)
    }
  return (
    <>
        <div className="Formulario">
            <h2>Encuentra una pelicula </h2>
            <form onSubmit={handledSumit}>
                <input type='text' placeholder='titulo pelicula' 
                onChange={e => setTitulo(e.target.value)}/>
                <input type="submit" value="buscar" />
            </form>
            {error && <p className='error'> esta pelicual no existe</p>}
        </div>
    </>
  )
}

export default Formulario