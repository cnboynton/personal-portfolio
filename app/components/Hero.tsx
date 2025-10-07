import React from 'react';
import styles from '../styles.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Chester Boynton</h1>
        <p className={styles.subtitle}>
          Computer Science Student-Athlete & Creative Problem Solver
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <svg viewBox="0 0 24 40" fill="none">
          <path d="M12 2L12 38M12 38L22 28M12 38L2 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
