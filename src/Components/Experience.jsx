import React from 'react';

const ACADEMIC_JOURNEY = [
  {
    date: "2023 - 2027",
    title: "B.Tech CSE",
    subtitle: "Baderia Global Institute of Engineering and Management, Jabalpur",
    badge: "CGPA: 7.31",
    details: "Focused on Computer Science with coursework in Data Structures, Algorithms, DBMS, Operating Systems, and Computer Networks. Engaged in projects involving Python, FastAPI, and machine learning applications.",
    link: "https://drive.google.com/file/d/YOUR_BTECH_DOC_LINK/view?usp=sharing"
  },
  {
    date: "2023",
    title: "Senior Secondary (Class XII)",
    subtitle: "St Michael's Sr. Sec. School, Satna",
    badge: "Score: 75%",
    details: "Specialized in Science stream with Mathematics and Computer Science.",
    link: "https://drive.google.com/file/d/YOUR_CLASS_12_LINK/view?usp=sharing"
  },
  {
    date: "2021",
    title: "Secondary (Class X)",
    subtitle: "St Michael's Sr. Sec. School, Satna",
    badge: "Score: 85%",
    details: "Foundational coursework in science, mathematics, and computer applications.",
    link: "https://drive.google.com/file/d/YOUR_CLASS_10_LINK/view?usp=sharing"
  }
];

const CERTIFICATIONS = [
  { 
    title: "Python Bootcamp", 
    provider: "Udemy",
    link: "https://drive.google.com/file/d/1-S5qEW3TIdJLBlZD_bxWBV4XW3hhv2KV/view?usp=sharing"
  },
  { 
    title: "EduSkills Tech Camp on Google Android", 
    provider: "EduSkills",
    link: "https://drive.google.com/file/d/YOUR_DRIVE_LINK_2/view?usp=sharing"
  },
  { 
    title: "BRAHMAX 1.0– 24-Hour Hackathon", 
    provider: "Unstop",
    link: "https://drive.google.com/file/d/YOUR_DRIVE_LINK_3/view?usp=sharing"
  }
];

const ACHIEVEMENTS = [
  {
    title: "150+ Solved DSA Problems",
    details: "Solved 150+ DSA problems on LeetCode and Codeforces, focusing on efficient data structures and algorithmic optimization.",
    link: "https://leetcode.com/u/YOUR_PROFILE_LINK/"
  },
  {
    title: "MERN Stack Internship - NASSCOM Approved (2026)",
    details: "Successfully completed MERN Stack Internship Approved by Nasscom.",
    link: "https://drive.google.com/file/d/1MG5goR_lLTEJfsjq3FqHzLN_MB1gO9AC/view?usp=sharing"
  },
  {
    title: "NPTEL Elite Certification in CN & IP (2026)",
    details: "Successfully achieved Certificate of NPTEL in Computer Networks and Internet Protocols top among 5%",
    link: "https://drive.google.com/file/d/1-6TE7IqOYip7hKkWIiCsOW-Ae8W7tVV1/view?usp=sharing"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-white/5 bg-bgColor">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-textMain">
            Journey <span className="text-neonPrimary drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">& Milestones</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Block: Academic History */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-textMain flex items-center gap-3 mb-8 border-b border-white/10 pb-3">
              <i className="fas fa-graduation-cap text-neonPrimary text-shadow-sm"></i> Academic Journey
            </h3>
            
            <div className="relative border-l-2 border-dashed border-white/10 pl-6 flex flex-col gap-8 before:absolute before:top-0 before:bottom-0 before:left-[-2px] before:w-[2px] before:bg-gradient-to-b before:from-neonPrimary before:to-neonSecondary before:opacity-60">
              {ACADEMIC_JOURNEY.map((edu, idx) => (
                <div key={idx} className="glass-card relative p-7 group flex flex-col items-start transition-all duration-300 hover:translate-x-1">
                  {/* Timeline Node */}
                  <div className="absolute left-[-33px] top-[34px] w-[14px] h-[14px] rounded-full bg-neonPrimary border-3 border-bgColor z-10 shadow-[0_0_8px_var(--neon-glow)] transition-all duration-300 group-hover:bg-neonSecondary group-hover:shadow-[0_0_12px_rgba(255,0,60,0.8)]" />
                  
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-textMuted tracking-wider">
                    {edu.date}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-textMain mt-3">{edu.title}</h3>
                  <h4 className="text-sm font-medium text-textMuted mt-1">{edu.subtitle}</h4>
                  <div className="inline-block px-3 py-0.5 my-2 bg-neonPrimary/10 border border-neonPrimary/20 text-neonPrimary rounded-full text-xs font-semibold">
                    {edu.badge}
                  </div>
                  <p className="text-textMuted text-sm mt-2 leading-relaxed mb-4">{edu.details}</p>
                  
                  {edu.link && (
                    <a 
                      href={edu.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-neonPrimary hover:text-neonSecondary flex items-center gap-1.5 mt-auto transition-colors duration-200"
                    >
                      <i className="fas fa-external-link-alt text-[10px]"></i> Verify Documents
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Credentials & Awards */}
          <div className="flex flex-col gap-8">
            {/* Certifications Block */}
            <div className="glass-card p-7">
              <h3 className="text-xl font-heading font-bold text-textMain flex items-center gap-3 mb-6 border-b border-white/10 pb-3">
                <i className="fas fa-certificate text-neonPrimary"></i> Certifications
              </h3>
              <ul className="flex flex-col gap-6">
                {CERTIFICATIONS.map((cert, idx) => (
                  <li key={idx} className="flex gap-4 items-start justify-between group">
                    <div className="flex gap-4 items-start">
                      <i className="fas fa-certificate text-neonPrimary text-sm mt-1 text-shadow-sm"></i>
                      <div>
                        <strong className="block text-textMain font-semibold text-base leading-tight">{cert.title}</strong>
                        <span className="text-xs font-bold text-neonSecondary uppercase tracking-wider mt-1 inline-block">
                          {cert.provider}
                        </span>
                      </div>
                    </div>
                    
                    {cert.link && (
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-textMuted hover:text-neonPrimary p-1.5 transition-colors duration-200 flex-shrink-0"
                        title="View Certificate"
                      >
                        <i className="fas fa-file-signature text-base"></i>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements Block */}
            <div className="glass-card p-7">
              <h3 className="text-xl font-heading font-bold text-textMain flex items-center gap-3 mb-6 border-b border-white/10 pb-3">
                <i className="fas fa-trophy text-neonPrimary"></i> Key Achievements
              </h3>
              <ul className="flex flex-col gap-6">
                {ACHIEVEMENTS.map((ach, idx) => (
                  <li key={idx} className="flex gap-4 items-start group">
                    <i className="fas fa-award text-neonPrimary text-sm mt-1 transition-transform group-hover:scale-125"></i>
                    <div className="flex flex-col gap-1">
                      <strong className="block text-textMain font-semibold text-base">{ach.title}</strong>
                      <p className="text-textMuted text-xs leading-relaxed">{ach.details}</p>
                      
                      {ach.link && (
                        <a 
                          href={ach.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[10px] font-bold text-neonPrimary uppercase tracking-widest mt-1.5 inline-flex items-center gap-1 hover:text-neonSecondary transition-colors duration-200"
                        >
                          View Proof <i className="fas fa-arrow-right text-[8px] transition-transform group-hover:translate-x-0.5"></i>
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}