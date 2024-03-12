import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoaderSpin from 'components/Loader/LoaderSpin';
import { fetchGetMovieReviews } from 'components/services/movies-api';
import { errorMessage } from 'components/services/toast';
import styles from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchGetMovieReviews({ movieId });
        if (!results) {
          return;
        }
        setReviews(results);
      } catch (error) {
        errorMessage(`Something went wrong: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <LoaderSpin />
      ) : (
        reviews.length === 0 && <p>We don't have reviews yet!</p>
      )}
      {reviews.length !== 0 && (
        <ul>
          {reviews.map(el => {
            return (
              <li key={el.id} className={styles.review}>
                <p className={styles.author}>Author: {el.author}</p>
                <p className={styles.text}>{el.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
