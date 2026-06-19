import { motion } from 'framer-motion';
import { MODALITIES_DATA } from '../../types/modalidades.constants';
import { useModal } from '../ModalContext';

export const Modalidades = () => {
  const { header, modalities } = MODALITIES_DATA;
  const {openModal} = useModal();

  return (
    <section id="modalities" className="py-24 bg-dark px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 animated-grid pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-360 mx-auto relative z-10">
        
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
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            {header.title}
          </h2>
          <p className="text-slate-400 font-light">
            {header.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {modalities.map((modality) => (
            <motion.div 
              key={modality.id} 
              initial={{ opacity: 0, x: modality.direction }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white rounded-xl p-10 md:p-12 text-blue-200 shadow-2xl hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(50,160,156,0.4)] transition-all duration-300 relative overflow-hidden group"
            >
              <div className={`absolute w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 ${modality.blobPosition}`}></div>
              
              <div className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-sm w-fit mb-6 relative z-10">
                {modality.badge}
              </div>
              
              <h3 className="font-display text-3xl font-bold mb-4 relative z-10">
                {modality.title}
              </h3>
              
              <p className="text-blue-200/90 text-sm leading-relaxed mb-8 font-light relative z-10">
                {modality.description}
              </p>
              
              <ul className="space-y-4 mb-10 text-sm font-medium relative z-10">
                {modality.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-sm bg-brand/70"></div> 
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
              onClick={()=> openModal(modality.modalTarget)}
              className="bg-brand/90 text-white font-display font-bold text-sm py-4 px-8 rounded-md inline-block hover:bg-brand transition-all relative z-10 shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer duration-300">
                {modality.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};