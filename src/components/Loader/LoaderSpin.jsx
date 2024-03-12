import { Oval } from 'react-loader-spinner';
import styles from './LoaderSpin.module.css';

function LoaderSpin() {
  return (
    <div className={styles.SpinnerWrapper}>
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#00BFFF"
        ariaLabel="oval-loading"
      />
    </div>
  );
}

export default LoaderSpin;
