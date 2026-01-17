import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import thunder from "@/assets/thumder.png";
import ArrowRightUp from "@/components/icons/ArrowRightUp";

export default function Navigation() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between ">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center font-bold text-3xl select-none"
        >
          <span className="text-[#027BFF]">leads</span>
          <span>cl</span>

          <Image
            src={thunder}
            alt="Thunder icon"
            className="mx-1 w-2 h-8"
            priority
          />

          <span>ckz</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Markets", href: "/markets" },
            { label: "Insights", href: "/insights" },
            { label: "Ecosystem", href: "/ecosystem" },
            { label: "About", href: "/about" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-lg font-medium text-[#615F63] hover:text-[#027BFF] transition-colors"
            >
              {item.label}
            </Link>
          ))}
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
