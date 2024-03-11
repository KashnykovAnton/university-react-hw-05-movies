import styles from './MovieDetailsPage.module.css';
import { useState, useEffect, lazy, Suspense } from 'react';
import {
  NavLink,
  Routes,
  Route,
  // useMatch,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import LoaderSpin from '../../Loader/LoaderSpin';
import { fetchGetMovieDetails } from '../../services/movies-api';

const Cast = lazy(() =>
  import('../Cast/Cast.js' /* webpackChunkName: "cast-subpage" */)
);
const Reviews = lazy(() =>
  import('../Reviews/Reviews.js' /* webpackChunkName: "reviews-subpage" */)
);

const noPoster =
  'https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_960_720.png';
const baseUrl = 'https://image.tmdb.org/t/p/w500';

const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const { url, path } = useMatch();
  const { movieId } = useParams();
  const [movie, setMovieDetails] = useState([]);

  useEffect(() => {
    fetchGetMovieDetails({ movieId })
      .then(setMovieDetails)
      .catch(err => {
        console.log(err.message);
      });
  }, [movieId]);

  const handleGoBack = () => {
    console.log('location: ', location);
    navigate(location?.state?.from ?? '/');
  };

  const posterUrl = !movie.poster_path
    ? noPoster
    : `${baseUrl}${movie.poster_path}`;

  return (
    <>
      <button className={styles.button} type="button" onClick={handleGoBack}>
        Go back
      </button>
      {movie.length !== 0 && (
        <div className={styles.card}>
          <img src={`${posterUrl}`} alt={movie.title} width="240px" />
          <div>
            <h2 className={styles.title}>{movie.title}</h2>
            <h4>Vote average / Vote count</h4>
            <p>
              {movie.vote_average} / {movie.vote_count}
            </p>
            <h4>Release date</h4>
            <p>{movie.release_date || movie.first_air_date}</p>
            <h4>Overview</h4>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <ul className={styles.genresList}>
              {movie.genres.map(({ id, name }) => {
                return <li key={id}>{name}</li>;
              })}
            </ul>
          </div>
        </div>
      )}
      <hr />
      <NavLink
        to={{
          ...location,
          pathname: `${navigate.url}/cast`,
        }}
      >
        <p className={styles.link}>Cast</p>
      </NavLink>
      <NavLink
        to={{
          ...location,
          pathname: `${navigate.url}/reviews`,
        }}
      >
        <p className={styles.link}>Reviews</p>
      </NavLink>
      <hr />
      <Suspense fallback={<LoaderSpin />}>
        <Routes>
          <Route path={`${navigate.path}/cast`} element={<Cast />} />
          <Route path={`${navigate.path}/reviews`} element={<Reviews />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
