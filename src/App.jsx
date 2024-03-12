import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import LoaderSpin from './components/Loader/LoaderSpin';
import './App.css';

const HomePage = lazy(() =>
  import(
    './components/Pages/HomePage/HomePage.jsx' /* webpackChunkName: "home-page" */
  )
);
const MoviesPage = lazy(() =>
  import(
    './components/Pages/MoviesPage/MoviesPage.jsx' /* webpackChunkName: "movies-page" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    './components/Pages/MovieDetailsPage/MovieDetailsPage.jsx' /* webpackChunkName: "movie-details-page" */
  )
);
const Cast = lazy(() =>
  import(
    './components/Pages/Cast/Cast.jsx' /* webpackChunkName: "cast-subpage" */
  )
);
const Reviews = lazy(() =>
  import(
    './components/Pages/Reviews/Reviews.jsx' /* webpackChunkName: "reviews-subpage" */
  )
);
const NotFoundPage = lazy(() =>
  import(
    './components/Pages/NotFoundPage/NotFoundPage.jsx' /* webpackChunkName: "not-found-page" */
  )
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<LoaderSpin />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </Container>
  );
}

export default App;
