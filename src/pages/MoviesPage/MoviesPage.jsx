import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";
import { useState } from "react";
import { filmQueryData } from "../../api-movies";

export default function MoviesPage() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
  return (
    <div>
      <SearchForm onSubmit={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {movie.length > 0 && <MovieList movies={movie} />}
    </div>
  );
}
