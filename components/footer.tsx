import Link from "next/link"
import Image from "next/image"
import Facebook from "@/public/assets/icons/Facebook.svg"
import Youtube from "@/public/assets/icons/Youtube.svg"
import Twitter from "@/public/assets/icons/Twitter.svg"
import Linkedin from "@/public/assets/icons/Linkedin.svg"

export default function Footer() {
  return (
    <footer>
      <div className="pt-8 md:pt-12 lg:pt-16 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto ">
        <div className="grid grid-cols-12 gap-8 border-t border-[#e1e8f7] pt-[20px]">
          {/* Logo and description */}
          <div className="col-span-12 md:col-span-3">
            <h2 className="text-[32px] font-normal text-[#2e3b7d] mb-4 font-poppins">LOGO</h2>
            <p className="text-[#2e3b7d] leading-relaxed font-poppins font-normal">
              Sed ut perspiciatis undmnis is iste natus error sit amet voluptatem totam rem aperiam.
            </p>
          </div>

          {/* Support links */}
          <div className="col-span-12 md:col-span-9 flex flex-row flex-wrap gap-y-10 lg:gap-[0]">
          <div className="w-[50%] lg:w-[25%]">
            <h3 className="text-[18px] font-semibold text-[#2E3B7D] mb-4 font-poppins h-[48px]">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-[#2E3B7D] opacity-[60%] font-poppins font-normal hover:text-[#2e3b7d] transition-colors">
                  Page Name
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2E3B7D] opacity-[60%] font-poppins font-normal hover:text-[#2e3b7d] transition-colors">
                  Page Name
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2E3B7D] opacity-[60%] font-poppins font-normal hover:text-[#2e3b7d] transition-colors">
                  Page Name
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div className="w-[50%] lg:w-[25%]">
            <h3 className="text-[18px] font-semibold text-[#2E3B7D] mb-4 font-poppins h-[48px]">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-[#2E3B7D] opacity-[60%] font-poppins font-normal hover:text-[#2e3b7d] transition-colors">
                  Page Name
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2E3B7D] opacity-[60%] font-poppins font-normal hover:text-[#2e3b7d] transition-colors">
                  Page Name
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2E3B7D] opacity-[60%] font-poppins font-normal hover:text-[#2e3b7d] transition-colors">
                  Page Name
                </Link>
              </li>
            </ul>
          </div>  

          {/* Second Support column and Social Media */}
          <div className="w-[50%] lg:w-[25%]">
            <h3 className="text-[18px] font-semibold text-[#2E3B7D] mb-4 font-poppins h-[48px]">Support</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <Link href="#" className="text-[#2E3B7D] opacity-[60%] font-poppins font-normal hover:text-[#2e3b7d] transition-colors">
                  Page Name
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2E3B7D] opacity-[60%] font-poppins font-normal hover:text-[#2e3b7d] transition-colors">
                  Page Name
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2E3B7D] opacity-[60%] font-poppins font-normal hover:text-[#2e3b7d] transition-colors">
                  Page Name
                </Link>
              </li>
            </ul>

            
          </div>
          <div className="w-[50%] lg:w-[25%]">
          
            <div className="flex flex-col space-x-4">
            <h3 className="text-[18px] font-semibold text-[#2E3B7D] mb-4 font-poppins h-[40px]">Follow Us On</h3>
              <div className="flex gap-[15px]">
              <Link
                href="#"
                className="bg-[#2e3b7d] text-white p-2 rounded-full hover:bg-[#39b4ff] transition-colors"
                aria-label="Facebook"
              >
                <Image src={Facebook} alt="Facebook" />
              </Link>
              <Link
                href="#"
                className="bg-[#2e3b7d] text-white p-2 rounded-full hover:bg-[#39b4ff] transition-colors"
                aria-label="YouTube"
              >
                <Image src={Youtube} alt="Youtube" />
              </Link>
              <Link
                href="#"
                className="bg-[#2e3b7d] text-white p-2 rounded-full hover:bg-[#39b4ff] transition-colors"
                aria-label="Twitter"
              >
                <Image src={Twitter} alt="Twitter" />
              </Link>
              <Link
                href="#"
                className="bg-[#2e3b7d] text-white p-2 rounded-full hover:bg-[#39b4ff] transition-colors"
                aria-label="LinkedIn"
              >
                <Image src={Linkedin} alt="Linkedin" />
              </Link>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className=" pt-8 mb-20">
          <p className="text-[#2e3b7d] opacity-[65%] max-w-[90%] mx-auto text-sm text-center leading-relaxed font-poppins font-normal">
            PipFarm (operated by ECI Ventures Pte. Ltd.) provides trading and investing education and evaluation
            services. None of the services provided are investment services or investment advice per the Singapore
            Securities and Futures Act 2001 or other countries where the services maybe provided. For operations
            reasons, we do not accept users from Singapore.
          </p>
        </div>

        {/* Copyright */}
        
      </div>
      <div className="text-center text-[#8289B1]  text-sm h-[48px] flex items-center justify-center bg-[#C8CBD6] font-poppins font-normal">© 2025 ECI Ventures Pte. Ltd</div>
    </footer>
  )
}

