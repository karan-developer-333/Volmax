import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const contacts = [
  { name: 'Lakshit Pawar', phone: '73740 41990' },
  { name: 'Vikram Das', phone: '88903 12895' }
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
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 tracking-tighter">
              READY TO <span className="text-accent">LAUNCH?</span>
            </h2>
            <p className="text-text-muted text-lg mb-12 max-w-md leading-relaxed">
              If you want to create a website for your business, you can contact us directly. We are ready to bring your ideas to life.
            </p>

            <div className="space-y-8">
              {contacts.map((c, i) => (
                <div key={c.name} className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-text-muted mb-1">{c.name}</p>
                    <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="text-xl font-display font-bold hover:text-accent transition-colors">
                      {c.phone}
                    </a>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-text-muted mb-1">Location</p>
                  <p className="text-xl font-display font-bold">Pali, Rajasthan</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-text-muted">Name</label>
                  <input type="text" className="w-full bg-current/[0.05] border border-current/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-text-muted">Email</label>
                  <input type="email" className="w-full bg-current/[0.05] border border-current/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors" placeholder="Your Email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-text-muted">Message</label>
                <textarea rows={4} className="w-full bg-current/[0.05] border border-current/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors" placeholder="Tell us about your project" />
              </div>
              <button className="w-full bg-accent py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(255,46,46,0.4)] transition-all text-white">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
