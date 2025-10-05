import React from 'react';
import styles from './styles.module.css';

export default function About() {

    return (
        <div className={styles.portfolioContainer}>

            {/* Header */}
            <header className={styles.header}>
                <div className={styles.brand}>Chester Boynton</div>
                <nav className={styles.nav}>
                    <a href="/" className={styles.navLink}>Home</a>
                    <a href="/about" className={styles.navLinkActive}>About</a>
                    <a href="/projects" className={styles.navLink}>Projects</a>
                    <a href="/contact" className={styles.navLink}>Contact</a>
                </nav>
            </header>

            {/* Floating Shapes */}
            <div className={styles.floatingShapes}>
                <div className={styles.shape1}></div>
                <div className={styles.shape2}></div>
                <div className={styles.shape3}></div>
            </div>

            {/* About Section */}
            <section className={styles.about} style={{ paddingTop: '8rem' }}>
                <div className={`${styles.aboutContent} ${styles.visible}`}>
                    <h2 className={styles.sectionTitle}>About Me</h2>
                    <p className={styles.aboutText}>
                        I'm a <span className={styles.highlight}>Computer Science student</span> focused on creating delightful user experiences.
                        I enjoy working with modern web technologies and exploring the intersection of design and engineering.
                    </p>
                    <div className={styles.experienceCard}>
                        <div className={styles.experienceHeader}>
                            <div className={styles.experienceText}>
                                <h3 className={styles.company}>Shopify</h3>
                                <p className={styles.role}>Software Engineering Intern</p>
                                <p className={styles.aboutText}>React, TypeScript, and performance-focused UI work.</p>
                            </div>
                            <div className={styles.shopifyLogo}>
                                <div className={styles.modelPlaceholder}>Shopify 3D Logo</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
