// src/components/Beneficios.tsx
import { BENEFICIOS_HEADER, BENEFICIOS_DATA } from "../../types/beneficios.constants";
export const Beneficios = () => {
  return (
    <section id="beneficios" className="py-30 w-full bg-[#F4F7F9]">
      <div className="max-w-310 mx-auto px-[5%]">        
        <div className="text-center" data-aos="fade-up">
          <span className="inline-block font-Jakarta font-bold text-[0.85rem] uppercase tracking-[2px] text-[#32A09C] mb-3.75">
            {BENEFICIOS_HEADER.overline}
          </span>
          <h2 className="text-[#0F172A] font-Jakarta font-bold text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.2] tracking-[-0.02em] mb-6">
            {BENEFICIOS_HEADER.title}
          </h2>
          <p className="max-w-175 mx-auto text-[#475569] font-Inter text-[1.1rem] leading-[1.7]">
            {BENEFICIOS_HEADER.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 mt-12.5">
          
          {BENEFICIOS_DATA.map((item) => (
            <div 
              key={item.id}
              className="group flex gap-5 items-start bg-white p-7.5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(23,30,39,0.08)] border border-[#171E270D] transition-all duration-400 cursor-default hover:-translate-y-1.25 hover:border-[#32A09C] hover:shadow-[0_20px_40px_-10px_rgba(23,30,39,0.25)]"
              data-aos="zoom-in" 
              data-aos-delay={item.delay}
            >              
              <div className="w-13.75 h-13.75 bg-[rgba(50,160,156,0.1)] text-[#32A09C] rounded-xl flex justify-center items-center text-[1.8rem] shrink-0 transition-all duration-400 group-hover:bg-[#32A09C] group-hover:text-white">
                <i className={item.icon}></i>
              </div>              
              <div>
                <h4 className="text-[#0F172A] font-Jakarta font-bold text-[1.15rem] leading-[1.2] tracking-[-0.02em] mb-2">
                  {item.title}
                </h4>
                <p className="m-0 text-[#475569] font-Inter text-[0.95rem] leading-[1.7]">
                  {item.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};