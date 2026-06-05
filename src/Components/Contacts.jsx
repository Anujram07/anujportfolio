import React, { useState } from 'react';
// Import the exact icons directly from the package
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contacts = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transmission Dispatched Safely:", formData);
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5 bg-bgColor transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-textMain tracking-wide">
            Contact <span className="text-neonPrimary drop-shadow-[0_0_10px_rgba(0,240,255,0.4)]">Me</span>
          </h2>
          <p className="text-textMuted mt-3 text-base font-body">
            Let's build something extraordinary together.
          </p>
        </div>

        {/* Layout Grid Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* Left Column: Contact Details Card */}
          <div className="glass-card p-8 flex flex-col justify-between rounded-2xl gap-8 border border-white/10">
            <div>
              <h3 className="text-xl font-heading font-bold text-textMain mb-6">
                Reach <span className="text-neonPrimary">Out</span>
              </h3>
              <ul className="flex flex-col gap-5 text-textMuted font-body text-sm md:text-base">
                <li className="flex items-center gap-4 hover:text-textMain transition-colors">
                  <FaEnvelope className="text-neonPrimary text-lg min-w-[20px]" /> 
                  <span>anujramraika12@gmail.com</span>
                </li>
                <li className="flex items-center gap-4 hover:text-textMain transition-colors">
                  <FaPhoneAlt className="text-neonPrimary text-lg min-w-[20px]" /> 
                  <span>+91-9179033516</span>
                </li>
                <li className="flex items-center gap-4 hover:text-textMain transition-colors">
                  <FaMapMarkerAlt className="text-neonPrimary text-lg min-w-[20px]" /> 
                  <span>Satna,Madhya Pradesh,India</span>
                </li>
              </ul>
            </div>

            {/* Social Connection Channels with React Icons */}
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/anuj-ramraika-7b455230b" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-textMain transition-all duration-300 hover:bg-neonPrimary hover:text-bgColor hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] hover:-translate-y-1"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a 
                href="https://github.com/Anujram07" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="GitHub"
                className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-textMain transition-all duration-300 hover:bg-neonPrimary hover:text-bgColor hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] hover:-translate-y-1"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>

          {/* Right Column: Message Form Gateway */}
          <form onSubmit={handleSubmit} className="glass-card p-8 lg:col-span-2 flex flex-col gap-6 rounded-2xl border border-white/10">
            
            <div className="input-group">
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                placeholder=" " 
              />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="input-group">
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                placeholder=" " 
              />
              <label htmlFor="email">Your Email</label>
            </div>

            <div className="input-group">
              <textarea 
                id="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required 
                placeholder=" " 
              />
              <label htmlFor="message">Your Message</label>
            </div>

            {/* Glowing Submission Button */}
            <button 
              type="submit" 
              className="w-full cursor-pointer py-3.5 rounded-xl font-semibold border-2 border-neonPrimary text-neonPrimary uppercase tracking-wider font-heading hover:bg-neonPrimary hover:text-black transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]"
            >
              Send Message <FaPaperPlane className="text-sm" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contacts;