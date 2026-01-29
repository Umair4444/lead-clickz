"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroImage from "@/assets/hero-banner.png";
import { useEffect, useState } from "react";
import CTAButton from "@/components/ui/CTAButton";

type Dot = {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  color: string;
};

export default function Hero() {
  const [dots, setDots] = useState<Dot[]>([]);
  const colors = ["#FF3C38", "#FFD93D", "#6BCB77", "#4D96FF", "#FF6AC1"];

  const addDots = (count = 5) => {
    const newDots: Dot[] = Array.from({ length: count }, () => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth * 0.8,
      y: Math.random() * window.innerHeight * 0.8,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setDots((prev) => [...prev, ...newDots]);
  };

  // Automatically add dots every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => addDots(5), 2000);
    return () => clearInterval(interval);
  }, []);

  // Update dot positions continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) =>
        prev.map((dot) => {
          let newX = dot.x + dot.dx;
          let newY = dot.y + dot.dy;

          // bounce inside the viewport
          if (newX < 0 || newX > window.innerWidth * 0.9) dot.dx *= -1;
          if (newY < 0 || newY > window.innerHeight * 0.9) dot.dy *= -1;

          return { ...dot, x: newX, y: newY };
        }),
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full overflow-hidden relative">
      {/* HERO GRID */}
      <div className="mx-auto min-h-[88vh] grid grid-cols-1 lg:grid-cols-2 px-5 sm:px-8 lg:px-20 gap-10 lg:gap-14 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          className="flex flex-col justify-center text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Subheading */}
   <motion.div
  className="flex items-center justify-center lg:justify-start gap-3 mb-6 cursor-default"
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
  whileHover="hover"
>
  {/* TEXT */}
  <motion.span
    className="text-xs sm:text-sm uppercase tracking-widest text-gray-600 font-semibold"
    variants={{
      hover: {
        y: -2,
        color: "#111827",
        transition: { type: "spring", stiffness: 300, damping: 20 },
      },
    }}
  >
    At Lead Clickz
  </motion.span>

  {/* LINE */}
  <motion.span
    className="h-0.5 w-8 bg-blue-500 origin-left"
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

          {/* Main Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-semibold text-black cursor-pointer"
            whileHover={{ scale: 1.03, color: "" }}
          >
            We Don’t Chase
            <br />
            Attention.
          </motion.h1>
          {/* Secondary Heading */}
          <motion.div
            className="mx-auto lg:mx-0 mt-3 text-blue-500 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-semibold text-nowrap cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, color: "#2563EB" }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              type: "spring",
              stiffness: 120,
            }}
          >
            We Activate Decisions.
          </motion.div>
          {/* Paragraphs */}
          <motion.p
            className="mt-8 max-w-xl mx-auto lg:mx-0 leading-relaxed text-base sm:text-lg cursor-pointer"
            whileHover={{ scale: 1.02, color: "#111827" }}
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
            className="mt-6 text-black text-base sm:text-lg cursor-pointer"
            whileHover={{ scale: 1.02, color: "#111827" }}
          >
            This Is How Modern Growth Happens.
            <br />
            Quietly. Precisely. Powerfully.
          </motion.p>
          {/* Buttons */}
          <motion.div
            className="mt-10 flex flex-row justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
          >
            <CTAButton
              variant="primary"
              className="w-52 justify-center"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Approach
            </CTAButton>

            <CTAButton
              variant="secondary"
              className="w-64 justify-center"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply To Be Considered
            </CTAButton>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="relative w-full min-h-[88vh] flex justify-center items-center"
          onMouseEnter={() => addDots(5)} // spawn dots on hover
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

          {/* Moving Dots */}
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
        </motion.div>
      </div>
    </section>
  );
}
