import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '../components/TextReveal';
import Magnetic from '../components/Magnetic';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const moonRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (moonRef.current) {
      gsap.to(moonRef.current, {
        y: 200,
        scale: 1.2,
        opacity: 0.4,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -100,
        rotate: 5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Moon/Glow - Parallax with GSAP */}
      <div 
        ref={moonRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square max-w-[1200px] opacity-10 pointer-events-none"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-b from-accent to-transparent blur-[160px] animate-pulse duration-[10s]" />
      </div>

      {/* Floating Particles/Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: Math.random() * 100 + '%', y: Math.random() * 100 + '%' }}
            animate={{ 
              y: [0, -40, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-accent rounded-full blur-[1px]"
          />
        ))}
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-12 h-[1px] bg-accent" />
            <span className="text-xs uppercase tracking-[0.5em] text-accent font-bold">The Future of Web</span>
          </motion.div>

          <h1 className="text-6xl sm:text-7xl md:text-9xl font-display font-bold leading-[0.85] mb-10 tracking-tighter">
            <TextReveal text="VOLMAX" delay={0.4} /> <br />
            <motion.span 
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-glow inline-block"
            >
              WEB
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-text-muted mb-12 leading-relaxed max-w-md"
          >
            Engineering high-performance digital products with a focus on speed, precision, and futuristic design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Magnetic>
              <button className="group relative bg-accent px-10 py-5 rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(255,46,46,0.3)]">
                <span className="relative z-10 flex items-center gap-3 font-bold uppercase tracking-[0.2em] text-xs text-white">
                  Launch Project <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" 
                />
              </button>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right Content - Image */}
        <div className="relative flex justify-center items-center perspective-1000">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, rotateY: -20, rotateX: 10 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0, rotateX: 0 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="relative z-20 w-full max-w-[550px] aspect-[4/5]"
          >
            <div ref={imageRef} className="w-full h-full rounded-[40px] glass relative overflow-hidden group shadow-2xl border border-white/10">
               <img 
                 src="/hero.jpg" 
                 alt="Volmax Founders"
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               
               {/* Reflection effect */}
               <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent skew-y-[-10deg] -translate-y-1/2 group-hover:translate-y-0 transition-transform duration-1000" />
            </div>
            
            {/* Floating Labels */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-6 -right-6 glass p-5 rounded-2xl hidden md:block z-30 border border-white/10"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-1 font-bold">Precision</p>
              <p className="text-base font-bold">99.9% Uptime</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -left-6 glass p-5 rounded-2xl hidden md:block z-30 border border-white/10"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-1 font-bold">Speed</p>
              <p className="text-base font-bold">Ultra Fast</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
