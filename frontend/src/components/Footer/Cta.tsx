// src/components/Cta.tsx
import React from 'react';
import { CTA_DATA } from '../../types/ctFooter';
export const Cta = () => {
  return (
    <section className="bg-gradient-to-br from-[#32A09C] to-[#247C79] py-[120px] text-white text-center relative overflow-hidden w-full">
      
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute w-[300px] h-[300px] bg-white/10 rounded-full -top-[100px] -left-[100px] z-0" />
      <div className="absolute w-[500px] h-[500px] bg-[#171E27]/5 rounded-full -bottom-[200px] -right-[150px] z-0" />
      
      <div className="relative z-10 max-w-[800px] mx-auto px-[5%]" data-aos="zoom-in">
        <h2 className="text-white font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.2] tracking-[-0.02em] mb-[20px]">
          {CTA_DATA.titleMain} <br />
          {CTA_DATA.titleHighlight}
        </h2>
        <p className="mb-[40px] text-[1.25rem] font-light font-['Inter']">
          {CTA_DATA.description}
        </p>
        <a 
          href={CTA_DATA.btnLink} 
          className="inline-flex items-center justify-center gap-[10px] px-[50px] py-[20px] font-['Plus_Jakarta_Sans'] font-bold text-[1.15rem] rounded-[8px] transition-all duration-400 cursor-pointer bg-[#171E27] text-white shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:bg-black hover:-translate-y-[3px]"
        >
          {CTA_DATA.btnText}
        </a>
      </div>
    </section>
  );
};