import React from 'react';

const SKILLS_DATA = [
  {
    title: "Programming Languages",
    icon: "fa-code",
    items: ["C++", "JavaScript", "Python", "java", "HTML"]
  },
  {
    title: "Frameworks & Tech",
    icon: "fa-cubes",
    items: ["Node.js", "React.js", "Next.js", "MongoDB"]
  },
  {
    title: "Core Subjects",
    icon: "fa-book",
    items: ["DSA", "DBMS", "Operating Systems", "Computer Networks", "OOPs"]
  },
  {
    title: "Developer Tools",
    icon: "fa-tools",
    items: ["Git", "GitHub", "VS Code", "Netlify"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-textMain">
            Tech <span className="text-neonPrimary drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">Arsenal</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS_DATA.map((category, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl hover:border-neonPrimary hover:scale-[1.01] transition-all duration-300">
              <h3 className="flex items-center gap-3 text-xl font-heading font-semibold text-neonPrimary mb-6">
                <i className={`fas ${category.icon}`}></i> {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-textMain hover:border-neonPrimary hover:bg-neonPrimary/10 transition-all duration-300 cursor-default"
                  >
                    <i className="fas fa-terminal text-xs text-neonPrimary"></i>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}