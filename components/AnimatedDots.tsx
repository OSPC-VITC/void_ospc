'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxDots } from './ParallaxDots';

export default function AnimatedDots() {
  return (
    <motion.div 
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <ParallaxDots />
    </motion.div>
  );
} 