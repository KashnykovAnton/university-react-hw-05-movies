import MoviesListItem from 'components/MoviesListItem/MoviesListItem';
import styles from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  return (
    <ul className={styles.list}>
      {movies.map(({ id, original_title, name, poster_path }) => {
        return (
          <MoviesListItem
            key={id}
            id={id}
            poster_path={poster_path}
            original_title={original_title}
            name={name}
          />
        );
      })}
    </ul>
  );
};

export default MoviesList;
