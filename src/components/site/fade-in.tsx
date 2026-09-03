"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  /** Retardo en segundos (para escalonar tarjetas). */
  delay?: number;
  /** Desplazamiento vertical inicial en px. */
  y?: number;
};

/**
 * Aparición suave por scroll (una sola vez por sección).
 * Respeta `prefers-reduced-motion`: en ese caso solo hace fade, sin movimiento.
 */
export function FadeIn({ children, className, delay = 0, y = 28 }: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={
        prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
