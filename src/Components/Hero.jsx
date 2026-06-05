import React, { useState, useEffect } from 'react';

// const ROLES = ["Computer Science Student", "Frontend Developer", "Machine Learning Enthusiast", "Problem Solver"];
const ROLES = ["Computer Science Student", "Frontend Developer", "Full-Stack Developer", "Problem Solver"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
      speed = 2000; // Complete words delay
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      speed = 500; // Next string delay
    }

    const timeout = setTimeout(() => {
      setTypedText(
        isDeleting 
          ? currentRole.substring(0, charIndex - 1) 
          : currentRole.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Dynamic Animated Ambient Spheres */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-neonPrimary/20 rounded-full blur-[80px] animate-float-slow" />
        <div className="absolute bottom-[-50px] left-[-100px] w-[300px] h-[300px] bg-neonSecondary/20 rounded-full blur-[80px] animate-float-reverse" />
      </div>

      <div className="relative z-10 text-center max-w-[800px]">
        <h3 className="text-xl tracking-[2px] text-neonPrimary uppercase mb-4 font-heading">Hi, I am</h3>
        <h1 className="text-6xl md:text-8xl font-black font-heading mb-4 text-textMain glitch-text" data-text="Anuj-Ramraika">
          Anuj-Ramraika
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-medium h-10 mb-6 text-textMain">
          <span>{typedText}</span>
          <span className="inline-block w-[3px] bg-neonPrimary animate-pulse ml-1">|</span>
        </h2>
        
        <p className="text-lg md:text-xl text-textMuted mb-10 max-w-xl mx-auto">
          Building digital experiences that transcend reality.
        </p>

        <div className="flex gap-6 justify-center flex-wrap">
          <a href="#projects" className="px-8 py-3 rounded-full font-semibold uppercase tracking-wider border-2 border-neonPrimary text-neonPrimary hover:bg-neonPrimary hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full font-semibold uppercase tracking-wider glass-card text-textMain hover:bg-white/10 transition-all duration-300">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}