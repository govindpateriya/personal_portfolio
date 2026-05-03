import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-32 px-6 bg-surface">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-foreground">Education & Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education Card */}
          <div className="bg-card p-12 rounded-3xl border-transparent flex gap-8 items-start hover:border-accent transition-all duration-500 shadow-sm hover:shadow-xl border-slide">
            <div className="p-5 bg-accent/10 text-accent rounded-2xl shrink-0">
              <GraduationCap size={40} />
            </div>
            <div>
              <span className="text-sm font-mono text-accent uppercase tracking-widest mb-3 block font-bold">Aug 2018 – May 2021</span>
              <h3 className="text-2xl font-serif font-bold mb-3 text-foreground">Bachelor of Science, Computer Science</h3>
              <p className="text-foreground/70 mb-2 font-medium">Gramodaya University</p>
              <p className="text-sm text-foreground/40 italic font-mono uppercase tracking-tighter font-bold">Chitrakoot, M.P.</p>
            </div>
          </div>

          {/* Certification Card */}
          <div className="bg-card p-12 rounded-3xl border-transparent flex gap-8 items-start hover:border-accent transition-all duration-500 shadow-sm hover:shadow-xl border-slide">
            <div className="p-5 bg-accent/10 text-accent rounded-2xl shrink-0">
              <Award size={40} />
            </div>
            <div>
              <span className="text-sm font-mono text-accent uppercase tracking-widest mb-3 block font-bold">Professional Certification</span>
              <h3 className="text-2xl font-serif font-bold mb-3 text-foreground">Full Stack Web Development</h3>
              <p className="text-foreground/70 mb-2 font-medium">Namaste React – Akshay Saini</p>
              <p className="text-sm text-foreground/40 italic font-mono uppercase tracking-tighter font-bold">NamasteDev.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
