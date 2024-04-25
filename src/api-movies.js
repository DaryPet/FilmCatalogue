import axios from "axios";
// axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const baseURL = "https://api.themoviedb.org/3/";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWMyZTg1OTIwMmU4NGE1ODE5YzJiZDVkNDVkNWVjZCIsInN1YiI6IjY2Mjk2NDRhY2I2ZGI1MDE4NmIzOWRkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wy7796DKr2EryK0YHdSy0zruwOPIPsNfl7UCeLC6fos";
const options = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export async function filmsData() {
  const url = `${baseURL}/trending/movie/day?language=en-US`;
  return await axios.get(url, options);
}

export async function filmIdData(id) {
  const url = `${baseURL}/movie/${id}?language=en-US`;
  return await axios.get(url, options);
}

export async function filmQueryData(query) {
  const url = `${baseURL}/search/movie?query=${query}&language=en-US`;
  return await axios.get(url, options);
}
