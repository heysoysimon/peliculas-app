import DefaulTImage from "../../public/NoImage.png"
import { Link } from "react-router-dom";

const ItemMovie = ({id, title, type, year, poster }) => {
    let image = poster == "N/A" ? DefaulTImage : poster
    return ( 
        <Link to={`/movies/${id}`}>
         <article>
            <div className="item-movie"  style={{ backgroundImage: `url(${image})` }}>
                <h4>{title}</h4>
                <p className="row-info">
                    <span>
                        {type}
                    </span>
                    <span>
                        {year}
                    </span>
                </p>
            </div>
        </article>
        </Link>
       
     );
}
 
export default ItemMovie;