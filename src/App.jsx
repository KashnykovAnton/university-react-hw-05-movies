import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from './components/AppBar/AppBar';
import './App.css';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage.jsx' /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import(
    './pages/MoviesPage/MoviesPage.jsx' /* webpackChunkName: "movies-page" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage/MovieDetailsPage.jsx' /* webpackChunkName: "movie-details-page" */
  )
);
const Cast = lazy(() =>
  import('./pages/CastPage/CastPage.jsx' /* webpackChunkName: "cast-subpage" */)
);
const Reviews = lazy(() =>
  import(
    './pages/ReviewsPage/ReviewsPage.jsx' /* webpackChunkName: "reviews-subpage" */
  )
);
const NotFoundPage = lazy(() =>
  import(
    './pages/NotFoundPage/NotFoundPage.jsx' /* webpackChunkName: "not-found-page" */
  )
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
