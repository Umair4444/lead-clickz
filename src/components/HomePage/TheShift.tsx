"use client";

import { motion } from "framer-motion";
import CTAButton from "@/components/ui/CTAButton";

export default function TheShift() {
  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const highlightVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full lg:pt-10 bg-[#F9FBFE]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Main content grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-2 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* LEFT COLUMN */}
          <motion.div className="space-y-5" variants={itemVariants}>
            <motion.div
              className="flex items-center gap-5"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold">THE SHIFT</h3>
              <motion.div
                className="w-10 sm:w-14 h-0.5 bg-[#027BFF]"
                variants={highlightVariants}
              />
            </motion.div>

            <motion.div className="lg:space-y-3" variants={itemVariants}>
              <motion.h1
                className="capitalize text-4xl sm:text-5xl md:text-6xl font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                The Market Didn’t Break.
              </motion.h1>
              <motion.h1
                className="capitalize text-4xl sm:text-5xl md:text-6xl font-semibold text-blue-500"
                whileHover={{ scale: 1.05 }}
              >
                It Evolved.
              </motion.h1>
            </motion.div>

            <motion.p className="text-base sm:text-lg" variants={itemVariants}>
              What used to work no longer works in isolation.
            </motion.p>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            className="space-y-4 lg:space-y-8"
            variants={itemVariants}
          >
            <motion.div className="text-base lg:text-lg text-black leading-relaxed space-y-5">
              <motion.div variants={itemVariants} className="lg:space-y-2">
                <p>Websites don’t convert without trust.</p>
                <p>Visibility doesn’t matter without validation.</p>
                <p>Traffic means nothing without timing.</p>
              </motion.div>

              <motion.p variants={itemVariants}>
                Most businesses struggle not because they lack effort—but
                because their digital efforts are fragmented. Channels compete
                instead of reinforcing each other. Momentum breaks before
                decisions are ever made.
              </motion.p>

              <motion.p variants={itemVariants}>
                We’ve spent years observing how real decisions unfold across
                platforms, moments, and market cycles. That perspective—earned
                through growth periods, downturns, and disruption—is why Lead
                Clickz has endured while others chased shortcuts.
              </motion.p>

              <motion.p
                className="italic font-semibold"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                We don't simplify the problem. We understand it.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="mt-2 lg:mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              variants={itemVariants}
            >
              <CTAButton
                variant="primary"
                size="sm"
                className="sm:px-10 justify-center"
                asChild
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Consideration
                </motion.button>
              </CTAButton>

              <CTAButton
                variant="secondary"
                size="sm"
                className="sm:px-10 justify-center"
                asChild
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  How We Think
                </motion.button>
              </CTAButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
