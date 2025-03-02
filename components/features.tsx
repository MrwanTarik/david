import {
  BarChart3,
  LineChart,
  Target,
  CheckSquare,
  BarChart4,
  ThumbsUp,
  CastleIcon as ChessKnight,
  Diamond,
  Clock,
} from "lucide-react"

export default function FeaturesGrid() {
  return (
    <div className="py-20 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto">
      <h2 className="text-center text-[40px] md:text-[48px] font-bold mb-16">
        <span className="text-[#39b4ff]">PipFarm</span>
        <span className="text-[#2e3b7d]"> in a nutshell</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Card 1 */}
        <div className="bg-[#f8faff] rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative">
          <div className="max-w-[80%]">
            <h3 className="text-[24px] font-bold text-[#2e3b7d] mb-4">Scaling program</h3>
            <p className="text-[#2e3b7d] leading-relaxed">
              We're looking to fund career traders, so we reward traders who meet targets with additional funding
              rounds.
            </p>
          </div>
          <div className="absolute top-8 right-8 bg-[#39b4ff] w-[60px] h-[60px] rounded-[16px] flex items-center justify-center text-white">
            <BarChart3 size={30} />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#f8faff] rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative">
          <div className="max-w-[80%]">
            <h3 className="text-[24px] font-bold text-[#2e3b7d] mb-4">1:30 leverage</h3>
            <p className="text-[#2e3b7d] leading-relaxed">
              Trade with up to 1:30 leverage on most products without any exposure restrictions holding you back.
            </p>
          </div>
          <div className="absolute top-8 right-8 bg-[#39b4ff] w-[60px] h-[60px] rounded-[16px] flex items-center justify-center text-white">
            <LineChart size={30} />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#f8faff] rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative">
          <div className="max-w-[80%]">
            <h3 className="text-[24px] font-bold text-[#2e3b7d] mb-4">$500k max funding</h3>
            <p className="text-[#2e3b7d] leading-relaxed">
              Your account scales in increments of your initial funding up to $500k. Keep smashing targets to reach
              maximum funding.
            </p>
          </div>
          <div className="absolute top-8 right-8 bg-[#39b4ff] w-[60px] h-[60px] rounded-[16px] flex items-center justify-center text-white">
            <Target size={30} />
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#f8faff] rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative">
          <div className="max-w-[80%]">
            <h3 className="text-[24px] font-bold text-[#2e3b7d] mb-4">1 Stage evaluation</h3>
            <p className="text-[#2e3b7d] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Mauris nec faucibus hac aliquam egestas. A non in eleifend massa
              nisi.
            </p>
          </div>
          <div className="absolute top-8 right-8 bg-[#39b4ff] w-[60px] h-[60px] rounded-[16px] flex items-center justify-center text-white">
            <CheckSquare size={30} />
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-[#f8faff] rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative">
          <div className="max-w-[80%]">
            <h3 className="text-[24px] font-bold text-[#2e3b7d] mb-4">cTrader platform</h3>
            <p className="text-[#2e3b7d] leading-relaxed">
              Your account scales in increments of your initial funding up to $500k. Keep smashing targets to reach
              maximum funding.
            </p>
          </div>
          <div className="absolute top-8 right-8 bg-[#39b4ff] w-[60px] h-[60px] rounded-[16px] flex items-center justify-center text-white">
            <BarChart4 size={30} />
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-[#f8faff] rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative">
          <div className="max-w-[80%]">
            <h3 className="text-[24px] font-bold text-[#2e3b7d] mb-4">No add-ons</h3>
            <p className="text-[#2e3b7d] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Mauris nec faucibus hac aliquam egestas. A non in eleifend massa
              nisi.
            </p>
          </div>
          <div className="absolute top-8 right-8 bg-[#39b4ff] w-[60px] h-[60px] rounded-[16px] flex items-center justify-center text-white">
            <ThumbsUp size={30} />
          </div>
        </div>

        {/* Card 7 */}
        <div className="bg-[#f8faff] rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative">
          <div className="max-w-[80%]">
            <h3 className="text-[24px] font-bold text-[#2e3b7d] mb-4">Any Strategy</h3>
            <p className="text-[#2e3b7d] leading-relaxed">
              Your account scales in increments of your initial funding up to $500k. Keep smashing targets to reach
              maximum funding.
            </p>
          </div>
          <div className="absolute top-8 right-8 bg-[#39b4ff] w-[60px] h-[60px] rounded-[16px] flex items-center justify-center text-white">
            <ChessKnight size={30} />
          </div>
        </div>

        {/* Card 8 */}
        <div className="bg-[#f8faff] rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative">
          <div className="max-w-[80%]">
            <h3 className="text-[24px] font-bold text-[#2e3b7d] mb-4">Superb conditions</h3>
            <p className="text-[#2e3b7d] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Mauris nec faucibus hac aliquam egestas. A non in eleifend massa
              nisi.
            </p>
          </div>
          <div className="absolute top-8 right-8 bg-[#39b4ff] w-[60px] h-[60px] rounded-[16px] flex items-center justify-center text-white">
            <Diamond size={30} />
          </div>
        </div>
      </div>

      {/* Bottom centered card */}
      <div className="mt-8 md:mt-8 md:w-1/2 mx-auto">
        <div className="bg-[#f8faff] rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative">
          <div className="max-w-[80%]">
            <h3 className="text-[24px] font-bold text-[#2e3b7d] mb-4">90% profit share</h3>
            <p className="text-[#2e3b7d] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Mauris nec faucibus hac aliquam egestas. A non in eleifend massa
              nisi.
            </p>
          </div>
          <div className="absolute top-8 right-8 bg-[#39b4ff] w-[60px] h-[60px] rounded-[16px] flex items-center justify-center text-white">
            <Clock size={30} />
          </div>
        </div>
      </div>
    </div>
  )
}

