// src/components/Contacto.tsx
import React from 'react';
import { CONTACTO_INFO, CONTACTO_FORM } from '../../types/contacto.constants';

export const Contacto = () => {
  return (
    <section id="contacto" className="py-[120px] w-full bg-[#F4F7F9]">
      <div className="max-w-[1240px] mx-auto px-[5%]">
        
        {/* Grid de Contacto: 1 columna en móvil -> 2 columnas en lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[80px] items-center">
          
          {/* Columna Izquierda: Información */}
          <div data-aos="fade-right">
            <span className="inline-block font-['Plus_Jakarta_Sans'] font-bold text-[0.85rem] uppercase tracking-[2px] text-[#32A09C] mb-[15px]">
              {CONTACTO_INFO.overline}
            </span>
            <h2 className="text-[#0F172A] font-['Plus_Jakarta_Sans'] font-extrabold text-[2.8rem] leading-[1.2] tracking-[-0.02em] mb-[1.5rem]">
              {CONTACTO_INFO.title}
            </h2>
            <p className="text-[#475569] font-['Inter'] text-[1.15rem] leading-[1.7] mb-[40px]">
              {CONTACTO_INFO.description}
            </p>
            
            {/* Bloque: WhatsApp */}
            <div className="flex gap-[20px] items-center mb-[25px]">
              <i className={`${CONTACTO_INFO.phone.icon} text-[2.5rem] text-[#25D366]`}></i>
              <div>
                <span className="block text-[0.95rem] text-[#475569] font-['Inter']">
                  {CONTACTO_INFO.phone.label}
                </span>
                <strong className="text-[#171E27] font-extrabold text-[1.2rem] font-['Plus_Jakarta_Sans']">
                  {CONTACTO_INFO.phone.number}
                </strong>
              </div>
            </div>

            {/* Bloque: Ubicación */}
            <div className="flex gap-[20px] items-center">
              <i className={`${CONTACTO_INFO.location.icon} text-[2.5rem] text-[#32A09C]`}></i>
              <div>
                <span className="block text-[0.95rem] text-[#475569] font-['Inter']">
                  {CONTACTO_INFO.location.label}
                </span>
                <strong className="text-[#171E27] font-extrabold text-[1.2rem] font-['Plus_Jakarta_Sans']">
                  {CONTACTO_INFO.location.address}
                </strong>
              </div>
            </div>
          </div>
          
          {/* Columna Derecha: Formulario */}
          <div 
            className="bg-white p-[30px] md:p-[50px] rounded-[16px] shadow-[0_25px_50px_rgba(0,0,0,0.15)] border-t-[6px] border-[#32A09C] relative"
            data-aos="fade-left"
          >
            <form className="text-left">
              {/* Nombre */}
              <div className="mb-[20px]">
                <label className="block mb-[8px] font-semibold text-[0.9rem] text-[#171E27] font-['Inter']">
                  Nombre y Apellido
                </label>
                <input 
                  type="text" 
                  placeholder={CONTACTO_FORM.namePlaceholder} 
                  required
                  className="w-full p-[15px] border border-[#CBD5E1] rounded-[8px] font-['Inter'] text-[1rem] bg-[#F8FAFC] transition-all duration-300 outline-none focus:border-[#32A09C] focus:bg-white"
                />
              </div>

              {/* Correo */}
              <div className="mb-[20px]">
                <label className="block mb-[8px] font-semibold text-[0.9rem] text-[#171E27] font-['Inter']">
                  Correo Electrónico
                </label>
                <input 
                  type="email" 
                  placeholder={CONTACTO_FORM.emailPlaceholder} 
                  required
                  className="w-full p-[15px] border border-[#CBD5E1] rounded-[8px] font-['Inter'] text-[1rem] bg-[#F8FAFC] transition-all duration-300 outline-none focus:border-[#32A09C] focus:bg-white"
                />
              </div>

              {/* Teléfono */}
              <div className="mb-[20px]">
                <label className="block mb-[8px] font-semibold text-[0.9rem] text-[#171E27] font-['Inter']">
                  Teléfono (WhatsApp)
                </label>
                <input 
                  type="tel" 
                  placeholder={CONTACTO_FORM.phonePlaceholder} 
                  required
                  className="w-full p-[15px] border border-[#CBD5E1] rounded-[8px] font-['Inter'] text-[1rem] bg-[#F8FAFC] transition-all duration-300 outline-none focus:border-[#32A09C] focus:bg-white"
                />
              </div>

              {/* Select Modalidad */}
              <div className="mb-[20px]">
                <label className="block mb-[8px] font-semibold text-[0.9rem] text-[#171E27] font-['Inter']">
                  Modalidad preferida
                </label>
                <select 
                  required 
                  defaultValue=""
                  className="w-full p-[15px] border border-[#CBD5E1] rounded-[8px] font-['Inter'] text-[1rem] bg-[#F8FAFC] transition-all duration-300 outline-none focus:border-[#32A09C] focus:bg-white"
                >
                  <option value="" disabled>Selecciona una opción...</option>
                  {CONTACTO_FORM.modalities.map((mod, idx) => (
                    <option key={idx} value={mod}>{mod}</option>
                  ))}
                </select>
              </div>
              
              {/* Botón Enviar */}
              <button 
                type="button" 
                className="w-full bg-[#32A09C] text-white p-[18px] text-[1.1rem] font-bold font-['Plus_Jakarta_Sans'] rounded-[8px] mt-[10px] transition-all duration-400 shadow-[0_8px_20px_-8px_#32A09C] hover:bg-[#247C79] hover:-translate-y-[3px] hover:shadow-[0_20px_40px_-10px_rgba(23,30,39,0.25)]"
              >
                {CONTACTO_FORM.btnSubmit}
              </button>

              {/* Separador */}
              <div className="text-center my-[15px] text-[#94A3B8] text-[0.9rem] font-['Inter']">
                {CONTACTO_FORM.separatorText}
              </div>

              {/* Botón WhatsApp */}
              <a 
                href={CONTACTO_INFO.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white p-[16px] text-[1rem] font-bold font-['Plus_Jakarta_Sans'] rounded-[8px] flex justify-center items-center gap-[10px] transition-all duration-400 hover:bg-[#1EBE53] hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(37,211,102,0.3)]"
              >
                <i className="ph-bold ph-whatsapp-logo text-[1.3rem]"></i> 
                {CONTACTO_FORM.btnWhatsapp}
              </a>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};