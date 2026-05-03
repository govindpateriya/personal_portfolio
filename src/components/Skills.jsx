import { Terminal } from 'lucide-react';
import React from 'react';

export const Skills = () => {
  const skillGroups = [
    {
      category: 'Languages',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3']
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['React.js', 'Next.js', 'Vue.js', 'Redux', 'Tailwind CSS', 'Material UI']
    },
    {
      category: 'Backend & Database',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST API Integration']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Jira', 'VS Code', 'Figma', 'Webpack', 'Vite']
    },
    {
      category: 'Concepts',
      skills: ['Component Architecture', 'Performance Optimization', 'SSR', 'Core Web Vitals', 'Responsive Design', 'Agile/Scrum']
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Velocity Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(0,255,209,0.03),transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-foreground tracking-tight neon-glow speed-fade-in uppercase italic">Skill_Set.cfg</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillGroups.map((group, index) => (
            <div key={index} className="glass-card p-12 border border-white/5 speed-fade-in shadow-2xl group relative overflow-hidden transition-all duration-500 hover:border-accent/30">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Terminal size={100} className="text-accent" />
              </div>

              <h3 className="text-xl font-mono uppercase tracking-[0.5em] text-accent mb-10 flex items-center gap-6 font-bold neon-glow">
                <span className="w-12 h-[1px] bg-accent/40 group-hover:w-20 transition-all duration-500 shadow-[0_0_10px_#00ffd1]"></span>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-4 relative z-10">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-6 py-3 bg-surface/50 text-foreground/80 text-[10px] font-mono tracking-[0.3em] font-bold border border-white/5 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(0,255,209,0.2)] transition-all cursor-default"
                  >
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
};
