import React from 'react';
import styles from './styles.module.css';
import Header from './components/Header';
import FloatingShapes from './components/FloatingShapes';
import ThreeCanvas from './components/ThreeCanvas';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';

export default function Index() {
    return (
        <div className={styles.portfolioContainer}>
            <Header />
            <FloatingShapes />
            <ThreeCanvas />
            <Hero />
            <About />
            <Contact />
            {/* Spacer to enable scrolling */}
            <div style={{ height: '100vh' }}></div>
        </div>
    );
}

