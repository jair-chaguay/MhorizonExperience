import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ORIGEN_DATA, ORIGEN_DIFERENCIA } from '../../types/origen.constants';

export const Origen = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-360 mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-brand font-bold tracking-widest text-xs uppercase mb-3">
            {ORIGEN_DATA.overline}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-dark tracking-tight mb-6 leading-tight">
            {ORIGEN_DATA.title}
          </h2>
          
          <div className="space-y-4 text-slate-600 font-light leading-relaxed mb-8">
            {ORIGEN_DATA.paragraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph.text}
                {paragraph.bold && <strong className="font-semibold text-dark">{paragraph.bold}</strong>}
                {paragraph.suffix}
              </p>
            ))}
          </div>
          
          <a 
            href={ORIGEN_DATA.linkPortal} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand font-display font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-wider group"
          >
            {ORIGEN_DATA.btnText} 
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-dark rounded-xl p-10 md:p-12 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="text-brand text-xs font-bold tracking-widest uppercase mb-4">
            {ORIGEN_DIFERENCIA.overline}
          </div>
          <h3 className="font-display text-3xl font-bold text-white mb-8 leading-tight">
            {ORIGEN_DIFERENCIA.tituloDiferencia}
          </h3>
          
          <div className="space-y-6 relative z-10">
            {ORIGEN_DIFERENCIA.listas.map((item, index) => (
              <div key={index} className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="w-2 h-2 rounded-sm bg-brand mt-2 shrink-0 shadow-[0_0_10px_#32a09c]"></div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  <strong className="text-white font-semibold">{item.bold}</strong>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};