import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const contacts = [
  { name: 'Lakshit Pawar', phone: '73740 41990' },
  { name: 'Karan Das', phone: '88903 12895' }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter leading-[0.9]">
              READY TO <br />
              <span className="text-accent">LAUNCH?</span>
            </h2>
            <p className="text-text-muted text-lg mb-12 max-w-md leading-relaxed font-medium">
              If you want to create a website for your business, you can contact us directly. We are ready to bring your ideas to life.
            </p>

            <div className="space-y-10">
              {contacts.map((c, i) => (
                <motion.div 
                  key={c.name} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  className="flex items-center gap-8 group"
                >
                  <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-accent group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-text-muted mb-2 font-bold">{c.name}</p>
                    <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="text-2xl font-display font-bold hover:text-accent transition-colors tracking-tight">
                      {c.phone}
                    </a>
                  </div>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-8 group"
              >
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-accent group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-text-muted mb-2 font-bold">Email</p>
                  <a href="mailto:homepc8890@gmail.com" className="text-2xl font-display font-bold hover:text-accent transition-colors tracking-tight">
                    homepc8890@gmail.com
                  </a>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-8 group"
              >
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-accent group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-text-muted mb-2 font-bold">Location</p>
                  <p className="text-2xl font-display font-bold tracking-tight">Pali, Rajasthan</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="glass p-10 md:p-16 rounded-[40px] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors duration-1000" />
            
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-muted ml-1">Name</label>
                  <input type="text" className="w-full bg-current/[0.03] border border-current/5 rounded-2xl px-6 py-4 focus:border-accent/50 focus:bg-current/[0.05] outline-none transition-all duration-500 font-medium" placeholder="Your Name" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-muted ml-1">Email</label>
                  <input type="email" className="w-full bg-current/[0.03] border border-current/5 rounded-2xl px-6 py-4 focus:border-accent/50 focus:bg-current/[0.05] outline-none transition-all duration-500 font-medium" placeholder="Your Email" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-muted ml-1">Message</label>
                <textarea rows={5} className="w-full bg-current/[0.03] border border-current/5 rounded-2xl px-6 py-4 focus:border-accent/50 focus:bg-current/[0.05] outline-none transition-all duration-500 font-medium resize-none" placeholder="Tell us about your project" />
              </div>
              <button className="w-full bg-accent py-6 rounded-2xl font-bold uppercase tracking-[0.3em] text-xs hover:shadow-[0_20px_40px_rgba(255,46,46,0.3)] transition-all duration-500 text-white hover:-translate-y-1 active:scale-95">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
