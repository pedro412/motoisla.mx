export const SITE_CONFIG = {
  name: "Moto Isla",
  city: "Ciudad del Carmen",
  address:
    "Calle Francisco Villa 6, a un costado del ADO, Ciudad del Carmen, Campeche",
  mapsUrl:
    "https://google.com/maps/place/Moto+Isla/@18.6445983,-91.8025863,15z/data=!4m6!3m5!1s0x85f107f82207ed09:0x6c0f6b2c893518ac!8m2!3d18.6448463!4d-91.8078981!16s%2Fg%2F11x38tr_64?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
  geo: {
    latitude: 18.6448463,
    longitude: -91.8078981,
  },
  hours: {
    weekdays: "09:00-19:00",
    weekends: "09:00-16:00",
  },
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
    facebook: "https://www.facebook.com/profile.php?id=61573542314248",
    instagram: "https://www.instagram.com/motoisla_cdc/",
  },
};

export const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Convenios", href: "/convenios" },
  { label: "Revista", href: "/guia" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Contacto", href: "/contacto" },
];
