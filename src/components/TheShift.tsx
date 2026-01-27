"use client";

import CTAButton from "@/components/ui/CTAButton";

export default function TheShift() {
  return (
    <section className="relative w-full py-16 sm:py-20 bg-[#F9FBFE]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
          {/* LEFT COLUMN */}
          <div className="space-y-5">
            <div className="flex items-center gap-5">
              <h3 className="text-xl">THE SHIFT</h3>
              <div className="w-10 sm:w-14 h-0.5 bg-[#027BFF]" />
            </div>

            <div className="space-y-3">
              <h1 className="capitalize text-6xl font-semibold">
                The Market Didn’t Break.
              </h1>
              <h1 className="capitalize text-6xl font-semibold text-blue-500">
                It Evolved.
              </h1>
            </div>

            <div>
              <p>What used to work no longer works in isolation.</p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-base lg:text-lg text-black leading-relaxed space-y-5">
              <div className="">
                <p>Websites don’t convert without trust.</p>
                <p> Visibility doesn’t matter without validation.</p>
                <p>Traffic means nothing without timing.</p>
              </div>

              <p>
                Most businesses struggle not because they lack effort—but
                because their digital efforts are fragmented. Channels compete
                instead of reinforcing each other. Momentum breaks before
                decisions are ever made.
              </p>

              <p>
                We’ve spent years observing how real decisions unfold across
                platforms, moments, and market cycles. That perspective—earned
                through growth periods, downturns, and disruption—is why Lead
                Clickz has endured while others chased shortcuts.
              </p>

              <p className="italic font-semibold">
                We don't simplify the problem. We understand it.
              </p>
            </div>

            {/* CTA */}
            {/* <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start  gap-4">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
