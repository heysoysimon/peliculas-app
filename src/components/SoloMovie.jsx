import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import DefaultImage from "../../public/NoImage.png";
import Spinner from "../components/Spinner"

const SoloMovie = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useFetch(`&i=${id}`);

  if (isLoading || error || !data) {
    return (
      <div className="flex bg-zinc-800 justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  const { Poster, Title, Plot, Year, Country, Director, Released, Runtime } =
    data;
  let image = Poster === "N/A" ? DefaultImage : Poster;

  return (
    <div className="grid grid-cols-2 gap-4 bg-zinc-800">
      <img className="w-full h-auto" src={image} alt={Title} />
      <div className="text-white p-4">
        <h2 className="text-2xl text-amber-400 font-bold mb-4">{Title}</h2>
        <p className="mb-2">{Plot}</p>
        <p className="mb-2">
          <strong>Country:</strong> {Country}
        </p>
        <p className="mb-2">
          <strong>Director:</strong> {Director}
        </p>
        <p className="mb-2">
          <strong>Released:</strong> {Released}
        </p>
        <p className="mb-2">
          <strong>Runtime:</strong> {Runtime}
        </p>
        <p className="mb-2">
          <strong>Year:</strong> {Year}
        </p>
      </div>
    </div>
  );
};

export default SoloMovie;