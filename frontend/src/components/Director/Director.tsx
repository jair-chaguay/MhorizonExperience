import { DIRECTOR_DATA } from "../../types/director.constants";

export const Director = () => {
  return (
    <section className="bg-blue-200 text-white py-25 w-full">
      <div className="max-w-310 mx-auto px-[5%]">
        
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12.5 lg:gap-20 items-center">
          
          <div className="relative" data-aos="fade-right">
            <div className="absolute -bottom-5 -left-5 w-37.5 h-37.5 bg-[#32A09C] rounded-2xl z-0 opacity-50" />
            <img 
              src={DIRECTOR_DATA.image.src} 
              alt={DIRECTOR_DATA.image.alt}
              className="w-full h-100 lg:h-125 object-cover rounded-2xl border-4 border-[#32A09C] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10"
            />
          </div>

          <div className="relative z-20" data-aos="fade-left">
            <i className="ph-fill ph-quotes block text-[3.5rem] text-[#32A09C] mb-4"></i>
                        
            <h2 className="text-white font-Jakarta font-bold text-[2.2rem] leading-[1.4] tracking-[-0.02em] mb-7.5">
              {DIRECTOR_DATA.quote}
            </h2>
            
            <p className="text-[#CBD5E1] font-Inter text-[1.1rem] leading-[1.7] mb-[1.2rem]">
              {DIRECTOR_DATA.message}
            </p>
            
            <div className="border-l-4 border-[#32A09C] pl-5 mt-7.5">
              <h4 className="text-white font-Jakarta font-bold text-[1.3rem] m-0 leading-[1.2]">
                {DIRECTOR_DATA.name}
              </h4>
              <span className="text-[#32A09C] font-Jakarta font-bold text-[0.9rem] uppercase tracking-[1px]">
                {DIRECTOR_DATA.position}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};