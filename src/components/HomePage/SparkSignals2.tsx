"use client";

import { div } from "framer-motion/client";

export default function SparkSignals() {
  const signals = [
    {
      id: 1,
      title: "Visibility",
      description: "Being present where intent forms",
    },
    {
      id: 2,
      title: "Trust",
      description: "Built through consistency and credibility",
    },
    {
      id: 3,
      title: "Validation",
      description: "Proof that removes hesitation",
    },
    {
      id: 4,
      title: "Momentum",
      description: "Sustained presence across the journey",
    },
    {
      id: 5,
      title: "Conversion",
      description: "Energy applied at the moment of decision",
    },
    {
      id: 6,
      title: "Retention",
      description: "Confidence that lasts beyond the first win",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 lg:gap-16">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-4">
            <h3 className="text-lg text-gray-400">SPARK SIGNALS</h3>
            <div className="w-10 h-0.5 bg-blue-500" />
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Growth Starts Before
          </h2>
          <h2 className="text-4xl md:text-5xl font-semibold text-blue-500">
            The Click.
          </h2>

          <p className="mt-4 text-black/90">
            Every digital interaction sends a signal. Every signal influences a
            decision.
          </p>
        </div>

        {/* ================= ROW 1 ================= */}
        {/* COMPUTER SCREEN */}
        <div className="hidden xl:flex flex-col lg:flex-row items-center justify-center gap-8">
          {signals.slice(0, 4).map((signal, index) => (
            <div
              key={signal.id}
              className="flex flex-col lg:flex-row items-center"
            >
              <SignalCard {...signal} />

              {/* Connector ONLY between cards */}
              {index !== 3 && <Connector />}
            </div>
          ))}
        </div>

        {/* LAPTOP SCREEN */}
        <div className="hidden lg:flex xl:hidden flex-col lg:flex-row items-center justify-center gap-8">
          {signals.slice(0, 3).map((signal, index) => (
            <div
              key={signal.id}
              className="flex flex-col lg:flex-row items-center"
            >
              <SignalCard {...signal} />

              {/* Connector ONLY between cards */}
              {index !== 2 && <Connector />}
            </div>
          ))}
        </div>

        {/* TABLET SCREEN */}
        <div className="hidden md:flex lg:hidden flex-col md:flex-row items-center justify-center gap-8">
          {signals.slice(0, 2).map((signal, index) => (
            <div className="flex items-center justify-center">
              <div
                key={signal.id}
                className="flex flex-col lg:flex-row items-center"
              >
                <SignalCard {...signal} />

                {/* Only one connector in the middle */}
              </div>
              {<Connector />}
            </div>
          ))}
        </div>

        {/* MOBILE SCREEN */}
        <div className="flex md:hidden flex-col lg:flex-row items-center justify-center gap-8">
          {signals.slice(0, 3).map((signal, index) => (
            <div
              key={signal.id}
              className="flex flex-col lg:flex-row items-center"
            >
              <SignalCard {...signal} />

              {/* Connector ONLY between cards */}
              {<Connector />}
            </div>
          ))}
        </div>

        {/* ================= ROW 2 ================= */}
        {/* COMPUTER SCREEN */}
        <div className="hidden xl:flex flex-col lg:flex-row items-center justify-center gap-8">
          {signals.slice(4, 6).map((signal, index) => (
            <div className="flex items-center justify-center">
              <div
                key={signal.id}
                className="flex flex-col lg:flex-row items-center"
              >
                <SignalCard {...signal} />

                {/* Only one connector in the middle */}
              </div>
              {index !== 1 && <Connector />}
            </div>
          ))}
        </div>

        {/* LAPTOP SCREEN */}
        <div className="hidden lg:flex xl:hidden flex-col lg:flex-row items-center justify-center gap-8">
          {signals.slice(3, 6).map((signal, index) => (
            <div className="flex items-center justify-center">
              <div
                key={signal.id}
                className="flex flex-col lg:flex-row items-center"
              >
                <SignalCard {...signal} />

                {/* Only one connector in the middle */}
              </div>
              {index !== 2 && <Connector />}
            </div>
          ))}
        </div>

        {/* TABLET SCREEN */}
        <div className="hidden md:flex lg:hidden flex-col md:flex-row items-center justify-start gap-8 ">
          {signals.slice(2, 4).map((signal, index) => (
            <div className="flex items-center justify-center">
              <div
                key={signal.id}
                className="flex flex-col lg:flex-row items-center"
              >
                <SignalCard {...signal} />

                {/* Only one connector in the middle */}
              </div>
              {<Connector />}
            </div>
          ))}
        </div>

        {/* MOBILE SCREEN */}
        <div className="flex md:hidden flex-col lg:flex-row items-center justify-center gap-8">
          {signals.slice(4, 6).map((signal) => (
            <div
              key={signal.id}
              className="flex flex-col lg:flex-row items-center"
            >
              <SignalCard {...signal} />

              {/* Connector ONLY between cards */}
              {<Connector />}
            </div>
          ))}
        </div>

        {/* ================= ROW 3 ================= */}
        {/* TABLET SCREEN */}
        <div className="hidden md:flex lg:hidden flex-col md:flex-row items-center justify-start gap-8">
          {signals.slice(4, 6).map((signal, index) => (
            <div className="flex items-center justify-center">
              <div
                key={signal.id}
                className="flex flex-col lg:flex-row items-center"
              >
                <SignalCard {...signal} />

                {/* Only one connector in the middle */}
              </div>
              {<Connector />}
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="max-w-4xl text-lg text-black/90">
          When these signals move together, growth becomes predictable—not
          reactive.
        </p>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function SignalCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-2 min-w-[160px] ">
      <h3 className="text-xl font-medium whitespace-nowrap">{title}</h3>
      <p className="text-black/80 max-w-[240px]">{description}</p>
    </div>
  );
}

/* ================= CONNECTOR ================= */

function Connector() {
  return (
    <>
      <div className="lg:hidden relative h-2 w-40 md:w-28 lg:w-32 mx-6 mt-5 overflow-hidden">
        {/* Base line */}
        <div
          className="absolute inset-0 bg-blue-500/20"
          style={{
            clipPath:
              "polygon(0 50%, 6% 0, 94% 0, 100% 50%, 94% 100%, 6% 100%)",
          }}
        />

        {/* Glow */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm animate-eye-glow"
          style={{
            clipPath:
              "polygon(0 50%, 6% 0, 94% 0, 100% 50%, 94% 100%, 6% 100%)",
          }}
        />

        {/* Beam */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-eye-beam-smooth"
          style={{
            clipPath:
              "polygon(0 50%, 6% 0, 94% 0, 100% 50%, 94% 100%, 6% 100%)",
          }}
        />
      </div>

      {/* HORIZONTAL (desktop) */}
      <div className="hidden lg:block relative h-1 w-24 xl:w-32 ml-6 overflow-hidden">
        {/* Base */}
        <div
          className="absolute inset-0 bg-blue-500/20"
          style={{
            clipPath:
              "polygon(0 50%, 8% 0, 92% 0, 100% 50%, 92% 100%, 8% 100%)",
          }}
        />

        {/* Glow */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm animate-eye-glow"
          style={{
            clipPath:
              "polygon(0 50%, 8% 0, 92% 0, 100% 50%, 92% 100%, 8% 100%)",
          }}
        />

        {/* Beam */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-eye-beam-smooth"
          style={{
            clipPath:
              "polygon(0 50%, 8% 0, 92% 0, 100% 50%, 92% 100%, 8% 100%)",
          }}
        />
      </div>
    </>
  );
}
