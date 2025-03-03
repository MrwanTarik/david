export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Start",
      description: "Choose your seed funding and purchase a test.",
    },
    {
      number: "02",
      title: "Pass",
      description: "Hit the profit target without breaking any rules.",
    },
    {
      number: "03",
      title: "Earn",
      description: "Receive payments for the pips generated in your account.",
    },
    {
      number: "04",
      title: "Scale",
      description: "Your funding will grow every time you reach a target.",
    },
  ];

  return (
    <div className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto">
      <h2 className="text-center text-[32px] md:text-[40px] lg:text-[48px] font-violet-sans mb-8 md:mb-12">
        <span className="text-[#6CB6FF]">How</span>
        <span className="text-[#2e3b7d]"> it works</span>
      </h2>

      <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Dotted line connecting steps */}
        <div className="hidden md:block absolute top-[60px] left-0 right-0 h-[2px] z-0 w-[80%] mx-auto">
          <div className="w-[90%] h-full border-t-2 border-dashed border-[#6CB6FF] opacity-50 grid grid-cols-12 gap-4"></div>
        </div>

        {/* Steps */}
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-start mb-16 md:mb-0 md:w-1/4"
          >
            {/* Number circle */}
            <div className="w-[120px] h-[120px] bg-white rounded-[40px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center justify-center mb-6 z-10 mx-auto md:mx-[unset]">
              <span className="text-[28px] md:text-[32px] lg:text-[36px] font-violet-sans text-[#6CB6FF] ">
                {step.number}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-[24px] m-auto md:m-[unset] md:text-[26px] lg:text-[28px] font-violet-sans text-[#2e3b7d] mb-4">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-[#2e3b7d] text-[16px] text-center md:text-left md:text-[18px] leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
