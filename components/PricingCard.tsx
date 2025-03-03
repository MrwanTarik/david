import Image from "next/image";
import { StaticImageData } from "next/image";
import confirmIcon from "@/public/assets/icons/4.svg";
interface PricingCardProps {
  icon: StaticImageData;
  amount: number;
  seedFunding: string;
  seriesFunding: string;
  maxFunding: string;
  testFee: number;
}

const PricingCard = ({
  icon,
  amount,
  seedFunding,
  seriesFunding,
  maxFunding,
  testFee,
}: PricingCardProps) => {
  return (
    <div className="bg-white rounded-[46px] custom-shadow p-6 relative font-violet-sans select-none">
      <div className="flex justify-between items-start mb-8">
        <div className="bg-[#e1e8f7] p-3 rounded-2xl">
          <div className="w-8 h-8 flex">
            <Image src={icon} alt="card-icon" />
          </div>
        </div>
        <div className="text-[#2e3b7d] text-3xl">${amount}</div>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex items-center">
          <div className="text-[#6cb6ff] mr-3">
            <Image src={confirmIcon} alt="checked-icon" />
          </div>
          <span className="text-[#2e3b7d] text-lg">{seedFunding}</span>
        </div>
        <div className="flex items-center">
          <div className="text-[#6cb6ff] mr-3">
            <Image src={confirmIcon} alt="checked-icon" />
          </div>
          <span className="text-[#2e3b7d] text-lg">{seriesFunding}</span>
        </div>
        <div className="flex items-center">
          <div className="text-[#6cb6ff] mr-3">
            <Image src={confirmIcon} alt="checked-icon" />
          </div>
          <span className="text-[#2e3b7d] text-lg">{maxFunding}</span>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <span className="text-[#2e3b7d] text-xl font-medium">Test fee:</span>
        <span className="text-[#2e3b7d] text-2xl">${testFee}</span>
      </div>

      <button className="w-full gradient-blue-button text-white min-h-[46px] rounded-2xl cursor-pointer">
        Start Test
      </button>
    </div>
  );
};

export default PricingCard;
