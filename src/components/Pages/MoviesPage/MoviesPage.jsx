import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import MoviesSearch from '../MoviesSearch/MoviesSearch';
import LoaderSpin from 'components/Loader/LoaderSpin';
import { infoMessage, errorMessage } from 'components/services/toast';
import { fetchSearchMovies } from 'components/services/movies-api';
import { checkPath } from 'components/services/utils';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const { results, total_pages } = await fetchSearchMovies(query, page);
        if (results.length !== 0) {
          setMovies(prevMovies =>
            prevMovies.length !== 0 ? [...prevMovies, ...results] : results
          );
          setTotalPages(total_pages);
          return;
        }
        infoMessage('Unfortunately, there are no movies with this name');
      } catch (error) {
        errorMessage(`Something went wrong: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [page, query]);

  const onSearchValue = value => {
    setPage(1);
    setTotalPages(1);
    setMovies([]);
    setSearchParams({ query: value, page: 1 });
  };

  const handleClick = () => {
    setPage(prevPage => prevPage + 1);
    const prevParams = Object.fromEntries([...searchParams]);
    setSearchParams({ ...prevParams, page: Number(page) + 1 });
  };

  return (
    <>
      <MoviesSearch onValueSubmit={onSearchValue} />
      {isLoading && <LoaderSpin />}
      <>
        <ul className={styles.list}>
          {movies.map(({ id, original_title, name, poster_path }) => {
            return (
              <li key={id} className={styles.item}>
                <Link
                  to={`${location.pathname}/${id}`}
                  state={location}
                  className={styles.link}
                >
                  <div className={styles.itemDiv}>
                    <img
                      src={checkPath(poster_path, 'poster')}
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
        {page !== totalPages && (
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
    </>
  );
};

export default MoviesPage;
