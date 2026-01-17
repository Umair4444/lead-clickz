import Image from "next/image";
import Background from "@/assets/backgrond.png";
import Sphere from "@/assets/bg-sphere.png";
import SmallSphere from "@/assets/small-sphere.png";

export default function BrandEvolution() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-14 sm:py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Decorative sphere */}
        <Image
          src={Sphere}
          alt="Decorative Sphere"
          className="
            absolute top-24 left-1/2 -translate-x-1/2
            w-[260px] h-[260px]
            sm:w-[380px] sm:h-[380px]
            lg:w-[500px] lg:h-[500px]
          "
        />

        {/* Background image */}
        <Image
          src={Background}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:gap-10 md:grid-cols-2">
          {/* Left column */}
          <div className="space-y-6">
            {/* Label */}
            <div className="flex items-center gap-3">
              <h3 className="text-sm sm:text-base font-semibold text-light-gray tracking-wide">
                BRAND EVOLUTION
              </h3>
              <span className="h-0.5 w-8 bg-blue-500" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight capitalize text-foreground max-w-xl">
              Yesterday Was About Direction.
            </h2>

            {/* Pill headline */}
            <div className="flex">
              <h3
                className="
                  text-lg sm:text-2xl lg:text-3xl
                  font-semibold capitalize
                  border border-black rounded-full
                  px-6 sm:px-8 py-2 sm:py-3
                  text-center
                "
              >
                Today Is About Power.
              </h3>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
              There was a time when marketing was about aim—pointing in the
              right direction and hoping attention followed. That evolution is
              reflected in our identity. What was once an arrow is now a
              lightning bolt—not because we move faster, but because we strike
              where it matters most.
            </p>
          </div>

          {/* Right column */}
          <div className="space-y-8 md:self-end max-w-xl">
            <p className="block justify-baseline text-lg sm:text-xl lg:text-2xl leading-relaxed">
              <span>That was yesterday.</span>
              <br />
              <span>Today, success demands precision, timing, and force.</span>
            </p>

            {/* CTA */}
            <div className="border border-blue-500 rounded-full w-fit px-6 sm:px-8 py-3 sm:py-4">
              <p className="text-lg md:text-base lg:text-2xl font-semibold italic capitalize text-blue-500 text-center">
                A spark doesn't shout. It activates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Small decorative sphere */}
      <Image
        src={SmallSphere}
        alt="Small Decorative Sphere"
        className="
          absolute right-0
          -top-16 sm:-top-24
          w-32 sm:w-44 lg:w-56
        "
      />
    </section>
  );
}
