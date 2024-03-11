import styles from './HomePage.module.css';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendMovies } from '../../services/movies-api';

const HomePage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovies()
      .then(data => {
        if (data.results.length !== 0) {
          setMovies(data.results);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {movies && (
        <ul className={styles.list}>
          {movies.map(({ id, original_title, name, poster_path }) => {
            return (
              <li key={id} className={styles.item}>
                <Link
                  to={{
                    pathname: `/movies/${id}`,
                    state: { from: location },
                  }}
                  className={styles.link}
                >
                  <div className={styles.itemDiv}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
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
