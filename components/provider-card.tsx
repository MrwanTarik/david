"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface ProviderCardProps {
  title: string;
  description: string;
  logoSrc: StaticImageData;
  logoAlt: string;
  logoPosition?: "top-right" | "in-title";
}

const ProviderCard: React.FC<ProviderCardProps> = ({
  title,
  description,
  logoSrc,
  logoAlt,
  logoPosition = "top-right",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortDescription =
    description.length > 90 ? description.slice(0, 90) + "..." : description;

  return (
    <div className="bg-white text-center md:text-left rounded-3xl custom-shadow py-8 md:py-12 px-8 backdrop-blur-sm p-8 mb-6">
      <div className="flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-[22px] md:text-[26px] lg:text-[30px] text-[#6CB6FF] font-violet-sans">
            {title}
          </h3>
          {logoPosition === "top-right" && (
            <Image src={logoSrc} alt={logoAlt} className="w-24 md:w-32" />
          )}
        </div>

        {logoPosition === "in-title" && (
          <div className="flex justify-between items-center mb-4">
            <div></div>
            <Image src={logoSrc} alt={logoAlt} className="w-24 md:w-32" />
          </div>
        )}

        <p className="text-[#2e3b7d] text-[14px] md:text-[18px] mb-6">
          {isExpanded ? description : shortDescription}
        </p>

        {description.length > 90 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#6CB6FF] hover:text-[#2e3b7d] transition-colors duration-300 text-[12px] md:text-[16px]"
          >
            {isExpanded ? "Show less..." : "Show more..."}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProviderCard;
