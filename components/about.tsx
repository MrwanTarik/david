import Image from "next/image"
import { Button } from "@/components/ui/button"
import islandImage from "@/public/assets/is.svg"

export default function HeroSection() {
  return (
    <div className="relative mt-0 md:mt-[118px] py-12 px-4 md:py-20 md:px-8 lg:px-20 max-w-[1440px] mx-auto">
      <div className="bg-[#f8faff] rounded-[40px] shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-8 md:p-12 flex flex-col items-center">
        <div className="absolute bottom-[370px] w-full h-[300px] md:h-[480px] mb-8">
          <Image
            src={islandImage}
            alt="Trading platform illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="text-center max-w-[800px] mt-[200px] mx-auto">
          <h1 className="text-[32px] md:text-[40px] lg:text-[60px] font-bold text-[#2e3b7d] mb-6 leading-tight font-opensans">
            Lorem ipsum dolor sit amet consectetur.
          </h1>

          <p className="text-[16px] md:text-[18px] text-[#2e3b7d] mb-8 max-w-[500px] mx-auto font-poppins font-bold">
            Lorem ipsum dolor sit amet consectetur. Urna accumsan sagittis vivamus interdum.
          </p>

          <Button className="bg-gradient-to-r from-[#14AAF5] to-[#7ECEFF] hover:opacity-90 transition-opacity text-white font-medium w-[150px] md:w-[242px] mx-auto h-[50px] md:h-[73px] flex justify-center items-center text-[16px] md:text-[24px] rounded-[16px] font-inter">
            Yes, I am
          </Button>
        </div>
      </div>
    </div>
  )
}

