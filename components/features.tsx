import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Scaling program",
    description:
      "We're looking to fund career traders, so we reward traders who meet targets with additional funding rounds.",
    iconSrc: "/assets/icons/11.svg",
  },
  {
    title: "1:30 leverage",
    description:
      "Trade with up to 1:30 leverage on most products without any exposure restrictions holding you back.",
    iconSrc: "/assets/icons/22.svg",
  },
  {
    title: "$500k max funding",
    description:
      "Your account scales in increments of your initial funding up to $500k. Keep smashing targets to reach maximum funding.",
    iconSrc: "/assets/icons/33.svg",
  },
  {
    title: "1 Stage evaluation",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris nec faucibus hac aliquam egestas. A non in eleifend massa nisi.",
    iconSrc: "/assets/icons/44.svg",
  },
  {
    title: "cTrader platform",
    description:
      "Your account scales in increments of your initial funding up to $500k. Keep smashing targets to reach maximum funding.",
    iconSrc: "/assets/icons/55.svg",
  },
  {
    title: "No add-ons",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris nec faucibus hac aliquam egestas. A non in eleifend massa nisi.",
    iconSrc: "/assets/icons/66.svg",
  },
  {
    title: "Any Strategy",
    description:
      "Your account scales in increments of your initial funding up to $500k. Keep smashing targets to reach maximum funding.",
    iconSrc: "/assets/icons/77.svg",
  },
  {
    title: "Superb conditions",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris nec faucibus hac aliquam egestas. A non in eleifend massa nisi.",
    iconSrc: "/assets/icons/88.svg",
  },
];

const bottomFeature = {
  title: "90% profit share",
  description:
    "Lorem ipsum dolor sit amet consectetur. Mauris nec faucibus hac aliquam egestas. A non in eleifend massa nisi.",
  iconSrc: "/assets/icons/99.svg",
};

export default function FeaturesGrid() {
  return (
    <div className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto">
      <h2 
        data-aos="fade-down"
        className="text-center text-[32px] md:text-[40px] lg:text-[48px] font-violet-sans mb-8 md:mb-12"
      >
        <span className="text-[#6CB6FF]">PipFarm</span>
        <span className="text-[#2E3B7D]"> in a nutshell</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <FeatureCard
              title={feature.title}
              description={feature.description}
              iconSrc={feature.iconSrc}
            />
          </div>
        ))}
      </div>

      {/* Bottom centered card */}
      <div className="mt-8 md:mt-8 md:w-1/2 mx-auto">
        <FeatureCard
          title={bottomFeature.title}
          description={bottomFeature.description}
          iconSrc={bottomFeature.iconSrc}
        />
      </div>
    </div>
  );
}
