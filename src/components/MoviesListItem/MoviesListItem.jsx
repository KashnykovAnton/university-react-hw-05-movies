import { Link, useLocation } from 'react-router-dom';
import { checkPath } from 'components/services/utils';
import styles from './MoviesListItem.module.css';

const MoviesListItem = ({ id, poster_path, original_title, name }) => {
  const location = useLocation();

  return (
    <li className={styles.item}>
      <Link to={`/movies/${id}`} state={location} className={styles.link}>
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
};

export default MoviesListItem;
