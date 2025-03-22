import React from 'react';
import HookForm from '../components/HookForm';
import styles from '../styles/styles.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>GurahModes Hook Generator</h1>
      <HookForm />
    </div>
  );
};

export default Home;