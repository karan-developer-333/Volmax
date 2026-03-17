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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-accent">
                <f.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider">{f.title}</h3>
                <p className="text-[10px] text-text-muted uppercase tracking-widest">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
