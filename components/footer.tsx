import Link from "next/link"
import Image from "next/image"
import Facebook from "@/public/assets/icons/Facebook.svg"
import Youtube from "@/public/assets/icons/Youtube.svg"
import Twitter from "@/public/assets/icons/Twitter.svg"
import Linkedin from "@/public/assets/icons/linkedin.svg"

export default function Footer() {
  return (
    <footer>
      <div className="pt-8 md:pt-12 lg:pt-16 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto ">
        <div className="grid grid-cols-12 gap-8 border-t border-[#e1e8f7] pt-[20px]">
          {/* Logo and description */}
          <div className="col-span-12 md:col-span-3">
            <h2 className="text-[32px] font-normal text-[#2e3b7d] mb-4 font-poppins">LOGO</h2>
            <p className="text-[#2e3b7d] leading-relaxed font-poppins font-normal">
            Transforming Ambition into Achievement – RocketFx Leads the Way.
            </p>
          </div>

          {/* Support links */}
          <div className="col-span-12 md:col-span-9 flex flex-row flex-wrap gap-y-10 lg:gap-[0] justify-end">
          <div className="w-[50%] lg:w-[25%]">
            <h3 className="text-[18px] font-semibold text-[#2E3B7D] mb-4 font-poppins h-[48px]">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-[#2E3B7D] opacity-[60%] font-poppins font-normal hover:text-[#2e3b7d] transition-colors">
                Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2E3B7D] opacity-[60%] font-poppins font-normal hover:text-[#2e3b7d] transition-colors">
                Why Us?
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2E3B7D] opacity-[60%] font-poppins font-normal hover:text-[#2e3b7d] transition-colors">
                FAQ                </Link>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div className="w-[50%] lg:w-[25%]">
            <h3 className="text-[18px] font-semibold text-[#2E3B7D] mb-4 font-poppins h-[48px]">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-[#2E3B7D] opacity-[60%] font-poppins font-normal hover:text-[#2e3b7d] transition-colors">
                Legal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2E3B7D] opacity-[60%] font-poppins font-normal hover:text-[#2e3b7d] transition-colors">
                Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2E3B7D] opacity-[60%] font-poppins font-normal hover:text-[#2e3b7d] transition-colors">
                Refund Policy
                </Link>
              </li>
            </ul>
          </div>  

          {/* Second Support column and Social Media */}
         
          </div>
        </div>

        {/* Disclaimer */}
        <div className=" pt-8 mb-5">
          
        </div>

        {/* Copyright */}
        
      </div>
      <div className="text-center text-[#8289B1]  text-sm h-[48px] flex items-center justify-center bg-[#C8CBD6] font-poppins font-normal">
        ©RocketFX Copyright 2025 | All Right Reserved.

Rocket FX LLC | 2024-001565857
      </div>
    </footer>
  )
}

