import React from 'react';
import styles from './Layout.module.css';

export const Layout = ({ children }) => (
  <div className={styles.app}>
    <header className={styles.header}>Crew applications app</header>
    <main className={styles.main}>
      {children}
    </main>
  </div>
);