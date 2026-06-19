import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UserRoundCheck } from 'lucide-react';
import { useModal } from './ModalContext';

export const InscriptionModal = () => {
  const { isModalOpen, selectedProgram, closeModal } = useModal();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      closeModal();
      setTimeout(() => setIsSubmitted(false), 300);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="fixed inset-0 z-100 flex items-center justify-center bg-dark/80 backdrop-blur-sm px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl p-8 md:p-10 w-full max-w-md relative shadow-2xl border border-slate-100"
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-8 h-8 bg-slate-100/50 rounded-md flex items-center justify-center text-slate-600 hover:bg-slate-200 hover:text-dark transition-colors"
            >
              <X size={16} />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-brand/10 rounded-md flex items-center justify-center text-brand mx-auto mb-4">
                <UserRoundCheck />
              </div>
              <h3 className="font-display font-bold text-2xl text-dark">Asegura tu Cupo</h3>
              <p className="text-xs text-slate-500 mt-2">
                Programa seleccionado: <span className="font-bold text-brand">{selectedProgram}</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                  placeholder="Nombre"
                />
                <input
                  type="text"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                  placeholder="Apellido"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                  placeholder="Correo electrónico"
                />
              </div>

              <div>
                <textarea
                  className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all resize-none"
                  rows={3}
                  placeholder="Mensaje o dudas..."
                ></textarea>
              </div>

              <div className="flex flex-col gap-3 mt-2">

                <button
                  type="submit"
                  className={`w-full text-white font-display font-bold py-3.5 rounded-md transition-all shadow-md hover:shadow-lg ${isSubmitted ? "bg-[#25D366] hover:bg-[#1ebb57]" : "bg-brand hover:bg-brandHover"
                    }`}
                >
                  {isSubmitted ? "✓ Solicitud Enviada" : "Enviar Solicitud"}
                </button>

                <a
                  href="https://wa.me/59300000000"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#1ebb57] text-white font-display font-bold py-3.5 rounded-md transition-all shadow-md hover:shadow-lg flex justify-center items-center gap-2"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.15 1.59 5.96L0 24l6.32-1.66a11.88 11.88 0 0 0 5.75 1.47h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.47-8.42zM12.08 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.75.98 1-3.65-.24-.38a9.86 9.86 0 0 1-1.51-5.25c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.98 2.89a9.8 9.8 0 0 1 2.89 6.98c0 5.45-4.43 9.89-9.85 9.89zm5.42-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.22 1.35.19 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                  </svg>
                  Contactar por WhatsApp
                </a>
              </div>
            </form>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};