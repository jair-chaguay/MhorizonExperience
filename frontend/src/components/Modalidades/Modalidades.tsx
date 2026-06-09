// src/components/Modalidades.tsx
import { MODALIDADES_HEADER, MODALIDADES_DATA } from "../../types/modalidades.constants";

export const Modalidades = () => {
  return (
    <section className="py-30 w-full bg-white">
      <div className="max-w-310 mx-auto px-[5%]">
        
        {/* Cabecera */}
        <div className="text-center" data-aos="fade-up">
          <span className="inline-block font-['Plus_Jakarta_Sans'] font-bold text-[0.85rem] uppercase tracking-[2px] text-[#32A09C] mb-3.75">
            {MODALIDADES_HEADER.overline}
          </span>
          <h2 className="text-[#0F172A] font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.2] tracking-[-0.02em] mb-6">
            {MODALIDADES_HEADER.title}
          </h2>
          <p className="max-w-175 mx-auto text-[#475569] font-['Inter'] text-[1.1rem] leading-[1.7]">
            {MODALIDADES_HEADER.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-15">
          
          {MODALIDADES_DATA.map((modality) => (
            <div 
              key={modality.id}
              className="bg-white p-[50px_40px] rounded-2xl text-center border border-[#171E2714] transition-all duration-400 shadow-[0_10px_40px_-10px_rgba(23,30,39,0.08)] hover:border-[#32A09C] hover:shadow-[0_20px_40px_-10px_rgba(23,30,39,0.25)] hover:-translate-y-1.25"
              data-aos={modality.aosType}
            >
              <div className="inline-block p-3.75 bg-[#32A09C1A] rounded-lg mb-6">
                <i className={`${modality.icon} text-[3.5rem] text-[#32A09C] block`}></i>
              </div>
              
              <h3 className="text-[#0F172A] font-['Plus_Jakarta_Sans'] font-extrabold text-[1.6rem] leading-[1.2] tracking-[-0.02em] mb-3.75">
                {modality.title}
              </h3>
              <p className="text-[#475569] font-['Inter'] text-[1rem] leading-[1.7] m-0">
                {modality.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};