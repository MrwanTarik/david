import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ctaBg from "@/public/assets/cta-bg.png";

export default function CTASection() {
  return (
    <div className="relative">
      <div 
        data-aos="fade-left"
        data-aos-duration="1200"
        className="absolute w-[50%] top-[40%] translate-y-[-50%] right-0 hidden md:block"
      >
        <Image className="w-full h-[637px] object-contain" src={ctaBg} alt="Blue crystal shapes with clouds" />
      </div>
      <div className="py-8 md:py-12 lg:py-16 pl-4 md:pl-8 lg:pl-20 max-w-[1440px] mx-auto md:mt-15 md:mb-30">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div 
            data-aos="fade-right"
            data-aos-duration="1000"
            className="md:w-[45%]"
          >
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] text-[#2e3b7d] mb-6 font-violet-sans font-normal text-center md:text-left">
              Ready To Start?
            </h2>

            <p 
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-[16px] md:text-[18px] text-[#2e3b7d] mb-8 max-w-[600px] leading-relaxed font-poppins font-normal text-center md:text-left"
            >
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the cites
              of the word in classical literature, discovered the undoubtable
              source.
            </p>

            <div 
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Button
                asChild
                className="bg-gradient-to-r from-[#14AAF5] to-[#7ECEFF] hover:opacity-90 transition-opacity text-white font-normal w-[130px] h-[46px] flex justify-center items-center text-[16px] rounded-lg font-violet-sans "
              >
                <Link href="#">Get started</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-[#d7e0f4] text-[#2e3b7d] font-normal w-[183px] h-[46px] flex justify-center items-center text-[16px] rounded-lg hover:bg-[#f8faff] font-violet-sans"
              >
                <Link href="#">Join on Discord</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
