import React from 'react';
import styles from './styles.module.css';

export default function Projects() {

    return (
        <div className={styles.portfolioContainer}>

            {/* Header */}
            <header className={styles.header}>
                <div className={styles.brand}>Chester Boynton</div>
                <nav className={styles.nav}>
                    <a href="/" className={styles.navLink}>Home</a>
                    <a href="/about" className={styles.navLink}>About</a>
                    <a href="/projects" className={styles.navLinkActive}>Projects</a>
                    <a href="/contact" className={styles.navLink}>Contact</a>
                </nav>
            </header>

            {/* Floating Shapes */}
            <div className={styles.floatingShapes}>
                <div className={styles.shape1}></div>
                <div className={styles.shape2}></div>
                <div className={styles.shape3}></div>
            </div>

            {/* Projects Section */}
            <section className={styles.about} style={{ paddingTop: '8rem' }}>
                <div className={`${styles.aboutContent} ${styles.visible}`}>
                    <h2 className={styles.sectionTitle}>Projects</h2>
                    <p className={styles.aboutText}>A selection of things I've built recently.</p>
                    <div className={styles.experienceCard}>
                        <h3 className={styles.company}>Portfolio 3D Hero</h3>
                        <p className={styles.role}>Three.js, WebGL</p>
                        <p className={styles.aboutText}>Interactive 3D laptop and particles scene with scroll and mouse parallax.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
