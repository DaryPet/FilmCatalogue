import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { filmCastData } from "../../api-movies";
import css from "./MovieCast.module.css";

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
    <div className={css.wraper}>
      <h2 className={css.title}>Cast</h2>
      <ul className={css.list}>
        {cast.map(({ profile_path, original_name, character, id }) => {
          return (
            <li className={css.item} key={id}>
              <img
                className={css.img}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlcM989vRkQnMY-r6Nd8SgVLt34-tPKMLouQ&s"
                }
                alt={`photo ${original_name}`}
                width={100}
              />
              <p className={css.original_name}>{original_name}</p>
              <p className={css.character}>{character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
