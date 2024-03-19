import styles from './LoadMoreButton.module.css';

const LoadMoreButton = ({ handleCLick }) => {
  return (
    <div className={styles.divButton}>
      <button className={styles.button} type="button" onClick={handleCLick}>
        LoadMore
      </button>
    </div>
  );
};

export default LoadMoreButton;
