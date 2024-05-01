import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { filmQueryData } from "../../api-movies";
import css from "./MoviePage.module.css";

export default function MoviesPage() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      handleSearch(query);
    }
  }, [searchParams]);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      setError(false);
      const response = await filmQueryData(query);
      setMovie(response.data.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = (query) => {
    setSearchParams({ query: query });
  };
  return (
    <div className={css.container}>
      <SearchForm className={css.form} onSubmit={handleSubmit} />
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {movie.length > 0 && <MovieList movies={movie} />}
    </div>
  );
}
