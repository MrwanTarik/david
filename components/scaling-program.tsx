export default function ScalingProgram() {
  const fundingSeries = [
    { id: 1, name: "Series Funding" },
    { id: 2, name: "Series Funding" },
    { id: 3, name: "Series Funding" },
    { id: 4, name: "Series Funding" },
  ];

  const fundingAmounts = ["10k", "20k", "50k", "100k", "200k"];

  return (
    <div className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto">
      <p className="text-center text-[#6CB6FF] mb-8">You invoice, we pay</p>

      <p className="text-center text-[#2e3b7d] max-w-[800px] mx-auto mb-[120px] leading-relaxed ">
        The PipFarm dashboard shows when and how much you’re eligible to
        receive. When you’re ready to receive your profit share, the dashboard
        automatically generates an invoice and sends funds within 48 hours. Our
        payroll system handles all fees and taxes in your country so that you
        can focus on trading.
      </p>
      <h2 className="text-center text-[40px] md:text-[48px] font-violet-sans text-[#2e3b7d] mb-6">
        Scaling program
      </h2>

      <p className="text-center text-[#6CB6FF] mb-8">
        Grow your funding with our unique scaling program.
      </p>

      <p className="text-center text-[#2e3b7d] max-w-[800px] mx-auto mb-16 leading-relaxed">
        Each time you hit the profit target, you qualify for additional funding.
        After 90 days of trading, you could reach Series C and manage up to 250K
        funding.
      </p>

      <div className="space-y-6">
        {fundingSeries.map((series) => (
          <div
            key={series.id}
            className="bg-[#f8faff] rounded-[32px]  custom-shadow p-6 md:px-16 md:py-8"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="text-[#2e3b7d] text-center md:text-left mb-4 md:mb-0 w-full md:w-1/6">
                {series.name}
              </div>

              <div className="flex flex-wrap md:flex-nowrap justify-between w-full md:w-5/6 items-center md:items-start md:flex-row">
                {fundingAmounts.map((amount, index) => (
                  <div
                    key={index}
                    className="text-[#2e3b7d] text-center w-1/3 md:w-1/5 mb-4 md:mb-0"
                  >
                    {amount}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
