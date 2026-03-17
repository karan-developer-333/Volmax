import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 tracking-tighter leading-[0.9]">
              BORN IN <span className="text-accent">PALI</span>,<br />
              DRIVEN BY <span className="text-glow">VISION</span>
            </h2>
            <div className="space-y-8 text-text-muted leading-relaxed text-xl max-w-lg">
              <p>
                Rooted in the heart of Rajasthan, we bridge the gap between traditional business and the digital future.
              </p>
              <p className="italic opacity-60 text-lg">
                पाली, राजस्थान की मिट्टी से जुड़े हम, पारंपरिक व्यापार और डिजिटल भविष्य के बीच की दूरी को मिटा रहे हैं।
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            <div className="aspect-[4/3] rounded-[40px] glass overflow-hidden relative border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Workspace"
                className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold mb-3"
                  >
                    The Founders
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-4xl font-display font-bold tracking-tighter"
                  >
                    Lakshit & Karan
                  </motion.p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-accent/20 rounded-tr-[40px]" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-accent/20 rounded-bl-[40px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
