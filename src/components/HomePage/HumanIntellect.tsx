"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FingerSparks from "@/components/Framer-motion/FingerSparks";
import ZeusThunderBolt from "@/components/Framer-motion/ZeusThunderBolt";

import Humanhand from "@/assets/human-hand.png";
import Robothand from "@/assets/robot-hand.png";
import Moon from "@/assets/moon.png";

const HumanIntellect = () => {
  return (
    <motion.section
      className="relative group min-h-screen overflow-hidden pt-14"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      {/* Moon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 group-hover:opacity-80 transition-opacity duration-500">
        <Image src={Moon} alt="Moon" width={700} height={700} />
      </div>

      {/* ROBOT HAND (LEFT) */}
      <motion.div
        variants={{
          rest: { x: "-1%" },
          hover: { x: "1%" }, // fine-tuned so fingertip hits center
        }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20"
      >
        <Image
          src={Robothand}
          alt="Robot Hand"
          width={760}
          height={760}
          className="drop-shadow-[0_0_14px_rgba(96,165,250,0.4)]"
        />
      </motion.div>

      {/* HUMAN HAND (RIGHT) */}
      <motion.div
        variants={{
          rest: { x: "1%" },
          hover: { x: "-1%" }, // symmetric alignment
        }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20"
      >
        <Image
          src={Humanhand}
          alt="Human Hand"
          width={760}
          height={760}
          className=" drop-shadow-[0_0_14px_rgba(96,165,250,0.4)]"
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
        <div className="absolute -top-8 grid gap-4 md:gap-20 md:grid-cols-2">
          {/* Left column */}
          <div className="space-y-2">
            {/* Label */}
            <div className="flex items-center gap-3">
              <h3 className="text-sm sm:text-base font-semibold text-light-gray tracking-wide">
                BRAND EVOLUTION
              </h3>
              <span className="h-0.5 w-8 bg-blue-500" />
            </div>

            {/* Headline */}
            <div className="text-3xl sm:text-3xl lg:text-4xl font-semibold leading-tight capitalize text-foreground ">
              <h2 className="">Technology Should Amplify Judgment. </h2>
              <h2 className="text-blue-500">Not Replace It.</h2>
            </div>
          </div>

          {/* Right column */}
          {/* Description */}
          <div className="mt-2 space-y-1 self-start text-left max-w-xl">
            <p className="">
              Lead Clickz is human-led—supported by intelligent systems that
              help us detect patterns early, understand behavioral shifts,
              reduce wasted effort, and make smarter decisions faster.
            </p>
            <div>
              <p className="mt-3">Technology supports the work.</p>
              <p>People drive it.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 left-20 max-w-sm ">
        <div className="relative w-32 h-1 -translate-y-2 overflow-hidden">
          {/* Base subtle line */}
          <div className="absolute inset-0 bg-blue-500/15" />

          {/* Soft center glow (always smooth) */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm animate-eye-glow" />

          {/* Smooth beam expansion */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-eye-beam-smooth" />
        </div>
        <p>
          That balance keeps our strategies grounded, adaptive, and effective no
          matter how the market changes
        </p>
      </div>
    </motion.section>
  );
};

export default HumanIntellect;
