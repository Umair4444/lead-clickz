import CTAButton from "../ui/CTAButton";

export default function Invitation() {
  return (
    <section className="relative w-full py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Card Container */}
        <div
          className="relative w-full group rounded-3xl md:rounded-4xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(2,123,255,0.8),0_12px_32px_rgba(2,123,255,0.6),0_-12px_32px_rgba(2,123,255,0.5)]"
          style={{
            boxShadow:
              "0 0 20px rgba(2,123,255,0.5), 0 8px 12px rgba(0,255,255,0.4), 0 -8px 10px rgba(0, 255, 255, 0.3)",
          }}
        >
          {" "}
          {/* Blurred Background Layer */}
          <div className="absolute inset-0 rounded-3xl md:rounded-4xl group-hover:bg-blue-200/30 filter blur-3xl" />
          {/* White Background */}
          <div className="absolute inset-0 border-2 rounded-3xl md:rounded-4xl" />
          {/* Content Container */}
          <div className="relative z-10 p-8 md:p-16 lg:p-20">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Left Section */}
              <div className="flex-1 w-full lg:max-w-2xl">
                {/* Label with Line */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-semibold text-lg md:text-xl whitespace-nowrap">
                    INVITATION
                  </span>
                  <div className="h-1 flex-shrink-0 w-10 bg-blue-500" />
                </div>

                {/* Main Heading */}
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
                  <h2>Build Something That</h2>
                  <h2 className="text-blue-500"> Outlasts the Cycle.</h2>
                </div>

                {/* Subheading */}
                <p className="text-base xl:text-lg">
                  If you're looking for another vendor, we're not the right fit.
                </p>
              </div>

              {/* Right Section */}
              <div className="flex-1 w-full lg:max-w-xl flex flex-col gap-8 lg:gap-12">
                {/* Description Text */}
                <div className="text-base md:text-lg leading-7 md:leading-8 space-y-5">
                  <p className="">
                    If you’re looking for a strategic partner who understands
                    how decisions are made today—and how to build resilience
                    into your growth—we should talk.
                  </p>
                  <p className="">
                    But to understand where your signals are strong, where
                    energy is leaking, and how to build something sustainable.
                  </p>
                  <p className="italic text-blue-500">
                     Not for a pitch. Not for hype.
                  </p>
                </div>

                {/* Button */}
                <div className="relative w-full ">
                  {/* Main Button */}
                  <CTAButton
                    variant="primary"
                    className="w-56 py-2 justify-center"
                    size="sm"
                  >
                    Apply To Be Considered
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
