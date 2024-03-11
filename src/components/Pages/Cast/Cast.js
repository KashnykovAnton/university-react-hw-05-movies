import styles from './Cast.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetMovieCredits } from '../../services/movies-api';

const noProfile =
  'https://t4.ftcdn.net/jpg/01/86/29/31/240_F_186293166_P4yk3uXQBDapbDFlR17ivpM6B1ux0fHG.jpg';
const baseUrl = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchGetMovieCredits({ movieId })
      .then(data => setCast(data.cast))
      .catch(err => console.log(err.message));
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul className={styles.list}>
          {cast.map(el => {
            return (
              <li key={el.cast_id}>
                <img
                  src={
                    !el.profile_path
                      ? noProfile
                      : `${baseUrl}${el.profile_path}`
                  }
                  alt={el.name}
                  width="120px"
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
