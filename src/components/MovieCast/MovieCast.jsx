import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { filmCastData } from "../../api-movies";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCastData() {
      try {
        setLoading(true);
        setError(false);
        const response = await filmCastData(movieId);
        console.log(response.data.cast);
        setCast(response.data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchCastData();
  }, [movieId]);
  if (loading) {
    return <p>Loading cast info...</p>;
  }
  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(({ profile_path, original_name, character, id }) => {
          return (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlcM989vRkQnMY-r6Nd8SgVLt34-tPKMLouQ&s"
                }
                alt={`photo ${original_name}`}
                width={100}
              />
              <p>{original_name}</p>
              <p>{character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
