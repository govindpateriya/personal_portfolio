import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-32 px-6 bg-surface relative overflow-hidden">
      {/* Velocity Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,255,209,0.02),transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-24 text-center text-foreground tracking-tight neon-glow speed-fade-in">Academic_Optimization.sys</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education Card */}
          <div className="glass-card p-12 border border-white/5 flex gap-8 items-start hover:border-accent transition-all duration-500 shadow-2xl speed-fade-in">
            <div className="p-5 bg-accent/10 text-accent rounded-none shrink-0 shadow-[0_0_15px_rgba(0,255,209,0.2)]">
              <GraduationCap size={40} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-accent uppercase tracking-[0.4em] mb-4 block font-bold">Aug 2018 – May 2021</span>
              <h3 className="text-2xl font-sans font-bold mb-3 text-foreground neon-glow uppercase tracking-tighter leading-tight">Bachelor of Science<br />Computer Science</h3>
              <p className="text-foreground/70 mb-2 font-light tracking-widest text-sm">Gramodaya University</p>
              <p className="text-[10px] text-foreground/30 italic font-mono uppercase tracking-[0.4em] font-bold mt-4">Chitrakoot, M.P.</p>
            </div>
          </div>

          {/* Certification Card */}
          <div className="glass-card p-12 border border-white/5 flex gap-8 items-start hover:border-accent transition-all duration-500 shadow-2xl speed-fade-in [animation-delay:200ms]">
            <div className="p-5 bg-accent/10 text-accent rounded-none shrink-0 shadow-[0_0_15px_rgba(0,255,209,0.2)]">
              <Award size={40} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-accent uppercase tracking-[0.4em] mb-4 block font-bold">Professional_Protocol</span>
              <h3 className="text-2xl font-sans font-bold mb-3 text-foreground neon-glow uppercase tracking-tighter leading-tight">Full Stack Development</h3>
              <p className="text-foreground/70 mb-2 font-light tracking-widest text-sm">
                Certified by <span className="text-accent font-bold">Namaste React</span> – Akshay Saini
              </p>
              <p className="text-[10px] text-foreground/30 italic font-mono uppercase tracking-[0.4em] font-bold mt-4">NamasteDev.com // Industry Standard</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
