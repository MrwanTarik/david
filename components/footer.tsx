import Link from "next/link"
import { Facebook, Youtube, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-[#e1e8f7]">
      <div className="py-12 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div>
            <h2 className="text-[32px] font-bold text-[#2e3b7d] mb-4">LOGO</h2>
            <p className="text-[#2e3b7d] leading-relaxed">
              Sed ut perspiciatis undmnis is iste natus error sit amet voluptatem totam rem aperiam.
            </p>
          </div>

          {/* Support links */}
          <div>
            <h3 className="text-[18px] font-semibold text-[#2e3b7d] mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-[#6b99df] hover:text-[#2e3b7d] transition-colors">
                  Page Name
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b99df] hover:text-[#2e3b7d] transition-colors">
                  Page Name
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b99df] hover:text-[#2e3b7d] transition-colors">
                  Page Name
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-[18px] font-semibold text-[#2e3b7d] mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-[#6b99df] hover:text-[#2e3b7d] transition-colors">
                  Page Name
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b99df] hover:text-[#2e3b7d] transition-colors">
                  Page Name
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b99df] hover:text-[#2e3b7d] transition-colors">
                  Page Name
                </Link>
              </li>
            </ul>
          </div>

          {/* Second Support column and Social Media */}
          <div>
            <h3 className="text-[18px] font-semibold text-[#2e3b7d] mb-4">Support</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <Link href="#" className="text-[#6b99df] hover:text-[#2e3b7d] transition-colors">
                  Page Name
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b99df] hover:text-[#2e3b7d] transition-colors">
                  Page Name
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b99df] hover:text-[#2e3b7d] transition-colors">
                  Page Name
                </Link>
              </li>
            </ul>

            <h3 className="text-[18px] font-semibold text-[#2e3b7d] mb-4">Follow Us On</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-[#2e3b7d] text-white p-2 rounded-full hover:bg-[#39b4ff] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="bg-[#2e3b7d] text-white p-2 rounded-full hover:bg-[#39b4ff] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </Link>
              <Link
                href="#"
                className="bg-[#2e3b7d] text-white p-2 rounded-full hover:bg-[#39b4ff] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="bg-[#2e3b7d] text-white p-2 rounded-full hover:bg-[#39b4ff] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-[#e1e8f7] pt-8 mb-8">
          <p className="text-[#2e3b7d] text-sm text-center leading-relaxed">
            PipFarm (operated by ECI Ventures Pte. Ltd.) provides trading and investing education and evaluation
            services. None of the services provided are investment services or investment advice per the Singapore
            Securities and Futures Act 2001 or other countries where the services maybe provided. For operations
            reasons, we do not accept users from Singapore.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-[#6b99df] text-sm">© 2023 ECI Ventures Pte. Ltd</div>
      </div>
    </footer>
  )
}

