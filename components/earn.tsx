import React from 'react'
import Image from 'next/image'
import payouts from "@/public/assets/payouts1.webp";
const Earn = () => {
  return (
    <div className='py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto'>
      <h2 className="text-center text-[32px] md:text-[40px] lg:text-[48px] font-violet-sans mb-8 md:mb-12" 
          data-aos="fade-up">
        <span className="text-[#6CB6FF]">Earn</span>
        <span className="text-[#2e3b7d]"> with us</span>
      </h2>
      <div className='bg-white text-center md:text-left custom-shadow rounded-2xl xl:rounded-[40px] p-8 md:px-16 mt-8' 
           data-aos="fade-up" 
           data-aos-delay="100">
        <div className='flex flex-col-reverse lg:grid lg:grid-cols-12 items-center gap-6 md:gap-0'>
          <div className='w-full lg:col-span-7' data-aos="fade-right" data-aos-delay="200">
            <h2 className='text-[28px] md:text-[32px] lg:text-[36px] font-violet-sans text-[#2e3b7d] mb-0'>Guaranteed Payouts</h2>
            <p className='text-[#2e3b7d] text-[14px] md:text-[17px] mb-2 font-medium font-poppins'>
              Enjoy timely payouts tailored to your needs, with guaranteed reliability.
            </p>
            <p className='text-[#2e3b7d] text-[12px] md:text-[16px]'>
              Choose from a variety of options tailored to meet your requirements, each with a unique payout policy to ensure a perfect fit for every trader's needs. You can opt to receive up to 100% of your profits while enjoying the flexibility to withdraw daily or bi-weekly. Join the successful team of E8 Traders, where over $44,000,000 has already been paid out to traders like you. Rest assured, your hard work will always be rewarded on time and without compromise.
            </p>
          </div>
          <div className='w-full lg:col-span-5' data-aos="fade-left" data-aos-delay="300">
            <Image src={payouts} alt="Hero background" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Earn