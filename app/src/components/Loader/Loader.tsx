import React from 'react';
import styles from './Loader.module.css';

interface ILoaderProps {
  message?: string,
  error?: boolean,
}

const Loader: React.FC<ILoaderProps> = ({ message, error }) => (
  <div className={styles.loader + ' ' + (error ? styles.error : '')}>
    <span className={styles.errorMsg}>{message ? message : ''}</span>
  </div>
);

export default Loader;