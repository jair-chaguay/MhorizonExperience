import { CONTACT_DATA } from '../../types/contacto.constants';
import { motion } from 'framer-motion';
export const Contacto = () => {
  const { bgImage, header, contactItems, whatsapp, form } = CONTACT_DATA;

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-12 bg-center bg-cover"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm z-0 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10"
      >
        <div className="lg:col-span-5">
          <p className="text-brand font-bold tracking-widest text-xs uppercase mb-3">
            {header.badge}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-dark tracking-tight mb-6 leading-tight">
            {header.title}
          </h2>
          <p className="text-slate-500 text-lg mb-10 font-light">
            {header.description}
          </p>

          <div className="space-y-8 mb-10">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300 cursor-default">
                  <div className="w-12 h-12 bg-white rounded-md shadow-md flex items-center justify-center text-brand border border-slate-100 shrink-0">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {item.subtitle}
                    </p>
                    <p className="font-display font-bold text-dark text-lg">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <a href={whatsapp.url} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1ebb57] text-white font-display font-bold text-sm py-4 px-8 rounded-md transition-all shadow-md hover:-translate-y-1 inline-flex items-center gap-3">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.15 1.59 5.96L0 24l6.32-1.66a11.88 11.88 0 0 0 5.75 1.47h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.47-8.42zM12.08 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.75.98 1-3.65-.24-.38a9.86 9.86 0 0 1-1.51-5.25c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.98 2.89a9.8 9.8 0 0 1 2.89 6.98c0 5.45-4.43 9.89-9.85 9.89zm5.42-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.22 1.35.19 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" /></svg>
            {whatsapp.text}
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-white rounded-xl p-10 md:p-14 shadow-xl border border-slate-100">
            <h3 className="font-display text-2xl font-bold text-dark mb-2">{form.title}</h3>
            <p className="text-slate-500 text-sm mb-8">{form.description}</p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fname" className="block text-xs font-bold text-slate-700 mb-2">Nombre</label>
                  <input type="text" id="fname" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="lname" className="block text-xs font-bold text-slate-700 mb-2">Apellido</label>
                  <input type="text" id="lname" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all" placeholder="Tu apellido" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-2">Correo Electrónico</label>
                <input type="email" id="email" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all" placeholder="tu@correo.com" />
              </div>

              <div>
                <label htmlFor="tel" className="block text-xs font-bold text-slate-700 mb-2">Teléfono / WhatsApp</label>
                <input type="tel" id="tel" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all" placeholder="+593 99 000 0000" />
              </div>

              <div>
                <label htmlFor="modalidad" className="block text-xs font-bold text-slate-700 mb-2">Programa de Interés</label>
                <select id="modalidad" defaultValue="" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 text-slate-600 transition-all">
                  <option value="" disabled>Selecciona una opción…</option>
                  {form.programOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <button type="button" id="formBtn" className="w-full bg-brand hover:bg-brandHover text-white font-display font-bold py-4 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 mt-2">
                {form.buttonText}
              </button>

              <p className="text-center text-xs text-slate-400 mt-4">
                {form.disclaimer}
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};