import React from 'react';
import { Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Velocity Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,209,0.02),transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="speed-fade-in">
          <h2 className="text-4xl md:text-7xl font-bold mb-10 text-foreground neon-glow tracking-tighter leading-tight italic">Initiate_Performance_Protocol</h2>
          <p className="text-xl text-foreground/50 mb-16 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
            Ready to benchmark your next project? Initialize a protocol to begin 
            technical synchronization and performance auditing.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-10 mb-40">
            <a 
              href="mailto:govpateriya07@gmail.com"
              className="pulse-cyan flex items-center justify-center gap-4 px-12 py-6 bg-accent text-background font-mono font-bold uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl border border-white/10 text-sm"
            >
              <Mail size={22} />
              Sync_Metrics
            </a>
            <a 
              href="https://www.linkedin.com/in/govind-r-pateriya-97842a218/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 px-12 py-6 border border-accent text-accent font-mono font-bold uppercase tracking-[0.3em] hover:bg-accent/5 transition-all transform text-sm"
            >
              Scale_Coordination
            </a>
          </div>

          <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 font-mono text-[10px] uppercase tracking-[0.7em] text-foreground/10 font-bold">
            <p>© 2025 Govind Pateriya // OptiNode_v7.0</p>
            <div className="flex gap-12">
              <a href="#home" className="hover:text-accent transition-colors">Protocol</a>
              <a href="#projects" className="hover:text-accent transition-colors">Benchmarks</a>
              <a href="#contact" className="hover:text-accent transition-colors">Sync</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
