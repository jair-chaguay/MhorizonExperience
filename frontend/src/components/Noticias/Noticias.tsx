// src/components/Noticias.tsx
import { NOTICIAS_HEADER, NOTICIAS_DATA } from "../../types/noticias.constants";

export const Noticias = () => {
  return (
    <section id="noticias" className="py-[120px] w-full bg-[#F4F7F9]">
      <div className="max-w-[1240px] mx-auto px-[5%]">
        
        <div className="text-center" data-aos="fade-up">
          <span className="inline-block font-['Plus_Jakarta_Sans'] font-bold text-[0.85rem] uppercase tracking-[2px] text-[#32A09C] mb-[15px]">
            {NOTICIAS_HEADER.overline}
          </span>
          <h2 className="text-[#0F172A] font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.2] tracking-[-0.02em] m-0">
            {NOTICIAS_HEADER.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mt-[50px]">
          
          {NOTICIAS_DATA.map((news) => (
            <div 
              key={news.id}
              className="bg-[#171E27] rounded-[16px] overflow-hidden border border-white/5 transition-all duration-400 flex flex-col hover:border-[#32A09C] hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:-translate-y-[5px]"
              data-aos="fade-up" 
              data-aos-delay={news.delay}
            >
              {/* Imagen del Artículo */}
              <img 
                src={news.image} 
                alt={news.title} 
                className="h-[200px] w-full object-cover"
              />
              
              {/* Contenido del Artículo */}
              <div className="p-[30px] flex-grow flex flex-col">
                <span className="text-[#32A09C] text-[0.8rem] font-bold uppercase tracking-[1px] mb-[12px] block">
                  {news.tag}
                </span>
                
                <h4 className="text-white font-['Plus_Jakarta_Sans'] font-extrabold text-[1.15rem] leading-[1.3] mb-[15px] flex-grow tracking-[-0.02em]">
                  {news.title}
                </h4>
                
                {/* Botón Leer Artículo */}
                <a 
                  href={news.link} 
                  className="inline-flex items-center justify-center gap-[8px] px-[24px] py-[12px] border border-[#32A09C] rounded-[8px] text-white text-[0.95rem] font-bold font-['Plus_Jakarta_Sans'] transition-all duration-400 mt-[15px] hover:bg-[#32A09C] hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(50,160,156,0.3)]"
                >
                  Leer artículo <i className="ph-bold ph-arrow-right"></i>
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};