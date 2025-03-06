import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";

interface LogoProps {
  showTextOnMobile?: boolean;
  logoSize?: number;
  textSize?: number;
  className?: string;
}

export default function Logo({
  showTextOnMobile = false,
  logoSize = 65,
  textSize = 20,
  className = "",
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`text-[#2e3b7d] font-inter font-bold z-10 flex items-center gap-2 ${className}`}
    >
      <Image src={logo} alt="Logo" width={logoSize} height={logoSize} className={`w-[${logoSize}px] h-[${logoSize}px]`} />
      <span className={`text-[#14AAF5] text-[${textSize}px] font-violet-sans z-10 ${showTextOnMobile ? 'block' : 'md:block hidden'}`}>
        Only Trades
      </span>
    </Link>
  );
} 