import styles from './MoviesSearch.module.css';
import { toast } from 'react-toastify';
import { useState } from 'react';

const MoviesSearch = ({ onValueSubmit }) => {
  const [valueSearch, setValueSearch] = useState('');

  const handleChange = e => {
    setValueSearch(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (valueSearch.trim() === '') {
      toast.error('Введите корректное название!');
    }
    onValueSubmit(valueSearch);
    setValueSearch('');
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="submit" className={styles.button}>
          <span className={styles.buttonLabel}>Search</span>
        </button>

        <input
          className={styles.input}
          type="text"
          value={valueSearch}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default MoviesSearch;
