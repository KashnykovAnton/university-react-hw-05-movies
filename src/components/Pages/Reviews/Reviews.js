import styles from './Reviews.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetMovieReviews } from '../../services/movies-api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchGetMovieReviews({ movieId })
      .then(data => setReviews(data.results))
      .catch(err => console.log(err.message));
  }, [movieId]);

  return (
    <>
      {(reviews.length !== 0 && (
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
      )) || <p>We don't have reviews yet!</p>}
    </>
  );
};

export default Reviews;
