import styles from "./Error.module.css";

const Error = ({ message }) => {
  return (
    <div className={styles.error_component}>
      <div className={styles.error_content}>
        <span className={styles.error_icon}>⚠️</span>
        <span className={styles.error_message}>{message}</span>
      </div>
    </div>
  );
};

export default Error;
