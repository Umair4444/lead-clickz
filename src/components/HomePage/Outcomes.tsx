"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Background from "@/assets/backgrond.png";

/* ===== Variants (same pattern as MarketFocus) ===== */

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Outcomes() {
  const outcomes = [
    "Clear, consistent visibility",
    "Strong trust signals across channels",
    "Smarter spend with reduced volatility",
    "Predictable momentum—not guesswork",
    "Confidence in decisions, not reactions",
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden pt-4 pb-2 lg:py-6">
      {/* Background gradients */}
  

      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={Background}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row gap-6 items-start justify-between">
          {/* LEFT SIDE */}
          <motion.div
            className="w-full lg:w-[380px] flex-shrink-0"
            variants={item}
          >
            {/* Label */}
            <motion.div
              className="flex items-center gap-4 mb-2 flex-wrap"
              whileHover="hover"
            >
              <motion.span
                className="text-base sm:text-lg font-semibold tracking-wide"
                style={{ color: "#615F63" }}
                variants={{
                  hidden: { opacity: 0, y: 5 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4 },
                  },
                  hover: {
                    y: -2,
                    scale: 1.05,
                  },
                }}
              >
                OUTCOMES
              </motion.span>

              <motion.div
                className="w-10 h-0.5 bg-blue-500 origin-left"
                variants={{
                  hidden: { scaleX: 0 },
                  visible: { scaleX: 1, transition: { duration: 0.5 } },
                  hover: {
                    scaleX: 1.25,
                    boxShadow: "0px 0px 10px rgba(2,123,255,0.8)",
                  },
                }}
              />
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 capitalize"
              style={{ color: "#2A2A2A" }}
              whileHover={{ scale: 1.03 }}
            >
              Stability Is the <span className="text-blue-500">Advantage.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: "" }}
              whileHover={{ scale: 1.03 }}
            >
              Success isn't about spikes. It's about confidence.
            </motion.p>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="flex-1 w-full max-w-full lg:max-w-xl"
            variants={container}
          >
            {/* Intro */}
            <motion.p
              className="text-lg sm:text-xl leading-relaxed font-semibold mb-4"
              style={{ color: "" }}
              variants={item}
              whileHover={{ scale: 1.03 }}
            >
              Our clients experience:
            </motion.p>

            {/* Outcomes list */}
            <div className="space-y-4">
              {outcomes.map((outcome, index) => (
                <motion.div key={index} variants={item} whileHover={{ y: -4 }}>
                  <motion.p
                    className="text-xl sm:text-2xl font-normal"
                    style={{ color: "#433E3F" }}
                    whileHover={{ scale: 1.03 }}
                  >
                    {outcome}
                  </motion.p>

                  <motion.div
                    className="h-px mt-4 bg-[#000000] origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              ))}

              {/* Final message */}
              <motion.p
                className="text-lg sm:text-xl leading-relaxed font-semibold italic"
                style={{ color: "#027BFF" }}
                variants={item}
                whileHover={{ scale: 1.03 }}
              >
                We succeed because our clients succeed.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
