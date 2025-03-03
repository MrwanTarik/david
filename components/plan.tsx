import React from 'react'
import { Check } from 'lucide-react'
const Plan = () => {
  return (
    <div className="pt-8 pb-20 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center md:text-left">
        <span className="text-[#2e3b7d]">Choose your </span>
        <span className="text-[#6cb6ff]">seed capital</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* $10000 Tier */}
        <div className="bg-white rounded-3xl shadow-lg p-6 relative">
          <div className="flex justify-between items-start mb-8">
            <div className="bg-[#e1e8f7] p-3 rounded-xl">
              <div className="w-8 h-8 bg-[#6cb6ff] rounded-full"></div>
            </div>
            <div className="text-[#2e3b7d] text-3xl font-bold">$10000</div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <div className="text-[#6cb6ff] mr-3">
                <Check size={20} />
              </div>
              <span className="text-[#2e3b7d] text-lg">10K Seed funding</span>
            </div>
            <div className="flex items-center">
              <div className="text-[#6cb6ff] mr-3">
                <Check size={20} />
              </div>
              <span className="text-[#2e3b7d] text-lg">5K Series funding</span>
            </div>
            <div className="flex items-center">
              <div className="text-[#6cb6ff] mr-3">
                <Check size={20} />
              </div>
              <span className="text-[#2e3b7d] text-lg">25K Max funding</span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <span className="text-[#2e3b7d] text-xl font-medium">Test fee:</span>
            <span className="text-[#2e3b7d] text-2xl font-bold">$125</span>
          </div>

          <button className="w-full bg-[#6cb6ff] text-white py-4 rounded-full text-lg font-medium hover:bg-[#5aa0ff] transition-colors">
            Start Test
          </button>
        </div>

        {/* $20000 Tier */}
        <div className="bg-white rounded-3xl shadow-lg p-6 relative">
          <div className="flex justify-between items-start mb-8">
            <div className="bg-[#e1e8f7] p-3 rounded-xl">
              <div className="w-8 h-8 flex">
                <div className="w-4 h-4 bg-[#6cb6ff] rounded-full mr-1"></div>
                <div className="w-4 h-4 bg-[#6cb6ff] rounded-full"></div>
              </div>
            </div>
            <div className="text-[#2e3b7d] text-3xl font-bold">$20000</div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <div className="text-[#6cb6ff] mr-3">
                <Check size={20} />
              </div>
              <span className="text-[#2e3b7d] text-lg">20K Seed funding</span>
            </div>
            <div className="flex items-center">
              <div className="text-[#6cb6ff] mr-3">
                <Check size={20} />
              </div>
              <span className="text-[#2e3b7d] text-lg">10K Series funding</span>
            </div>
            <div className="flex items-center">
              <div className="text-[#6cb6ff] mr-3">
                <Check size={20} />
              </div>
              <span className="text-[#2e3b7d] text-lg">50K Max funding</span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <span className="text-[#2e3b7d] text-xl font-medium">Test fee:</span>
            <span className="text-[#2e3b7d] text-2xl font-bold">$225</span>
          </div>

          <button className="w-full bg-[#6cb6ff] text-white py-4 rounded-full text-lg font-medium hover:bg-[#5aa0ff] transition-colors">
            Start Test
          </button>
        </div>

        {/* $50000 Tier */}
        <div className="bg-white rounded-3xl shadow-lg p-6 relative">
          <div className="flex justify-between items-start mb-8">
            <div className="bg-[#e1e8f7] p-3 rounded-xl">
              <div className="w-8 h-8 flex flex-wrap">
                <div className="w-4 h-4 bg-[#6cb6ff] rounded-full mr-1 mb-1"></div>
                <div className="w-4 h-4 bg-[#6cb6ff] rounded-full"></div>
                <div className="w-4 h-4 bg-[#6cb6ff] rounded-full"></div>
              </div>
            </div>
            <div className="text-[#2e3b7d] text-3xl font-bold">$50000</div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <div className="text-[#6cb6ff] mr-3">
                <Check size={20} />
              </div>
              <span className="text-[#2e3b7d] text-lg">50K Seed funding</span>
            </div>
            <div className="flex items-center">
              <div className="text-[#6cb6ff] mr-3">
                <Check size={20} />
              </div>
              <span className="text-[#2e3b7d] text-lg">25K Series funding</span>
            </div>
            <div className="flex items-center">
              <div className="text-[#6cb6ff] mr-3">
                <Check size={20} />
              </div>
              <span className="text-[#2e3b7d] text-lg">250K Max funding</span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <span className="text-[#2e3b7d] text-xl font-medium">Test fee:</span>
            <span className="text-[#2e3b7d] text-2xl font-bold">$475</span>
          </div>

          <button className="w-full bg-[#6cb6ff] text-white py-4 rounded-full text-lg font-medium hover:bg-[#5aa0ff] transition-colors">
            Start Test
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center">
            <div className="text-[#6cb6ff] mr-3">
              <Check size={20} />
            </div>
            <span className="text-[#2e3b7d] text-lg">1-stage evaluation</span>
          </div>
          <div className="flex items-center">
            <div className="text-[#6cb6ff] mr-3">
              <Check size={20} />
            </div>
            <span className="text-[#2e3b7d] text-lg">12% profit target</span>
          </div>
          <div className="flex items-center">
            <div className="text-[#6cb6ff] mr-3">
              <Check size={20} />
            </div>
            <span className="text-[#2e3b7d] text-lg">4% daily drawdown</span>
          </div>
          <div className="flex items-center">
            <div className="text-[#6cb6ff] mr-3">
              <Check size={20} />
            </div>
            <span className="text-[#2e3b7d] text-lg">Scale every30 days</span>
          </div>
          <div className="flex items-center">
            <div className="text-[#6cb6ff] mr-3">
              <Check size={20} />
            </div>
            <span className="text-[#2e3b7d] text-lg">Up to 90% profit share</span>
          </div>
          <div className="flex items-center">
            <div className="text-[#6cb6ff] mr-3">
              <Check size={20} />
            </div>
            <span className="text-[#2e3b7d] text-lg">8% max drawdown</span>
          </div>
          <div className="flex items-center">
            <div className="text-[#6cb6ff] mr-3">
              <Check size={20} />
            </div>
            <span className="text-[#2e3b7d] text-lg">No time constraints</span>
          </div>
          <div className="flex items-center">
            <div className="text-[#6cb6ff] mr-3">
              <Check size={20} />
            </div>
            <span className="text-[#2e3b7d] text-lg">No expensive add-ons</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Plan