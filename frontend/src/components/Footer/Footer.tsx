// src/components/Footer.tsx
import { FOOTER_DATA } from '../../types/ctFooter';

export const Footer = () => {
  return (
    <footer className="bg-[#171E27] text-[#94A3B8] pt-[80px] pb-[30px] w-full">
      <div className="max-w-[1240px] mx-auto px-[5%]">
        
        {/* Grid Principal del Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-[50px] lg:gap-[60px] border-b border-white/10 pb-[50px] mb-[30px]">
          
          {/* Columna 1: Logo y Descripción */}
          <div>
            <img 
              src={FOOTER_DATA.logoSrc} 
              alt={FOOTER_DATA.logoAlt} 
              className="h-[50px] brightness-0 invert mb-[25px] object-contain" 
            />
            <p className="max-w-full lg:max-w-[85%] font-Inter leading-[1.7] m-0">
              {FOOTER_DATA.description}
            </p>
          </div>
          
          {/* Columna 2: Navegación */}
          <div>
            <h4 className="text-white font-Jakarta font-bold text-[1.1rem] mb-[20px] tracking-[1px]">
              Navegación
            </h4>
            <ul className="list-none p-0 m-0 space-y-[12px]">
              {FOOTER_DATA.navLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-[#94A3B8] hover:text-[#32A09C] transition-all duration-300 inline-block hover:translate-x-[5px]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-white font-Jakarta font-bold text-[1.1rem] mb-[20px] tracking-[1px]">
              Contáctanos
            </h4>
            <ul className="list-none p-0 m-0 space-y-[12px]">
              {FOOTER_DATA.contactLinks.map((item, idx) => (
                <li key={idx} className="font-Inter">
                  {item.isLink ? (
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`transition-all duration-300 inline-block hover:translate-x-[5px] ${item.highlight ? 'text-[#32A09C] font-semibold' : 'text-[#94A3B8] hover:text-[#32A09C]'}`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Derechos y Redes Sociales */}
        <div className="flex justify-between items-center flex-wrap gap-[20px]">
          <p className="m-0 text-[0.95rem] font-Inter">
            {FOOTER_DATA.copyright}
          </p>
          <div className="flex gap-[15px] text-[1.5rem]">
            {FOOTER_DATA.socials.map((social, idx) => (
              <a key={idx} href={social.href} className="text-[#64748B] transition-all duration-300 hover:text-[#32A09C] hover:-translate-y-[2px]">
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};