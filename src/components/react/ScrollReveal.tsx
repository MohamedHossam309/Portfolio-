import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const directionMap = {
  up: { y: 30, x: 0 },
  down: { y: -30, x: 0 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
};

export default function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReduced = useReducedMotion();

  const d = directionMap[direction];

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: d.x, y: d.y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
