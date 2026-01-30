"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import Visibility from "@/assets/Visibility.png";
import Trust from "@/assets/Trust.png";
import Validation from "@/assets/Validation.png";
import SphereIcon from "@/assets/sphere-web.png";

interface SignalCard {
  title: string;
  description: string;
  icon: StaticImageData;
}

const SIGNALS: SignalCard[] = [
  {
    title: "Visibility",
    description: "Being present where intent forms",
    icon: Visibility,
  },
  {
    title: "Trust",
    description: "Built through consistency and credibility",
    icon: Trust,
  },
  {
    title: "Validation",
    description: "Proof that removes hesitation",
    icon: Validation,
  },
];

export default function SparkSignals() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? SIGNALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === SIGNALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16">
          <div className="flex flex-col gap-6 lg:flex-1">
            <div className="flex flex-col gap-1.5">
              <h2 className="text-base sm:text-lg font-semibold text-light-gray">
                SPARK SIGNALS
              </h2>
              <div className="w-10 sm:w-14 h-0.5 bg-[#027BFF]" />
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-dark-gray leading-snug sm:leading-tight lg:leading-tight">
              Growth Starts
              <br />
              Before the Click.
            </h1>
          </div>
          <p className="text-base sm:text-lg text-light-gray leading-relaxed max-w-md lg:max-w-sm">
            Every digital interaction sends a signal. Every signal influences a
            decision. We don't approach marketing as a list of services. We
            focus on the forces that shape outcomes and the moments where
            momentum is created.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Center Cards */}
          <div className="flex-1">
            {/* Navigation Arrows */}
            <div className="flex gap-4 justify-end mb-6">
              <button
                onClick={handlePrev}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#edf0f4] flex items-center justify-center group hover:bg-blue-500/90 transition-colors"
              >
                <LuMoveLeft className="text-xl sm:text-2xl text-black group-hover:text-white" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#edf0f4] flex items-center justify-center group hover:bg-blue-500/90 transition-colors"
              >
                <LuMoveRight className="text-xl sm:text-2xl text-black group-hover:text-white" />
              </button>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              {SIGNALS.map((signal, index) => (
                <div
                  key={index}
                  className={`flex-1 transition-all duration-300 ${
                    index === activeIndex
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-80"
                  }`}
                >
                  <div className="bg-[#f5f7fa] rounded-3xl p-6 sm:p-8 lg:p-9 h-full flex md:flex-col md:justify-between gap-6 md:gap-10 lg:gap-12">
                    <div className="flex items-center justify-start">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
                        <Image
                          src={signal.icon}
                          alt={signal.title}
                          width={30}
                          height={30}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 sm:gap-5">
                      <h3 className="text-xl sm:text-2xl lg:text-4xl font-semibold">
                        {signal.title}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-light-gray">
                        {signal.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Quote Section */}
        <div className="mt-12 sm:mt-16 bg-white/10 backdrop-blur-sm border border-black/70 rounded-[30px] sm:rounded-[40px] px-6 sm:px-10 py-6 flex flex-col md:flex-row items-center gap-6 md:gap-16">
          <Image src={SphereIcon} alt="Sphere Icon" width={64} height={64} />
          <p className="text-lg sm:text-2xl italic leading-snug text-center sm:text-left">
            When these signals move together, growth becomes predictable—not
            reactive.
          </p>
        </div>
      </div>
    </section>
  );
}
