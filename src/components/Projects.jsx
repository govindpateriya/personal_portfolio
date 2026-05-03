import React from 'react';
import { ExternalLink } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      name: 'MS Club – Video Streaming Application',
      tech: ['React.js', 'Node.js', 'REST API'],
      link: 'http://msclub.devtechnosys.tech/',
      bullets: [
        'Built a responsive video streaming UI with real-time updates, lazy loading, and code splitting to significantly improve LCP and reduce time-to-interactive.',
        'Developed a credit-based payment flow and integrated Node.js REST APIs for video metadata, authentication, and subscription management.'
      ]
    },
    {
      name: 'AIE Platform',
      tech: ['Next.js', 'Material UI', 'REST API'],
      link: 'https://aie.ac',
      bullets: [
        'Developed role-based frontend interfaces for large-scale user management leveraging Next.js SSR, improving SEO and reducing time-to-interactive.',
        'Built a reusable Material UI component library with consistent design tokens, reducing UI development effort and ensuring visual consistency.'
      ]
    },
    {
      name: 'Law Firm Management Platform',
      tech: ['React.js', 'Tailwind CSS', 'REST API'],
      link: '#',
      bullets: [
        'Architected scalable reusable components integrated with REST APIs for case and client management with real-time data sync and dynamic filtering.',
        'Implemented role-based access control for Admin, Lawyer, and Staff roles with fully responsive Tailwind CSS layouts across all devices.'
      ]
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Velocity Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,255,209,0.03),transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-foreground tracking-tight neon-glow speed-fade-in">Performance_Modules.prj</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="flip-card h-[540px] speed-fade-in">
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front glass-card p-10 flex flex-col justify-between shadow-2xl border border-white/10 overflow-hidden group transition-all duration-500 hover:border-accent/40">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                    <span className="text-[100px] font-mono font-bold text-accent">0{index + 1}</span>
                  </div>
                  <div className="relative z-10">
                    <span className="text-accent text-[10px] font-mono uppercase tracking-[0.4em] mb-6 block font-bold border-b border-accent/10 pb-2 w-fit">Metric_Node</span>
                    <h3 className="text-3xl font-sans font-bold text-foreground leading-tight mb-8 neon-glow tracking-tighter">
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-4 py-2 glass-card text-foreground/80 text-[9px] font-mono uppercase tracking-widest font-bold border border-white/5 group-hover:border-accent/20 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto pt-8 text-accent font-mono text-[10px] uppercase tracking-[0.4em] font-bold flex items-center gap-4 group/btn">
                    <span className="w-10 h-[1px] bg-accent/40 group-hover/btn:w-16 transition-all shadow-[0_0_10px_#00ffd1]"></span> 
                    Analyze_Metrics
                  </div>
                </div>

                {/* Back Side */}
                <div className="flip-card-back bg-surface/90 backdrop-blur-xl p-10 flex flex-col justify-center shadow-2xl text-foreground overflow-hidden border border-accent/20">
                  <h3 className="text-2xl font-mono font-bold mb-8 uppercase tracking-tighter border-b border-accent/20 pb-4 text-accent">Internal_Benchmarks</h3>
                  <ul className="space-y-6 text-left mb-8">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm font-bold leading-relaxed flex gap-4">
                        <span className="shrink-0 text-accent/30 font-mono">#{i}</span>
                        <span className="line-clamp-4">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex justify-center">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-5 bg-accent text-background rounded-none hover:scale-110 transition-transform cursor-pointer shadow-2xl group/link pulse-cyan"
                    >
                      <ExternalLink size={26} className="group-hover/link:rotate-12" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
