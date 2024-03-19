import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesSearch from 'components/MoviesSearch/MoviesSearch';
import LoaderSpin from 'components/Loader/LoaderSpin';
import { infoMessage, errorMessage } from 'components/services/toast';
import { fetchSearchMovies } from 'components/services/movies-api';
import MoviesList from 'components/MoviesList/MoviesList';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';
import Container from 'components/Container/Container';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
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

  const handleCLick = () => {
    setPage(prevPage => prevPage + 1);
    const prevParams = Object.fromEntries([...searchParams]);
    setSearchParams({ ...prevParams, page: Number(page) + 1 });
  };

  return (
    <Container>
      <MoviesSearch onValueSubmit={onSearchValue} />
      {movies.length > 0 && <MoviesList movies={movies} />}
      {page !== totalPages && <LoadMoreButton handleCLick={handleCLick} />}
      {isLoading && <LoaderSpin />}
    </Container>
  );
};

export default MoviesPage;
