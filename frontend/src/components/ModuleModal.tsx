import React from 'react';

interface ModuleModalProps {
  isOpen: boolean;
  moduleName: string;
  onClose: () => void;
}

export const ModuleModal: React.FC<ModuleModalProps> = ({ isOpen, moduleName, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-[#171E27D9] z-[2000] flex items-center justify-center backdrop-blur-[5px] p-[5%]"
      onClick={onClose}
    >
      <div 
        className="bg-white p-[30px] md:p-[50px] rounded-[16px] max-w-[500px] w-full relative shadow-[0_25px_50px_rgba(0,0,0,0.3)] animate-[fadeInUp_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer click dentro
      >
        <i 
          className="ph-bold ph-x absolute top-[20px] right-[20px] cursor-pointer text-[1.8rem] text-[#475569] hover:text-[#32A09C] transition-colors"
          onClick={onClose}
        ></i>
        
        <h3 className="mb-[15px] text-[#0F172A] font-['Plus_Jakarta_Sans'] font-extrabold text-[1.5rem] md:text-[1.8rem]">
          Temario: {moduleName}
        </h3>
        <p className="mb-[25px] text-[1rem] font-['Inter'] text-[#475569]">
          Déjanos tus datos o escríbenos directo a WhatsApp para enviarte toda la información de este módulo.
        </p>
        
        <form className="mb-[20px]">
          <div className="mb-[15px]">
            <input type="text" placeholder="Tu Nombre Completo" required className="w-full p-[15px] border border-[#CBD5E1] rounded-[8px] bg-[#F8FAFC] outline-none focus:border-[#32A09C]" />
          </div>
          <div className="mb-[15px]">
            <input type="email" placeholder="Tu Correo Electrónico" required className="w-full p-[15px] border border-[#CBD5E1] rounded-[8px] bg-[#F8FAFC] outline-none focus:border-[#32A09C]" />
          </div>
          <div className="mb-[15px]">
            <input type="tel" placeholder="Tu WhatsApp" required className="w-full p-[15px] border border-[#CBD5E1] rounded-[8px] bg-[#F8FAFC] outline-none focus:border-[#32A09C]" />
          </div>
          <button type="button" className="w-full bg-[#32A09C] text-white p-[16px] rounded-[8px] font-bold font-['Plus_Jakarta_Sans'] hover:bg-[#247C79] transition-colors">
            Enviar Solicitud
          </button>
        </form>
        
        <div className="text-center my-[20px] text-[#94A3B8] text-[0.9rem]">
          — o escríbenos directamente —
        </div>
        
        <a href="https://wa.me/59300000000" target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white p-[16px] rounded-[8px] font-bold font-['Plus_Jakarta_Sans'] flex justify-center items-center gap-[8px] hover:bg-[#1EBE53] transition-colors">
          <i className="ph-bold ph-whatsapp-logo text-[1.3rem]"></i> Contactar por WhatsApp
        </a>
      </div>
    </div>
  );
};