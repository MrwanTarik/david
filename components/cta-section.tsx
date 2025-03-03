import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ctaBg from "@/public/assets/cta-bg.png";

export default function CTASection() {
  return (
    <div className="py-20 pl-4 md:pl-8 lg:pl-20 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="md:w-1/2">
          <h2 className="text-[40px] md:text-[48px] font-bold text-[#2e3b7d] mb-6">
            Ready To Start?
          </h2>

          <p className="text-[16px] md:text-[18px] text-[#2e3b7d] mb-8 max-w-[600px] leading-relaxed">
            Richard McClintock, a Latin professor at Hampden-Sydney College in
            Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the word in classical literature, discovered the undoubtable
            source.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-[#39b4ff] hover:bg-[#2ea3ee] text-white font-medium px-8 py-6 h-auto text-[16px] rounded-lg"
            >
              <Link href="#">Get started</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-[#d7e0f4] text-[#2e3b7d] font-medium px-8 py-6 h-auto text-[16px] rounded-lg hover:bg-[#f8faff]"
            >
              <Link href="#">Join on Discord</Link>
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 absolute right-0">
          <Image src={ctaBg} alt="Blue crystal shapes with clouds" />
        </div>
      </div>
    </div>
  );
}
