"use client";

export default function TheSystem() {
  return (
    <section className="relative w-full py-16 sm:py-20 bg-[#F9FBFE]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
          {/* LEFT COLUMN */}
          <div className="space-y-5">
            <div className="flex items-center gap-5">
              <h3 className="text-xl">THE SYSTEM</h3>
              <div className="w-10 sm:w-14 h-0.5 bg-[#027BFF]" />
            </div>

            <div className="space-y-3">
              <h1 className="capitalize text-6xl font-semibold">
                Nothing Powerful
              </h1>
              <h1 className="capitalize text-6xl font-semibold text-blue-500">
                Operates Alone.
              </h1>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-base lg:text-lg text-black leading-relaxed space-y-5">
              <div className="">
                <p>Search influences reputation.</p>
                <p>Reputation influences conversion.</p>
                <p>Conversion reinforces visibility.</p>
              </div>

              <p>
                When these elements are disconnected, effort is wasted. When
                they are aligned, energy compounds.
              </p>

              <p>
                We design connected digital ecosystems where each signal
                strengthens the next—creating clarity, momentum, and long-term
                stability.
              </p>
              <div>
                <p className="italic font-semibold">
                  Most of the work happens beneath the surface.
                </p>
                <p className="italic font-semibold">
                  The impact is unmistakable.
                </p>
              </div>
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
