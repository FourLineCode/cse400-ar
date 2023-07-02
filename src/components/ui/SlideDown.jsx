import { AnimatePresence, motion } from 'framer-motion';

export function SlideDown({ show, children, className }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key='content'
          initial='collapsed'
          animate='open'
          exit='collapsed'
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.25 }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
