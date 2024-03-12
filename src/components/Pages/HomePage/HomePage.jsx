import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import LoaderSpin from 'components/Loader/LoaderSpin';
import { fetchTrendMovies } from 'components/services/movies-api';
import { errorMessage } from 'components/services/toast';
import { checkPath } from 'components/services/utils';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTrendMovies = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchTrendMovies();
        if (!results) {
          return;
        }
        setMovies(results);
      } catch (error) {
        errorMessage(`Something went wrong: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendMovies();
  }, []);

  return (
    <>
      {isLoading && <LoaderSpin />}
      {movies && (
        <ul className={styles.list}>
          {movies.map(({ id, original_title, name, poster_path }) => {
            return (
              <li key={id} className={styles.item}>
                <Link
                  to={{
                    pathname: `/movies/${id}`,
                  }}
                  className={styles.link}
                >
                  <div className={styles.itemDiv}>
                    <img
                      src={checkPath(poster_path, "poster")}
                      alt={original_title}
                      width="240px"
                    />
                    <p>{original_title ?? name}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default HomePage;
