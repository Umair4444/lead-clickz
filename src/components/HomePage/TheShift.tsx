"use client";

import { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import CTAButton from "@/components/ui/CTAButton";
import Background from "@/assets/shift-background.jpg";

// Framer Motion variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.6,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function TheShift() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 👈 slower (0.5–0.7 is sweet spot)
    }
  }, []);
  return (
    <section className="relative w-full py-6 lg:py-10">
      {/* BACKGROUND IMAGE */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Background.src})`, opacity: 0.15 }}
      /> */}

      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        style={{ opacity: 0.25 }}
      >
        <source src="/shift-background.mp4" type="video/mp4" />
      </video>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* MAIN GRID */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* LEFT COLUMN */}
          <motion.div className="space-y-5" variants={itemVariants}>
            {/* Subheading */}
            <motion.div
              className="flex items-center justify-start gap-3 mb-2 cursor-default"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              whileHover="hover"
            >
              {/* TEXT */}
              <motion.h3
                className="text-base uppercase tracking-wide font-semibold"
                variants={{
                  hover: {
                    y: -2,
                    color: "#111827",
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  },
                }}
              >
                THE SHIFT
              </motion.h3>

              {/* LINE */}
              <motion.span
                className="w-10 sm:w-14 h-0.5 bg-[#027BFF] origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.45, duration: 0.4, ease: "easeOut" }}
                variants={{
                  hover: {
                    scaleX: 1.5,
                    boxShadow: "0px 0px 8px rgba(59,130,246,0.8)",
                    transition: { duration: 0.3 },
                  },
                }}
              />
            </motion.div>

            {/* Main Titles */}
            <motion.div className="lg:space-y-3">
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

            <motion.p
              className="text-base sm:text-lg"
              whileHover={{ scale: 1.02, color: "#111827" }}
            >
              What used to work no longer works in isolation.
            </motion.p>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            className="space-y-4 lg:space-y-8"
            variants={itemVariants}
          >
            <motion.div className="text-base lg:text-lg text-black leading-relaxed space-y-5">
              <motion.div className="lg:space-y-2">
                <motion.p whileHover={{ scale: 1.02, color: "#111827" }}>
                  Websites don’t convert without trust.
                </motion.p>
                <motion.p whileHover={{ scale: 1.02, color: "#111827" }}>
                  Visibility doesn’t matter without validation.
                </motion.p>
                <motion.p whileHover={{ scale: 1.02, color: "#111827" }}>
                  Traffic means nothing without timing.
                </motion.p>
              </motion.div>

              <motion.p whileHover={{ scale: 1.02, color: "#111827" }}>
                Most businesses struggle not because they lack effort—but
                because their digital efforts are fragmented. Channels compete
                instead of reinforcing each other. Momentum breaks before
                decisions are ever made.
              </motion.p>

              <motion.p whileHover={{ scale: 1.02, color: "#111827" }}>
                We’ve spent years observing how real decisions unfold across
                platforms, moments, and market cycles. That perspective—earned
                through growth periods, downturns, and disruption—is why Lead
                Clickz has endured while others chased shortcuts.
              </motion.p>

              <motion.p
                className="italic font-semibold"
                whileHover={{ scale: 1.02 }}
              >
                We don't simplify the problem. We understand it.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="mt-2 lg:mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <CTAButton
                variant="primary"
                size="sm"
                className="sm:px-10 justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Consideration
              </CTAButton>

              <CTAButton
                variant="secondary"
                size="sm"
                className="sm:px-10 justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                How We Think
              </CTAButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
