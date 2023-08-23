import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ItemMovie from "./ItemMovie";
import Spinner from "./Spinner";

const Movies = () => {
  const { isLoading, data } = useContext(DataContext);

  return (
    <div className="Movies grid grid-cols-2 gap-4">
      {!isLoading ? (
        data.map((item) => (
          <ItemMovie
            key={item.imdbID}
            id={item.imdbID}
            title={item.Title}
            type={item.Type}
            year={item.Year}
            poster={item.Poster}
          />
        ))
      ) : (
        <div className="fixed bg-zinc-800 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Movies;