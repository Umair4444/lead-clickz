import Image from "next/image";
import HeroImage from "@/assets/hero-banner.png";
import avatar1 from "@/assets/avatar1.png";
import avatar2 from "@/assets/avatar2.jpg";
import avatar3 from "@/assets/avatar3.jpg";
import CTAButton from "@/components/ui/CTAButton";

const avatars = [avatar1, avatar2, avatar3];

export default function Hero() {
  return (
    <section className="w-full overflow-hidden">
      <div className="relative mx-auto min-h-[88vh] grid grid-cols-1 lg:grid-cols-2 px-5 sm:px-8 lg:px-20 gap-14">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          {/* Left gradient */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-[#69B1FF] to-transparent blur-3xl opacity-70" />
          </div>

          {/* Right gradients (desktop only) */}
          <div className="hidden lg:block absolute w-[900px] h-[900px] right-0 top-0 translate-x-1/3 -translate-y-1/4">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-[#027BFF] to-transparent blur-3xl opacity-60" />
          </div>

          {/* Frosted glass */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-2xl" />
        </div>

        {/* LEFT CONTENT */}
        <div className="z-10 flex flex-col justify-center text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-gray-600 font-semibold">
              At Lead Clickz
            </span>
            <span className="h-0.5 w-8 bg-blue-500" />
          </div>

          <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-semibold text-gray-700">
            We Don’t Chase
            <br />
            Attention.
          </h1>

          <div className="mx-auto lg:mx-0 mt-6 px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-black text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-nowrap font-semibold w-fit">
            We Activate Decisions.
          </div>

          <p className="mt-8 max-w-xl mx-auto lg:mx-0 leading-relaxed text-sm sm:text-base">
            <span className="text-black/80">
              The way people choose has changed.
            </span>
            <br />
            <span className="text-black/50">
              We identify where interest is forming, where confidence is
              building, and action is most likely to occur.
            </span>
          </p>

          <p className="mt-6 text-black text-sm sm:text-base">
            This Is How Modern Growth Happens.
            <br />
            Quietly. Precisely. Powerfully.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <CTAButton variant="primary">Our Approach</CTAButton>

            <CTAButton variant="secondary">Apply To Be Considered</CTAButton>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-full h-[90vh] lg:translate-x-20">
            <Image
              src={HeroImage}
              alt="Hero banner"
              fill
              className="lg:object-fill"
              priority
            />
          </div>

          {/* SOCIAL PROOF */}
          <div className="absolute bottom-6 left-0 translate-x-0 flex items-center gap-4">
            <div className="flex -space-x-3">
              {avatars.map((avatar, i) => (
                <div
                  key={i}
                  className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full border-4 border-white overflow-hidden"
                >
                  <Image src={avatar} alt="" className="object-cover" />
                </div>
              ))}
            </div>

            <p className="text-gray-700 flex flex-col text-sm sm:text-base">
              <span className="font-bold text-gray-900 text-xl sm:text-2xl">
                428k+
              </span>
              <span>User Active</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
