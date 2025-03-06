import Image from "next/image";
import { StaticImageData } from "next/image";
import confirmIcon from "@/public/assets/icons/4.svg";
import Link from "next/link";

interface PricingCardProps {
  icon: StaticImageData;
  amount: number;
  virtualProfitTarget: string;
  maxDrawdown: string;
  maxDailyDrawdown: string;
  minTradingDays: string;
  newsTrading?: string;
  profitSplit: string;
  testFee: number;
  isAdvanced?: boolean;
}

const formatAmount = (amount: number): string => {
  if (amount >= 1000) {
    return `${amount / 1000}K`;
  }
  return amount.toString();
};

const formatTestFee = (amount: number): string => {
  return amount.toFixed(2);
};

const PricingCard: React.FC<PricingCardProps> = ({
  icon,
  amount,
  virtualProfitTarget,
  maxDrawdown,
  maxDailyDrawdown,
  minTradingDays,
  newsTrading,
  profitSplit,
  testFee,
  isAdvanced,
}) => {
  return (
    <div className="bg-white rounded-[46px] custom-shadow p-6 h-full">
      <div className="flex justify-between items-start mb-6">
        <div className="bg-[#e1e8f7] p-3 rounded-2xl">
          <Image src={icon} alt="plan icon" width={32} height={32} />
        </div>
        <h3 className="text-[#2e3b7d] text-[24px] font-bold">
          ${formatAmount(amount)}
        </h3>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-2">
          <Image
            src={confirmIcon}
            alt="check"
            width={20}
            height={20}
            className="text-[#6cb6ff]"
          />
          <div className="flex justify-between items-center flex-1">
            <span className="text-[#4f5b7d]">
              {isAdvanced ? "Profit Target" : "Virtual Profit Target"}
            </span>
            <span className="text-[#2e3b7d] font-medium">
              {virtualProfitTarget}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={confirmIcon}
            alt="check"
            width={20}
            height={20}
            className="text-[#6cb6ff]"
          />
          <div className="flex justify-between items-center flex-1">
            <span className="text-[#4f5b7d]">Max Drawdown</span>
            <span className="text-[#2e3b7d] font-medium">{maxDrawdown}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={confirmIcon}
            alt="check"
            width={20}
            height={20}
            className="text-[#6cb6ff]"
          />
          <div className="flex justify-between items-center flex-1">
            <span className="text-[#4f5b7d]">Max Daily Drawdown</span>
            <span className="text-[#2e3b7d] font-medium">
              {maxDailyDrawdown}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={confirmIcon}
            alt="check"
            width={20}
            height={20}
            className="text-[#6cb6ff]"
          />
          <div className="flex justify-between items-center flex-1">
            <span className="text-[#4f5b7d]">Minimum Trading Days</span>
            <span className="text-[#2e3b7d] font-medium">{minTradingDays}</span>
          </div>
        </div>
        {!isAdvanced && (
          <div className="flex items-center gap-2">
            <Image
              src={confirmIcon}
              alt="check"
              width={20}
              height={20}
              className="text-[#6cb6ff]"
            />
            <div className="flex justify-between items-center flex-1">
              <span className="text-[#4f5b7d]">News Trading</span>
              <span className="text-[#2e3b7d] font-medium">{newsTrading}</span>
            </div>
          </div>
        )}
        <div className="flex items-center gap-2">
          <Image
            src={confirmIcon}
            alt="check"
            width={20}
            height={20}
            className="text-[#6cb6ff]"
          />
          <div className="flex justify-between items-center flex-1">
            <span className="text-[#4f5b7d]">Profit Split</span>
            <span className="text-[#2e3b7d] font-medium">{profitSplit}</span>
          </div>
        </div>
      </div>

      {/* Separator and Test Fee section */}
      <div className="border-t border-[#e1e8f7] pt-6 mb-6">
        <div className="flex items-center justify-center gap-2">
          <span className="text-[#2e3b7d] font-bold text-[22px]">
            ${formatTestFee(testFee)}
          </span>
          <span className="text-[#4f5b7d] text-[13px] font-medium">
            for {formatAmount(amount)} account
          </span>
        </div>
      </div>

      <Link
        href={"https://mtr-demo-prod.match-trader.com/dashboard"}
        className="w-full py-3 bg-[#6cb6ff] text-white rounded-2xl hover:bg-[#5aa5ff] transition-all duration-300 inline-block text-center"
      >
        Start Challenge
      </Link>
    </div>
  );
};

export default PricingCard;
