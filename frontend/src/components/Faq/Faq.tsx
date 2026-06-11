// src/components/Faq.tsx
import { useState } from 'react';
import { FAQ_HEADER, FAQ_DATA } from '../../types/faq.constants';

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-[120px] w-full bg-white">
      <div className="max-w-[1240px] mx-auto px-[5%]">
        
        {/* Cabecera */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-[#0F172A] font-Jakarta font-bold text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.2] tracking-[-0.02em] m-0">
            {FAQ_HEADER}
          </h2>
        </div>
        
        <div className="max-w-[800px] mx-auto mt-[40px]" data-aos="fade-up" data-aos-delay="100">
          
          {FAQ_DATA.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div 
                key={faq.id}
                className={`mb-[15px] overflow-hidden transition-all duration-300 rounded-[16px] border-2 shadow-[0_5px_15px_rgba(0,0,0,0.05)]
                  ${isActive 
                    ? "border-[#32A09C] bg-gradient-to-b from-white to-[rgba(50,160,156,0.02)] shadow-[0_15px_30px_rgba(50,160,156,0.15)]" 
                    : "border-transparent bg-white"
                  }`}
              >
                <div 
                  className="p-[25px_30px] cursor-pointer flex justify-between items-center font-Jakarta font-bold text-[#0F172A] text-[1.1rem]"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  
                  {/* Ícono de Plus/Cruz */}
                  <div className={`w-[40px] h-[40px] rounded-full flex justify-center items-center text-[1.2rem] shrink-0 transition-transform duration-300
                    ${isActive 
                      ? "bg-[#32A09C] text-white rotate-45" 
                      : "bg-[#F4F7F9] text-[#475569] rotate-0"
                    }`}
                  >
                    <i className="ph-bold ph-plus"></i>
                  </div>
                </div>

                <div 
                  className={`grid transition-all duration-300 ease-in-out text-[#475569]
                    ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="px-[30px] pb-[25px] pt-[10px] m-0 font-['Inter'] leading-[1.7]">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};