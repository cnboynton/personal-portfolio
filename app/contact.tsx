import React from 'react';
import styles from './styles.module.css';

export default function Contact() {

    return (
        <div className={styles.portfolioContainer}>

            {/* Header */}
            <header className={styles.header}>
                <div className={styles.brand}>Chester Boynton</div>
                <nav className={styles.nav}>
                    <a href="/" className={styles.navLink}>Home</a>
                    <a href="/about" className={styles.navLink}>About</a>
                    <a href="/projects" className={styles.navLink}>Projects</a>
                    <a href="/contact" className={styles.navLinkActive}>Contact</a>
                </nav>
            </header>

            {/* Floating Shapes */}
            <div className={styles.floatingShapes}>
                <div className={styles.shape1}></div>
                <div className={styles.shape2}></div>
                <div className={styles.shape3}></div>
            </div>

            {/* Contact Section */}
            <section className={styles.contact} style={{ paddingTop: '8rem' }}>
                <h2 className={styles.sectionTitle}>Let's Connect</h2>
                <p className={styles.aboutText}>Ready to build something amazing together?</p>
                <div className={styles.contactLinks}>
                    <a href="mailto:chester@example.com" className={styles.contactLink}>Email</a>
                    <a href="https://github.com/chesterboynton" className={styles.contactLink}>GitHub</a>
                    <a href="https://linkedin.com/in/chesterboynton" className={styles.contactLink}>LinkedIn</a>
                </div>
            </section>
        </div>
    );
}
