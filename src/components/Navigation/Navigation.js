import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={styles.link}
        // activeClassName={styles.activeLink}
      >
        HomePage
      </NavLink>
      <NavLink
        to="/movies"
        className={styles.link}
        // activeClassName={styles.activeLink}
      >
        MoviesPage
      </NavLink>
    </nav>
  );
};

export default Navigation;
