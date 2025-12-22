export const SITE_CONFIG = {
  name: "Moto Isla",
  city: "Ciudad del Carmen",
  address:
    "Calle Francisco Villa 6, a un costado del ADO, Ciudad del Carmen, Campeche",
  whatsapp: {
    number: "+52 938 108 2435",
    link: "https://wa.me/529381082435",
    messages: {
      general: "Hola Moto Isla, quiero información y promociones 🙌",
      convenios:
        "Hola Moto Isla, quiero solicitar un convenio para mi empresa. Somos ___ personas. ¿Me apoyas con paquetes y precios?",
      cotizacion: "Hola Moto Isla, quiero cotizar: ___",
    },
  },
  forms: {
    // Placeholder Formspree endpoint; replace with production endpoint when available.
    endpoint: "https://formspree.io/f/motoisla",
  },
  social: {
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
  },
};

export const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Convenios", href: "/convenios" },
  { label: "Promos", href: "/promos" },
  { label: "Guía", href: "/guia" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Contacto", href: "/contacto" },
];
