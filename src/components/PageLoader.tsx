import { motion } from 'framer-motion';

export default function PageLoader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 1.2, ease: [0.83, 0, 0.17, 1], delay: 2 }}
      className="fixed inset-0 z-[100] bg-bg flex items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 40, skewY: 5 }}
          animate={{ opacity: 1, y: 0, skewY: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-6xl font-display font-bold tracking-tighter mb-6 text-current"
        >
          VOLMAX<span className="text-accent">.</span>
        </motion.div>
        <div className="w-64 h-[2px] bg-current/5 relative overflow-hidden rounded-full">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-accent"
          />
        </div>
        
        {/* Background text for depth */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display font-bold pointer-events-none whitespace-nowrap"
        >
          VOLMAX WEB
        </motion.div>
      </div>
    </motion.div>
  );
}
