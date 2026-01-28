"use client";

import Image, { StaticImageData } from "next/image";
import Healthcare from "@/assets/health-care.png";
import HomeServices from "@/assets/home-services.png";
import ProfessionalServices from "@/assets/professional-services.png";
import EssentialLocalBusinesses from "@/assets/essential-local-services.png";

interface IndustryCard {
  id: number;
  title: string;
  tagline: string;
  icon: StaticImageData;
}

const industries: IndustryCard[] = [
  {
    id: 1,
    title: "Healthcare",
    tagline: "Where trust is non-negotiable.",
    icon: Healthcare,
  },
  {
    id: 2,
    title: "Home Services",
    tagline: "Chosen in moments that matter.",
    icon: HomeServices,
  },
  {
    id: 3,
    title: "Professional Services",
    tagline: "Decisions built on credibility.",
    icon: ProfessionalServices,
  },
  {
    id: 4,
    title: "Essential Local Businesses",
    tagline: "Visibility that sustains communities.",
    icon: EssentialLocalBusinesses,
  },
];

export default function MarketFocus() {
  return (
    <section className="w-full bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-20">
        {/* Main Content */}
        <div className="flex gap-32 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-5 flex-1">
            {/* Market Focus Label */}
            <div className="flex items-center gap-4">
              <span className="text-xl font-semibold">MARKET FOCUS</span>
              <div className="w-10 h-0.5 bg-blue-500"></div>
            </div>
            {/* Main Heading */}
            <h2 className="text-5xl font-semibold leading-tight max-w-lg">
              Built for Businesses That{" "}
              <span className="text-blue-500">Must Endure.</span>
            </h2>

            {/* Description */}
            <p className="text-base max-w-xl" style={{ color: "" }}>
              We focus on industries where trust, visibility, and timing are
              non-negotiable—and where marketing must perform even when the
              economy tightens.
            </p>
          </div>

          {/* Right Column - Industry Cards */}
          <div className="flex flex-col gap-4 flex-1">
            {industries.map((industry, index) => (
              <div key={industry.id}>
                {/* Card Content */}
                <div className="flex gap-8 pb-4 items-start">
                  {/* Icon */}
                  <div className="flex-shrink-0"></div>
                  <Image src={industry.icon} alt={industry.title} />

                  {/* Divider */}
                  <div className="h-20 w-px bg-black"></div>
                  {/* Text Content */}
                  <div className="flex flex-col gap-3 flex-1">
                    <h3 className="text-2xl font-medium text-black">
                      {industry.title}
                    </h3>
                    <p className="text-lg leading-7 text-black">
                      {industry.tagline}
                    </p>
                  </div>
                </div>

                {/* Bottom divider (except for last item) */}
                {index < industries.length - 1 && (
                  <div className="border-t border-black"></div>
                )}
              </div>
            ))}

            {/* Bottom text */}
            <p className="text-lg font-medium leading-7 mt-4">
              These are markets that don't disappear in downturns. And neither
              do we.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
