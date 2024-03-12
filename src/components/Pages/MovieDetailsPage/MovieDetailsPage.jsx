import { useState, useEffect } from 'react';
import {
  Link,
  useParams,
  useLocation,
  useNavigate,
  Outlet,
} from 'react-router-dom';
import { fetchGetMovieDetails } from 'components/services/movies-api';
import { errorMessage } from 'components/services/toast';
import { checkPath } from 'components/services/utils';
import LoaderSpin from 'components/Loader/LoaderSpin';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setIsLoading(true);
        const data = await fetchGetMovieDetails({ movieId });
        if (!data) {
          return;
        }
        setMovieDetails(data);
      } catch (error) {
        errorMessage(`Something went wrong: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  const handleGoBack = () => {
    navigate(location.state ?? '/');
  };

  return (
    <div className={styles.MovieDetailsContainer}>
      {isLoading && <LoaderSpin />}
      {movie.length !== 0 && (
        <>
          <button
            className={styles.button}
            type="button"
            onClick={handleGoBack}
          >
            Go back
          </button>
          <div className={styles.card}>
            <img
              src={checkPath(movie.poster_path, 'poster')}
              alt={movie.title}
              width="240px"
            />
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
          <hr />
          <Link to="cast">
            <p className={styles.link}>Cast</p>
          </Link>
          <Link to="reviews">
            <p className={styles.link}>Reviews</p>
          </Link>
          <hr />
          <Outlet />
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
