import React from 'react';
import { Mail, MapPin, ChevronDown, Terminal, Zap, Code, Layout, Server, Cpu } from 'lucide-react';
import { motion, useMotionValue, useSpring } from "framer-motion";

const MagneticButton = ({ children, className, href }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      style={{ x: mouseX, y: mouseY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.a>
  );
};

export const Hero = () => {
  const [tagline, setTagline] = React.useState('');
  const fullTagline = 'React.js & MERN Stack Developer';

  React.useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTagline(fullTagline.slice(0, index));
      index++;
      if (index > fullTagline.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden bg-background">
      {/* Velocity Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,209,0.03),transparent_70%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent animate-pulse [animation-duration:3s]"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent animate-pulse [animation-duration:5s]"></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          <div className="text-left flex-1 speed-fade-in mt-20">
            <p className="text-accent font-mono uppercase tracking-[0.5em] mb-8 text-xs font-bold flex items-center gap-4">
              <span className="w-12 h-px bg-accent/20 mt-1"></span>
              Optimization_Architect
            </p>

            <h1 className="text-7xl md:text-9xl mb-10 leading-[0.9] tracking-tighter text-foreground neon-glow premium-name">
              Govind<br />
              <span className="text-accent italic font-light">Pateriya</span>
            </h1>

            <div className="mb-12 min-h-[40px]">
              <p className="text-xl md:text-3xl text-foreground/60 font-mono font-medium tracking-tight terminal-text">
                {tagline}
              </p>
            </div>

            {/* Metric Bar */}
            <div className="flex flex-wrap gap-8 mb-16 py-6 border-y border-white/5 bg-accent/5 backdrop-blur-sm px-8 opacity-80">
              <div className="flex items-center gap-3">
                <Zap size={16} className="text-accent" />
                <span className="text-[10px] font-mono font-bold text-foreground/70 uppercase tracking-widest">30% Faster Loads</span>
              </div>
              <div className="flex items-center gap-3">
                <Cpu size={16} className="text-accent" />
                <span className="text-[10px] font-mono font-bold text-foreground/70 uppercase tracking-widest">10,000+ Users Managed</span>
              </div>
              <div className="flex items-center gap-3">
                <Layout size={16} className="text-accent" />
                <span className="text-[10px] font-mono font-bold text-foreground/70 uppercase tracking-widest">25% Faster Delivery</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
              <MagneticButton
                href="#projects"
                className="px-12 py-5 bg-accent text-background font-mono font-bold uppercase tracking-[0.3em] hover:shadow-[0_0_30px_rgba(0,255,209,0.4)] transition-all text-sm rounded-none inline-block text-center shadow-lg"
              >
                VIEW_PROJECTS.SH
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="px-12 py-5 border border-white/10 text-foreground/70 font-mono font-bold uppercase tracking-[0.3em] hover:border-accent hover:text-accent transition-all text-sm rounded-none text-center inline-block"
              >
                INITIATE_LINK
              </MagneticButton>
            </div>
          </div>

          {/* Glassmorphic Code Snippet */}
          <div className="hidden lg:block flex-1 max-w-md speed-fade-in [animation-delay:400ms]">
            <div className="glass-card p-8 rounded-none border border-white/10 relative overflow-hidden shadow-2xl group hover:border-accent/40 transition-all duration-500">
              <div className="flex gap-2 mb-6 border-b border-white/5 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <span className="ml-auto text-[10px] font-mono text-foreground/20 uppercase tracking-widest">profile.sys</span>
              </div>
              <pre className="text-left font-mono text-sm leading-relaxed text-foreground/60 overflow-hidden">
                <code className="block">
                  <span className="text-accent">const</span> <span className="text-foreground/90">developer</span> = &#123;
                  <br />
                  &nbsp;&nbsp;name: <span className="text-foreground/90">"Govind Pateriya"</span>,
                  <br />
                  &nbsp;&nbsp;role: <span className="text-foreground/90">"Frontend Developer | React Js Developer"</span>,
                  <br />
                  &nbsp;&nbsp;specialty: <span className="text-foreground/90">"MERN Master"</span>
                  <br />
                  &#125;;
                  <br />
                  <br />
                  <span className="text-accent">while</span> (<span className="text-foreground/90">active</span>) &#123;
                  <br />
                  &nbsp;&nbsp;<span className="text-foreground/90">optimize</span>(<span className="text-foreground/90">vitals</span>);
                  <br />
                  &nbsp;&nbsp;<span className="text-foreground/90">scale</span>(<span className="text-foreground/90">infrastructure</span>);
                  <br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-32 mb-5 flex justify-center gap-14 text-foreground/10 speed-fade-in [animation-delay:800ms]">
          <a href="https://github.com/govindpateriya" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Terminal size={24} /></a>
          <a href="https://www.linkedin.com/in/govind-r-pateriya-97842a218/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Zap size={24} /></a>
          <a href="mailto:govpateriya07@gmail.com" className="hover:text-accent transition-colors"><Mail size={24} /></a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-12 left-1/2 -translate-x-1/2 text-accent/20 hover:text-accent transition-all animate-bounce">
        <ChevronDown size={44} />
      </a>
    </section>
  );
};
