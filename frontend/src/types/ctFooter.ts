
export interface FooterLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  id: string;
  icon: string;
  label: string;
  href?: string;
}

export interface FooterData {
  brand: {
    name: string;
    description: string;
    corporateUrl: string;
    corporateText: string;
  };
  navigation: {
    title: string;
    links: FooterLink[];
  };
  contact: {
    title: string;
    info: ContactInfo[];
  };
  bottomBar: {
    copyright: string;
    privacyUrl: string;
    backedByUrl: string;
  };
}

export const FOOTER_DATA: FooterData = {
  brand: {
    name: "MHORIZON",
    description: "La Escuela Práctica de Control y Crecimiento Empresarial respaldada por la experiencia de consultoría corporativa de MHORIZON. Enseñamos lo que la empresa realmente exige.",
    corporateUrl: "https://www.mhorizon.com/",
    corporateText: "Visitar MHORIZON Corp."
  },
  navigation: {
    title: "Navegación",
    links: [
      { label: "¿Quiénes somos?", href: "#about" },
      { label: "Programas de Estudio", href: "#programs" },
      { label: "Beneficios", href: "#value-props" },
      { label: "Modalidades", href: "#modalities" },
      { label: "Preguntas Frecuentes", href: "#faq" }
    ]
  },
  contact: {
    title: "Contáctanos",
    info: [
      { id: "email", icon: "mail", label: "admisiones@mhorizon.com", href: "mailto:admisiones@mhorizon.com" },
      { id: "phone", icon: "phone_iphone", label: "+593 99 000 0000 (WhatsApp)", href: "https://wa.me/59300000000" },
      { id: "location", icon: "location_on", label: "Guayaquil, Ecuador" }
    ]
  },
  bottomBar: {
    copyright: "© 2026 MHORIZON Experience. Todos los derechos reservados.",
    privacyUrl: "#",
    backedByUrl: "https://www.mhorizon.com/"
  }
};