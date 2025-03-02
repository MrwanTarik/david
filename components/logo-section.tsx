import { CircleCheckIcon as CircleWavyCheck, Copyright, Gauge, Globe, Wallet } from "lucide-react"
import Image from "next/image"
export default function LogoSection() {
  return (
    <div className="w-full pb-8">
      <div className="max-w-[1440px] mx-auto">
      <div className="relative w-full max-w-[800px] h-[400px] mx-auto">
          <Image
            src="/assets/planet.png"
            alt="Global trading network"
            fill
            className="object-contain animate-spin-slow"
            priority
          />
        </div>
        <div className="bg-white rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-6 px-4 relative bottom-[70px]">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
            <div className="flex items-center gap-2 text-[#8a8fb9]">
              <Globe className="w-5 h-5 text-[#8a8fb9]" />
              <span>logoipsum</span>
            </div>

            <div className="flex items-center gap-2 text-[#8a8fb9]">
              <Copyright className="w-5 h-5 text-[#8a8fb9]" />
              <span>logoipsum</span>
            </div>

            <div className="flex items-center gap-2 text-[#8a8fb9]">
              <CircleWavyCheck className="w-5 h-5 text-[#8a8fb9]" />
              <span>logoipsum</span>
            </div>

            <div className="flex items-center gap-2 text-[#8a8fb9]">
              <Gauge className="w-5 h-5 text-[#8a8fb9]" />
              <span>logoipsum</span>
            </div>

            <div className="flex items-center gap-2 text-[#8a8fb9]">
              <Wallet className="w-5 h-5 text-[#8a8fb9]" />
              <span>logoipsum</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

