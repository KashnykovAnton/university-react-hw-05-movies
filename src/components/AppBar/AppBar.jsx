import styles from './AppBar.module.css';
import Navigation from '../Navigation/Navigation';

const AppBar = () => {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
};

export default AppBar;
