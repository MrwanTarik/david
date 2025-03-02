import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import LogoSection from "@/components/logo-section"
export default function HeroSection() {
  return (
    <div className="bg-[#f3f7fc] pt-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-[1440px] mx-auto text-center">
        <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-bold text-black mb-4 max-w-[1000px] mx-auto leading-tight">
          Grow Your Online Trading With <span className="text-[#39b4ff] block">Only Trades</span>
        </h1>

        <p className="text-[16px] md:text-[18px] text-[#2e3b7d] mb-8 max-w-[600px] mx-auto">
          Join a funded trader program designed for growth. Hit our targets to grow your account with additional funding
          rounds.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            className="bg-[#39b4ff] hover:bg-[#2ea3ee] text-white font-medium px-8 py-6 h-auto text-[16px] rounded-lg"
          >
            <Link href="#">Get started</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-[#d7e0f4] bg-white text-[#2e3b7d] font-medium px-8 py-6 h-auto text-[16px] rounded-lg hover:bg-[#f8faff]"
          >
            <Link href="#">Join on Discord</Link>
          </Button>
        </div>

        
       
      </div>
      <LogoSection />
    </div>
  )
}

