"use client";

import { motion } from "framer-motion";
import { Button } from "./button";

export const MotionButton = motion(Button);

export const hoverLift = {
  whileHover: {
    y: -2,
    scale: 1.04,
  },
  whileTap: {
    scale: 0.96,
  },
  transition: {
    type: "spring" as const,
    stiffness: 300,
    damping: 18,
  },
};

const socialHover = {
  hover: {
    y: -4,
    scale: 1.12,
    rotate: -3,
    transition: { type: "spring", stiffness: 300 },
  },
};

const glow =
  "before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r before:from-blue-500/40 before:to-purple-500/40 before:opacity-0 hover:before:opacity-100 before:blur-md before:transition-opacity";
