// constants.ts
import { Building2, BriefcaseBusiness, Wrench, ShieldCheck } from 'lucide-react';

export const HERO_CONTENT = {
  titleMain: "Aprende el control de tu empresa desde la práctica real.",
  description: "La Escuela Práctica de Control y Crecimiento Empresarial. Entiende tus números, domina los impuestos y toma decisiones seguras con el respaldo de una firma consultora activa.",
  btnPrimaryText: "Inscribirme hoy",
  btnSecondaryText: "Ver Módulos",
  primaryLink: "#programa",
  descriptionLink: "Ver los programas"
};

export const STAT_ITEMS = [
  {
    id: 1,
    icon: Building2,
    title: "Firma Consultora",
    subtitle: "MÁS DE 20 AÑOS DE RESPALDO",
    delay: 0.1 // Usaremos esto para Framer Motion
  },
  {
    id: 2,
    icon: BriefcaseBusiness,
    title: "Casos Reales",
    subtitle: "No enseñamos solo teoría",
    delay: 0.2
  },
  {
    id: 3,
    icon: Wrench,
    title: "Herramientas Listas",
    subtitle: "plantillas y matrices aplicables",
    delay: 0.3
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: "Certificación Modular",
    subtitle: "avanza a tu propio ritmo",
    delay: 0.4
  }
];