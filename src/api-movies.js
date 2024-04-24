import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const fetchAboutFilms = async (id, params) => {
  const response = await axios.get(`/movie/${id}`, {
    params: {
      append_to_response: params,
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWMyZTg1OTIwMmU4NGE1ODE5YzJiZDVkNDVkNWVjZCIsInN1YiI6IjY2Mjk2NDRhY2I2ZGI1MDE4NmIzOWRkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wy7796DKr2EryK0YHdSy0zruwOPIPsNfl7UCeLC6fos",
    },
  });
  return response.data;
};
