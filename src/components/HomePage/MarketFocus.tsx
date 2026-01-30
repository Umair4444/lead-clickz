"use client";

import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Healthcare from "@/assets/health-care.png";
import HomeServices from "@/assets/home-services.png";
import ProfessionalServices from "@/assets/professional-services.png";
import EssentialLocalBusinesses from "@/assets/essential-local-services.png";

interface IndustryCard {
  id: number;
  title: string;
  tagline: string;
  icon: StaticImageData;
}

const industries: IndustryCard[] = [
  {
    id: 1,
    title: "Healthcare",
    tagline: "Where trust is non-negotiable.",
    icon: Healthcare,
  },
  {
    id: 2,
    title: "Home Services",
    tagline: "Chosen in moments that matter.",
    icon: HomeServices,
  },
  {
    id: 3,
    title: "Professional Services",
    tagline: "Decisions built on credibility.",
    icon: ProfessionalServices,
  },
  {
    id: 4,
    title: "Essential Local Businesses",
    tagline: "Visibility that sustains communities.",
    icon: EssentialLocalBusinesses,
  },
];

/* ===== Variants ===== */

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

export default function MarketFocus() {
  return (
    <section className="w-full bg-[#f8fafc] py-6 lg:pt-10">
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 items-start">
          {/* LEFT COLUMN */}
          <motion.div
            className="flex flex-col gap-5 w-full lg:w-1/2"
            variants={item}
          >
            {/* Label */}
            <motion.div
              className="flex items-center gap-4 -mb-2 cursor-default flex-wrap"
              whileHover="hover"
            >
              <motion.h3
                className="text-sm sm:text-base font-semibold text-light-gray tracking-wide"
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
                MARKET FOCUS
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
            <motion.div
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight capitalize text-foreground"
              whileHover={{ scale: 1.03 }}
            >
              <h2>
                Built for Businesses That
                <span className="text-blue-500"> Must Endure.</span>
              </h2>
            </motion.div>

            <motion.p
              whileHover={{ scale: 1.02 }}
              className="text-base sm:text-lg max-w-full lg:max-w-xl text-black/80"
            >
              We focus on industries where trust, visibility, and timing are
              non-negotiable—and where marketing must perform even when the
              economy tightens.
            </motion.p>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            className="flex flex-col gap-6 w-full lg:w-1/2"
            variants={container}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                variants={item}
                whileHover={{
                  y: -6,
                  boxShadow: "0px 12px 30px rgba(0,0,0,0.08)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="rounded-xl px-2 sm:px-4"
              >
                {/* Card */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pb-4 px-2 sm:px-4 items-start sm:items-center cursor-pointer">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={industry.icon}
                      alt={industry.title}
                      className="w-12 h-12 sm:w-14 sm:h-14 sm:translate-y-4"
                    />
                  </motion.div>

                  {/* Divider */}
                  <motion.div
                    className="hidden sm:block h-16 sm:h-20 w-px bg-black origin-top"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Text */}
                  <div className="flex flex-col gap-2 sm:gap-3 flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-black">
                      {industry.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg leading-7 text-black/80">
                      {industry.tagline}
                    </p>
                  </div>
                </div>

                {/* Bottom divider */}
                {index < industries.length - 1 && (
                  <motion.div
                    className="border-t border-black"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </motion.div>
            ))}

            {/* Footer Text */}
            <motion.p
              className="text-sm sm:text-base lg:text-lg font-medium leading-7 italic text-blue-500"
              variants={item}
              whileHover={{ scale: 1.03 }}
            >
              These are markets that don't disappear in downturns. And neither
              do we.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
