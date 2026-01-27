"use client";

export default function SparkSignals() {
  const signals = [
    {
      id: 1,
      title: "Visibility",
      description: "Being present where intent forms",
      row: 1,
    },
    {
      id: 2,
      title: "Trust",
      description: "Built through consistency and credibility",
      row: 1,
    },
    {
      id: 3,
      title: "Validation",
      description: "Proof that removes hesitation",
      row: 1,
    },
    {
      id: 4,
      title: "Momentum",
      description: "Sustained presence across the journey",
      row: 1,
    },
    {
      id: 5,
      title: "Conversion",
      description: "Energy applied at the moment of decision",
      row: 2,
    },
    {
      id: 6,
      title: "Retention",
      description: "Confidence that lasts beyond the first win",
      row: 2,
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        {/* Header Section */}
        <div className="flex flex-col gap-2 max-w-2xl">
          {/* Tag */}
          <div className="flex items-center gap-4">
            <h3 className="font-medium text-lg text-gray-400">SPARK SIGNALS</h3>
            <div className="w-10 h-0.5 bg-blue-500"></div>
          </div>

          {/* Headline */}
          <div className="text-4xl md:text-5xl font-semibold">
            <h2 className="text-gray-900">Growth Starts Before</h2>
            <h2 className="text-blue-500 leading-tight">The Click.</h2>
          </div>

          {/* Description */}
          <p className="max-w-lg text-base text-black/90 leading-relaxed">
            Every digital interaction sends a signal. Every signal influences a
            decision. We don't approach marketing as a list of services. We
            focus on the forces that shape outcomes and the moments where
            momentum is created.
          </p>
        </div>

        {/* Signals Grid */}
        <div className="flex flex-col items-center justify-center">
          {/* First Row */}

          {/* Cards */}
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 pt-6 justify-items-center">
            {signals.slice(0, 4).map((signal, index) => (
              <div className="flex items-start" key={signal.id}>
                <div className="flex flex-col items-center text-center gap-2">
                  <div key={signal.id} className="flex flex-row items-start ">
                    {/* Title + line */}
                    <h3 className="text-xl font-medium capitalize whitespace-nowrap">
                      {signal.title}
                    </h3>
                  </div>
                  {/* Description */}
                  <p className="text-base text-black/80">
                    {signal.description}
                  </p>
                </div>
                <div>
                  {index !== 3 && (
                    // <div className="relative w-32 h-1 translate-y-4 overflow-hidden">
                    //   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-80" />
                    //   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm animate-pulse" />
                    // </div>
                    <div className="relative w-32 h-1 translate-y-4 overflow-hidden">
                      {/* Base subtle line */}
                      <div className="absolute inset-0 bg-blue-500/15" />

                      {/* Soft center glow (always smooth) */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm animate-eye-glow" />

                      {/* Smooth beam expansion */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-eye-beam-smooth" />
                    </div>
                  )}
                  {index == 4 && (
                    <div className="w-40 h-0.5 bg-white shadow-[0_0_14px_rgba(59,130,246,0.9)] translate-y-4 " />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 pt-6 justify-items-center">
              {signals.slice(4, 6).map((signal, index) => (
                <div className="flex items-start" key={signal.id}>
                  <div className="flex flex-col items-center text-center gap-2">
                    <div key={signal.id} className="flex flex-row items-start ">
                      {/* Title + line */}
                      <h3 className="text-xl font-medium capitalize whitespace-nowrap">
                        {signal.title}
                      </h3>
                    </div>
                    {/* Description */}
                    <p className="text-base text-black/80">
                      {signal.description}
                    </p>
                  </div>
                  <div className="">
                    {index !== 1 && (
                      <div className="relative w-32 h-1 translate-y-4 overflow-hidden">
                        {/* Base subtle line */}
                        <div className="absolute inset-0 bg-blue-500/15" />

                        {/* Soft center glow (always smooth) */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm animate-eye-glow" />

                        {/* Smooth beam expansion */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-eye-beam-smooth" />
                      </div>
                    )}
                    {index == 2 && (
                      <div className="w-40 h-0.5 bg-white shadow-[0_0_14px_rgba(59,130,246,0.9)] translate-y-4 " />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <p className="text-base text-black/90 leading-relaxed max-w-4xl">
          When these signals move together, growth becomes predictable—not
          reactive.
        </p>
      </div>
    </section>
  );
}
