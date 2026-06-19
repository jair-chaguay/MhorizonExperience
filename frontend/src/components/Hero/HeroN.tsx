import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HERO_CONTENT } from "../../types/hero.constants";
import { useModal } from '../ModalContext';

export const HeroN = () => {
   const {openModal} = useModal();
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center pt-32 pb-20 px-6 md:px-12 overflow-hidden bg-transparent">
      
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover object-center animate-bg-zoom opacity-40" alt="" />
        <div className="absolute inset-0 bg-linear-to-b from-white/70 via-white/80 to-transparent"></div>
      </div>
      
      <div className="absolute top-1/4 right-1/4 w-160 h-160 bg-brand/5 rounded-full blur-[120px] animate-float-slow pointer-events-none z-0"></div>
      
      <div className="max-w-360 mx-auto w-full relative z-20">
        <div className="max-w-4xl">
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight text-dark"
          >
            {HERO_CONTENT.titleMain}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-slate-600 text-xl md:text-2xl mb-10 max-w-3xl leading-relaxed"
          >
            {HERO_CONTENT.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-wrap items-center gap-6"
          >
            <button onClick={()=> openModal("Inscripción General")} 
            className="bg-brand hover:bg-brandHover text-white font-body font-medium text-base py-3 px-6 rounded-md transition-all shadow-[0_4px_15px_rgba(50,160,156,0.4)] hover:shadow-[0_8px_25px_rgba(50,160,156,0.5)] hover:-translate-y-1 duration-300 cursor-pointer">
              {HERO_CONTENT.btnPrimaryText}
            </button>
            <a href={HERO_CONTENT.primaryLink} className="text-slate-700 hover:text-brand font-body font-medium text-base py-3 px-4 transition-colors flex items-center gap-2 group">
              {HERO_CONTENT.descriptionLink} 
              <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};