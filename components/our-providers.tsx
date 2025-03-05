import React from 'react'
import Image from 'next/image'
import rise from '@/public/assets/icons/rise-logo.svg'
import tradeView from '@/public/assets/icons/logo-rectangle-dark.svg'

const OurProviders = () => {
  return (
    <div className='py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto relative'>
      {/* Header Section */}
      

      {/* Providers Grid */}
      <div className='grid grid-cols-12 gap-8'>
        <div className='col-span-4'> 
        <div className="mb-8">
        <p className="text-[#6CB6FF] text-lg mb-2">OUR PROVIDERS</p>
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-violet-sans text-[#2e3b7d] mb-4">
          Our providers
        </h2>
        <p className="text-[#2e3b7d] text-lg">
          Who help us to make your best experience?
        </p>
      </div>
        </div>
        {/* Rise Provider Card */}
        <div className='col-span-8'>
        <div className='bg-white text-center md:text-left rounded-3xl custom-shadow py-8 md:py-12 px-8 backdrop-blur-sm  p-8 flex  '>
          <div>
            <h3 className="text-[24px] md:text-[28px] text-[#6CB6FF] mb-4">
              Payout system
            </h3>
            <p className="text-[#2e3b7d] text-lg mb-6">
              E8 Traders can request their first payout after 8 days, with subsequent payouts available every 14 days.
            </p>
            <button className="text-[#6CB6FF] hover:text-[#2e3b7d] transition-colors duration-300">
              Show more...
            </button>
          </div>
          <div className="absolute top-8 right-8">
            <Image 
              src={rise} 
              alt='Rise logo'
              className="w-24 md:w-32"
            />
          </div>
        </div>

        {/* TradingView Provider Card */}
        <div className='bg-white my-6 text-center md:text-left rounded-3xl custom-shadow p-8 px-8 backdrop-blur-sm  flex  '>
          <div>
            <h3 className="text-[24px] md:text-[28px] text-[#6CB6FF]  flex items-center justify-between">
              Charting tools
              <Image 
              src={tradeView} 
              alt='TradingView logo'
              className="w-24 md:w-32"
            />
            </h3>
            <p className="text-[#2e3b7d] text-lg ">
              Matchtrader platform utilizes advanced charting tools powered by TradingView, offering unparalleled insights for technical analysis of GBP USD, USD JPY, and many other currency pairs.
            </p>
          </div>
          
        </div>
        </div>
      </div>

      {/* Background Stars */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-[url('/images/background/stars.webp')] bg-center bg-contain opacity-20" />
      </div>
    </div>
  )
}

export default OurProviders