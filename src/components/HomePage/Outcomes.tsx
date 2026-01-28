"use client";

import Image from "next/image";
import Background from "@/assets/backgrond.png";

export default function Outcomes() {
  const outcomes = [
    "Clear, consistent visibility",
    "Strong trust signals across channels",
    "Smarter spend with reduced volatility",
    "Predictable momentum—not guesswork",
    "Confidence in decisions, not reactions",
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden py-16">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top gradient */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white via-white/50 to-transparent"></div>
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {/* Background image */}
        <Image
          src={Background}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Main content container */}
      <div className="container relative z-10 mx-auto">
        <div className="flex items-start justify-between">
          {/* Left side */}
          <div className="flex-shrink-0 w-96">
            {/* Label with line */}
            <div className="flex items-center gap-4 mb-5">
              <span
                className="text-xl font-semibold"
                style={{ color: "#615F63" }}
              >
                OUTCOMES
              </span>
              <div className="w-10 h-0.5 bg-blue-500"></div>
            </div>

            {/* Main heading */}
            <h2
              className="text-5xl font-bold leading-tight mb-6 capitalize"
              style={{ color: "#2A2A2A" }}
            >
              Stability Is the <span className="text-blue-500">Advantage.</span>
            </h2>

            {/* Description */}
            <p className="text-lg leading-relaxed" style={{ color: "#615F63" }}>
              Success isn't about spikes. It's about confidence.
            </p>
          </div>

          {/* Right side */}
          <div className="flex-1 max-w-xl">
            {/* Intro text */}
            <p
              className="text-xl leading-relaxed mb-4"
              style={{ color: "#615F63" }}
            >
              Our clients experience:
            </p>

            {/* Outcomes list */}
            <div className="space-y-5">
              {outcomes.map((outcome, index) => (
                <div key={index}>
                  <p
                    className="text-2xl leading-relaxed font-normal"
                    style={{ color: "#433E3F" }}
                  >
                    {outcome}
                  </p>
                  <div
                    className="h-px mt-4"
                    style={{ backgroundColor: "#E8E5E7" }}
                  ></div>
                </div>
              ))}

              {/* Final message */}
              <p
                className="text-2xl leading-relaxed font-normal pt-2"
                style={{ color: "#027BFF" }}
              >
                We succeed because our clients succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
