import { useState, useEffect, Suspense } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import { filmIdData } from "../../api-movies";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setError(false);
        setLoading(true);
        const response = await filmIdData(movieId);
        setMovie(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return;
  }

  const { title, genres, overview, vote_average, path } = movie;
  const userScore = `${vote_average * 10}%`;

  return (
    <div>
      <Link to="/">Go Back</Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={title}
        />
      </div>

      <div>
        <h2>{title}</h2>
        <p>User Score: {userScore}</p>
        <h3>Overview:</h3>
        <p>{overview}</p>
        <h3>Genres:</h3>
        <p>{genres.map((genre) => genre.name).join(", ")}</p>
      </div>
      <ul>
        <NavLink to="cast">Cast </NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </ul>
      <div>
        <Suspense
          fallback={
            <div>
              <p>Loading...</p>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
