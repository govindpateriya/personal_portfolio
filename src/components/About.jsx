import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (hasStarted) {
      let start = 0;
      const duration = 2000;
      const endValue = parseInt(end);
      const increment = endValue / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [hasStarted, end]);

  return (
    <div ref={elementRef} className="glass-card p-10 border border-white/5 rounded-none flex flex-col items-center justify-center text-center group transition-all duration-500 hover:border-accent/40 shadow-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span className="text-6xl font-mono font-bold text-accent mb-4 neon-glow group-hover:scale-110 transition-transform duration-500 relative z-10">
        {count}{end.includes('+') ? '+' : (end.includes('%') ? '%' : '')}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-foreground/40 font-bold relative z-10">{label}</span>
    </div>
  );
};

export const About = () => {
  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '10K+', label: 'Active Users Served' },
    { number: '30%', label: 'Faster Load Times' },
  ];

  return (
    <section id="about" className="py-32 px-6 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(0,255,209,0.02),transparent_50%)] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="speed-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 relative text-foreground neon-glow">
              <span className="text-accent text-[10px] font-mono absolute -top-12 left-0 uppercase tracking-[0.6em] font-bold">Latency_Optimization.sys</span>
              Performance Driven
            </h2>
            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed font-light tracking-wide">
              <p>
                My development philosophy centers on radical efficiency. 
                In a world where milliseconds determine conversion, I architect 
                <span className="text-accent font-bold"> MERN Stack </span> applications that prioritize 
                <span className="text-accent font-bold"> Core Web Vitals </span> and sub-second 
                response times.
              </p>
              <p>
                As a <span className="text-accent font-bold"> MERN Master </span>, I specialize in 
                <span className="text-accent font-bold"> MongoDB </span> optimization, scalable 
                <span className="text-accent font-bold"> React </span> architecture, and 
                <span className="text-accent font-bold"> Performance Optimization </span>. 
                I don't just build features; I engineer high-speed digital assets with 
                uncompromising <span className="text-accent font-bold"> Scalability </span>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-12">
            {stats.map((stat, index) => (
              <Counter key={index} end={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
