"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import CTAButton from "@/components/ui/CTAButton";
import logo from "@/assets/logo.gif";
import ArrowRightUp from "@/components/icons/ArrowRightUp";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Markets", href: "/markets" },
  { label: "Insights", href: "/insights" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "About", href: "/about" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link href="/" className="inline-block">
            <Image
              src={logo}
              alt="Logo"
              priority
              className="h-10 w-fit object-contain"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 relative">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <motion.div
                key={item.href}
                className="relative"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <Link href={item.href} className="block">
                  <motion.span
                    layout
                    animate={
                      isActive
                        ? { y: [-2, -4, -2], scale: 1.15 }
                        : { y: 0, scale: 1 }
                    }
                    transition={
                      isActive
                        ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
                        : { type: "spring", stiffness: 300, damping: 18 }
                    }
                    className={`relative z-10 font-medium ${
                      isActive
                        ? "text-[#027BFF] text-xl font-semibold"
                        : "text-[#615F63] text-lg"
                    }`}
                  >
                    {item.label}
                  </motion.span>
                </Link>

                {isActive && (
                  <motion.span
                    layoutId="nav-glow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-x-0 -bottom-3 h-6 rounded-full bg-[#027BFF]/20 blur-xl"
                  />
                )}

                {!isActive && (
                  <motion.span
                    variants={{
                      rest: { scaleX: 0, opacity: 0 },
                      hover: { scaleX: 1, opacity: 1 },
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute left-0 -bottom-2 h-[2px] w-2/3 origin-left bg-[#027BFF]"
                  />
                )}

                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-2 h-[2px] w-2/3 bg-[#027BFF]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <motion.div
          className="hidden lg:flex"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <CTAButton size="sm" variant="primary">
            Contact Us
            <motion.span
              className="ml-2 flex h-8 w-8 translate-x-4 items-center justify-center rounded-full bg-white text-black"
              whileHover={{ rotate: 90 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowRightUp />
            </motion.span>
          </CTAButton>
        </motion.div>

        {/* Mobile Hamburger / Close Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden rounded-md p-2 text-gray-800 z-50"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute inset-x-0 top-full bg-white shadow-xl"
          >
            <div className="px-6 py-6 space-y-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-lg font-medium ${
                      pathname === item.href
                        ? "text-[#027BFF]"
                        : "text-[#615F63]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <motion.div
                className=""
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <CTAButton size="sm" variant="primary" className="w-full justify-center">
                  Contact Us
                  <motion.span
                    className="ml-2 flex h-8 w-8 translate-x-4 items-center justify-center rounded-full bg-white text-black"
                    whileHover={{ rotate: 90 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRightUp />
                  </motion.span>
                </CTAButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
