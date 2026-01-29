"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroImage from "@/assets/hero-banner.png";
import avatar1 from "@/assets/avatar1.png";
import avatar2 from "@/assets/avatar2.jpg";
import avatar3 from "@/assets/avatar3.jpg";
import CTAButton from "@/components/ui/CTAButton";
import { useEffect, useState } from "react";

const avatars = [avatar1, avatar2, avatar3];

type Dot = {
  id: number;
  x: number;
  y: number;
  dx: number; // speed in x
  dy: number; // speed in y
  color: string;
};

export default function Hero() {
  const [dots, setDots] = useState<Dot[]>([]);

  // Random color generator
  const colors = ["#FF3C38", "#FFD93D", "#6BCB77", "#4D96FF", "#FF6AC1"];

  const addDots = (count = 5) => {
    const newDots: Dot[] = Array.from({ length: count }, () => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth * 0.8, // initial position
      y: Math.random() * window.innerHeight * 0.8,
      dx: (Math.random() - 0.5) * 2, // speed -2 to 2
      dy: (Math.random() - 0.5) * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setDots((prev) => [...prev, ...newDots]);
  };

  // Update positions continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) =>
        prev.map((dot) => {
          let newX = dot.x + dot.dx;
          let newY = dot.y + dot.dy;

          // bounce off the edges of hero section
          if (newX < 0 || newX > window.innerWidth * 0.9) dot.dx *= -1;
          if (newY < 0 || newY > window.innerHeight * 0.9) dot.dy *= -1;

          return { ...dot, x: newX, y: newY };
        }),
      );
    }, 20); // 50fps
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="w-full overflow-hidden relative">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* Left gradient */}
        <div className="absolute w-72 h-72 sm:w-96 sm:h-96 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-[#69B1FF] to-transparent blur-3xl opacity-70" />
        </div>

        {/* Right gradients */}
        <div className="absolute w-[600px] h-[600px] lg:w-[900px] lg:h-[900px] right-0 top-0 translate-x-1/3 -translate-y-1/4">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-[#027BFF] to-transparent blur-3xl opacity-60" />
        </div>

        {/* Frosted glass */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-2xl" />
      </div>

      {/* GRID LAYOUT */}
      <div className="mx-auto min-h-[88vh] grid grid-cols-1 lg:grid-cols-2 px-5 sm:px-8 lg:px-20 gap-10 lg:gap-14 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          className="flex flex-col justify-center text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-xs sm:text-sm uppercase tracking-widest text-gray-600 font-semibold">
              At Lead Clickz
            </span>
            <span className="h-0.5 w-8 bg-blue-500" />
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-semibold text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            We Don’t Chase
            <br />
            Attention.
          </motion.h1>

          <motion.div
            className="mx-auto lg:mx-0 mt-3 text-blue-500 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-semibold text-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            We Activate Decisions.
          </motion.div>

          <motion.p
            className="mt-8 max-w-xl mx-auto lg:mx-0 leading-relaxed text-base sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <span className="text-black">
              The way people choose has changed.
            </span>
            <br />
            <span className="text-black">
              We identify where interest is forming, where confidence is
              building, and action is most likely to occur.
            </span>
          </motion.p>

          <motion.p
            className="mt-6 text-black text-base sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
          >
            This Is How Modern Growth Happens.
            <br />
            Quietly. Precisely. Powerfully.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-row justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
          >
            <CTAButton
              variant="primary"
              className="w-52 justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Approach
            </CTAButton>

            <CTAButton
              variant="secondary"
              className="w-64 justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply To Be Considered
            </CTAButton>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="relative w-full min-h-[88vh] flex justify-center items-center "
          onClick={() => addDots(5)}
        >
          {/* Hero Image */}
          <motion.div
            className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] lg:translate-x-24 xl:translate-x-48"
            animate={{
              y: [0, -20, 0, 20, 0],
              x: [0, 10, 0, -10, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={HeroImage}
              alt="Hero banner"
              fill
              className="object-contain opacity-80 hover:opacity-100"
              priority
            />
          </motion.div>

          {/* Dots */}
          {dots.map((dot) => (
            <motion.div
              key={dot.id}
              className="absolute rounded-full"
              style={{
                width: 6,
                height: 6,
                backgroundColor: dot.color,
                top: dot.y,
                left: dot.x,
              }}
            />
          ))}

          {/* SOCIAL PROOF */}
          {/* <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:left-0 lg:translate-x-0 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="flex -space-x-3">
              {avatars.map((avatar, i) => (
                <motion.div
                  key={i}
                  className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full border-4 border-white overflow-hidden"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.6 + i * 0.2 }}
                >
                  <Image src={avatar} alt="" className="object-cover" />
                </motion.div>
              ))}
            </div>

            <p className="text-gray-700 flex flex-col text-sm sm:text-base">
              <span className="font-bold text-gray-900 text-xl sm:text-2xl">428k+</span>
              <span>User Active</span>
            </p>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
