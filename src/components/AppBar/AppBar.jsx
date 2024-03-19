import { Suspense } from 'react';
import LoaderSpin from 'components/Loader/LoaderSpin';
import Navigation from 'components/Navigation/Navigation';
import styles from './AppBar.module.css';
import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';

const AppBar = () => {
  return (
    <Container>
      <Suspense fallback={<LoaderSpin />}>
        <header className={styles.header}>
          <Navigation />
        </header>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default AppBar;
