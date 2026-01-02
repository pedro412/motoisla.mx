import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Accesorios para motociclistas en Ciudad del Carmen",
  description:
    "Guantes, intercomunicadores, impermeables y botas para motociclistas en Ciudad del Carmen. Atención local y asesoría.",
  alternates: {
    canonical: "/accesorios",
  },
  openGraph: {
    title: "Accesorios para motociclistas en Ciudad del Carmen",
    description:
      "Guantes, intercomunicadores, impermeables y botas para motociclistas en Ciudad del Carmen. Atención local y asesoría.",
    images: ["/logo.png"],
  },
};

const accessories = [
  {
    title: "Guantes",
    detail: "Protección para ciudad y carretera con distintos niveles de refuerzo.",
  },
  {
    title: "Intercomunicadores",
    detail: "Comunicación segura en ruta y asesoría para instalación.",
  },
  {
    title: "Impermeables",
    detail: "Equipo contra lluvia para repartidores y uso diario.",
  },
  {
    title: "Botas",
    detail: "Opciones sobre pedido según disponibilidad.",
  },
];

export default function AccesoriosPage() {
  const whatsappLink = `${SITE_CONFIG.whatsapp.link}?text=${encodeURIComponent(
    SITE_CONFIG.whatsapp.messages.general,
  )}`;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-[#9CA3AF]">Accesorios</p>
          <h1 className="heading text-4xl font-bold">
            Accesorios para motociclistas en Ciudad del Carmen
          </h1>
          <p className="text-lg text-[#D1D5DB]">
            Complementa tu equipo con accesorios de seguridad y confort. Te orientamos según tu
            ruta, clima y tipo de moto.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#E53935] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#C62828]"
            >
              Cotizar por WhatsApp
            </a>
            <Link
              href="/promos"
              className="inline-flex items-center justify-center rounded-full border border-[#2DD4BF] px-6 py-3 text-sm font-semibold text-[#2DD4BF] transition hover:border-white hover:text-white"
            >
              Ver promociones
            </Link>
          </div>
        </div>
        <div className="card p-6">
          <h2 className="heading text-2xl font-semibold text-white">Lo más buscado</h2>
          <ul className="mt-4 space-y-3 text-sm text-[#D1D5DB]">
            {accessories.map((item) => (
              <li key={item.title} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#2DD4BF]" />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {accessories.map((item) => (
          <div key={item.title} className="card p-5">
            <h3 className="heading text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-[#D1D5DB]">{item.detail}</p>
          </div>
        ))}
      </section>

      <section className="card p-6">
        <h2 className="heading text-2xl font-semibold text-white">Atención local</h2>
        <p className="mt-2 text-sm text-[#D1D5DB]">
          Visítanos en {SITE_CONFIG.city} para ver disponibilidad, tallas y compatibilidades.
        </p>
        <a
          href={SITE_CONFIG.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center text-sm font-semibold text-[#2DD4BF] transition hover:text-white"
        >
          Ver ubicación en mapa →
        </a>
      </section>
    </div>
  );
}
