"use client";

import { motion, Variants } from "framer-motion";
import CTAButton from "../ui/CTAButton";

/* ===== Variants (same system as other sections) ===== */

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

export default function Invitation() {
  return (
    <section className="relative w-full py-10 sm:py-8 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main Card Container */}
        <motion.div
          variants={item}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          className="relative w-full group rounded-3xl md:rounded-4xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(2,123,255,0.8),0_12px_32px_rgba(2,123,255,0.6),0_-12px_32px_rgba(2,123,255,0.5)]"
          style={{
            boxShadow:
              "0 0 20px rgba(2,123,255,0.5), 0 8px 12px rgba(0,255,255,0.4), 0 -8px 10px rgba(0, 255, 255, 0.3)",
          }}
        >
          {/* Blurred Background */}
          <motion.div
            className="absolute inset-0 rounded-3xl md:rounded-4xl pointer-events-none"
            initial={{ opacity: 0.4 }}
            whileHover={{ opacity: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(2,123,255,0.35), transparent 60%)",
              filter: "blur(40px)",
            }}
          />

          {/* Border */}
          <motion.div
            className="absolute inset-0 rounded-3xl md:rounded-4xl border border-blue-400/30"
            initial={{ opacity: 0.5 }}
            whileHover={{
              opacity: 1,
              boxShadow: "0 0 18px rgba(2,123,255,0.6)",
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-10 md:p-12 xl:p-20">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-start">
              {/* LEFT */}
              <motion.div
                className="flex-1 w-full lg:max-w-2xl"
                variants={item}
              >
                {/* Label */}
                <motion.div
                  className="flex items-center gap-4 mb-4 flex-wrap"
                  whileHover="hover"
                >
                  <motion.span
                    className="font-semibold text-base sm:text-lg md:text-xl whitespace-nowrap"
                    variants={{
                      hidden: { opacity: 0, y: 5 },
                      visible: { opacity: 1, y: 0 },
                      hover: { y: -2, scale: 1.05 },
                    }}
                  >
                    INVITATION
                  </motion.span>

                  <motion.div
                    className="h-1 w-10 bg-blue-500 origin-left"
                    variants={{
                      hidden: { scaleX: 0 },
                      visible: { scaleX: 1, transition: { duration: 0.4 } },
                      hover: {
                        scaleX: 1.25,
                        boxShadow: "0px 0px 10px rgba(2,123,255,0.8)",
                      },
                    }}
                  />
                </motion.div>

                {/* Heading */}
                <motion.div
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6"
                  whileHover={{ scale: 1.03 }}
                >
                  <h2>Build Something That</h2>
                  <h2 className="text-blue-500"> Outlasts the Cycle.</h2>
                </motion.div>

                {/* Subheading */}
                <motion.p
                  className="text-sm sm:text-base xl:text-lg"
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                >
                  If you're looking for another vendor, we're not the right fit.
                </motion.p>
              </motion.div>

              {/* RIGHT */}
              <motion.div
                className="flex-1 w-full lg:max-w-xl flex flex-col gap-4 lg:gap-12"
                variants={container}
              >
                {/* Description */}
                <motion.div
                  className="text-sm sm:text-base xl:text-lg leading-7 md:leading-8 space-y-5"
                  variants={item}
                >
                  <motion.p variants={item} whileHover={{ scale: 1.02 }}>
                    {" "}
                    If you’re looking for a strategic partner who understands
                    how decisions are made today—and how to build resilience
                    into your growth—we should talk.
                  </motion.p>
                  <motion.p variants={item} whileHover={{ scale: 1.02 }}>
                    {" "}
                    But to understand where your signals are strong, where
                    energy is leaking, and how to build something sustainable.
                  </motion.p>
                  <motion.p
                    variants={item}
                    whileHover={{ scale: 1.02 }}
                    className="italic text-blue-500 font-semibold"
                  >
                    Not for a pitch. Not for hype.
                  </motion.p>
                </motion.div>

                {/* Button */}
                <motion.div
                  className="relative w-full"
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                >
                  <CTAButton
                    variant="primary"
                    className="w-52 sm:w-56 py-2 justify-center"
                    size="sm"
                  >
                    Apply To Be Considered
                  </CTAButton>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
