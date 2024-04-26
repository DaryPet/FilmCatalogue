import { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { filmIdData } from "../../api-movies";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
  console.log(movieId);
  const location = useLocation();
  const baseUrl = useRef(location.state ?? "/movies");

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await filmIdData(movieId);
        setMovie(response.data);
      } catch (error) {
        error;
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return;
  }

  const { title, genres, overview, score, path } = movie;

  return (
    <div>
      <div>
        <img src={path} alt={overview} />
      </div>
      {movie && (
        <div>
          <h2>{title}</h2>
        </div>
      )}
    </div>
  );
}
