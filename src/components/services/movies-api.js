const API_KEY = 'api_key=a2d8ca768997315cf3e5e389a09b25a7';
const BASE_URL = 'https://api.themoviedb.org/3/';

async function FetchWithErrorHandling(url = '') {
  // try {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   return data;
  // } catch (err) {
  //   return console.log(err.message);
  // }
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

// Trending movies
// https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>
export function fetchTrendMovies() {
  return FetchWithErrorHandling(`${BASE_URL}trending/movie/day?${API_KEY}`);
}

// Search movies
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
export function fetchSearchMovies(value, page) {
  // console.log('value in API:', value);
  // console.log('page in API:', page);
  return FetchWithErrorHandling(
    `${BASE_URL}search/movie?${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${value}`
  );
}

// Get movie details
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
export function fetchGetMovieDetails({ movieId }) {
  return FetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}?${API_KEY}&language=en-US`
  );
}

// Get movie credits
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
export function fetchGetMovieCredits({ movieId }) {
  return FetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/credits?${API_KEY}&language=en-US`
  );
}

// Get movie reviews
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
export function fetchGetMovieReviews({ movieId }) {
  return FetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/reviews?${API_KEY}&language=en-US&page=1`
  );
}
