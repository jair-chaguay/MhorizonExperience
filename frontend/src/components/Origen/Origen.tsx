import { ORIGEN_DATA } from "../../types/origen.constants"

export const Origen = () => {
  return (
    <section id="origen" className="py-30 w-full bg-white">
      <div className="max-w-310 mx-auto px-[5%]">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12.5 lg:gap-20 items-center">
          
          <div data-aos="fade-right">
            <span className="inline-block font-Jakarta font-bold text-[0.85rem] uppercase tracking-[2px] text-[#32A09C] mb-3.75">
              {ORIGEN_DATA.overline}
            </span>
            
            <h2 className="text-[#0F172A] font-Jakarta font-bold text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.2] tracking-[-0.02em] mb-6">
              {ORIGEN_DATA.title}
            </h2>
            
            <div className="text-[#475569] font-Inter text-[1.1rem] leading-[1.7] space-y-[1.2rem]">
              <p>
                Nuestra historia comienza con <strong className="font-semibold text-[#0F172A]">MHORIZON</strong>, firma corporativa especializada en llevar el área tributaria de empresas nacionales y multinacionales de alto nivel.
              </p>
              <p>
                Durante años, notamos una brecha en el mercado: la educación tradicional no prepara a los jóvenes ni a los colaboradores para los retos fiscales del día a día. <strong className="font-semibold text-[#0F172A]">MHORIZON Experience</strong> nace para cerrar esa brecha.
              </p>
              <p>
                Aquí no enseñamos teoría abstracta. Te transferimos nuestro *know-how* corporativo para que domines los impuestos de manera práctica, ideal si buscas tu primera oportunidad o respaldar tu experiencia empírica.
              </p>
            </div>
            
            <a 
              href={ORIGEN_DATA.linkPortal} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 font-Jakarta font-bold text-[1rem] rounded-lg transition-all duration-400 bg-blue-200 text-white mt-5 hover:bg-black hover:-translate-y-0.75 hover:shadow-[0_20px_40px_-10px_rgba(23,30,39,0.25)]"
            >
              {ORIGEN_DATA.btnText} <i className="ph-bold ph-arrow-up-right"></i>
            </a>
          </div>

          <div className="relative" data-aos="fade-left">
            <img 
              src={ORIGEN_DATA.image.src} 
              alt={ORIGEN_DATA.image.alt}
              className="w-full h-100 lg:h-125 object-cover rounded-2xl shadow-[0_20px_40px_-10px_rgba(23,30,39,0.25)] relative z-10"
            />
            
            <div className="hidden lg:block absolute top-6.25 -right-6.25 w-full h-full border-[3px] border-[#32A09C] rounded-2xl z-0" />
          </div>

        </div>
      </div>
    </section>
  )
}
