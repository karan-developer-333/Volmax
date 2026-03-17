import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Cpu } from 'lucide-react';

const features = [
  { icon: Zap, title: 'Fast Performance', desc: 'Optimized for speed' },
  { icon: Shield, title: 'Secure Code', desc: 'Enterprise grade' },
  { icon: Globe, title: 'Global Reach', desc: 'Built for scale' },
  { icon: Cpu, title: 'Modern Tech', desc: 'Latest stack' },
];

export default function FeatureStrip() {
  return (
    <div className="border-y border-white/5 bg-bg/50 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-5 group"
            >
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/5">
                <f.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-1">{f.title}</h3>
                <p className="text-[10px] text-text-muted uppercase tracking-[0.3em] font-medium group-hover:text-current transition-colors duration-500">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
