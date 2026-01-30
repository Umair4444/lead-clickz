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
    <footer className="relative pt-12 md:pt-24 pb-4 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={Background || "/placeholder.svg"}
          alt="Background"
          className="absolute inset-0 w-full h-full object-fill opacity-40"
        />
      </div>

      {/* Social Icons Container with Glow - Desktop Only */}
      <motion.div
        className="hidden lg:flex absolute inset-0 top-0 left-0 flex-col"
        initial={{ opacity: 0.9 }}
        whileHover={{ opacity: 1 }}
      >
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
              className="text-gray-700 hover:text-blue-600 cursor-pointer"
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

      {/* Social Icons – Mobile Only (Top Left) */}
      <motion.div
        className="lg:hidden absolute top-0 left-0 z-20"
        initial={{ opacity: 0.9 }}
        whileHover={{ opacity: 1 }}
      >
        <motion.div
          className="flex items-center gap-1 bg-white/80 backdrop-blur pl-2 pr-4 py-2 rounded-br-full shadow-xl relative"
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
                boxShadow: "0 0 18px rgba(59,130,246,0.6)",
              }}
              className="text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              <Icon className="w-5 h-5" />
            </MotionButton>
          ))}

          {/* Ambient Glow */}
          <motion.div
            className="absolute inset-0 rounded-br-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.25), transparent 70%)",
              filter: "blur(18px)",
            }}
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </motion.div>

      {/* Go To Top Button - Desktop positioning */}
      <MotionButton
        variant="ghost"
        {...hoverLift}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
    hidden md:flex absolute flex items-center gap-3 right-0 top-0
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
        whileHover={{ y: 2, boxShadow: "0 0 40px rgba(59,130,246,0.6)" }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        {/* Text */}
        <span className="relative z-10 text-lg transition-colors group-hover:text-blue-600 cursor-pointer">
          Back to the top
        </span>

        {/* Thunder Icon with proper glowing loop */}
        <motion.div
          className="w-7 relative z-10 group-hover:-rotate-45 duration-1000 cursor-pointer"
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
          <Image src={ThunderIcon || "/placeholder.svg"} alt="Thunder Logo" />
        </motion.div>
      </MotionButton>

      <div className="relative z-10 container mx-auto px-3 md:px-2 flex flex-col gap-8 md:gap-12 lg:gap-16 lg:pl-16">
        {/* Mobile & Tablet Layout: Brand + CTA side-by-side, Links below */}
        <div className="lg:hidden flex flex-col gap-8">
          {/* Top row: Brand + CTA */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-12 px-6">
            {/* Brand + Description */}
            <div className="flex flex-col gap-4 max-w-xs mt-8 sm:mt-6 md:mt-0">
              <motion.div
                className="w-40 h-auto  cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95, rotate: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
              >
                <Image src={Logo} alt="Logo" className="w-full h-auto" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="text-gray-900 text-sm md:text-base leading-6 md:leading-7"
              >
                Lead Clickz exists to help businesses compete, adapt, and
                endure, especially when the market gets tight.
              </motion.p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col gap-4 max-w-sm">
              <motion.h2
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ letterSpacing: "0.04em" }}
                transition={{ duration: 0.25 }}
                className="text-gray-500 hover:text-black font-semibold hover:font-bold text-base md:text-lg"
              >
                Get Started
              </motion.h2>

              <div className="text-xs md:text-sm space-y-3 mb-4">
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -1 }}
                >
                  We cultivate marketing ecosystems built to endure, not execute
                  isolated tactics.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -1 }}
                >
                  To ensure fit, we don't offer open contact.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -1 }}
                >
                  All partnerships begin with an application.
                </motion.p>
              </div>

              <CTAButton
                variant="primary"
                className="w-full md:w-56 py-2 justify-center"
                size="sm"
              >
                Apply To Be Considered
              </CTAButton>
            </div>
          </div>

          {/* Links Section - Below Brand on md+ screens */}
          <div className="flex item-center justify-evenly gap-10 md:gap-16 px-6">
            {/* About Section */}
            <div className="flex flex-col gap-2">
              <motion.h2
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ letterSpacing: "0.04em" }}
                transition={{ duration: 0.25 }}
                className="text-gray-500 font-semibold text-sm md:text-base underline decoration-2 underline-offset-2 hover:text-black"
              >
                Info
              </motion.h2>

              {["About", "FAQs", "Ecosystem", "Blogs", "Contact Us"].map(
                (item) => (
                  <motion.p
                    key={item}
                    initial={{ opacity: 0, y: 4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-gray-900 hover:text-blue-600 cursor-pointer text-sm md:text-base"
                  >
                    {item}
                  </motion.p>
                ),
              )}
            </div>

            {/* Explore Section */}
            <div className="flex flex-col gap-2">
              <motion.h2
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ letterSpacing: "0.04em" }}
                transition={{ duration: 0.25 }}
                className="text-gray-500 font-semibold text-sm md:text-base underline decoration-2 underline-offset-2 hover:text-black"
              >
                Explore
              </motion.h2>

              {["Services", "Markets", "Insights", "Pricing"].map((item) => (
                <motion.p
                  key={item}
                  initial={{ opacity: 0, y: 4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gray-900 hover:text-blue-600 cursor-pointer text-sm md:text-base"
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout (lg+): Original layout with Brand, Links, and CTA in one row */}
        <div className="hidden lg:flex justify-between gap-16">
          {/* Brand + Description */}
          <div className="flex flex-col gap-4 max-w-xs">
            <motion.div
              className="w-48 h-auto cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95, rotate: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <Image src={Logo} alt="Logo" className="w-full h-auto" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="text-gray-900 text-base leading-7"
            >
              Lead Clickz exists to help businesses compete, adapt, and endure,
              especially when the market gets tight.
            </motion.p>
          </div>

          {/* Links */}
          <div className="flex gap-20">
            {/* About Section */}
            <div className="flex flex-col gap-2">
              <motion.h2
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ letterSpacing: "0.04em" }}
                transition={{ duration: 0.25 }}
                className="text-gray-500 font-semibold hover:font-bold hover:scale-105 underline decoration-2 underline-offset-2 hover:text-black"
              >
                Info
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-gray-900 hover:text-blue-600 cursor-pointer"
              >
                About
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-gray-900 hover:text-blue-600 cursor-pointer"
              >
                FAQs
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-gray-900 hover:text-blue-600 cursor-pointer"
              >
                Ecosystem
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-gray-900 hover:text-blue-600 cursor-pointer"
              >
                Blogs
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-gray-900 hover:text-blue-600 cursor-pointer"
              >
                Contact Us
              </motion.p>
            </div>

            {/* Explore Section */}
            <div className="flex flex-col gap-2">
              <motion.h2
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ letterSpacing: "0.04em" }}
                transition={{ duration: 0.25 }}
                className="text-gray-500 font-semibold hover:font-bold hover:scale-105 underline decoration-2 underline-offset-2 hover:text-black"
              >
                Explore
              </motion.h2>

              {["Services", "Markets", "Insights", "Pricing"].map((item) => (
                <motion.p
                  key={item}
                  initial={{ opacity: 0, y: 4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gray-900 hover:text-blue-600 cursor-pointer"
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col gap-4 max-w-sm">
            <motion.h2
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ letterSpacing: "0.04em", scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="text-gray-500 text-lg font-semibold hover:font-bold underline decoration-2 underline-offset-2 hover:text-black"
            >
              Get Started
            </motion.h2>

            <div className="text-sm space-y-3 mb-4">
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -1 }}
              >
                We cultivate marketing ecosystems built to endure, not execute
                isolated tactics.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -1 }}
              >
                To ensure fit, we don't offer open contact.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -1 }}
              >
                All partnerships begin with an application.
              </motion.p>
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
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center md:items-center border-t border-gray-400 pt-4">
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -1 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            className="text-gray-700 text-xs md:text-sm text-center md:text-left"
          >
            © MadeByShape Ltd 2025.
          </motion.p>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 text-gray-700 text-xs md:text-sm">
            <motion.span
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -1 }}
            >
              Web Design Manchester
            </motion.span>

            <span>|</span>

            <motion.span
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -1 }}
            >
              Privacy Policy
            </motion.span>

            <span>|</span>

            <motion.span
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -1 }}
            >
              All Rights Reserved
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
}
