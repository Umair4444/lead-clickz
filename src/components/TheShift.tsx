"use client";

import CTAButton from "@/components/ui/CTAButton";

export default function TheShift() {
  return (
    <section className="relative w-full py-16 sm:py-20 bg-[#F9FBFE]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
          {/* LEFT COLUMN */}
          <div className="space-y-16 sm:space-y-20">
            <div className="space-y-6 sm:space-y-8">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#615F63]">
                The Market Didn't Break.
              </p>

              <div className="flex items-center gap-4 lg:translate-x-28 mb-10 lg:mb-36">
                <div className="w-10 sm:w-14 h-0.5 bg-[#027BFF]" />
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#433E3F]">
                  It Evolved
                </h3>
              </div>

              <p className="text-base sm:text-lg text-[#615F63]">
                What used to work no longer works in isolation.
              </p>

              <div className="w-10 sm:w-14 h-0.5 bg-[#027BFF]" />

              <p className="text-base sm:text-lg lg:text-xl text-[#433E3F] space-y-1">
                <span className="block">
                  Websites don't convert without trust.
                </span>
                <span className="block">
                  Visibility doesn't matter without validation.
                </span>
                <span className="block">
                  Traffic means nothing without timing.
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-base sm:text-lg lg:text-xl text-[#615F63] leading-relaxed space-y-5">
              <p>
                Most businesses struggle not because they lack effort—but
                because their digital efforts are fragmented. Channels compete
                instead of reinforcing each other.
              </p>

              <p>
                We've spent years observing how real decisions unfold across
                platforms, moments, and market cycles.
              </p>

              <p className="italic text-[#433E3F]">
                We don't simplify the problem. We understand it.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start  gap-4">
              <CTAButton
                variant="primary"
                size="sm"
                className="sm:px-10 justify-center"
              >
                Request Consideration
              </CTAButton>

              <CTAButton
                variant="secondary"
                size="sm"
                className="sm:px-10 justify-center"
              >
                How We Think
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
