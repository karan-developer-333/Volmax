import { motion } from 'framer-motion';

export default function PageLoader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1.5 }}
      className="fixed inset-0 z-[100] bg-bg flex items-center justify-center"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-display font-bold tracking-tighter mb-4 text-current"
        >
          VOLMAX<span className="text-accent">.</span>
        </motion.div>
        <div className="w-48 h-[1px] bg-current/10 relative overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 bg-accent"
          />
        </div>
      </div>
    </motion.div>
  );
}
