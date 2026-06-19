// Cta.tsx
import { CTA_DATA } from '../../types/contacto.constants';
import {motion} from "framer-motion"
import { ArrowRight } from 'lucide-react';
import { useModal } from '../ModalContext';


export const Cta = () => {
  const { heading, description, primaryButton, whatsappButton } = CTA_DATA;
  const {openModal} = useModal();

  return (
    <section className="py-24 px-6 md:px-12 bg-dark text-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-brand opacity-20" 
        style={{ backgroundImage: 'radial-gradient(circle at 50% -20%, #32a09c 0%, transparent 60%)' }}
      ></div>
      
      <motion.div 
      initial={{opacity:0, scale:0.9}}
      whileInView={{opacity:1, scale:1}}
      transition={{duration:0.6}}
      className="max-w-3xl mx-auto relative z-10 rev-scale">
        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          {heading.main} <br/>
          <span className="text-brand inline-block hover:scale-105 transition-transform cursor-default">
            {heading.highlight}
          </span>
        </h2>
        
        <p className="text-slate-400 text-lg mb-10">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={()=> (openModal("General"))}
            className="bg-brand cursor-pointer duration-300 hover:bg-brandHover text-white font-display font-bold text-sm py-4 px-8 rounded-md transition-all shadow-[0_4px_20px_rgba(50,160,156,0.4)] hover:shadow-[0_8px_30px_rgba(50,160,156,0.6)] hover:-translate-y-1 flex justify-center items-center gap-2"
          >
            {primaryButton.text} 
            <span className="material-symbols-outlined text-sm">
              <ArrowRight/>
            </span>
            
          </button>
          
          <a 
            href={whatsappButton.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-display font-bold text-sm py-4 px-8 rounded-md transition-colors flex justify-center items-center"
          >
            {whatsappButton.text}
          </a>
        </div>
      </motion.div>
    </section>
  );
};