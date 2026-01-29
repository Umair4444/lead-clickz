"use client";

import { motion } from "framer-motion";
import Backgrund from "@/assets/hero-banner.png";

export default function SparkSignals() {
  const signals = [
    {
      id: 1,
      title: "Visibility",
      description: "Being present where intent forms",
    },
    {
      id: 2,
      title: "Trust",
      description: "Built through consistency and credibility",
    },
    {
      id: 3,
      title: "Validation",
      description: "Proof that removes hesitation",
    },
    {
      id: 4,
      title: "Momentum",
      description: "Sustained presence across the journey",
    },
    {
      id: 5,
      title: "Conversion",
      description: "Energy applied at the moment of decision",
    },
    {
      id: 6,
      title: "Retention",
      description: "Confidence that lasts beyond the first win",
    },
  ];

  return (
    <section className="relative w-full bg-white px-6 py-6 lg:py-10 overflow-hidden">
      {/* BACKGROUND IMAGE TOP-RIGHT */}
      <div
        className="absolute -top-16 -right-60 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-no-repeat bg-contain pointer-events-none"
        style={{
          backgroundImage: `url(${Backgrund.src})`,
          opacity: 0.1,
          zIndex: 0,
        }}
      />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto flex flex-col gap-8 z-10">
        {/* Header */}
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {/* Subheading */}
          <motion.div
            className="flex items-center gap-4 mb-4 cursor-default"
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { type: "spring", stiffness: 120, damping: 20 },
              },
            }}
          >
            {/* TEXT */}
            <motion.h3
              className="text-lg uppercase tracking-wide font-semibold"
              variants={{
                hover: {
                  x: 2,
                  color: "#111827",
                  transition: { type: "spring", stiffness: 250, damping: 18 },
                },
              }}
            >
              SPARK SIGNALS
            </motion.h3>

            {/* LINE */}
            <motion.div
              className="w-10 sm:w-14 h-0.5 bg-[#027BFF] origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              variants={{
                hover: {
                  scaleX: 1.5,
                  boxShadow: "0px 0px 8px rgba(59,130,246,0.8)",
                  transition: { duration: 0.3 },
                },
              }}
            />
          </motion.div>

          {/* Main Heading Line 1 */}
          <motion.h2
            className="text-4xl md:text-5xl font-semibold text-gray-900 cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03, color: "" }} // subtle scale + blue color on hover
            transition={{ type: "spring", stiffness: 120, delay: 0.1 }}
          >
            Growth Starts Before
          </motion.h2>

          {/* Main Heading Line 2 */}
          <motion.h2
            className="text-4xl md:text-5xl font-semibold text-blue-500 cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03, color: "#2563EB" }} // slightly deeper blue on hover
            transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
          >
            The Click.
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="mt-4 text-black/90 cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.02, color: "#111827" }} // subtle scale + darker text on hover
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
          >
            Every digital interaction sends a signal. Every signal influences a
            decision.
          </motion.p>
        </motion.div>

        {/* ================= ROW 1 ================= */}
        {/* Extra Large View */}
        <div className="hidden xl:flex flex-col lg:flex-row items-center justify-center gap-8">
          {signals.slice(0, 4).map((signal, index) => (
            <div
              key={signal.id}
              className="flex flex-col lg:flex-row items-center"
            >
              <AnimatedSignalCard {...signal} index={index} />
              {index !== 3 && <AnimatedConnector />}
            </div>
          ))}
        </div>
        {/* Large View */}
        <div className="hidden lg:flex xl:hidden flex-col lg:flex-row items-center justify-center gap-8">
          {signals.slice(0, 3).map((signal, index) => (
            <div
              key={signal.id}
              className="flex flex-col lg:flex-row items-center"
            >
              <AnimatedSignalCard {...signal} index={index} />
              {index !== 2 && <AnimatedConnector />}
            </div>
          ))}
        </div>
        {/* Tablet View */}
        <div className="hidden md:flex lg:hidden flex-col md:flex-row items-center justify-center gap-8">
          {signals.slice(0, 2).map((signal, index) => (
            <div className="flex items-center justify-center" key={signal.id}>
              <div className="flex flex-col lg:flex-row items-center">
                <AnimatedSignalCard {...signal} index={index} />
              </div>
              {index !== 1 && <AnimatedConnector />}
            </div>
          ))}
        </div>
        {/* Mobile View */}
        <div className="flex md:hidden flex-col lg:flex-row items-center justify-center gap-8">
          {signals.slice(0, 3).map((signal, index) => (
            <div
              key={signal.id}
              className="flex flex-col lg:flex-row items-center"
            >
              <AnimatedSignalCard {...signal} index={index} />
              {<AnimatedConnector />}
            </div>
          ))}
        </div>

        {/* ================= ROW 2 ================= */}
        {/* Extra Large View */}
        <div className="hidden xl:flex flex-col lg:flex-row items-center justify-center gap-8">
          {signals.slice(4, 6).map((signal, index) => (
            <div className="flex items-center justify-center" key={signal.id}>
              <div className="flex flex-col lg:flex-row items-center">
                <AnimatedSignalCard {...signal} index={index + 4} />
              </div>
              {index !== 1 && <AnimatedConnector />}
            </div>
          ))}
        </div>

        {/* Large View */}
        <div className="hidden lg:flex xl:hidden flex-col lg:flex-row items-center justify-center gap-8">
          {signals.slice(3, 6).map((signal, index) => (
            <div className="flex items-center justify-center" key={signal.id}>
              <div className="flex flex-col lg:flex-row items-center">
                <AnimatedSignalCard {...signal} index={index + 3} />
              </div>
              {index !== 2 && <AnimatedConnector />}
            </div>
          ))}
        </div>

        {/* Tablet View */}
        <div className="hidden md:flex lg:hidden flex-col md:flex-row items-center justify-start gap-8 ">
          {signals.slice(2, 4).map((signal, index) => (
            <div className="flex items-center justify-center" key={signal.id}>
              <div className="flex flex-col lg:flex-row items-center">
                <AnimatedSignalCard {...signal} index={index + 2} />
              </div>
              {index !== 1 && <AnimatedConnector />}
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden flex-col lg:flex-row items-center justify-center gap-8">
          {signals.slice(4, 6).map((signal, index) => (
            <div
              key={signal.id}
              className="flex flex-col lg:flex-row items-center"
            >
              <AnimatedSignalCard {...signal} index={index + 4} />
              {<AnimatedConnector />}
            </div>
          ))}
        </div>

        {/* ================= ROW 3 ================= */}
        {/* Tablet View */}
        <div className="hidden md:flex lg:hidden flex-col md:flex-row items-center justify-start gap-8 ">
          {/* Signal 5 */}
          <div className="flex items-center justify-center">
            <div className="flex flex-col lg:flex-row items-center">
              <AnimatedSignalCard {...signals[4]} index={4} />
            </div>
          </div>
          <AnimatedConnector />

          {/* Signal 6 */}
          <div className="flex items-center justify-center">
            <div className="flex flex-col lg:flex-row items-center">
              <AnimatedSignalCard {...signals[5]} index={5} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <motion.p
          className="max-w-4xl text-lg text-black/90 font-semibold italic cursor-pointer hover:text-black hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          When these signals move together, growth becomes predictable—not
          reactive.
        </motion.p>
      </div>
    </section>
  );
}

/* ================= ANIMATED COMPONENTS ================= */

function AnimatedSignalCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      className="flex flex-col items-center text-center gap-2 min-w-[160px] w-[400px] md:w-auto p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 150 }}
    >
      <h3 className="text-xl font-medium whitespace-nowrap">{title}</h3>
      <p className="text-black/80 max-w-[240px]">{description}</p>
    </motion.div>
  );
}

function AnimatedConnector() {
  return (
    <>
      {/* MOBILE / TABLET */}
      <motion.div className="lg:hidden relative h-1 lg:h-2 w-40 md:w-28 lg:w-32 mx-6 mt-5 overflow-hidden">
        {/* Base polygon */}
        <div
          className="absolute inset-0 bg-blue-500/20"
          style={{
            clipPath:
              "polygon(0 50%, 6% 0, 94% 0, 100% 50%, 94% 100%, 6% 100%)",
          }}
        />

        {/* Flowing gradient inside polygon */}
        <motion.div
          className="absolute inset-0"
          style={{
            clipPath:
              "polygon(0 50%, 6% 0, 94% 0, 100% 50%, 94% 100%, 6% 100%)",
            background:
              "linear-gradient(90deg, transparent, #3B82F6, #60A5FA, transparent)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPositionX: ["0%", "200%"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
      </motion.div>

      {/* DESKTOP */}
      <motion.div className="hidden lg:block relative h-1 w-24 xl:w-32 ml-6 overflow-hidden">
        {/* Base polygon */}
        <div
          className="absolute inset-0 bg-blue-500/20"
          style={{
            clipPath:
              "polygon(0 50%, 8% 0, 92% 0, 100% 50%, 92% 100%, 8% 100%)",
          }}
        />

        {/* Flowing gradient inside polygon */}
        <motion.div
          className="absolute inset-0"
          style={{
            clipPath:
              "polygon(0 50%, 8% 0, 92% 0, 100% 50%, 92% 100%, 8% 100%)",
            background:
              "linear-gradient(90deg, transparent, #3B82F6, #60A5FA, transparent)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPositionX: ["0%", "200%"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
      </motion.div>
    </>
  );
}
