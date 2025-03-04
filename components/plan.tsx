"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PricingCard from "./PricingCard";
import cardIcon1 from "@/public/assets/icons/1.svg";
import cardIcon2 from "@/public/assets/icons/2.svg";
import cardIcon3 from "@/public/assets/icons/3.svg";
import confirmIcon from "@/public/assets/icons/4.svg";
// Import Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CloudLeftImage from "@/public/assets/c1.png";
import CloudRightImage from "@/public/assets/c2.png";

const Plan = () => {
  const [activeTab, setActiveTab] = useState<"basic" | "advanced">("basic");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after component mounts
    setIsLoading(false);
  }, []);

  const basicTiers = [
    {
      icon: cardIcon1,
      amount: 10000,
      seedFunding: "20K Seed funding",
      seriesFunding: "10K Series funding",
      maxFunding: "50K Max funding",
      testFee: 225,
    },
    {
      icon: cardIcon2,
      amount: 20000,
      seedFunding: "20K Seed funding",
      seriesFunding: "10K Series funding",
      maxFunding: "50K Max funding",
      testFee: 225,
    },
    {
      icon: cardIcon3,
      amount: 30000,
      seedFunding: "30K Seed funding",
      seriesFunding: "15K Series funding",
      maxFunding: "150K Max funding",
      testFee: 325,
    },
    {
      icon: cardIcon1,
      amount: 40000,
      seedFunding: "40K Seed funding",
      seriesFunding: "20K Series funding",
      maxFunding: "200K Max funding",
      testFee: 425,
    },
    {
      icon: cardIcon2,
      amount: 50000,
      seedFunding: "50K Seed funding",
      seriesFunding: "25K Series funding",
      maxFunding: "250K Max funding",
      testFee: 475,
    },
  ];

  const advancedTiers = [
    {
      icon: cardIcon1,
      amount: 100000,
      seedFunding: "100K Seed funding",
      seriesFunding: "50K Series funding",
      maxFunding: "500K Max funding",
      testFee: 925,
    },
    {
      icon: cardIcon2,
      amount: 200000,
      seedFunding: "200K Seed funding",
      seriesFunding: "100K Series funding",
      maxFunding: "1M Max funding",
      testFee: 1825,
    },
    {
      icon: cardIcon3,
      amount: 300000,
      seedFunding: "300K Seed funding",
      seriesFunding: "150K Series funding",
      maxFunding: "1.5M Max funding",
      testFee: 2725,
    },
    {
      icon: cardIcon1,
      amount: 400000,
      seedFunding: "400K Seed funding",
      seriesFunding: "200K Series funding",
      maxFunding: "2M Max funding",
      testFee: 3625,
    },
    {
      icon: cardIcon2,
      amount: 500000,
      seedFunding: "500K Seed funding",
      seriesFunding: "250K Series funding",
      maxFunding: "2.5M Max funding",
      testFee: 4475,
    },
  ];
  return (
    <div className="relative">
      <Image
        className="absolute left-0 top-[-22%] -z-10"
        src={CloudLeftImage}
        alt=""
      />
      <Image
        className="absolute right-0 top-[-10%] -z-10"
        src={CloudRightImage}
        alt=""
      />
      <div className="pt-8 pb-20 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto">
        <div className="max-w-7xl mx-auto">
          <div
            data-aos="fade-up"
            className="flex-col sm:flex-row flex justify-between items-center sm:mb-8 gap-5"
          >
            <h1 className="text-[32px] md:text-[40px] lg:text-[48px] text-center md:text-left font-inter">
              <span className="text-[#2e3b7d]">Choose your </span>
              <span className="text-[#6cb6ff]">seed capital</span>
            </h1>

            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="flex justify-center sm:justify-end gap-4 font-inter"
            >
              <button
                onClick={() => setActiveTab("basic")}
                className={`px-6 py-2 flex-1 sm:flex-auto w-auto sm:w-[125px] rounded-xl transition-all duration-300 ${
                  activeTab === "basic"
                    ? "bg-[#6cb6ff] text-white"
                    : "border border-[#e1e8f7] text-[#2e3b7d] hover:bg-[#e1e8f7]"
                }`}
              >
                Basic
              </button>
              <button
                onClick={() => setActiveTab("advanced")}
                className={`px-6 py-2 flex-1 sm:flex-auto rounded-xl transition-all duration-300 ${
                  activeTab === "advanced"
                    ? "bg-[#6cb6ff] text-white"
                    : "border border-[#e1e8f7] text-[#2e3b7d] hover:bg-[#e1e8f7]"
                }`}
              >
                Advanced
              </button>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="300" className="mb-8">
            {isLoading ? (
              // Skeleton loading cards
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-white rounded-[46px] custom-shadow p-6"
                  >
                    {/* Icon and Amount row */}
                    <div className="flex justify-between items-start mb-8">
                      <div className="bg-[#e1e8f7] p-3 rounded-2xl w-14 h-14 animate-pulse" />
                      <div className="h-8 w-24 bg-[#e1e8f7] rounded-lg animate-pulse" />
                    </div>

                    {/* Features list */}
                    <div className="space-y-4 mb-8">
                      {[1, 2, 3].map((j) => (
                        <div key={j} className="flex items-center">
                          <div className="w-6 h-6 bg-[#e1e8f7] rounded-full mr-3 animate-pulse" />
                          <div className="h-6 w-32 bg-[#e1e8f7] rounded-lg animate-pulse" />
                        </div>
                      ))}
                    </div>

                    {/* Test fee row */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="h-6 w-20 bg-[#e1e8f7] rounded-lg animate-pulse" />
                      <div className="h-6 w-16 bg-[#e1e8f7] rounded-lg animate-pulse" />
                    </div>

                    {/* Button */}
                    <div className="w-full h-[46px] bg-[#e1e8f7] rounded-2xl animate-pulse" />
                  </div>
                ))}
              </div>
            ) : (
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={24}
                navigation={false}
                pagination={{ clickable: true }}
                className="pricing-swiper !px-0"
                initialSlide={0}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                {(activeTab === "basic" ? basicTiers : advancedTiers).map(
                  (tier, index) => (
                    <SwiperSlide key={index}>
                      <PricingCard {...tier} />
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            )}
          </div>

          {/* Features Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-white rounded-3xl custom-shadow p-8 mt-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center">
                <div className="text-[#6cb6ff] mr-3">
                  <Image src={confirmIcon} alt="checked-icon" />
                </div>
                <span className="text-[#2e3b7d] text-[16px] md:text-[18px]">
                  1-stage evaluation
                </span>
              </div>
              <div className="flex items-center">
                <div className="text-[#6cb6ff] mr-3">
                  <Image src={confirmIcon} alt="checked-icon" />
                </div>
                <span className="text-[#2e3b7d] text-[16px] md:text-[18px]">
                  12% profit target
                </span>
              </div>
              <div className="flex items-center">
                <div className="text-[#6cb6ff] mr-3">
                  <Image src={confirmIcon} alt="checked-icon" />
                </div>
                <span className="text-[#2e3b7d] text-[16px] md:text-[18px]">
                  4% daily drawdown
                </span>
              </div>
              <div className="flex items-center">
                <div className="text-[#6cb6ff] mr-3">
                  <Image src={confirmIcon} alt="checked-icon" />
                </div>
                <span className="text-[#2e3b7d] text-[16px] md:text-[18px]">
                  Scale every30 days
                </span>
              </div>
              <div className="flex items-center">
                <div className="text-[#6cb6ff] mr-3">
                  <Image src={confirmIcon} alt="checked-icon" />
                </div>
                <span className="text-[#2e3b7d] text-[16px] md:text-[18px]">
                  Up to 90% profit share
                </span>
              </div>
              <div className="flex items-center">
                <div className="text-[#6cb6ff] mr-3">
                  <Image src={confirmIcon} alt="checked-icon" />
                </div>
                <span className="text-[#2e3b7d] text-[16px] md:text-[18px]">
                  8% max drawdown
                </span>
              </div>
              <div className="flex items-center">
                <div className="text-[#6cb6ff] mr-3">
                  <Image src={confirmIcon} alt="checked-icon" />
                </div>
                <span className="text-[#2e3b7d] text-[16px] md:text-[18px]">
                  No time constraints
                </span>
              </div>
              <div className="flex items-center">
                <div className="text-[#6cb6ff] mr-3">
                  <Image src={confirmIcon} alt="checked-icon" />
                </div>
                <span className="text-[#2e3b7d] text-[16px] md:text-[18px]">
                  No expensive add-ons
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
