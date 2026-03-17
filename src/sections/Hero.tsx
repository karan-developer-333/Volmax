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
        y: 150,
        scale: 1.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Moon/Glow - Parallax with GSAP */}
      <div 
        ref={moonRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square max-w-[1200px] opacity-20 pointer-events-none"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-b from-white/20 to-transparent blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-accent" />
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold">Premium Web Agency</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter">
            <TextReveal text="VOLMAX" delay={0.4} /> <br />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-glow"
            >
              WEB
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-base sm:text-lg text-text-muted mb-10 leading-relaxed max-w-md"
          >
            Crafting futuristic digital experiences that elevate your brand to the next dimension. Based in Pali, Rajasthan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Magnetic>
              <button className="group relative bg-accent px-8 py-4 rounded-full overflow-hidden transition-all hover:pr-12">
                <span className="relative z-10 flex items-center gap-2 font-bold uppercase tracking-widest text-sm">
                  Start Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" 
                />
              </button>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right Content - Image */}
        <div className="relative flex justify-center items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="relative z-20 w-full max-w-[500px] aspect-square"
          >
            <div ref={imageRef} className="w-full h-full rounded-3xl glass relative overflow-hidden group shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1000" 
                 alt="Futuristic Tech"
                 className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent mix-blend-overlay" />
               
               {/* Reflection effect */}
               <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent skew-y-[-10deg] -translate-y-1/2" />
            </div>
            
            {/* Floating Labels */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
              className="absolute -top-10 -right-10 glass p-4 rounded-xl hidden md:block z-30"
            >
              <p className="text-[10px] uppercase tracking-widest text-accent mb-1">Precision</p>
              <p className="text-sm font-bold">99.9% Uptime</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 }}
              className="absolute -bottom-10 -left-10 glass p-4 rounded-xl hidden md:block z-30"
            >
              <p className="text-[10px] uppercase tracking-widest text-accent mb-1">Speed</p>
              <p className="text-sm font-bold">Ultra Fast</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
