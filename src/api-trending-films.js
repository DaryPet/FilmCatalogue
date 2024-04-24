import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const fetchTrendingFilms = async (trending) => {
  const response = axios.get(`trending/movies/${trending}?language=en-US`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWMyZTg1OTIwMmU4NGE1ODE5YzJiZDVkNDVkNWVjZCIsInN1YiI6IjY2Mjk2NDRhY2I2ZGI1MDE4NmIzOWRkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wy7796DKr2EryK0YHdSy0zruwOPIPsNfl7UCeLC6fos",
    },
  });
  return (await response).data.results;
};
