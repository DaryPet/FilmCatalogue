import MovieList from "../../components/MovieList/MovieList.jsx";
import { filmsData } from "../../api-movies.js";
import { useState, useEffect } from "react";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchFilms() {
      try {
        setLoading(true);
        const response = await filmsData("day");
        setMovies(response.data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchFilms();
  }, []);

  return (
    <div className={css.wraper}>
      <h2 className={css.title}>Trending Today</h2>
      <p className={css.loading}>{loading && <b>Loading page...</b>}</p>
      <MovieList className={css.list} movies={movies} />
    </div>
  );
}
