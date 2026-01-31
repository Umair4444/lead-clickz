"use client";

import { motion } from "framer-motion";

export default function ScrollSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      className="h-screen w-full snap-start flex items-center justify-center"
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
    >
      {children}
    </motion.section>
  );
}
