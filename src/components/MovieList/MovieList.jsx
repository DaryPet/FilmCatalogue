import { NavLink } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  return (
    <div className={css.wraper}>
      <h2 className={css.title}>Trending Today</h2>
      <ul className={css.list}>
        {movies.map((movie) => (
          <li className={css.item} key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
