import Image from "next/image"
import payoutGraph from "../public/assets/payout-graph.svg"
export default function PayoutProcess() {
  return (
    <div className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto">
      <div className="text-center">
        <h2 className="text-[40px] md:text-[48px] font-violet-sans text-[#2e3b7d] mb-8">Payout Process</h2>

        <p className="text-[#6cb6ff] mb-8">
          You keep up to 90% of the pips you earn
        </p>

        <p className="text-[#2e3b7d] max-w-[800px] mx-auto leading-relaxed">
          Our profit share scale motivates traders and rewards ambition. The more you earn the less we keep. Your profit
          share adjusts dynamically based on the amount you request. Hit the target for the highest percentage.
        </p>
      </div>
      <Image src={payoutGraph} alt="Payout Process" className="w-full h-auto mt-[30px] md:mt-[80px]" />
    </div>
  )
}

