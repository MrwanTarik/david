"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Am I trading real money?",
    answer:
      "With Only Trades, all trading is done in a simulated environment using real market data. The goal is to showcase your skills and performance in order to eventually monetize your demo trading.",
  },
  {
    question: "How Do I Request a Payout?",
    answer:
      "You can do this through your dashboard. The payout button will be activated when you are able to request a payout. Trades will receive their payout after 24 - 48 hours once requested.",
  },
  {
    question: "Do we receive a refund at any point?",
    answer:
      "2-Step Evaluation: Once you successfully pass the evaluation, you will receive a full refund of the evaluation fee when you request your first payout. Instant Funding Account: If you achieve a 5% profit within the first payout cycle, you will be refunded the initial fee, in addition to receiving your profit share.",
  },
  {
    question: "How many accounts can I trade?",
    answer:
      "You can purchase as many evaluations as you like and manage up to $400K in capital across both plans with Only Trades.",
  },
];

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 3);

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div id="faq" className="py-20 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        <div data-aos="fade-right" className="md:w-[40%]">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] text-[#2e3b7d] mb-8 font-violet-sans font-normal text-center md:text-left">
            Frequently asked Questions
          </h2>

          <Button
            data-aos="fade-up"
            data-aos-delay="200"
            onClick={() => setShowAll(!showAll)}
            className="bg-gradient-to-r from-[#14AAF5] to-[#7ECEFF] hover:opacity-90 transition-opacity text-white font-normal w-[150px] md:w-[242px] h-[50px] md:h-[73px] flex justify-center items-center text-[16px] md:text-[18px] rounded-[16px] font-inter mx-auto md:mx-0"
          >
            {showAll ? "Show Less" : "See More"}
          </Button>
        </div>

        <div className="md:w-[55%] space-y-6">
          {visibleFaqs.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-left"
              data-aos-delay={index * 100}
              className="bg-[#f8faff] rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-6 flex justify-between items-center"
              >
                <h3 className="text-[20px] font-normal text-[#2e3b7d] font-violet-sans">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`text-[#39b4ff] transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedIndex === index
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-[#2e3b7d] leading-relaxed font-poppins font-normal">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
