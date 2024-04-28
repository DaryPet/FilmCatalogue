import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filmReviewsData } from "../../api-movies";
import css from "./MovieReviews.module.css";

export default function MovieReviwes() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchReviewsData() {
      try {
        setLoading(true);
        setError(false);
        const results = await filmReviewsData(movieId);
        setReviews(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchReviewsData();
  }, [movieId]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Reviews</h2>
      {loading && <p>Loading reviews...</p>}
      {error && <p>Error fetching reviews.</p>}
      {reviews && reviews.length > 0 ? (
        <ul className={css.list}>
          {reviews.map((review, index) => (
            <li className={css.wrap} key={index}>
              <p className={css.name}>Author: {review.author}</p>
              <p className={css.review}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noReviews}>No reviews available.</p>
      )}
    </div>
  );
}
