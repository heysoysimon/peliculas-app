import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import DefaultImage from "../../public/NoImage.png"

const SoloMovie = () => {
    const { id } = useParams();
    const { isLoading, error, data } = useFetch(`&i=${id}`);
  
    if (isLoading || error || !data) {
      return <div>
        <h2>
            aqui va un spinner
        </h2>
      </div>; // o puedes mostrar un mensaje de carga o error aquí
    }
  
    const { Poster, Title, Plot, Year, Country, Director, Released, Runtime } = data;
  let image = Poster === "N/A" ? DefaultImage : Poster
    return (
      <div className="single-movie">
        <img src={image} alt={Title} />
        <div className="single-info">
          <h2>{Title}</h2>
          <p>{Plot}</p>
          <p>
            <strong>Country: </strong>
            {Country}
          </p>
          <p>
            <strong>Director: </strong>
            {Director}
          </p>
          <p>
            <strong>Released: </strong>
            {Released}
          </p>
          <p>
            <strong>Runtime: </strong>
            {Runtime}
          </p>
          <p>
            <strong>Year: </strong>
            {Year}
          </p>
        </div>
      </div>
    );
  };
  
  export default SoloMovie;