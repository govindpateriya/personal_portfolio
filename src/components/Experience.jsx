import React from 'react';

export const Experience = () => {
  const experiences = [
    {
      company: 'Dev Technosys (CMMI Level 3)',
      role: 'React JS Developer',
      duration: 'Apr 2024 – Present',
      location: 'Jaipur, India',
      bullets: [
        'Diagnosed and eliminated rendering bottlenecks using React.memo, lazy loading, and code splitting, reducing page load time by 30% and improving Core Web Vitals (LCP, FID, CLS) from Poor to Good rating.',
        'Engineered a library of 20+ reusable React.js components adopted across 3 product teams, cutting feature delivery time by 25% and standardizing UI consistency platform-wide.',
        'Optimized and maintained production applications for 10,000+ active users, achieving consistent uptime and significantly reducing critical frontend bug resolution time in collaboration with cross-functional Agile teams.'
      ]
    },
    {
      company: 'Synarion IT Solutions',
      role: 'React JS Developer',
      duration: 'Dec 2023 – Mar 2024',
      location: 'Jaipur, India',
      bullets: [
        'Architected and delivered full-stack web applications with end-to-end REST API integration, enabling seamless and reliable data flow between frontend and backend.',
        'Implemented Redux-based state management architecture that streamlined complex application state, improving predictability and maintainability across the codebase.',
        'Integrated Google OAuth authentication to enhance platform security and reduce user onboarding friction, resulting in a smoother and more secure login experience.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 bg-surface relative overflow-hidden">
      {/* Velocity Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(0,255,209,0.03),transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-24 text-center text-foreground tracking-tight neon-glow speed-fade-in">Performance_Legacy.log</h2>
        
        <div className="relative border-l border-accent/20 pl-12 ml-4 sm:ml-0">
          {/* Vertical Glow Line */}
          <div className="absolute left-[-1px] top-0 bottom-0 w-[1px] bg-accent/40 shadow-[0_0_15px_#00ffd1]"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="mb-24 relative speed-fade-in">
              {/* Timeline Marker */}
              <div className="absolute -left-[54px] top-0 w-6 h-6 bg-background border border-accent rounded-full shadow-[0_0_15px_rgba(0,255,209,0.5)] pulse-cyan"></div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-8 gap-4">
                <h3 className="text-3xl font-serif font-bold text-accent neon-glow italic">{exp.role}</h3>
                <span className="text-[10px] font-mono text-accent tracking-[0.4em] uppercase font-bold bg-accent/5 px-6 py-2 border border-accent/20">{exp.duration}</span>
              </div>
              
              <div className="mb-10">
                <p className="text-xl font-sans text-foreground font-bold tracking-tight uppercase">{exp.company}</p>
                <p className="text-[10px] text-foreground/40 italic font-medium tracking-[0.6em] uppercase mt-2">{exp.location}</p>
              </div>

              <ul className="space-y-6">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-6 text-foreground/60 leading-relaxed text-sm md:text-base group">
                    <span className="text-accent mt-1.5 shrink-0 font-bold text-xl group-hover:scale-125 transition-transform">⚡</span>
                    <span className="font-light tracking-widest group-hover:text-foreground transition-colors">
                      {bullet.split(/(\d+(?:%|\+)?\s?\w*)/).map((part, idx) => 
                        /(\d+(?:%|\+)?\s?\w*)/.test(part) ? <span key={idx} className="text-accent font-bold">{part}</span> : part
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
