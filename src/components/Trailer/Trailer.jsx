import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filmVideosData } from "../../api-movies";

export default function MovieTrailer() {
  const { movieId } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchVideoData() {
      try {
        setLoading(true);
        setError(false);
        const response = await filmVideosData(movieId);
        setVideos(response.data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchVideoData();
  }, [movieId]);

  return (
    <div>
      {loading && <p>Loading trailers...</p>}
      {error && <p>Error fetching trailers.</p>}
      {videos && videos.length > 0 ? (
        <div>
          {videos.map((video, index) => (
            <div key={index}></div>
          ))}
        </div>
      ) : (
        <p>No trailers available.</p>
      )}
    </div>
  );
}
