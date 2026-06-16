import { motion } from 'framer-motion';
import { TESTIMONIAL_DATA } from '../../types/director.constants';

export const Director = () => {
  const { quote, author } = TESTIMONIAL_DATA;
  const IconComponent = author.icon;

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-dark rounded-xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative border border-slate-800 shadow-[0_15px_40px_rgba(15,23,42,0.4)]"
      >
        
        {/* Comillas decorativas */}
        <span className="font-display absolute -top-8 -left-8 text-[200px] text-brand opacity-10 leading-none pointer-events-none">
          "
        </span>
        
        {/* Imagen animada (Scale) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-1/3 relative z-10 flex justify-center"
        >
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-lg overflow-hidden border-8 border-slate-800 shadow-xl relative group">
            <img 
              src={author.image} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              alt={author.imageAlt} 
            />
          </div>
        </motion.div>
        
        {/* Contenido animado (Viene desde la derecha) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="w-full md:w-2/3 relative z-10"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-8 leading-snug">
            "{quote}"
          </h2>
          
          <div className="flex items-center gap-4 bg-slate-800 w-fit pr-6 rounded-md border border-slate-700 shadow-md transform hover:translate-x-2 transition-transform duration-300">
            <div className="w-12 h-12 bg-brand rounded-md flex items-center justify-center text-white">
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <p className="font-display font-bold text-lg text-white">
                {author.name}
              </p>
              <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">
                {author.role}
              </p>
            </div>
          </div>
        </motion.div>
        
      </motion.div>
    </section>
  );
};