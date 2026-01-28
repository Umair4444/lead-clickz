"use client";
import { motion } from "framer-motion";

export default function FingerSparks() {
  const particles = 12; // number of orbiting points
  const turns = 2; // number of spiral rotations

  return (
    <div className="relative w-12 h-12"> {/* smaller container */}
      {/* NUCLEAR CORE */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, #ffffff 0%, #93c5fd 30%, #2563eb 55%, transparent 75%)",
          filter: "blur(2px)",
        }}
        animate={{
          scale: [0.2, 1.0, 0.6], // smaller core
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatDelay: 0.3,
          ease: "easeInOut",
        }}
      />

      {/* ENERGY SHOCKWAVE */}
      <motion.div
        className="absolute inset-0 rounded-full border border-blue-400"
        animate={{
          scale: [0.5, 2.0], // smaller shockwave
          opacity: [0.8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      {/* SPIRAL PARTICLES */}
      {[...Array(particles)].map((_, i) => {
        const angle = (i / particles) * turns * 2 * Math.PI;
        const radius = 3 + i * 1.5; // smaller spiral

        return (
          <motion.span
            key={i}
            className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-blue-300" // smaller particle
            animate={{
              x: [0, Math.cos(angle) * radius],
              y: [0, Math.sin(angle) * radius],
              opacity: [1, 0],
              scale: [1, 0.5],
            }}
            transition={{
              duration: 1.2, // smooth
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeOut",
            }}
          />
        );
      })}
    </div>
  );
}
