import MovieList from "../../components/MovieList/MovieList.jsx";
import { filmsData } from "../../api-movies.js";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchFilms() {
      try {
        const response = await filmsData("day");
        setMovies(response.data.results);
      } catch (error) {
        console.error();
      }
    }
    fetchFilms();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}
