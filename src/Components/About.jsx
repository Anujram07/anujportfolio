import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-textMain">
            About <span className="text-neonPrimary drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Block: Image Box */}
          <div className="relative group p-4 max-w-md mx-auto lg:max-w-none">
            <div className="absolute inset-0 border-2 border-dashed border-neonPrimary rounded-2xl animate-rotate-border" />
            <img 
              src="https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Harsh Raj Portfolio Avatar" 
              className="relative z-10 rounded-xl object-cover w-full filter grayscale-[80%] contrast-[1.2] transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-100"
            />
          </div>

          {/* Right Block: Content Cards */}
          <div>
            <p className="text-textMuted text-lg leading-relaxed mb-8">
             I am a Frontend developer skilled in React (Vite), MERN stack, and API integration. Strong foundation in C++ and data structures
with experience building responsive web applications and participating in collaborative hackathons.I am also going through Agentic AI
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: "fa-code", label: "MERN Stack Dev." },
                { icon: "fa-brain", label: "Data Structure & Algorithm" },
                { icon: "fa-network-wired", label: "Networking" }
              ].map((item, idx) => (
                <div key={idx} className="glass-card text-center py-6 px-2 flex flex-col items-center justify-center group-hover:border-neonPrimary">
                  <i className={`fas ${item.icon} text-neonPrimary text-3xl mb-3 drop-shadow-[0_0_8px_var(--neon-glow)]`}></i>
                  <h4 className="font-body text-sm font-semibold text-textMain tracking-wide">{item.label}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}