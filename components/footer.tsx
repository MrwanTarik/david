import Link from "next/link";
import Image from "next/image";
import Facebook from "@/public/assets/icons/Facebook.svg";
import Youtube from "@/public/assets/icons/Youtube.svg";
import Twitter from "@/public/assets/icons/Twitter.svg";
import Linkedin from "@/public/assets/icons/linkedin.svg";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="pt-4 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto ">
        <div className="grid grid-cols-12 gap-8 border-t border-[#e1e8f7] pt-[20px]">
          {/* Logo and description */}
          <div className="col-span-12 md:col-span-3">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-[#2e3b7d] leading-relaxed font-poppins font-normal">
              Transforming Ambition into Achievement – Only Trades Leads the
              Way.
            </p>
          </div>

          {/* Support links */}
          <div className="col-span-12 md:col-span-9 flex flex-row flex-wrap gap-y-10 lg:gap-[0] justify-end">
            <div className="w-[50%] lg:w-[25%]">
              <h3 className="text-[18px] font-semibold text-[#2E3B7D] mb-4 font-poppins h-[48px]">
                Explore
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#pricing"
                    className="text-[#2E3B7D] opacity-[60%] font-poppins font-normal hover:text-[#2e3b7d] transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="text-[#2E3B7D] opacity-[60%] font-poppins font-normal hover:text-[#2e3b7d] transition-colors"
                  >
                    Why Us?
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="text-[#2E3B7D] opacity-[60%] font-poppins font-normal hover:text-[#2e3b7d] transition-colors"
                  >
                    FAQ{" "}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal links */}
            <div className="w-[50%] lg:w-[25%]">
              <h3 className="text-[18px] font-semibold text-[#2E3B7D] mb-4 font-poppins h-[48px]">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-[#2E3B7D]  opacity-[60%] font-poppins font-normal hover:text-[#2e3b7d] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="text-[#2E3B7D] opacity-[60%] font-poppins font-normal hover:text-[#2e3b7d] transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies-policy"
                    className="text-[#2E3B7D] opacity-[60%] font-poppins font-normal hover:text-[#2e3b7d] transition-colors"
                  >
                    Cookies Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Second Support column and Social Media */}
          </div>
        </div>

        {/* Disclaimer */}
        <div className=" pt-8 mb-5"></div>

        {/* Copyright */}
      </div>
      <div className="px-4 text-center text-[#2e3b7d] text-sm py-3 flex items-center justify-center bg-[#7ECEFF] font-poppins font-normal">
        ©OnlyTrades Copyright 2025 | All Right Reserved. Only Trades LLC |
        2024-001565857
      </div>
    </footer>
  );
}
