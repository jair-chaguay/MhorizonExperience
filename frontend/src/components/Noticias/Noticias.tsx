import { NOTICIAS_HEADER, NOTICIAS_DATA } from "../../types/noticias.constants";

export const Noticias = () => {
  return (
    <section id="noticias" className="py-30 w-full bg-[#F4F7F9]">
      <div className="max-w-310 mx-auto px-[5%]">
        
        <div className="text-center" data-aos="fade-up">
          <span className="inline-block font-Jakarta font-bold text-[0.85rem] uppercase tracking-[2px] text-[#32A09C] mb-3.75">
            {NOTICIAS_HEADER.overline}
          </span>
          <h2 className="text-[#0F172A] font-Jakarta font-bold text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.2] tracking-[-0.02em] m-0">
            {NOTICIAS_HEADER.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7.5 mt-12.5">
          
          {NOTICIAS_DATA.map((news) => (
            <div 
              key={news.id}
              className="bg-blue-200 rounded-2xl overflow-hidden border border-white/5 transition-all duration-400 flex flex-col hover:border-[#32A09C] hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1.25"
              data-aos="fade-up" 
              data-aos-delay={news.delay}
            >
              <img 
                src={news.image} 
                alt={news.title} 
                className="h-50 w-full object-cover"
              />
              
              <div className="p-7.5 grow flex flex-col">
                <span className="text-[#32A09C] text-[0.8rem] font-bold uppercase tracking-[1px] mb-3 block">
                  {news.tag}
                </span>
                
                <h4 className="text-white font-Jakarta font-bold text-[1.15rem] leading-[1.3] mb-3.75 grow tracking-[-0.02em]">
                  {news.title}
                </h4>
                
                <a 
                  href={news.link} 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#32A09C] rounded-lg text-white text-[0.95rem] font-bold font-Jakarta transition-all duration-400 mt-3.75 hover:bg-[#32A09C] hover:-translate-y-0.75 hover:shadow-[0_10px_20px_rgba(50,160,156,0.3)]"
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