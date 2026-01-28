"use client";

import Image from "next/image";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si"; // TikTok
import { FaXTwitter } from "react-icons/fa6"; // optional if you install FontAwesome6
import Logo from "@/assets/logo.gif";
import CTAButton from "../ui/CTAButton";
import Background from "@/assets/footer-background.png";
import ThunderIcon from "@/assets/thunder-logo.svg";

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-4 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={Background}
          alt="Background"
          className="absolute inset-0 w-full h-full object-fill opacity-40"
        />{" "}
      </div>

      <div className="absolute inset-0 top-0 left-0">
        {/* Social Icons */}
        <div className="flex flex-col gap-4 text-gray-600 bg-white text-xl w-14 py-8 px-3 rounded-r-full">
          <FaTwitter />
          <FaFacebookF />
          <FaInstagram />
          <SiTiktok />
          <FaXTwitter />
        </div>
      </div>

      <div className="absolute top-0 right-0 bg-white rounded-bl-[30px]">
        {/* Back to top Button */}
        <div className="flex flex-row items-center justify-between text-gray-600 px-6 ">
          <button className="flex flex-row items-center gap-4">
            <h1 className="text-black font-semibold text-lg">
              Back to the top
            </h1>
            <div className="w-8 rotate-[24deg]">
              <Image src={ThunderIcon} alt="footer Logo" className=" w-full" />
            </div>
          </button>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col gap-16">
        {/* Top Section: Brand + Links + CTA */}
        <div className="flex flex-col xl:flex-row justify-between gap-16">
          {/* Brand + Description */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="w-40">
              <Image src={Logo} alt="footer Logo" className="object-contain" />
            </div>
            <p className="text-gray-900 text-base leading-7">
              Lead Clickz exists to help businesses compete, adapt, and endure,
              especially when the market gets tight.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12">
            {/* About Section */}
            <div className="flex flex-col gap-2">
              <h2 className="text-gray-500 font-semibold">Info</h2>
              <p className="text-gray-900 hover:text-blue-600 cursor-pointer">
                About
              </p>
              <p className="text-gray-900 hover:text-blue-600 cursor-pointer">
                FAQs
              </p>
              <p className="text-gray-900 hover:text-blue-600 cursor-pointer">
                Ecosystem
              </p>
              <p className="text-gray-900 hover:text-blue-600 cursor-pointer">
                Blogs
              </p>
              <p className="text-gray-900 hover:text-blue-600 cursor-pointer">
                Contact Us
              </p>
            </div>

            {/* Explore Section */}
            <div className="flex flex-col gap-2">
              <h2 className="text-gray-500 font-semibold">Explore</h2>
              <p className="text-gray-900 hover:text-blue-600 cursor-pointer">
                Services
              </p>
              <p className="text-gray-900 hover:text-blue-600 cursor-pointer">
                Markets
              </p>
              <p className="text-gray-900 hover:text-blue-600 cursor-pointer">
                Insights
              </p>
              <p className="text-gray-900 hover:text-blue-600 cursor-pointer">
                Pricing
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col gap-4 max-w-sm">
            <h2 className="text-gray-500 font-semibold text-lg">Get Started</h2>
            <div className="text-sm space-y-3 mb-4">
              <p className="">
                We cultivate marketing ecosystems built to endure, not execute
                isolated tactics.
              </p>
              <p>To ensure fit, we don’t offer open contact.</p>
              <p>All partnerships begin with an application.</p>
            </div>
            <CTAButton
              variant="primary"
              className="w-56 py-2 justify-center"
              size="sm"
            >
              Apply To Be Considered
            </CTAButton>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-400 pt-4 gap-4">
          <p className="text-gray-700 text-sm">© MadeByShape Ltd 2025.</p>
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <span>Web Design Manchester</span>
            <span>|</span>
            <span>Privacy Policy</span>
            <span>|</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
