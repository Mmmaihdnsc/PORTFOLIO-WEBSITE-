import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import CustomCursor from './components/CustomCursor';
import Background3D from './components/Background3D';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loading from './components/Loading';
import HologramFidget from './components/HologramFidget';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Wait for loading animation to finish

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      
      {loading && <Loading key="loading" />}

      <div className="relative min-h-screen bg-dark-bg text-white font-sans selection:bg-neon-purple/30 selection:text-white">
        <Background3D />
        
        <main className="relative z-10 flex flex-col gap-20 pb-20">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        <HologramFidget />

        {/* Footer */}
        <footer className="relative z-10 py-8 border-t border-white/5 text-center font-mono text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Manoj Kumar. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-50">Built with React, Three.js & Tailwind CSS</p>
        </footer>
      </div>
    </>
  );
}
