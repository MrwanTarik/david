import Image from "next/image";
import halfCircle from "@/public/assets/half-circle.svg";
import map from "@/public/assets/Map.svg";
import firstLogo from "@/public/assets/logo-1.svg";
import secondLogo from "@/public/assets/logo-2.svg";
import thirdLogo from "@/public/assets/logo-3.svg";
import fourthLogo from "@/public/assets/logo-4.svg";
import fifthLogo from "@/public/assets/logo-5.svg";

export default function LogoSection() {
  return (
    <div className="w-full pb-8">
      <div className="max-w-[1440px] mx-auto ">
        <div className="relative w-full max-w-[800px] h-[400px] mx-auto">
          <div className="absolute inset-0">
            <Image
              src={halfCircle}
              alt="Half circle shape"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="absolute inset-0 mask-with-circle overflow-hidden">
            <div className="w-[200%] h-full relative animate-scroll-map">
              <div className="absolute inset-0 w-1/2">
                <div className="relative w-full h-full">
                  <Image
                    src={map}
                    alt="Global trading network"
                    fill
                    className="object-contain scale-90 mt-12"
                    priority
                  />
                </div>
              </div>
              <div className="absolute inset-0 w-1/2 left-1/2">
                <div className="relative w-full h-full">
                  <Image
                    src={map}
                    alt="Global trading network"
                    fill
                    className="object-contain scale-90 mt-12"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-6 px-4 relative bottom-[70px] custom-shadow">
          <div className="flex w-[83%] mx-auto flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
            <div className="flex items-center gap-2 ">
              <Image src={firstLogo} alt="logo-1" />
              <span className="text-[#2E3B7D] opacity-60">logoipsum</span>
            </div>

            <div className="flex items-center gap-2 ">
              <Image src={secondLogo} alt="logo-2" />
              <span className="text-[#2E3B7D] opacity-60">logoipsum</span>
            </div>

            <div className="flex items-center gap-2 ">
              <Image src={thirdLogo} alt="logo-3" />
              <span className="text-[#2E3B7D] opacity-60">logoipsum</span>
            </div>

            <div className="flex items-center gap-2 ">
              <Image src={fourthLogo} alt="logo-4" />
              <span className="text-[#2E3B7D] opacity-60">logoipsum</span>
            </div>

            <div className="flex items-center gap-2 ">
              <Image src={fifthLogo} alt="logo-5" />
              <span className="text-[#2E3B7D] opacity-60">logoipsum</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
