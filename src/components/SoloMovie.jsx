import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import DefaultImage from "../../public/NoImage.png";
import { NavLink } from "react-router-dom";
import Spinner from "../components/Spinner";

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
    <div className="bg-zinc-800 p-10 md:p-20">
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="md:w-80 lg:w-96">
          <img className="w-full h-auto" src={image} alt={Title} />
        </div>
        <div className="text-amber-300">
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
          <button className=" text-white transition ease-in-out delay-150 bg-amber-300 hover:-translate-y-1 hover:scale-110
           hover:bg-amber-500 duration-300 rounded-lg p-2">
            <NavLink to="/">
              volver al inicio
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoloMovie;