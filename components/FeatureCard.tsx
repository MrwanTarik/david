import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  iconSrc: string;
}

export default function FeatureCard({
  title,
  description,
  iconSrc,
}: FeatureCardProps) {
  return (
    <div className="bg-[#f8faff] rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-4 mb-4">
        <h3 className="text-[20px] md:text-[24px] font-violet-sans text-[#2E3B7D] flex-1">
          {title}
        </h3>
        <div className="gradient-blue-button w-[60px] h-[60px] rounded-[16px] flex items-center justify-center text-white shrink-0">
          <img src={iconSrc} alt={title} className="w-[30px] h-[30px]" />
        </div>
      </div>
      <p className="text-[#2E3B7D] text-[16px] md:text-[18px] leading-relaxed max-w-[85%]">
        {description}
      </p>
    </div>
  );
}
