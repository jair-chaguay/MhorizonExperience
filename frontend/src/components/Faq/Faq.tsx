// src/components/Faq.tsx
import { useState } from 'react';
import { FAQ_HEADER, FAQ_DATA } from '../../types/faq.constants';

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-360 mx-auto">

      <div className="text-center mb-16">
        <p className="text-brand font-bold tracking-widest text-xs uppercase mb-3">{FAQ_HEADER.overline}</p>
        <h2 className="font-display text-4xl font-extrabold text-dark tracking-tight mb-4">{FAQ_HEADER.title}</h2>
        <p className="text-slate-500 font-light">{FAQ_HEADER.subtitle}</p>
      </div>

      <div className="max-w-200 mx-auto mt-10" data-aos="fade-up" data-aos-delay="100">

        {FAQ_DATA.map((faq, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={faq.id}
              className={`mb-3.75 overflow-hidden transition-all duration-300 rounded-2xl border-2 shadow-[0_5px_15px_rgba(0,0,0,0.05)]
                  ${isActive
                  ? "border-[#32A09C] bg-linear-to-b from-white to-[rgba(50,160,156,0.02)] shadow-[0_15px_30px_rgba(50,160,156,0.15)]"
                  : "border-transparent bg-white"
                }`}
            >
              <div
                className="p-[25px_30px] bg-blue-200 cursor-pointer flex justify-between items-center font-Jakarta font-bold text-white text-[1.1rem]"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}

                <div className={`w-10 h-10 rounded-full flex justify-center items-center text-[1.2rem] shrink-0 transition-transform duration-300
                    ${isActive
                    ? "bg-[#515858] text-white rotate-45"
                    : "bg-[#F4F7F9] text-[#475569] rotate-0"
                  }`}
                >
                  <i className="ph-bold ph-plus"></i>
                </div>
              </div>

              <div
                className={`grid transition-all duration-300 ease-in-out text-[#bac1cc]
                    ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                  `}
              >
                <div className="overflow-hidden bg-blue-200">
                  <p className="px-7.5 pb-6.25 pt-2.5 m-0 font-['Inter'] leading-[1.7]">
                    {faq.answer}
                  </p>
                </div>
              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
};