import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoaderSpin from 'components/Loader/LoaderSpin';
import { errorMessage } from 'components/services/toast';
import { fetchGetMovieCredits } from 'components/services/movies-api';
import { checkPath } from 'components/services/utils';
import styles from './CastPage.module.css';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getCredits = async () => {
      try {
        setIsLoading(true);
        const { cast } = await fetchGetMovieCredits({ movieId });
        if (!cast) {
          return;
        }
        setCredits(cast);
      } catch (error) {
        errorMessage(`Something went wrong: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    getCredits();
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <LoaderSpin />
      ) : (
        credits.length === 0 && <p>We don't have information about cast!</p>
      )}
      {credits.length !== 0 && (
        <ul className={styles.list}>
          {credits.map(el => {
            return (
              <li key={el.cast_id}>
                <img
                  src={checkPath(el.profile_path, 'photo')}
                  alt={el.name}
                  width="120px"
                  className={styles.CastImage}
                />
                <h4>Name</h4>
                <p className={styles.text}>{el.name}</p>
                <h4>Character</h4>
                <p className={styles.text}>{el.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
