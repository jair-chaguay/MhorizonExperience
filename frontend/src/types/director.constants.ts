import { Megaphone } from 'lucide-react';

export interface TestimonialData {
  quote: string;
  author: {
    name: string;
    role: string;
    image: string;
    imageAlt: string;
    icon: string;
  };
}

export const TESTIMONIAL_DATA = {
  quote: "Existen muchos cursos teóricos, pero el mercado corporativo no busca títulos colgados en la pared. Busca personas capaces de identificar riesgos, cuidar el dinero y tomar mejores decisiones empresariales. Eso es exactamente lo que enseñamos aquí.",
  author: {
    name: "Milton Montecé",
    role: "Director Académico",
    image: "/images/Milton_Montece.png", // Asegúrate de que esta ruta sea correcta en public/
    imageAlt: "Milton Montecé",
    icon: Megaphone
  }
};