
export interface ContactItem {
  id: string;
  icon: string;
  subtitle: string;
  title: string;
}

export interface FormOption {
  value: string;
  label: string;
}

export interface ContactSectionData {
  bgImage: string;
  header: {
    badge: string;
    title: string;
    description: string;
  };
  contactItems: ContactItem[];
  whatsapp: {
    url: string;
    text: string;
  };
  form: {
    title: string;
    description: string;
    programOptions: FormOption[];
    buttonText: string;
    disclaimer: string;
  };
}

export const CONTACT_DATA: ContactSectionData = {
  bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  header: {
    badge: "Conversemos",
    title: "Es momento de tomar el control.",
    description: "Déjanos tus datos. Nuestro equipo te contactará para explicarte a fondo los programas, la metodología por módulos y los precios especiales de lanzamiento."
  },
  contactItems: [
    {
      id: "phone",
      icon: "call",
      subtitle: "Llámanos o escríbenos",
      title: "+593 99 000 0000"
    },
    {
      id: "location",
      icon: "location_on",
      subtitle: "Escuela Práctica",
      title: "Guayaquil, Ecuador"
    },
    {
      id: "email",
      icon: "mail",
      subtitle: "Correo de admisiones",
      title: "admisiones@mhorizon.com"
    }
  ],
  whatsapp: {
    url: "https://wa.me/59300000000",
    text: "Hablar por WhatsApp"
  },
  form: {
    title: "Pide el Plan de Estudios",
    description: "Completamente sin compromiso. Te asesoramos y te indicamos cuándo empieza el próximo módulo.",
    programOptions: [
      { value: "tributario", label: "Formación Tributaria Aplicada" },
      { value: "nofinancieros", label: "Finanzas para No Financieros" }
    ],
    buttonText: "Solicitar Asesoría y Costos →",
    disclaimer: "Al enviar aceptas que nos comuniquemos contigo. Sin spam, nunca."
  }
};





export interface CtaSectionData {
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  primaryButton: {
    text: string;
    icon: string;
  };
  whatsappButton: {
    text: string;
    url: string;
  };
}

export const CTA_DATA: CtaSectionData = {
  heading: {
    main: "El verdadero conocimiento no está en los libros.",
    highlight: "Está en la práctica diaria."
  },
  description: "Inscríbete en el primer módulo y empieza a transformar tus decisiones hoy. Cupos limitados por aula.",
  primaryButton: {
    text: "Asegurar mi lugar",
    icon: "arrow_forward"
  },
  whatsappButton: {
    text: "Consultar por WhatsApp",
    url: "https://wa.me/59300000000"
  }
};