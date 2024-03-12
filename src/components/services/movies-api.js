import axios from 'axios';

const API_KEY = 'api_key=a2d8ca768997315cf3e5e389a09b25a7';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;


// Trending movies
// https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>
export async function fetchTrendMovies() {
  const {data} = await axios(`trending/movie/day?${API_KEY}`);
  return data;
}

// Search movies
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
export async function fetchSearchMovies(value, page) {
  const {data} = await axios(`search/movie?query=${value}&page=${page}&${API_KEY}&language=en-US&include_adult=false`);
  return data
}

// Get movie details
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
export async function fetchGetMovieDetails({ movieId }) {
  const { data } = await axios(`movie/${movieId}?${API_KEY}&language=en-US`);
  return data;
}

// Get movie credits
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
export async function fetchGetMovieCredits({ movieId }) {
  const { data } = await axios(
    `movie/${movieId}/credits?${API_KEY}&language=en-US`
  );
  return data;
}

// Get movie reviews
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
export async function fetchGetMovieReviews({ movieId }) {
  const { data } = await axios(
    `movie/${movieId}/reviews?${API_KEY}&language=en-US&page=1`
  );
  return data;
}