import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LogoSection from "@/components/logo-section";
import heroBg from "@/public/assets/hero-bg.png";

export default function HeroSection() {
  return (
    <div className=" pt-20 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto">
      <div className="max-w-[1440px] mx-auto text-center z-10 relative">
        {/* <Image src={heroBg} alt="Hero background" className="absolute object-cover top-0 left-[50%] translate-x-[-50%] z-1 bottom-[80px]" /> */}
        <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-bold text-black mb-4 max-w-[1000px] mx-auto leading-tight font-inter">
          Grow Your Online Trading With{" "}
          <span className="text-[#14AAF5] block">Only Trades</span>
        </h1>

        <p className="text-[16px] md:text-[18px] text-[black] mb-8 max-w-[543px] mx-auto font-inter">
          Join a funded trader program designed for growth. Hit our targets to
          grow your account with additional funding rounds.
        </p>

        <div className="flex flex-row justify-center gap-4">
          <Button
            asChild
            className="bg-gradient-to-r from-[#14AAF5] to-[#7ECEFF] hover:bg-[#2ea3ee] text-white w-[150px] h-[50px]  sm:w-[178px] sm:h-[56px] flex items-center justify-center text-[16px] rounded-lg shadow-md hover:opacity-90 transition-opacity font-violet-sans button-shadow"
          >
            <Link href="#">Get started</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-0 bg-white text-black w-[150px] h-[50px] sm:w-[178px] sm:h-[56px] flex items-center justify-center text-[16px] rounded-lg hover:bg-[#f8faff] shadow-md font-violet-sans button-shadow"
          >
            <Link href="#">Join on Discord</Link>
          </Button>
        </div>
      </div>
      <div>
        <LogoSection />
      </div>
    </div>
  );
}
