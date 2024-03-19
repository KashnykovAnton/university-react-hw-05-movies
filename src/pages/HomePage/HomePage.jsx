import { useState, useEffect } from 'react';
import { fetchTrendMovies } from 'components/services/movies-api';
import { errorMessage } from 'components/services/toast';
import LoaderSpin from 'components/Loader/LoaderSpin';
import MoviesList from 'components/MoviesList/MoviesList';
import InfoMessage from 'components/InfoMessage/InfoMessage';
import Container from 'components/Container/Container';

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
    <Container>
      {movies.length !== 0 ? <MoviesList movies={movies} /> : <InfoMessage />}
      {isLoading && <LoaderSpin />}
    </Container>
  );
};

export default HomePage;
