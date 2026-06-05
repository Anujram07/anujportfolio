import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Contacts from './Components/Contacts';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  // Handle Loader Timer
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Tracking Mouse Coordinates
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Global Theme Toggling Controller
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [darkMode]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-bgColor flex justify-center items-center z-[10000]">
        <div className="font-heading text-5xl font-bold tracking-widest text-textMain relative glitch-text" data-text="LOADING...">
          LOADING...
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen selection:bg-neonPrimary/30">
      {/* Custom Dynamic Mouse Glow Filter */}
      <div 
        className="w-[300px] height-[300px] fixed rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: `radial-gradient(circle, var(--neon-primary) 0%, rgba(0,0,0,0) 70%)`,
          mixBlendMode: darkMode ? 'screen' : 'multiply'
        }}
      />

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contacts />
      </main>

      <footer className="bg-surfaceColor py-8 border-t border-white/10 mt-20">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center text-sm md:text-base text-textMuted">
          <div className="font-heading font-black text-2xl text-textMain">HR<span className="text-neonPrimary text-shadow-sm">.</span></div>
          <p>&copy; 2026 Harsh Raj. All rights reserved.</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="w-10 h-10 bg-white/5 border border-white/10 rounded flex items-center justify-center text-textMain hover:bg-neonPrimary hover:text-black transition-all"
          >
            <i className="fas fa-chevron-up"></i>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;