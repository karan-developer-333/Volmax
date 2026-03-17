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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl relative group hover:border-accent/30 transition-colors"
            >
              <div className="mb-8">
                <h3 className="text-xl font-display font-bold mb-1">{plan.name}</h3>
                <p className="text-xs text-accent uppercase tracking-widest font-bold mb-4">{plan.hindi}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold">₹{plan.price}</span>
                  <span className="text-text-muted text-sm">/one-time</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-text-muted">
                    <Check className="w-4 h-4 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Magnetic>
                <button className="w-full py-4 rounded-xl border border-white/10 group-hover:bg-accent group-hover:border-accent transition-all duration-300 font-bold uppercase tracking-widest text-xs">
                  Choose Plan
                </button>
              </Magnetic>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
