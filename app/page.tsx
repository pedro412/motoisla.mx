import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const features = [
  {
    title: "Equipo certificado",
    description: "Cascos y accesorios con certificaciones DOT y ECE 22.06.",
  },
  {
    title: "Asesoría real",
    description: "Te ayudamos a elegir talla, tipo de casco y equipo correcto.",
  },
  {
    title: "Convenios empresariales",
    description:
      "Paquetes y precios especiales para repartidores, flotillas y compras institucionales.",
  },
];

const dualPaths = [
  {
    title: "Para motociclistas",
    bullets: [
      "Cascos integrales, abatibles y abiertos",
      "Opciones económicas y premium",
      "Promos mensuales",
      "Atención personalizada en tienda",
    ],
    cta: { label: "Ver promociones", href: "/promos" },
  },
  {
    title: "Para empresas e instituciones",
    bullets: [
      "Paquetes para repartidores",
      "Descuentos por volumen",
      "Abastecimiento continuo",
      "Atención formal y directa",
    ],
    cta: { label: "Ver convenios", href: "/convenios" },
  },
];

const products = [
  "Cascos certificados",
  "Intercomunicadores",
  "Guantes",
  "Impermeables",
  "Botas (sobre pedido)",
];

const promosPreview = [
  "🎁 Descuento en cascos seleccionados",
  "🧤 Combo de seguridad (casco + guantes)",
  "🎧 Precio especial en intercomunicadores",
];

const badges = [
  "Certificaciones (DOT / ECE 22.06)",
  "Ubicación física",
  "Atención local",
  "Marcas reconocidas",
];

export default function Home() {
  const whatsappGeneral = `${SITE_CONFIG.whatsapp.link}?text=${encodeURIComponent(
    SITE_CONFIG.whatsapp.messages.general,
  )}`;
  const whatsappConvenios = `${SITE_CONFIG.whatsapp.link}?text=${encodeURIComponent(
    SITE_CONFIG.whatsapp.messages.convenios,
  )}`;

  return (
    <div className="grid-accent">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#0B0B0B] via-[#111827] to-[#0B0B0B] p-6 sm:p-8 lg:p-12">
          <div className="absolute inset-0 opacity-60 blur-3xl" aria-hidden>
            <div className="absolute inset-0 bg-gradient-to-br from-[#E53935]/25 via-transparent to-[#14B8A6]/25" />
          </div>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2DD4BF] ring-1 ring-white/10">
                Ciudad del Carmen
              </p>
              <h1 className="heading text-4xl font-bold leading-tight sm:text-5xl">
                Equipo certificado para motociclistas y flotillas en Ciudad del
                Carmen
              </h1>
              <p className="max-w-2xl text-lg text-[#E5E7EB]">
                Seguridad real, asesoría honesta y convenios para empresas,
                repartidores e instituciones.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={whatsappGeneral}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E53935] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#E53935]/40 transition hover:bg-[#C62828]"
                >
                  Hablar por WhatsApp
                </a>
                <a
                  href={whatsappConvenios}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2DD4BF] px-6 py-3 text-sm font-semibold text-[#2DD4BF] transition hover:border-white hover:text-white"
                >
                  Solicitar convenio
                </a>
              </div>
              <p className="text-sm text-[#E5E7EB]">
                Visítanos: Calle Francisco Villa 6, a un costado del ADO.
              </p>
            </div>
            <div className="card relative overflow-hidden border-white/15 bg-white/10 p-6 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E53935]/20 via-transparent to-[#14B8A6]/20" />
              <div className="relative space-y-4">
                <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-[#E5E7EB] backdrop-blur">
                  <p className="font-semibold text-white">
                    Tienda lista para equiparte
                  </p>
                  <p className="text-[#E5E7EB]">
                    Cascos, intercomunicadores, guantes e impermeables con stock
                    actualizado.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm text-[#E5E7EB]">
                  <div className="rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur">
                    <p className="text-xs uppercase tracking-wide text-[#C4CDD5]">
                      Empresas
                    </p>
                    <p className="font-semibold text-white">Convenios activos</p>
                    <p className="text-xs text-[#C4CDD5]">Repartidores y flotillas</p>
                  </div>
                  <div className="rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur">
                    <p className="text-xs uppercase tracking-wide text-[#C4CDD5]">
                      Atención
                    </p>
                    <p className="font-semibold text-white">Asesoría 1:1</p>
                    <p className="text-xs text-[#C4CDD5]">Te ayudamos a elegir</p>
                  </div>
                  <div className="rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur">
                    <p className="text-xs uppercase tracking-wide text-[#C4CDD5]">
                      Seguridad
                    </p>
                    <p className="font-semibold text-white">Certificación DOT/ECE</p>
                    <p className="text-xs text-[#C4CDD5]">Recomendaciones claras</p>
                  </div>
                  <div className="rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur">
                    <p className="text-xs uppercase tracking-wide text-[#C4CDD5]">
                      Ubicación
                    </p>
                    <p className="font-semibold text-white">Calle Francisco Villa 6</p>
                    <p className="text-xs text-[#C4CDD5]">A un costado del ADO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value props */}
        <section className="space-y-8">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.2em] text-[#9CA3AF]">
              Lo que nos mueve
            </p>
            <h2 className="heading text-3xl font-bold">
              Seguridad real y servicio cercano
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="card p-5">
                <h3 className="heading text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-[#D1D5DB]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Dual path */}
        <section className="grid gap-6 lg:grid-cols-2">
          {dualPaths.map((path) => (
            <div key={path.title} className="card p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">
                    {path.title.includes("Empresas") ? "B2B" : "Bikers"}
                  </p>
                  <h3 className="heading text-2xl font-semibold text-white">
                    {path.title}
                  </h3>
                </div>
                <div className="h-10 w-10 rounded-full bg-white/5" />
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[#D1D5DB]">
                {path.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#2DD4BF]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={path.cta.href}
                className="mt-5 inline-flex items-center text-sm font-semibold text-[#2DD4BF] transition hover:text-white"
              >
                {path.cta.label} →
              </Link>
            </div>
          ))}
        </section>

        {/* Products */}
        <section className="space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.2em] text-[#9CA3AF]">
              Catálogo base
            </p>
            <h2 className="heading text-3xl font-bold">
              Equipo esencial para rodar seguro
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div key={product} className="card flex flex-col justify-between p-5">
                <div>
                  <h3 className="heading text-xl font-semibold text-white">
                    {product}
                  </h3>
                  <p className="mt-2 text-sm text-[#D1D5DB]">
                    Consulta disponibilidad y promociones en tienda o por
                    WhatsApp.
                  </p>
                </div>
              </div>
            ))}
            <div className="card flex flex-col justify-center gap-3 p-5">
              <p className="text-sm text-[#D1D5DB]">
                Asesoría personalizada para elegir talla, certificación y
                accesorios correctos según tu ruta diaria.
              </p>
              <a
                href={whatsappGeneral}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#E53935] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#C62828]"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Promos preview */}
        <section className="card p-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#9CA3AF]">
                Promos del mes
              </p>
              <h2 className="heading text-2xl font-semibold text-white">
                Promociones activas
              </h2>
            </div>
            <Link
              href="/promos"
              className="inline-flex items-center justify-center rounded-full border border-[#2DD4BF] px-4 py-2 text-sm font-semibold text-[#2DD4BF] transition hover:border-white hover:text-white"
            >
              Ver todas las promociones
            </Link>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {promosPreview.map((promo) => (
              <div key={promo} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-[#E5E7EB]">
                {promo}
              </div>
            ))}
          </div>
        </section>

        {/* Badges */}
        <section className="space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.2em] text-[#9CA3AF]">
              Confianza
            </p>
            <h2 className="heading text-3xl font-bold">
              Una tienda local con estándares profesionales
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {badges.map((badge) => (
              <div
                key={badge}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white"
              >
                {badge}
              </div>
            ))}
          </div>
          <p className="max-w-2xl text-sm text-[#D1D5DB]">
            Moto Isla: seguridad, estilo y asesoría real.
          </p>
        </section>

        {/* Location */}
        <section className="card relative overflow-hidden p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-[#E53935]/10 via-transparent to-[#14B8A6]/10" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-[#9CA3AF]">
                Ubicación
              </p>
              <h2 className="heading text-3xl font-bold">
                Visítanos en Ciudad del Carmen
              </h2>
              <p className="text-sm text-[#D1D5DB]">{SITE_CONFIG.address}</p>
              <p className="text-sm text-[#D1D5DB]">
                WhatsApp: {SITE_CONFIG.whatsapp.number}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={whatsappGeneral}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#E53935] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#E53935]/30 transition hover:bg-[#C62828]"
              >
                Escríbenos por WhatsApp
              </a>
              <a
                href="https://maps.google.com/?q=Calle+Francisco+Villa+6,+Ciudad+del+Carmen"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-[#2DD4BF] transition hover:text-white"
              >
                Ver en mapa →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
