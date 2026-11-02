"use client";

import { motion } from "framer-motion";

// Fades content up once as it scrolls into view. Transforms are skipped for
// reduced-motion users via the MotionConfig in MotionProvider.
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
