import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filmReviewsData } from "../../api-movies";

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
    <div>
      <h2>Reviews</h2>
      {loading && <p>Loading reviews...</p>}
      {error && <p>Error fetching reviews.</p>}
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}
