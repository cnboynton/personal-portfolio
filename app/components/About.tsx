import React from 'react';
import styles from '../styles.module.css';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.aboutText}>
          I'm a 3rd year Computer Science student with hands on experience in full stack
          development at <span className={styles.highlight}>Shopify</span>.
          As a varsity student athlete, I bring a disciplined, team-oriented
          mindset and a drive to excel in collaborative, fast-paced environments.
        </p>
        <div className={styles.experienceCard}>
          <div className={styles.experienceHeader}>
            <div className={styles.experienceText}>
              <h3 className={styles.company}>Shopify</h3>
              <p className={styles.role}>Software Engineering Intern</p>
              <p className={styles.aboutText}>React, TypeScript, and performance-focused UI work.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
