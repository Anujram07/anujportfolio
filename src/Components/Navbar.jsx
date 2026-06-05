import React, { useState, useEffect } from 'react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    /* Changed w-100 to w-full, added left-0 right-0 to fix center calibration boundaries */
    <nav className={`fixed top-0 left-0 right-0 w-full z-[1000] transition-all duration-300 ${
      isScrolled ? 'glass-card py-3 border-b' : 'py-4'
    }`}>
      {/* Container inside matches max bounds and centers contents natively */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#hero" className="font-heading text-3xl font-black text-textMain">
          AR<span className="text-neonPrimary shadow-cyan-400 drop-shadow-[0_0_8px_rgba(0,240,255,1)]">.</span>
        </a>

        {/* Desktop Links Container */}
        <ul className={`md:flex items-center gap-10 font-medium text-lg absolute md:static top-[70px] right-0 bg-bgColor/95 md:bg-transparent border-l border-b border-white/10 md:border-none p-8 md:p-0 flex flex-col md:flex-row w-64 md:w-auto transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
        }`}>
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-textMain hover:text-neonPrimary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-neonPrimary hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Light / Dark Mode Toggle button */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-full border flex items-center justify-center text-textMain border-white/10 hover:border-neonPrimary hover:text-neonPrimary hover:shadow-[0_0_10px_rgba(0,240,255,0.5)] transition-all"
          >
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>

          {/* Mobile Hamburger menu */}
          <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex flex-col gap-[5px] cursor-pointer md:hidden z-[1001]">
            <div className={`w-6 h-[3px] bg-textMain transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-[3px] bg-textMain transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-[3px] bg-textMain transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </div>
      </div>
    </nav>
  );
}