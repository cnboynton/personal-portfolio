import React from 'react';
import styles from '../styles.module.css';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h2 className={styles.sectionTitle}>Connect</h2>
      <div className={styles.contactLinks}>
        <a href="mailto:chester.boynton@gmail.com" className={styles.contactLink}>Email</a>
        <a href="https://github.com/cnboynton" className={styles.contactLink}>GitHub</a>
        <a href="https://linkedin.com/in/chesterboynton" className={styles.contactLink}>LinkedIn</a>
      </div>
    </section>
  );
}
