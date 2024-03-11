import styles from './MoviesPage.module.css';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { Link, useMatch, useLocation, useNavigate } from 'react-router-dom';
import { fetchSearchMovies } from '../../services/movies-api';
import MoviesSearch from '../MoviesSearch/MoviesSearch';

const noPoster =
  'https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_960_720.png';
const baseUrl = 'https://image.tmdb.org/t/p/w500';

const MoviesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const { url } = useMatch();
  // const obj = useMatch();
  // console.log('obj: ', obj);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const valueQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (!valueQuery) {
      setMovies([]);
      return;
    }
    fetchSearchMovies(valueQuery, page)
      .then(data => {
        if (data.results.length !== 0) {
          setMovies(prevMovies => [...prevMovies, ...data.results]);
          return;
        }
        toast.warn('Фильмов с таким названием, к сожалению, нет');
        setMovies([]);
      })
      .catch(err => {
        console.log(err);
      });
  }, [valueQuery, page]);

  const onSearchValue = value => {
    setPage(1);
    setMovies([]);
    console.log(location);
    navigate({ ...location, search: `query=${value}` });
  };

  const handleClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <MoviesSearch onValueSubmit={onSearchValue} />

      {movies && (
        <>
          <ul className={styles.list}>
            {movies.map(({ id, original_title, name, poster_path }) => {
              return (
                <li key={id} className={styles.item}>
                  <Link
                    to={`${location.pathname}/${id}`}
                    state={{ from: location }}
                    className={styles.link}
                  >
                    <div className={styles.itemDiv}>
                      <img
                        src={
                          !poster_path ? noPoster : `${baseUrl}${poster_path}`
                        }
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
          {movies.length !== 0 && (
            <div className={styles.divButton}>
              <button
                className={styles.button}
                type="button"
                onClick={handleClick}
              >
                LoadMore
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default MoviesPage;
