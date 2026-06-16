export const MODALITIES_DATA = {
  header: {
    badge: "Adaptado a ti",
    title: "Estudia a tu Ritmo",
    description: "Dos modalidades flexibles para que empieces a transformar tu perfil o tu negocio hoy mismo."
  },
  modalities: [
    {
      id: "presencial",
      badge: "Presencial · Guayaquil",
      title: "Experiencia Inmersiva",
      description: "Aprende físicamente en nuestra escuela. Aprovecha para construir relaciones de negocio, resolver dudas cara a cara con nuestros consultores y disfrutar de un entorno profesional.",
      features: [
        "Atención cercana (Grupos limitados)",
        "Networking valioso en los recesos",
        "Opciones de horarios diurnos y sabatinos"
      ],
      buttonText: "Reservar lugar presencial",
      modalTarget: "Presencial · Guayaquil",
      direction: -50, // Para la animación (viene de la izquierda)
      blobPosition: "-right-10 -top-10"
    },
    {
      id: "online",
      badge: "Online en Vivo",
      title: "Desde Cualquier Ciudad",
      description: "Perfecto si tus horarios son complicados o vives en otra ciudad. Accede al material, plantillas, clases grabadas o sesiones en vivo con el mismo nivel de exigencia práctica.",
      features: [
        "Acceso a nuestro campus virtual",
        "Descarga de todas las plantillas y recursos",
        "Sesiones de apoyo y foros de dudas"
      ],
      buttonText: "Reservar lugar online",
      modalTarget: "Online en Vivo",
      direction: 50, // Para la animación (viene de la derecha)
      blobPosition: "-left-10 -bottom-10"
    }
  ]
};