import { NavLink, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <div className={css.wraper}>
      <ul className={css.list}>
        {movies.map((movie) => (
          <li className={css.item} key={movie.id}>
            <NavLink
              className={css.link}
              to={`/movies/${movie.id}`}
              state={location}
            >
              <img
                className={css.moviePoster}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/640px-No-Image-Placeholder.svg.png"
                }
                alt={movie.original_title}
              />
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
