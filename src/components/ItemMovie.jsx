import { Link } from "react-router-dom";
import DefaultImage from "../../public/NoImage.png";

const ItemMovie = ({ id, title, type, year, poster }) => {
  const image = poster === "N/A" ? DefaultImage : poster;

  return (
    <Link to={`/movies/${id}`}>
      <div className="my-10 md:grid-cols-2 grid-cols-1 md.items-center justify-center">
        <div className="w-full  max-w-md mx-auto">
          <img className="md:mx-20" src={image} alt="Movie Poster" />
        </div>
        <div className="px-6 text-amber-400 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="text-amber-400 text-sm">{type} ({year})</div>
        </div>
      </div>
    </Link>
  );
};

export default ItemMovie;