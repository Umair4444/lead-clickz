"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CTAButton from "@/components/ui/CTAButton";
import thunder from "@/assets/thumder.png";
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
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between ">
        {/* Logo */}
 <div>
  <Link href="/" className="group inline-block">
    <Image
      src={logo}
      alt="Logo"
      priority
      className="
        h-10 w-fit object-contain
        transition-all duration-300 ease-out
        group-hover:scale-105
        group-hover:opacity-90
      "
    />
  </Link>
</div>


        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link key={item.href} href={item.href} className="relative text-lg font-medium">
                <span
                  className={`relative ${
                    isActive
                      ? "text-[#027BFF]"
                      : "text-[#615F63] hover:text-[#027BFF]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute left-1/4 -bottom-1 h-[2px] w-1/2 -translate-x-1/2 bg-[#027BFF]" />
                  )}
                </span>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex ">
          <CTAButton
            size="sm"
            variant="primary"
            className="text-[18px] justify-between"
          >
            Contact Us
            <span className="ml-2 flex h-8 w-8 translate-x-4 items-center justify-center rounded-full bg-white text-black">
              <ArrowRightUp />
            </span>
          </CTAButton>
        </div>
      </div>
    </nav>
  );
}
