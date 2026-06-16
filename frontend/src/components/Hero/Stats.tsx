import { motion } from 'framer-motion';
import { STAT_ITEMS } from "../../types/stats.constants";

export const Stats = () => {
  return (
    <div className="w-full bg-blue-200 border-y border-white/5 relative z-20">
      <div className="max-w-360 mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">

        {STAT_ITEMS.map((item) => {
          const IconComponent = item.icon;
          
          return (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
              className="flex items-center gap-4 py-6 md:px-8"
            >
              <div className="w-12 h-12 rounded-md bg-brand/10 flex items-center justify-center text-brand shrink-0 transition-transform hover:scale-110 hover:bg-brand/20 duration-300">
                <IconComponent className="w-6 h-6" />
              </div>

              <div>
                <div className="font-display font-bold text-white text-sm">
                  {item.title}
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mt-1">
                  {item.subtitle}
                </div>
              </div>
            </motion.div>
          );
        })}
        
      </div>
    </div>
  );
};