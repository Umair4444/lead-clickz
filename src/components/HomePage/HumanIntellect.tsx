"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import FingerSparks from "@/components/Framer-motion/FingerSparks";
import ZeusThunderBolt from "@/components/Framer-motion/ZeusThunderBolt";

import Humanhand from "@/assets/human-hand.png";
import Robothand from "@/assets/robot-hand.png";
import Moon from "@/assets/moon.png";
import Sphere from "@/assets/bg-sphere.png";
import AnimatedConnector from "../Framer-motion/AnimatedConnector";

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

const HumanIntellect = () => {
  return (
    <motion.section
      className="relative bg-[#f5f5f5] group h-screen overflow-hidden pt-20"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-0 translate-x-32 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]">
          <Image
            src={Sphere}
            alt="Decorative Sphere"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      {/* Moon */}
      <div className="absolute inset-0 top-28 flex items-center justify-center pointer-events-none opacity-30 group-hover:opacity-80 transition-opacity duration-500">
        <Image src={Moon} alt="Moon" width={700} height={700} />
      </div>

      {/* ROBOT HAND (LEFT) */}
      <motion.div
        variants={{
          rest: { x: "-1%" },
          hover: { x: "1%" }, // fine-tuned so fingertip hits center
        }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
        className="absolute left-0 top-2/5 xl:top-1/2 -translate-x-32 xl:-translate-y-1/2 z-20"
      >
        <Image
          src={Robothand}
          alt="Robot Hand"
          className="w-[400px] lg:w-[900px] drop-shadow-[0_0_14px_rgba(96,165,250,0.4)]"
        />
      </motion.div>

      {/* HUMAN HAND (RIGHT) */}
      <motion.div
        variants={{
          rest: { x: "1%" },
          hover: { x: "-1%" }, // symmetric alignment
        }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
        className="absolute right-0 top-2/5 xl:top-1/2 translate-x-36  xl:-translate-y-1/2 z-20"
      >
        <Image
          src={Humanhand}
          alt="Human Hand"
          className="w-[410px] lg:w-[900px] drop-shadow-[0_0_14px_rgba(96,165,250,0.4)]"
        />
      </motion.div>

      {/* CONTACT POINT (FINGERTIPS) */}
      <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {/* ZEUS BOLT */}
        <motion.div
          variants={{
            rest: { opacity: 0, scale: 0.5 },
            hover: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.06 }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
        >
          <ZeusThunderBolt />
        </motion.div>

        {/* ATOMIC SPARKS */}
        <motion.div
          variants={{
            rest: { opacity: 0, scale: 0.4 },
            hover: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.1 }}
          className="absolute -translate-x-1/2"
        >
          <FingerSparks />
        </motion.div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-40 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="absolute -top-8 grid gap-4 md:gap-20 lg:grid-cols-2">
          {/* Left column */}
          <motion.div className="space-y-6" variants={itemVariants}>
            {/* Label */}
            <motion.div
              className="flex items-center gap-4 mb-2 cursor-default"
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
                HUMAN + INTELLIGENCE{" "}
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
              className="text-3xl sm:text-3xl lg:text-4xl font-semibold leading-tight capitalize text-foreground "
              // variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <h2 className=""> Technology Should Amplify Judgment.</h2>
              <h2 className="text-blue-500">Not Replace It.</h2>
            </motion.div>
          </motion.div>

          {/* Right column */}
          {/* Description */}
          <motion.div
            className="space-y-2 text-base md:text-lg px-2"
            variants={itemVariants}
          >
            <motion.p
              className="leading-relaxed max-w-full md:max-w-xl"
              whileHover={{ scale: 1.02 }}
            >
              Lead Clickz is human-led—supported by intelligent systems that
              help us detect patterns early, understand behavioral shifts,
              reduce wasted effort, and make smarter decisions faster.
            </motion.p>
            <motion.div className="leading-relaxed max-w-full md:max-w-xl">
              <motion.p className="" whileHover={{ scale: 1.02 }}>
                Technology supports the work.
              </motion.p>
              <motion.p className="" whileHover={{ scale: 1.02 }}>
                People drive it.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-24 left-2 sm:left-6 lg:left-20 max-w-sm ">
        <div className="relative w-52 h-1 -translate-y-2  -translate-x-6 ">
          <AnimatedConnector />
        </div>

        <motion.p
          className="flex flex-col gap-4 text-sm lg:text-base"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          That balance keeps our strategies grounded, adaptive, and effective no
          matter how the market changes
        </motion.p>
      </div>
    </motion.section>
  );
};

export default HumanIntellect;
