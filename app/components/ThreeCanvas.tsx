import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from '../styles.module.css';

export default function ThreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const animationRef = useRef<number | null>(null);
  const scrollYRef = useRef<number>(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 150;
    const positions = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({ 
      size: 0.03, 
      color: 0xffffff, 
      transparent: true, 
      opacity: 0.6 
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Ambient lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    camera.position.z = 5;

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    // Scroll interaction
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Animation loop
    const animate = () => {
      if (!particlesRef.current || !rendererRef.current || !sceneRef.current) return;
      
      const particles = particlesRef.current;
      const renderer = rendererRef.current;
      const scene = sceneRef.current;
      
      // Scroll-based effects for space travel
      const scrollProgress = scrollYRef.current / (window.innerHeight * 0.5);
      const scrollIntensity = Math.min(scrollProgress, 1);
      
      // Space travel effect - particles move faster as you scroll
      particles.rotation.z += 0.001 + (scrollIntensity * 0.005);
      particles.position.z = Math.sin(Date.now() * 0.002) * 2 + (scrollIntensity * 3);
      
      // Mouse-based particle movement (reduced for space effect)
      particles.rotation.x = mouseY * 0.05;
      particles.rotation.y = mouseX * 0.05;
      
      // Dynamic particle effects based on scroll
      const material = particles.material as THREE.PointsMaterial;
      material.opacity = 0.8 - (scrollIntensity * 0.4);
      material.size = 0.03 + (scrollIntensity * 0.02);
      
      // Camera moves forward through space
      camera.position.z = 5 + (scrollIntensity * 3);
      camera.position.y = Math.sin(Date.now() * 0.001) * 0.5;
      
      // Add more particles as you scroll (space density effect)
      if (scrollIntensity > 0.5) {
        particles.scale.setScalar(1 + (scrollIntensity - 0.5) * 0.5);
      }
      
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div className={styles.canvasContainer}>
      <canvas ref={canvasRef} id="three-canvas"></canvas>
    </div>
  );
}
