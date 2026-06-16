import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { PROGRAMS_DATA } from '../../types/programaesp.constant';

export const ProgramaEsp = () => {
  const { header, programs } = PROGRAMS_DATA;

  return (
    <section id="programs" className="py-24 px-6 md:px-12 max-w-360 mx-auto overflow-hidden">
      
      {/* Header Animado */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16 max-w-2xl mx-auto"
      >
        <p className="text-brand font-bold tracking-widest text-xs uppercase mb-3">
          {header.badge}
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-dark tracking-tight mb-4">
          {header.title}
        </h2>
        <p className="text-slate-500 font-light">
          {header.description}
        </p>
      </motion.div>

      {/* Grid de Programas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {programs.map((program) => {
          const IconComponent = program.icon;

          return (
            <motion.div 
              key={program.id} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: program.delay, ease: "easeOut" }}
              className="bg-dark rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(50,160,156,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col group"
            >
              <div className="h-64 relative overflow-hidden bg-slate-200">
                <img 
                  src={program.image} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={program.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent"></div>
                <div className="absolute top-6 left-6 bg-brand text-white font-display text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-sm shadow-md">
                  {program.audience}
                </div>
              </div>
              
              <div className="p-10 flex flex-col grow relative">
                <div className="absolute top-0 right-10 -mt-8 w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  {program.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed grow mb-8 font-light">
                  {program.description}
                </p>
                
                <div className="flex items-center gap-4 border-t border-slate-800 pt-6">
                  <button className="bg-brand text-white font-display font-bold text-sm py-3 px-6 rounded-md hover:bg-brandHover transition-colors grow text-center shadow-md hover:shadow-lg">
                    Inscribirme
                  </button>
                  <a href="#" className="text-brand font-bold text-sm hover:text-white transition-colors flex items-center gap-1 group/btn">
                    Syllabus <Download className="w-4 h-4 group-hover/btn:translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};