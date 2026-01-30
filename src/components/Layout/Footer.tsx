"use client";

import Image from "next/image";
import CTAButton from "../ui/CTAButton";
import { MotionButton, hoverLift } from "../ui/motion-button";
import Background from "@/assets/footer-background.png";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "@/assets/logo.gif";
import ThunderIcon from "@/assets/thunder-logo.svg";
import { motion } from "framer-motion";

const socialIcons = [
  { icon: FaTwitter },
  { icon: FaFacebookF },
  { icon: FaInstagram },
  { icon: SiTiktok },
  { icon: FaXTwitter },
];

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-4 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={Background}
          alt="Background"
          className="absolute inset-0 w-full h-full object-fill opacity-40"
        />{" "}
      </div>

      <motion.div
        className="absolute inset-0 top-0 left-0 flex flex-col"
        initial={{ opacity: 0.9 }}
        whileHover={{ opacity: 1 }}
      >
        {/* Social Icons Container with Glow */}
        <motion.div
          className="flex flex-col bg-white/80 backdrop-blur w-14 py-6 px-2 rounded-r-full shadow-xl relative"
          initial={{ boxShadow: "0 0 15px rgba(59,130,246,0.3)" }}
          whileHover={{
            boxShadow:
              "0 0 25px rgba(59,130,246,0.6), 0 0 40px rgba(59,130,246,0.4)",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {socialIcons.map(({ icon: Icon }, i) => (
            <MotionButton
              key={i}
              variant="ghost"
              size="icon"
              {...hoverLift}
              whileHover={{
                rotate: 6,
                boxShadow: "0 0 20px rgba(59,130,246,0.6)",
              }}
              className="text-gray-700 hover:text-blue-600"
            >
              <Icon />
            </MotionButton>
          ))}

          {/* Optional: subtle ambient glow layer */}
          <motion.div
            className="absolute inset-0 rounded-r-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.25), transparent 70%)",
              filter: "blur(20px)",
            }}
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </motion.div>

      {/* Go To Top Button */}
      <MotionButton
        variant="ghost"
        {...hoverLift}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
    absolute flex items-center gap-3 right-0 top-0
    px-4 py-6
    rounded-bl-[30px]
    bg-white/70 backdrop-blur-xl
    border border-white/40
    text-gray-800
    group
    overflow-visible
  "
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        // whileHover={{ y: 2, boxShadow: "0 0 20px rgba(59,130,246,0.6)" }}
        whileHover={{ y: 2, boxShadow: "0 0 40px rgba(59,130,246,0.6)" }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        {/* Text */}
        <span className="relative z-10 text-lg transition-colors group-hover:text-blue-600">
          Back to the top
        </span>

        {/* Thunder Icon with proper glowing loop */}
        <motion.div
          className="w-7 relative z-10 group-hover:-rotate-45 duration-1000"
          initial={{ rotate: 30 }}
          whileHover={{ rotate: -24, y: -2 }}
          animate={{
            filter: [
              "drop-shadow(0 0 0px #3b82f6)",
              "drop-shadow(0 0 12px #3b82f6)",
              "drop-shadow(0 0 0px #3b82f6)",
            ],
            rotate: [30, 15, 30],
          }}
          transition={{
            rotate: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            filter: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          }}
        >
          <Image src={ThunderIcon} alt="Thunder Logo" />
        </motion.div>
      </MotionButton>

      <div className="relative z-10 container mx-auto px-2 flex flex-col gap-16">
        {/* Top Section: Brand + Links + CTA */}
        <div className="flex flex-col xl:flex-row justify-between gap-16">
          {/* Brand + Description */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="w-40">
              <Image src={Logo} alt="footer Logo" className="object-contain" />
            </div>
            <p className="text-gray-900 text-base leading-7">
              Lead Clickz exists to help businesses compete, adapt, and endure,
              especially when the market gets tight.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-20">
            {/* About Section */}
            <div className="flex flex-col gap-2">
              <h2 className="text-gray-500 font-semibold">Info</h2>
              <p className="text-gray-900 hover:text-blue-600 cursor-pointer">
                About
              </p>
              <p className="text-gray-900 hover:text-blue-600 cursor-pointer">
                FAQs
              </p>
              <p className="text-gray-900 hover:text-blue-600 cursor-pointer">
                Ecosystem
              </p>
              <p className="text-gray-900 hover:text-blue-600 cursor-pointer">
                Blogs
              </p>
              <p className="text-gray-900 hover:text-blue-600 cursor-pointer">
                Contact Us
              </p>
            </div>

            {/* Explore Section */}
            <div className="flex flex-col gap-2">
              <h2 className="text-gray-500 font-semibold">Explore</h2>
              <p className="text-gray-900 hover:text-blue-600 cursor-pointer">
                Services
              </p>
              <p className="text-gray-900 hover:text-blue-600 cursor-pointer">
                Markets
              </p>
              <p className="text-gray-900 hover:text-blue-600 cursor-pointer">
                Insights
              </p>
              <p className="text-gray-900 hover:text-blue-600 cursor-pointer">
                Pricing
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col gap-4 max-w-sm">
            <h2 className="text-gray-500 font-semibold text-lg">Get Started</h2>
            <div className="text-sm space-y-3 mb-4">
              <p className="">
                We cultivate marketing ecosystems built to endure, not execute
                isolated tactics.
              </p>
              <p>To ensure fit, we don’t offer open contact.</p>
              <p>All partnerships begin with an application.</p>
            </div>
            <CTAButton
              variant="primary"
              className="w-56 py-2 justify-center"
              size="sm"
            >
              Apply To Be Considered
            </CTAButton>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-400 pt-4 gap-4">
          <p className="text-gray-700 text-sm">© MadeByShape Ltd 2025.</p>
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <span>Web Design Manchester</span>
            <span>|</span>
            <span>Privacy Policy</span>
            <span>|</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
