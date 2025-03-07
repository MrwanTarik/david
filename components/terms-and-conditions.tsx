'use client'
import termsContent from './content/terms'
import AOS from 'aos';
import { useEffect } from 'react';

const TermsAndConditions = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="py-8 md:py-12 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto">
      <h2 data-aos="fade-up" data-aos-duration="500" className="text-center text-[40px] md:text-[48px] lg:text-[56px] font-violet-sans mb-8 md:mb-12">
        <span className="text-[#6CB6FF]">Terms </span>
        <span className="text-[#2e3b7d]">And Conditions</span>
      </h2>
      <div className="text-white mx-auto">
        {termsContent.map((item, index) => {
          const { type, value, items } = item;
          switch(type) {
            case 'text':
              return <p data-aos="fade-in" data-aos-delay={`${index * 100}ms`} key={index} className="text-[#2e3b7d] text-[16px]  whitespace-pre-wrap mb-4">{value}</p>;
            case 'h1':
              return <h1 data-aos="fade-in" data-aos-delay={`${index * 100}ms`} key={index} className="text-[16px] font-bold font-inter text-[#2e3b7d] mb-4">{value}</h1>;
            case 'h2':
              return <h2 data-aos="fade-in" data-aos-delay={`${index * 100}ms`} key={index} className="text-[16px] font-bold font-inter text-[#2e3b7d] mb-4">{value}</h2>;
            case 'bullet-list':
              return (
                <ul data-aos="fade-in" data-aos-delay={`${index * 100}ms`} key={index} className="list-none space-y-3 ml-8 mb-8">
                  {items?.map((item, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      className="text-[#2e3b7d] text-[16px]leading-[28px] pl-4 relative"
                    >
                      <span className="absolute left-0 text-[#6CB6FF]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  )
}

export default TermsAndConditions