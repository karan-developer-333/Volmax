import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 tracking-tighter">
              BORN IN <span className="text-accent">PALI</span>,<br />
              DRIVEN BY <span className="text-glow">VISION</span>
            </h2>
            <div className="space-y-6 text-text-muted leading-relaxed text-lg">
              <p>
                Both founders of Volmax Web live in Pali, Rajasthan. We work together to help local shops, businesses, and companies build their professional websites and grow their presence on the internet.
              </p>
              <p className="italic opacity-60">
                Volmax Web के दोनों ओनर्स पाली, राजस्थान में रहते हैं। वे मिलकर स्थानीय दुकानों, व्यापारियों और कंपनियों को प्रोफेशनल वेबसाइट बनाकर इंटरनेट पर उनकी पहचान बनाने में मदद करते हैं।
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="aspect-video rounded-3xl glass overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Workspace"
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.4em] text-accent font-bold mb-2">The Founders</p>
                  <p className="text-2xl font-display font-bold">Lakshit & Vikram</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-accent/30 rounded-tr-3xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-accent/30 rounded-bl-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
