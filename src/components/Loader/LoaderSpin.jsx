import { Oval } from 'react-loader-spinner';
import styles from './LoaderSpin.module.css';

function LoaderSpin() {
  return (
    <div className={styles.SpinnerWrapper}>
      <Oval
        visible={true}
        height="80"
        width="80"
        color="var(--loader-color)"
        secondaryColor="var(--first-color)"
        ariaLabel="oval-loading"
      />
    </div>
  );
}

export default LoaderSpin;
