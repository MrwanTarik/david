"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PricingCard from "./PricingCard";
import cardIcon1 from "@/public/assets/icons/1.svg";
import cardIcon2 from "@/public/assets/icons/2.svg";
import cardIcon3 from "@/public/assets/icons/3.svg";
import confirmIcon from "@/public/assets/icons/4.svg";
// Import arrow icons
import leftArrow from "@/public/assets/icons/left-arrow.svg";
import rightArrow from "@/public/assets/icons/right-arrow.svg";
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
      virtualProfitTarget: "8% | 5%",
      maxDrawdown: "10%",
      maxDailyDrawdown: "4%",
      minTradingDays: "5",
      newsTrading: "YES",
      profitSplit: "Up To 95%",
      testFee: 159,
    },
    {
      icon: cardIcon2,
      amount: 25000,
      virtualProfitTarget: "8% | 5%",
      maxDrawdown: "10%",
      maxDailyDrawdown: "4%",
      minTradingDays: "5",
      newsTrading: "YES",
      profitSplit: "Up To 95%",
      testFee: 289,
    },
    {
      icon: cardIcon3,
      amount: 50000,
      virtualProfitTarget: "8% | 5%",
      maxDrawdown: "10%",
      maxDailyDrawdown: "4%",
      minTradingDays: "5",
      newsTrading: "YES",
      profitSplit: "Up To 95%",
      testFee: 479,
    },
    {
      icon: cardIcon1,
      amount: 100000,
      virtualProfitTarget: "8% | 5%",
      maxDrawdown: "10%",
      maxDailyDrawdown: "4%",
      minTradingDays: "5",
      newsTrading: "YES",
      profitSplit: "Up To 95%",
      testFee: 799,
    },
    {
      icon: cardIcon2,
      amount: 200000,
      virtualProfitTarget: "8% | 5%",
      maxDrawdown: "10%",
      maxDailyDrawdown: "4%",
      minTradingDays: "5",
      newsTrading: "YES",
      profitSplit: "Up To 95%",
      testFee: 1399,
    },
  ];

  const advancedTiers = [
    {
      icon: cardIcon1,
      amount: 2500,
      virtualProfitTarget: "--",
      maxDrawdown: "7%",
      maxDailyDrawdown: "--",
      minTradingDays: "10",
      profitSplit: "Up To 90%",
      testFee: 179,
    },
    {
      icon: cardIcon2,
      amount: 5000,
      virtualProfitTarget: "--",
      maxDrawdown: "7%",
      maxDailyDrawdown: "--",
      minTradingDays: "10",
      profitSplit: "Up To 90%",
      testFee: 319,
    },
    {
      icon: cardIcon3,
      amount: 10000,
      virtualProfitTarget: "--",
      maxDrawdown: "7%",
      maxDailyDrawdown: "--",
      minTradingDays: "10",
      profitSplit: "Up To 90%",
      testFee: 569,
    },
    {
      icon: cardIcon1,
      amount: 25000,
      virtualProfitTarget: "--",
      maxDrawdown: "7%",
      maxDailyDrawdown: "--",
      minTradingDays: "10",
      profitSplit: "Up To 90%",
      testFee: 1199,
    },
    {
      icon: cardIcon2,
      amount: 50000,
      virtualProfitTarget: "--",
      maxDrawdown: "7%",
      maxDailyDrawdown: "--",
      minTradingDays: "10",
      profitSplit: "Up To 90%",
      testFee: 2199,
    },
    {
      icon: cardIcon3,
      amount: 100000,
      virtualProfitTarget: "--",
      maxDrawdown: "7%",
      maxDailyDrawdown: "--",
      minTradingDays: "10",
      profitSplit: "Up To 90%",
      testFee: 4199,
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
      <div id="pricing" className="pt-8 pb-20 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto">
        <div className="max-w-7xl mx-auto">
          <div
            data-aos="fade-up"
            className="flex-col sm:flex-row flex justify-between items-center sm:mb-8 gap-5"
          >
            <h1 className="text-[32px] md:text-[40px] lg:text-[48px] text-center md:text-left font-inter">
              <span className="text-[#2e3b7d]">Select Your Plan From </span>
              <span className="text-[#6cb6ff]">Only Trades</span>
            </h1>

            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="flex items-center md:items-start justify-center sm:justify-end gap-4 font-inter w-full md:w-auto"
            >
              <button
                onClick={() => setActiveTab("basic")}
                className={`px-6 py-2 flex-1 sm:flex-auto w-auto sm:w-[125px] rounded-xl transition-all duration-300 ${
                  activeTab === "basic"
                    ? "bg-[#6cb6ff] text-white"
                    : "border border-[#e1e8f7] text-[#2e3b7d] hover:bg-[#e1e8f7]"
                }`}
              >
                Two Step
              </button>
              <button
                onClick={() => setActiveTab("advanced")}
                className={`px-6 py-2 flex-1 sm:flex-auto rounded-xl transition-all duration-300 ${
                  activeTab === "advanced"
                    ? "bg-[#6cb6ff] text-white"
                    : "border border-[#e1e8f7] text-[#2e3b7d] hover:bg-[#e1e8f7]"
                }`}
              >
                Instant Funding
              </button>
            </div>
          </div>

          {/* Add navigation arrows above the card swiper */}
          <div className="justify-end mb-4 hidden md:flex">
            <div className="flex gap-4" data-aos="fade-left" data-aos-delay="300">
              <button
                className="plan-prev-button w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#e1e8f7] flex items-center justify-center hover:bg-[#d7e0f4] transition-colors swiper-button-disabled"
                aria-label="Previous plan"
              >
                <Image src={leftArrow} alt="Previous" width={22} height={18} />
              </button>
              <button
                className="plan-next-button w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#e1e8f7] flex items-center justify-center hover:bg-[#d7e0f4] transition-colors"
                aria-label="Next plan"
              >
                <Image src={rightArrow} alt="Next" width={22} height={18} />
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
                navigation={{
                  prevEl: ".plan-prev-button",
                  nextEl: ".plan-next-button",
                }}
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
                      <PricingCard
                        {...tier}
                        isAdvanced={activeTab === "advanced"}
                      />
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            )}
          </div>

          {/* Titles Section */}
          <div id="features" className="text-center pt-12 pb-8">
            <h2 className="text-[#6cb6ff] text-[16px] md:text-[20px] mb-2">
              KEY BENEFITS
            </h2>
            <h1 className="text-[#2e3b7d] text-[32px] md:text-[40px] font-semibold">
              Why choose Only Trades?
            </h1>
          </div>

          {/* Features Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-white rounded-3xl custom-shadow p-8 mt-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {/* Row 1 */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="text-[#6cb6ff]">
                    <Image src={confirmIcon} alt="checked-icon" />
                  </div>
                  <h3 className="text-[#6cb6ff] text-[20px] font-semibold">
                    Trusted Partner
                  </h3>
                </div>
                <p className="text-[#2e3b7d] text-[16px] ml-9">
                  Reliable and transparent, empowering trader success.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="text-[#6cb6ff]">
                    <Image src={confirmIcon} alt="checked-icon" />
                  </div>
                  <h3 className="text-[#6cb6ff] text-[20px] font-semibold">
                    Innovative Tools
                  </h3>
                </div>
                <p className="text-[#2e3b7d] text-[16px] ml-9">
                  Cutting-edge technology for a competitive edge.
                </p>
              </div>

              {/* Row 2 */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="text-[#6cb6ff]">
                    <Image src={confirmIcon} alt="checked-icon" />
                  </div>
                  <h3 className="text-[#6cb6ff] text-[20px] font-semibold">
                    Account Scaling
                  </h3>
                </div>
                <p className="text-[#2e3b7d] text-[16px] ml-9">
                  Grow your account balance over time.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="text-[#6cb6ff]">
                    <Image src={confirmIcon} alt="checked-icon" />
                  </div>
                  <h3 className="text-[#6cb6ff] text-[20px] font-semibold">
                    Custom Evaluation
                  </h3>
                </div>
                <p className="text-[#2e3b7d] text-[16px] ml-9">
                  Create a truly personalized evaluation experience.
                </p>
              </div>

              {/* Row 3 */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="text-[#6cb6ff]">
                    <Image src={confirmIcon} alt="checked-icon" />
                  </div>
                  <h3 className="text-[#6cb6ff] text-[20px] font-semibold">
                    Always Available
                  </h3>
                </div>
                <p className="text-[#2e3b7d] text-[16px] ml-9">
                  24/5 customer support, whenever you need it.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="text-[#6cb6ff]">
                    <Image src={confirmIcon} alt="checked-icon" />
                  </div>
                  <h3 className="text-[#6cb6ff] text-[20px] font-semibold">
                    Optimal Trading Conditions
                  </h3>
                </div>
                <p className="text-[#2e3b7d] text-[16px] ml-9">
                  Raw spreads or commission-free trading.
                </p>
              </div>

              {/* Row 4 */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="text-[#6cb6ff]">
                    <Image src={confirmIcon} alt="checked-icon" />
                  </div>
                  <h3 className="text-[#6cb6ff] text-[20px] font-semibold">
                    Maximize Your Earnings
                  </h3>
                </div>
                <p className="text-[#2e3b7d] text-[16px] ml-9">
                  Keep up to 100% of your profits.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="text-[#6cb6ff]">
                    <Image src={confirmIcon} alt="checked-icon" />
                  </div>
                  <h3 className="text-[#6cb6ff] text-[20px] font-semibold">
                    Fast Payouts
                  </h3>
                </div>
                <p className="text-[#2e3b7d] text-[16px] ml-9">
                  Access your earnings within 24 hours.
                </p>
              </div>

              {/* Row 5 */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="text-[#6cb6ff]">
                    <Image src={confirmIcon} alt="checked-icon" />
                  </div>
                  <h3 className="text-[#6cb6ff] text-[20px] font-semibold">
                    Learn & Grow
                  </h3>
                </div>
                <p className="text-[#2e3b7d] text-[16px] ml-9">
                  Valuable trading insights and educational resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
