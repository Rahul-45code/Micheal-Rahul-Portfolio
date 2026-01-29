'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: 1000,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    x: -1000,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
