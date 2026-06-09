import {HERO_IMAGES, HERO_CONTENT} from "../../types/hero.constants";
import {useBackgroundRotator} from "../../hooks/useBackgroundRotator";

export const HeroN = () => {
  const currentImage = useBackgroundRotator(HERO_IMAGES, 4000);

  return (
    <section className = "relative pt-50 px-0 pb-35 bg-blue-200 overflow-hidden flex items-center min-h-[95vh]">
      
      <div className= "absolute inset-0 bg-cover bg-center blur-2 scale-105 z-0 transition-all duration-1000 ease-in-out"
        style = {{backgroundImage: `url(${currentImage})`}}
      ></div>
      
      <div className="absolute inset-0 bg-linear-to-b from-blue-200 to-[#171E27D9]  z-10"></div>
      <div className="container mx-auto px-[5%] max-w-310 relative z-20 ">
        <div 
          className="max-w-225 mx-auto text-center flex flex-col items-center" 
          data-aos="fade-up" 
        >
          
          <span className="inline-block font-bold text-[0.85rem] uppercase tracking-0.5 text-[#6EE7E1] mb-3.75 ">{HERO_CONTENT.overline}</span>
          
          <h1 className="text-white mb-5 font-extrabold text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.1] tracking-[-0.02em]">{HERO_CONTENT.titleMain} <br/> 
            <span className="text-[#6EE7E1]">{HERO_CONTENT.titleHighlight}</span> 
          </h1>

          <p className="text-[#CBD5E1] text-[1.25rem] mb-10 font-light leading-[1.6] max-w-187.5 text-center">
            {HERO_CONTENT.description}
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            <a href={HERO_CONTENT.primaryLink} className="inline-flex items-center justify-center gap-2.5 px-9 py-4 font-bold text-[1rem] rounded-2 transition-all duration-400 bg-[#32A09C] text-white border-[#32A09C] shadow-[0_8px_20px_-8px_#32A09C] hover:bg-[#247C79] hover:-translate-y-0.75 hover:shadow-[0_20px_40px_-10px_rgba(23,30,39,0.25)]">
              {HERO_CONTENT.btnPrimaryText} <i className="ph-bold ph-arrow-right"></i>            </a>
            <a 
              href={HERO_CONTENT.secondaryLink} 
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 font-['Plus_Jakarta_Sans'] font-bold text-[1rem] rounded-lg transition-all duration-400 cursor-pointer bg-transparent text-white border-2 border-white/40 hover:bg-white hover:text-blue-200 hover:-translate-y-0.75"
            >
              {HERO_CONTENT.btnSecondaryText}
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}
