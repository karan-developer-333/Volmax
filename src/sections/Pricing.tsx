import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Magnetic from '../components/Magnetic';

const plans = [
// ...
  {
    name: 'Local Shop',
    hindi: 'स्थानीय दुकान',
    price: '1,500',
    desc: 'Perfect for small local businesses.',
    features: ['Professional Design', 'Mobile Responsive', 'Contact Form', 'Google Maps Integration']
  },
  {
    name: 'Mall / Big Shop',
    hindi: 'मॉल या बड़ी दुकान',
    price: '5,000',
    desc: 'Advanced features for growing businesses.',
    features: ['Custom Layout', 'Product Showcase', 'SEO Optimization', 'Speed Optimization', 'Social Media Integration']
  },
  {
    name: 'Company / Large Business',
    hindi: 'कंपनी या बड़ा बिज़नेस',
    price: '7,000',
    desc: 'Full-scale enterprise solutions.',
    features: ['Premium Animations', 'Dynamic Content', 'Priority Support', 'Advanced Security', 'Custom Integrations']
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-current/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tighter"
          >
            TRANSPARENT <span className="text-accent">PRICING</span>
          </motion.h2>
          <p className="text-text-muted uppercase tracking-widest text-xs">Choose the plan that fits your vision</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass p-10 rounded-[40px] relative group hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700 border border-white/5 hover:border-accent/20"
            >
              <div className="mb-10">
                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                <p className="text-[10px] text-accent uppercase tracking-[0.3em] font-bold mb-6">{plan.hindi}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-display font-bold tracking-tighter">₹{plan.price}</span>
                  <span className="text-text-muted text-xs uppercase tracking-widest ml-2">one-time</span>
                </div>
              </div>

              <ul className="space-y-5 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-4 text-sm text-text-muted group-hover:text-current transition-colors">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Magnetic>
                <button className="w-full py-5 rounded-2xl border border-white/10 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-500 font-bold uppercase tracking-[0.2em] text-[10px]">
                  Get Started
                </button>
              </Magnetic>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
