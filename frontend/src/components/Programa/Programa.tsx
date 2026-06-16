import { VALUE_PROPS_HEADER, VALUE_PROPS_DATA } from '../../types/programa.constants' 
import { motion } from 'framer-motion';

export const Programa = () => {
  return (
    <section id="value-props" className="py-24 bg-dark px-6 md:px-12 border-y border-slate-800 relative overflow-hidden">
      <div className="max-w-360 mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-brand font-bold tracking-widest text-xs uppercase mb-3">
            {VALUE_PROPS_HEADER.overline}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            {VALUE_PROPS_HEADER.title}
          </h2>
          <p className="text-slate-400 font-light">
            {VALUE_PROPS_HEADER.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUE_PROPS_DATA.map((item) => {
            const IconComponent = item.icon;
            
            return (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
                className="bg-white p-8 rounded-xl border border-slate-100 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 shadow-lg flex flex-col"
              >
                <div className="w-14 h-14 bg-brand/10 rounded-md flex items-center justify-center text-brand mb-6">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed grow font-light">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};