import React from 'react';
import { PROGRAMA_HEADER, MODULES_DATA } from '../../types/programa.constants';
interface ProgramaProps {
  onOpenModal?: (moduleTitle: string) => void;
}

export const Programa: React.FC<ProgramaProps> = ({ onOpenModal }) => {
  return (
    <section id="programa" className="py-3' w-full bg-[#F4F7F9]">
      <div className="max-w-310 mx-auto px-[5%]">
        <div className="text-center mb-15" data-aos="fade-up">
          <span className="inline-block font-['Plus_Jakarta_Sans'] font-bold text-[0.85rem] uppercase tracking-[2px] text-[#32A09C] mb-3.75">
            {PROGRAMA_HEADER.overline}
          </span>
          <h2 className="text-[#0F172A] font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.2] tracking-[-0.02em] mb-6">
            {PROGRAMA_HEADER.title}
          </h2>
          <p className="max-w-175 mx-auto text-[#475569] font-['Inter'] text-[1.1rem] leading-[1.7]">
            {PROGRAMA_HEADER.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {MODULES_DATA.map((mod) => (
            <div 
              key={mod.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(23,30,39,0.08)] transition-all duration-400 border border-[#171E270D] flex flex-col hover:-translate-y-2.5 hover:shadow-[0_20px_40px_-10px_rgba(23,30,39,0.25)] hover:border-[#32A09C]"
              data-aos="fade-up" 
              data-aos-delay={mod.delay}
            >
              
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={mod.image} 
                  alt={mod.title} 
                  className="w-full h-full object-cover transition-transform duration-600 ease-in-out group-hover:scale-108"
                />
                <div className="absolute top-5 right-5 bg-white text-[#32A09C] w-11.25 h-11.25 flex justify-center items-center rounded-full font-['Plus_Jakarta_Sans'] font-extrabold text-[1.2rem] shadow-[0_5px_15px_rgba(0,0,0,0.15)] z-10">
                  {mod.id}
                </div>
              </div>
              
              <div className="p-[35px_30px] grow flex flex-col">
                <h4 className="text-[#32A09C] font-['Plus_Jakarta_Sans'] font-bold text-[1.3rem] mb-3.75 leading-[1.2] tracking-[-0.02em]">
                  {mod.title}
                </h4>
                
                <p className="text-[#475569] font-['Inter'] text-[1rem] leading-[1.6] mb-6.25 grow">
                  {mod.description}
                </p>
                
                {/* Botón */}
                <button 
                  onClick={() => onOpenModal && onOpenModal(mod.title)}
                  className="w-full bg-[#F4F7F9] text-[#32A09C] p-3.5 border border-[#E2E8F0] rounded-lg font-['Plus_Jakarta_Sans'] font-bold text-[1rem] transition-all duration-400 flex justify-center items-center gap-2 hover:bg-[#32A09C] hover:text-white hover:border-[#32A09C]"
                >
                  Ver temario y contactar <i className="ph-bold ph-caret-right"></i>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};