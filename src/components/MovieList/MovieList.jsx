import { NavLink, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <div className={css.wraper}>
      <ul className={css.list}>
        {movies.map((movie) => (
          <li className={css.item} key={movie.id}>
            {/* <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink> */}
            <NavLink to={`/movies/${movie.id}`} state={location}>
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
