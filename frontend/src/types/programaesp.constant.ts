import { BarChart3, Lightbulb } from 'lucide-react';

// constants.ts

export interface Program {
  id: string;
  audience: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  modalTarget: string;
}

export interface ProgramsSectionData {
  header: {
    badge: string;
    title: string;
    description: string;
  };
  programs: Program[];
}

export const PROGRAMS_DATA = {
  header: {
    badge: "Programa de Estudio",
    title: "Programas Especializados",
    description: "Rutas formativas de 100 horas divididas en 5 módulos independientes. Avanza a tu ritmo, aprende haciendo y certifícate paso a paso.",
  },
  programs: [
    {
      id: "tributaria-aplicada",
      audience: "Para estudiantes y profesionales",
      title: "Programa de Formación Tributaria Aplicada",
      description: "Aprende impuestos desde cero y fortalece tu perfil profesional. Ideal para estudiantes, egresados, asistentes y quienes buscan dominar el IVA, retenciones, gastos deducibles y declaraciones con casos 100% reales.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
      icon: BarChart3,
      modalTarget: "Formación Tributaria Aplicada",
      delay: 0.2
    },
    {
      id: "finanzas-no-financieros",
      audience: "Para dueños y gerentes",
      title: "Finanzas, Impuestos y Control para No Financieros",
      description: "Entiende los números de tu negocio, protege tu rentabilidad y decide con seguridad. Diseñado para empresarios, dueños y gerentes que no son contadores pero necesitan dirigir su empresa sin puntos ciegos.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      icon: Lightbulb,
      modalTarget: "Finanzas para No Financieros",
      delay: 0.4
    }
  ]
};