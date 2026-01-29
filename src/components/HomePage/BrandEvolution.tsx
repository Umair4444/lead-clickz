"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Background from "@/assets/backgrond.png";
import Sphere from "@/assets/bg-sphere.png";
import SmallSphere from "@/assets/small-sphere.png";

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

export default function BrandEvolution() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-6 lg:py-10">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px]">
          <Image
            src={Sphere}
            alt="Decorative Sphere"
            className="w-full h-full object-contain"
          />
        </div>

        <Image
          src={Background}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left column */}
          <motion.div className="space-y-6" variants={itemVariants}>
            {/* Label */}
            <motion.div
              className="flex items-center gap-4 mb-2 cursor-default"
              whileHover="hover"
            >
              <motion.h3
                className="text-lg font-semibold tracking-wide"
                variants={{
                  hidden: { opacity: 0, y: 5 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: "easeOut" },
                  },
                  hover: {
                    y: -2,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300, damping: 18 },
                  },
                }}
              >
                BRAND EVOLUTION
              </motion.h3>
              <motion.span
                className="w-10 sm:w-14 h-0.5 bg-[#027BFF] origin-left"
                variants={{
                  hidden: { scaleX: 0 },
                  visible: {
                    scaleX: 1,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                  hover: {
                    scaleX: 1.25,
                    boxShadow: "0px 0px 10px rgba(2,123,255,0.8)",
                    transition: { duration: 0.3 },
                  },
                }}
              />
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight capitalize text-foreground"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              Yesterday Was About Direction.{" "}
              <span className="text-blue-500">Today Is About Power.</span>
            </motion.h2>

            {/* Description */}
            <motion.div
              className="space-y-4 text-base md:text-lg"
              variants={itemVariants}
            >
              <motion.p
                className="leading-relaxed max-w-full md:max-w-xl"
                whileHover={{ scale: 1.02 }}
              >
                There was a time when marketing was about aim—pointing in the
                right direction and hoping attention followed. That was
                yesterday.
              </motion.p>
              <motion.p
                className="leading-relaxed max-w-full md:max-w-xl"
                whileHover={{ scale: 1.02 }}
              >
                Today, success demands precision, timing, and force. That
                evolution is reflected in our identity. What was once an arrow
                is now a lightning bolt—not because we move faster, but because
                we strike where it matters most.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div
            className="flex flex-col justify-end max-w-full md:max-w-lg space-y-4 text-left mt-6 md:mt-0"
            variants={itemVariants}
          >
            <motion.p className="flex flex-col gap-4 text-base md:text-lg">
              <motion.span
                className="text-blue-500 italic"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                A spark doesn’t shout. It activates.
              </motion.span>
              <motion.span variants={itemVariants} whileHover={{ scale: 1.02 }}>
                A single strike applied at the right moment—can change
                everything.
              </motion.span>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Small decorative sphere */}
      <div className="absolute right-0 -top-16 sm:-top-24 w-32 sm:w-44 lg:w-56 opacity-20">
        <Image
          src={SmallSphere}
          alt="Small Decorative Sphere"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
