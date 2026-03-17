import { motion } from 'framer-motion';
import { ShieldCheck, Eye, CreditCard, Trash2 } from 'lucide-react';

const policies = [
  {
    icon: Eye,
    title: 'Pay After Preview',
    hindi: 'प्रीव्यू के बाद पेमेंट',
    desc: 'First, we will create your website and send it to you so that you can see how it looks.'
  },
  {
    icon: ShieldCheck,
    title: 'Satisfaction Guaranteed',
    hindi: 'संतुष्टि की गारंटी',
    desc: 'If you like the website, then you can make the payment and continue using it.'
  },
  {
    icon: Trash2,
    title: 'No Risk Policy',
    hindi: 'कोई जोखिम नहीं',
    desc: 'If you do not like the website, you do not need to pay anything. We will simply delete it.'
  },
  {
    icon: CreditCard,
    title: 'Online Only',
    hindi: 'केवल ऑनलाइन पेमेंट',
    desc: 'Payment will be accepted only through online methods. Cash payment is not accepted.'
  }
];

export default function Policy() {
  return (
    <section className="py-24 bg-current/[0.01]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tighter"
          >
            OUR <span className="text-accent">POLICY</span>
          </motion.h2>
          <p className="text-text-muted uppercase tracking-widest text-xs">Trust and transparency in every project</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {policies.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center group"
            >
              <div className="w-20 h-20 rounded-3xl glass mx-auto flex items-center justify-center text-accent mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 border border-white/5">
                <p.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">{p.title}</h3>
              <p className="text-[10px] text-accent uppercase tracking-[0.3em] font-bold mb-5">{p.hindi}</p>
              <p className="text-sm text-text-muted leading-relaxed group-hover:text-current transition-colors duration-500">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl border border-accent/20 bg-accent/5 text-center"
        >
          <p className="text-sm text-accent font-bold uppercase tracking-[0.2em]">
            Final delivery requires payment after your approval.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
