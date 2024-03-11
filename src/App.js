import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import LoaderSpin from './components/Loader/LoaderSpin';
// import HomePage from './components/Views/HomePage';
// import MoviesPage from './components/Views/MoviesPage';
// import MovieDetailsPage from './components/Views/MovieDetailsPage';
// import NotFoundView from './components/Views/NotFoundView';

const HomePage = lazy(() =>
  import(
    './components/Pages/HomePage/HomePage.js' /* webpackChunkName: "home-page" */
  )
);
const MoviesPage = lazy(() =>
  import(
    './components/Pages/MoviesPage/MoviesPage.js' /* webpackChunkName: "movies-page" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    './components/Pages/MovieDetailsPage/MovieDetailsPage.js' /* webpackChunkName: "movie-details-page" */
  )
);
const NotFoundView = lazy(() =>
  import(
    './components/Pages/NotFoundView.js' /* webpackChunkName: "not-found-page" */
  )
);

function App() {
  return (
    <Container>
      <AppBar />
      <ToastContainer theme="colored" autoClose={2000} />
      <Suspense fallback={<LoaderSpin />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/*" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
