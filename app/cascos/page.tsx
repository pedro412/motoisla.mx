import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cascos certificados en Ciudad del Carmen",
  description:
    "Venta de cascos para motociclistas en Ciudad del Carmen: integrales, abatibles y abiertos con certificaciones DOT y ECE 22.06.",
  alternates: {
    canonical: "/cascos",
  },
  openGraph: {
    title: "Cascos certificados en Ciudad del Carmen",
    description:
      "Venta de cascos para motociclistas en Ciudad del Carmen: integrales, abatibles y abiertos con certificaciones DOT y ECE 22.06.",
    images: ["/logo.png"],
  },
};

const helmetTypes = [
  "Cascos integrales para máxima protección",
  "Cascos abatibles para ciudad y carretera",
  "Cascos abiertos para trayectos urbanos",
  "Tallas y ajuste guiado en tienda",
];

const certifications = ["DOT", "ECE 22.06"];

export default function CascosPage() {
  const whatsappLink = `${SITE_CONFIG.whatsapp.link}?text=${encodeURIComponent(
    SITE_CONFIG.whatsapp.messages.general,
  )}`;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-[#9CA3AF]">Cascos</p>
          <h1 className="heading text-4xl font-bold">
            Cascos certificados para motociclistas en Ciudad del Carmen
          </h1>
          <p className="text-lg text-[#D1D5DB]">
            Encuentra casco ideal con certificaciones y ajuste correcto. Te ayudamos a elegir
            talla, tipo y visor según tu ruta.
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
          <h2 className="heading text-2xl font-semibold text-white">Tipos de cascos</h2>
          <ul className="mt-4 space-y-3 text-sm text-[#D1D5DB]">
            {helmetTypes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#2DD4BF]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h3 className="heading text-2xl font-semibold text-white">Certificaciones</h3>
          <p className="mt-2 text-sm text-[#D1D5DB]">
            Trabajamos con cascos que cumplen normas internacionales para seguridad real.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-semibold text-white"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
        <div className="card p-6">
          <h3 className="heading text-2xl font-semibold text-white">Asesoría local</h3>
          <p className="mt-2 text-sm text-[#D1D5DB]">
            Visítanos en {SITE_CONFIG.city}. Te ayudamos a ajustar el casco y elegir la talla
            correcta para mayor comodidad.
          </p>
          <a
            href={SITE_CONFIG.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center text-sm font-semibold text-[#2DD4BF] transition hover:text-white"
          >
            Ver ubicación en mapa →
          </a>
        </div>
      </section>
    </div>
  );
}
