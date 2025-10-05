# Chester Boynton - Portfolio

A modern, interactive portfolio website built with React, Next.js, and Expo. This portfolio showcases creative problem-solving skills through beautiful, intuitive interfaces that push the boundaries of web technology.

## Features

- **Interactive 3D Scene**: Three.js-powered particle system with mouse parallax
- **Custom Cursor**: Unique cursor experience with hover effects
- **Responsive Design**: Optimized for all device sizes
- **Modern Animations**: Smooth transitions and gradient animations
- **Multi-page Navigation**: Home, About, Projects, and Contact sections

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Framework**: Expo with Next.js
- **3D Graphics**: Three.js
- **Styling**: CSS Modules
- **Build Tool**: Expo CLI

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the development server

   ```bash
   npm run web
   ```

3. Open your browser and navigate to the local development URL

## Project Structure

```
app/
├── index.tsx          # Home page with hero section and 3D scene
├── about.tsx          # About page with experience details
├── projects.tsx       # Projects showcase
├── contact.tsx        # Contact information and links
├── styles.module.css  # Global styles and animations
└── assets/            # Static assets including 3D models
    └── shopify.glb    # 3D Shopify logo model
```

## Key Components

- **Hero Section**: Animated gradient text with floating particles
- **Experience Cards**: Interactive cards with hover effects
- **Custom Cursor**: Dynamic cursor that responds to interactions
- **Floating Shapes**: Background animation elements
- **Contact Links**: Styled links with ripple effects

## Development

The portfolio uses modern React patterns including:
- Functional components with hooks
- TypeScript for type safety
- CSS Modules for scoped styling
- Three.js for 3D graphics
- Responsive design principles

## Deployment

This project can be deployed to any platform that supports React/Next.js applications, including Vercel, Netlify, or traditional web hosting services.