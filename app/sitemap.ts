import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://motoisla.mx";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cascos`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/accesorios`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/convenios`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/promos`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/guia`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/guia/casco-salva-vida`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/guia/moto-no-es-problema`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/guia/ciudad-del-carmen-paraiso-inversionistas`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/quienes-somos`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
    },
  ];
}
