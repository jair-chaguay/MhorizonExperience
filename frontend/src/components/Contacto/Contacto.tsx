import { CONTACT_DATA } from '../../types/contacto.constants';

export const Contacto = () => {
  const { bgImage, header, contactItems, whatsapp, form } = CONTACT_DATA;

  return (
    <section 
      id="contact" 
      className="relative py-24 px-6 md:px-12  bg-fixed bg-center bg-cover" 
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm z-0 pointer-events-none"></div>
      
      <div className="max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* Contact Info Column */}
        <div className="lg:col-span-5 rev-l">
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
            {contactItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300 cursor-default">
                <div className="w-12 h-12 bg-white rounded-md shadow-md flex items-center justify-center text-brand border border-slate-100 shrink-0">
                  <span className="material-symbols-outlined">{item.icon}</span>
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
            ))}
          </div>
          
          {/* WhatsApp Button */}
          <a 
            href={whatsapp.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1ebb57] text-white font-display font-bold text-sm py-4 px-8 rounded-md transition-all shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.5)] hover:-translate-y-1 inline-flex items-center gap-3"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>
            {whatsapp.text}
          </a>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7 rev-r">
          <div className="bg-white rounded-xl p-10 md:p-14 shadow-2xl border border-slate-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-shadow duration-500">
            <h3 className="font-display text-2xl font-bold text-dark mb-2">
              {form.title}
            </h3>
            <p className="text-slate-500 text-sm mb-8">
              {form.description}
            </p>
            
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
        
      </div>
    </section>
  );
};