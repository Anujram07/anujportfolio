import React from 'react';

const PROJECTS_DATA = [
  {
    title: "Currency Dynamic Engine",
    description: "Engineered a real-time conversion tool fetching live market data for 150+ global currencies via asynchronous API Integration, utilizing Vercel for continous deployment and scalability ",
    image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=600&q=80",
    liveUrl: "#",
    githubUrl: "https://github.com/Harshraj35",
    tags: ["React+Vite", "FastAPI", "JavaScript","TailwindCSS"]
  },
  {
    title: "Algorithmic Password Architect",
    description: "Developed a customizable security utility using Math.random logic to generate cryptographically varied strings based on user-defined complexity constraints",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80",
    liveUrl: "#",
    githubUrl: "https://github.com/Harshraj35",
    tags: ["React+Vite", "JavaScript","TailwindCSS"]
  },
  {
    title: "Futuristic Interactive Portfolio",
    description: "A premium portfolio featuring custom mouse-tracking glow, smooth scroll-reveal animations, dynamic particles background, and dark/light themes designed to showcase professional engineering credentials.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
    liveUrl: "#",
    githubUrl: "https://github.com/Harshraj35",
    tags: ["HTML", "CSS", "Vanilla JS", "Particles.js"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-textMain">
            Latest <span className="text-neonPrimary drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS_DATA.map((project, idx) => (
            <div key={idx} className="glass-card p-0 rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:border-neonPrimary hover:shadow-[0_10px_40px_rgba(0,240,255,0.15)]">
              {/* Image Frame Wrapper */}
              <div className="relative h-52 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-100 h-100 object-cover transition-transform duration-500 ease-out group-hover:scale-110 grayscale-[80%] contrast-[1.2] group-hover:grayscale-0 group-hover:contrast-100"
                />
                
                {/* Micro Link Hover Screen Overlay */}
                <div className="absolute inset-0 bg-black/70 flex justify-center items-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a href={project.liveUrl} className="w-11 h-11 rounded-full bg-neonPrimary text-bgColor flex items-center justify-center text-lg hover:scale-110 hover:shadow-[0_0_15px_var(--neon-glow)] transition-all">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-neonPrimary text-bgColor flex items-center justify-center text-lg hover:scale-110 hover:shadow-[0_0_15px_var(--neon-glow)] transition-all">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>

              {/* Information Text Block */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-heading font-semibold text-textMain mb-2 transition-colors group-hover:text-neonPrimary">
                  {project.title}
                </h3>
                <p className="text-textMuted text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                {/* Tech Badges Container */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((stack, sIdx) => (
                    <span key={sIdx} className="text-xs font-semibold px-3 py-1 rounded-full bg-neonPrimary/10 border border-neonPrimary/20 text-neonPrimary">
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}