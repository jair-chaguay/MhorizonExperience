import { useEffect, useState } from "react";
import { NOTICIAS_HEADER } from "../../types/noticias.constants"; import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import api from "../../api/axios"; 

interface NewsItem {
  id: string | number;
  image: string;
  tag: string;
  title: string;
  link: string;
}

export const Noticias = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        setLoading(true);
        const response = await api.get('/informativo');
        
        const lista = response.data.informativos || [];
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mapeados = lista.slice(0, 3).map((info: any) => ({
          id: info.id,
          image: info.imagen_portada_url || "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", 
          tag: info.resolucion_oficial || "Actualidad", 
          title: info.titulo,
          link: `https://prueba.miltonmontece.com/novedades-sub/${info.id}` 
        }));
        setNewsData(mapeados);
      } catch (error) {
        console.error("Error al obtener noticias:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <section id="notices" className="py-24 bg-dark px-6 md:px-12 border-y border-slate-800">
      <div className="max-w-360 mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-brand font-bold tracking-widest text-xs uppercase mb-3">
            {NOTICIAS_HEADER.overline}
          </p>
          <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-4">
            {NOTICIAS_HEADER.title}
          </h2>
          <p className="text-slate-400 font-light">
            {NOTICIAS_HEADER.description}
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsData.length > 0 ? (
              newsData.map((news, index) => (
                <motion.div 
                  key={news.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }} 
                  className="bg-white rounded-xl p-6 border border-slate-100 hover:border-brand shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group cursor-pointer"
                >
                  <div className="h-48 rounded-md overflow-hidden mb-6 bg-slate-200 relative">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <span className="text-brand text-[10px] font-bold tracking-widest uppercase mb-3 line-clamp-1">
                    {news.tag}
                  </span>
                  
                  <h3 className="font-display text-xl font-bold text-dark mb-4 group-hover:text-brand transition-colors grow line-clamp-3">
                    {news.title}
                  </h3>
                  
                  <a 
                    href={news.link} 
                    className="text-brand font-bold text-sm flex items-center gap-1 uppercase tracking-wider group/link mt-auto"
                  >
                    Leer artículo 
                    <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                  </a>

                </motion.div>
              ))
            ) : (
              <p className="col-span-full text-center text-slate-500 italic">
                No hay informativos publicados aún.
              </p>
            )}
          </div>
        )}

      </div>
    </section>
  );
};