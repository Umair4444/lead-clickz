"use client";

import { motion, Variants } from "framer-motion";
import Background from "@/assets/system-background.png";

// Framer Motion variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, duration: 0.6 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function TheSystem() {
  return (
    <section className="relative w-full py-6 lg:py-10 bg-[#fcfdff]">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Background.src})`, opacity: 0.1 }}
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Main content grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* LEFT COLUMN */}
          <motion.div className="space-y-5" variants={itemVariants}>
            <motion.div
              className="flex items-center gap-4 mb-2 cursor-default"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <motion.h3
              className="text-base uppercase tracking-wide font-semibold"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: "easeOut" as const },
                  },
                  hover: {
                    y: -2,
                    transition: { type: "spring", stiffness: 300, damping: 18 },
                  },
                }}
              >
                THE SYSTEM
              </motion.h3>

              <motion.div
                className="w-10 sm:w-14 h-0.5 bg-[#027BFF] origin-left"
                variants={{
                  hidden: { scaleX: 0 },
                  visible: {
                    scaleX: 1,
                    transition: { duration: 0.6, ease: "easeOut" as const },
                  },
                  hover: {
                    scaleX: 1.25,
                    boxShadow: "0px 0px 10px rgba(2, 123, 255, 0.8)",
                    transition: { duration: 0.3 },
                  },
                }}
              />
            </motion.div>

            <motion.div
              className="space-y-3 lg:space-y-3"
              variants={itemVariants}
            >
              <motion.h1
                className="capitalize text-4xl sm:text-5xl md:text-6xl font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                Nothing Powerful
              </motion.h1>
              <motion.h1
                className="capitalize text-4xl sm:text-5xl md:text-6xl font-semibold text-blue-500"
                whileHover={{ scale: 1.05 }}
              >
                Operates Alone.
              </motion.h1>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            variants={itemVariants}
          >
            <motion.div className="text-base lg:text-lg text-black leading-relaxed space-y-5">
              <motion.div variants={itemVariants} className="lg:space-y-2">
                <motion.p whileHover={{ scale: 1.02 }}>
                  Search influences reputation.
                </motion.p>
                <motion.p whileHover={{ scale: 1.02 }}>
                  Reputation influences conversion.
                </motion.p>
                <motion.p whileHover={{ scale: 1.02 }}>
                  Conversion reinforces visibility.
                </motion.p>
              </motion.div>

              <motion.p variants={itemVariants} whileHover={{ scale: 1.02 }}>
                When these elements are disconnected, effort is wasted. When
                they are aligned, energy compounds.
              </motion.p>

              <motion.p variants={itemVariants} whileHover={{ scale: 1.02 }}>
                We design connected digital ecosystems where each signal
                strengthens the next—creating clarity, momentum, and long-term
                stability.
              </motion.p>

              <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }}>
                <p className="italic font-semibold">
                  Most of the work happens beneath the surface.
                </p>
                <p className="italic font-semibold">
                  The impact is unmistakable.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
