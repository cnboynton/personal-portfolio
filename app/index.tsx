import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';

export default function Index() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        // Initialize Three.js scene
        const initThreeScene = async () => {
            if (typeof window !== 'undefined' && canvasRef.current) {
                const THREE = await import('three');
                
                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

                // Floating particles
                const particlesGeometry = new THREE.BufferGeometry();
                const particlesCount = 150;
                const positions = new Float32Array(particlesCount * 3);
                for (let i = 0; i < particlesCount * 3; i++) positions[i] = (Math.random() - 0.5) * 20;
                particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                const particlesMaterial = new THREE.PointsMaterial({ 
                    size: 0.03, 
                    color: 0xffffff, 
                    transparent: true, 
                    opacity: 0.6 
                });
                const particles = new THREE.Points(particlesGeometry, particlesMaterial);
                scene.add(particles);

                // Ambient lighting
                const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
                scene.add(ambientLight);

                camera.position.z = 5;

                let mouseX = 0;
                let mouseY = 0;
                const handleMouseMove = (e: MouseEvent) => {
                    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
                    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
                };
                document.addEventListener('mousemove', handleMouseMove);

                function animate() {
                    requestAnimationFrame(animate);
                    
                    // Mouse-based particle movement
                    particles.rotation.x = mouseY * 0.1;
                    particles.rotation.y = mouseX * 0.1;
                    
                    // Floating animation
                    particles.position.y = Math.sin(Date.now() * 0.001) * 0.2;
                    
                    // Continuous rotation
                    particles.rotation.z += 0.0005;
                    
                    renderer.render(scene, camera);
                }

                const handleResize = () => {
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(window.innerWidth, window.innerHeight);
                };
                window.addEventListener('resize', handleResize);

                animate();

                return () => {
                    document.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('resize', handleResize);
                };
            }
        };

        initThreeScene();

    }, []);

    return (
        <div className={styles.portfolioContainer}>

            {/* Header */}
            <header className={styles.header}>
                <div className={styles.brand}>Chester Boynton</div>
                <nav className={styles.nav}>
                    <a href="/" className={styles.navLinkActive}>Home</a>
                    <a href="/about" className={styles.navLink}>About</a>
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

            {/* 3D Canvas */}
            <div className={styles.canvasContainer}>
                <canvas ref={canvasRef} id="three-canvas"></canvas>
            </div>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Chester Boynton</h1>
                    <p className={styles.subtitle}>Creative Problem Solver</p>
                </div>
                <div className={styles.scrollIndicator}>
                    <svg viewBox="0 0 24 40" fill="none">
                        <rect x="1" y="1" width="22" height="38" rx="11" stroke="currentColor" strokeWidth="2"></rect>
                        <circle cx="12" cy="10" r="3" fill="currentColor"></circle>
                    </svg>
                </div>
            </section>

            {/* About Section */}
            <section className={styles.about}>
                <div className={styles.aboutContent}>
                    <h2 className={styles.sectionTitle}>Crafting Digital Experiences</h2>
                    <p className={styles.aboutText}>
                        I'm a <span className={styles.highlight}>Computer Science student</span> with a passion for 
                        creating beautiful, intuitive interfaces that push the boundaries of web technology. 
                        My approach combines <span className={styles.highlight}>technical precision</span> with 
                        <span className={styles.highlight}>creative vision</span>, turning complex problems into elegant solutions.
                    </p>
                    <p className={styles.aboutText}>
                        Whether it's implementing smooth animations, designing responsive layouts, or 
                        optimizing performance, I believe great frontend development is about creating 
                        experiences that feel <span className={styles.highlight}>effortless</span> and 
                        <span className={styles.highlight}>delightful</span> for users.
                    </p>
                    <div className={styles.experienceCard}>
                        <div className={styles.experienceHeader}>
                            <div className={styles.experienceText}>
                                <h3 className={styles.company}>Shopify</h3>
                                <p className={styles.role}>Software Engineering Intern</p>
                                <p className={styles.aboutText}>
                                    Contributed to building scalable e-commerce solutions, working with 
                                    <span className={styles.highlight}>React</span> and <span className={styles.highlight}>TypeScript</span> 
                                    to enhance merchant experiences and streamline user workflows.
                                </p>
                            </div>
                            <div className={styles.shopifyLogo}>
                                {/* 3D Model will be added here */}
                                <div className={styles.modelPlaceholder}>Shopify 3D Logo</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className={styles.contact}>
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
