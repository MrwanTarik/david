"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import whiteStar from "@/public/assets/icons/whiteStar.svg";
import blueStar from "@/public/assets/icons/blueStar.svg";
import placeholderAvatar from "@/public/assets/rater.svg";
import leftArrow from "@/public/assets/icons/left-arrow.svg";
import rightArrow from "@/public/assets/icons/right-arrow.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    text: "As a Computer Science student, he continuously expands his knowledge to stay ahead in the ever-evolving tech world. His goal is to create impactful digital experiences that blend creativity with technology.",
    avatar: placeholderAvatar,
    rating: 5,
  },
  {
    id: 2,
    text: "As a Computer Science student, he continuously expands his knowledge to stay ahead in the ever-evolving tech world. His goal is to create impactful digital experiences that blend creativity with technology.",
    avatar: placeholderAvatar,
    rating: 5,
  },
  {
    id: 3,
    text: "The platform has been instrumental in my trading journey. The funding options are flexible and the evaluation process is straightforward. I appreciate the transparency and support.",
    avatar: placeholderAvatar,
    rating: 5,
  },
  {
    id: 4,
    text: "I've tried several prop firms, but this one stands out with its fair rules and excellent customer service. The scaling opportunities are great for growing your account over time.",
    avatar: placeholderAvatar,
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto">
      <div 
        data-aos="fade-right"
        className="flex justify-between items-start sm:items-center mb-8 md:mb-12"
      >
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-violet-sans text-[#2e3b7d]">
          Testimonials
        </h2>
        <div className="flex gap-4">
          <button
            className="prev-button w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#e1e8f7] flex items-center justify-center hover:bg-[#d7e0f4] transition-colors"
            aria-label="Previous testimonial"
          >
            <Image src={leftArrow} alt="Previous" width={22} height={18} />
          </button>
          <button
            className="next-button w-12 h-12 md:w-14 md:h-14 rounded-2xl  bg-[#e1e8f7] flex items-center justify-center hover:bg-[#d7e0f4] transition-colors"
            aria-label="Next testimonial"
          >
            <Image src={rightArrow} alt="Next" width={22} height={18} />
          </button>
        </div>
      </div>

      <div 
        data-aos="fade-up"
        data-aos-delay="200"
        className="max-w-[1280px] mx-auto"
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView="auto"
          navigation={{
            prevEl: ".prev-button",
            nextEl: ".next-button",
          }}
          className="testimonials-swiper"
        >
          <SwiperSlide className="testimonial-excellent">
            <div className="gradient-blue-button rounded-[24px] md:rounded-[32px] p-6 md:p-8 text-white flex flex-col justify-center h-full">
              <h3 className="text-[28px] md:text-[32px] lg:text-[36px] font-violet-sans mb-4">
                Excellent
              </h3>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src={whiteStar}
                    alt="Star"
                    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mr-1"
                  />
                ))}
              </div>
              <p className="text-[16px] md:text-[18px]">
                Based on 1400 reviews
              </p>
            </div>
          </SwiperSlide>

          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="testimonial-regular">
              <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 h-full">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Image
                        key={i}
                        src={blueStar}
                        alt="Star"
                        className="w-6 h-6 mr-1"
                      />
                    ))}
                  </div>
                  <div className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt="Avatar"
                      width={60}
                      height={60}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <p className="text-[16px] text-[#2e3b7d] leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
