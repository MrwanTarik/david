"use client";
import React from "react";
import Image from "next/image";
import rise from "@/public/assets/icons/rise-logo.svg";
import tradeView from "@/public/assets/icons/logo-rectangle-dark.svg";
import Matchtrader from "@/public/assets/icons/MTT.svg";
import ProviderCard from "./provider-card";

const OurProviders = () => {
  const providerData = [
    {
      title: "Payout system",
      description:
        "E8 Traders can request their first payout after 8 days, with subsequent payouts available every 14 days. We ensure quick and secure transfers, supporting multiple payment methods including bank transfers and digital wallets. Our streamlined process makes it easy for traders to access their earnings.",
      logoSrc: rise,
      logoAlt: "Rise logo",
      logoPosition: "top-right" as const,
    },
    {
      title: "Charting tools",
      description:
        "Matchtrader platform utilizes advanced charting tools powered by TradingView, offering unparalleled insights for technical analysis of GBP USD, USD JPY, and many other currency pairs.",
      logoSrc: tradeView,
      logoAlt: "TradingView logo",
      logoPosition: "top-right" as const,
    },

    // You can add more providers here as needed
  ];

  return (
    <div className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto relative">
      {/* Providers Grid */}
      <div className="grid grid-cols-12 md:gap-8">
        <div
          className="col-span-12 md:col-span-4 text-center md:text-left mb-8 md:mb-0"
          data-aos="fade-right"
        >
          <div className="mb-8">
            <p className="text-[#6CB6FF] text-[14px] md:text-[17px] mb-2">
              OUR PROVIDERS
            </p>
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-violet-sans text-[#2e3b7d] mb-4">
              Our providers
            </h2>
            <p className="text-[#2e3b7d] text-[12px] md:text-[16px]">
              Who help us to make your best experience?
            </p>
          </div>
        </div>

        {/* Provider Cards */}
        <div className="col-span-12 md:col-span-8 space-y-6">
          {providerData.map((provider, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              <ProviderCard
                title={provider.title}
                description={provider.description}
                logoSrc={provider.logoSrc}
                logoAlt={provider.logoAlt}
                logoPosition={provider.logoPosition}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Background Stars */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-[url('/images/background/stars.webp')] bg-center bg-contain opacity-20" />
      </div>
    </div>
  );
};

export default OurProviders;
