import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { LocationMap } from "@/components/maps/location-map";

export const metadata: Metadata = {
  title: "Cascos y accesorios para motociclistas en Ciudad del Carmen",
  description:
    "Venta de cascos certificados, guantes, intercomunicadores e impermeables en Ciudad del Carmen. Asesoría en tienda y promociones.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cascos y accesorios para motociclistas en Ciudad del Carmen",
    description:
      "Venta de cascos certificados, guantes, intercomunicadores e impermeables en Ciudad del Carmen. Asesoría en tienda y promociones.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cascos y accesorios para motociclistas en Ciudad del Carmen",
    description:
      "Venta de cascos certificados, guantes, intercomunicadores e impermeables en Ciudad del Carmen. Asesoría en tienda y promociones.",
    images: ["/logo.png"],
  },
  keywords: [
    "cascos en Ciudad del Carmen",
    "accesorios para motociclistas",
    "cascos certificados",
    "intercomunicadores",
    "guantes para moto",
    "impermeables para motociclistas",
  ],
};

const features = [
  {
    title: "Equipo certificado",
    description: "Cascos y accesorios con certificaciones DOT y ECE 22.06.",
    image: "/images/certificados.png",
  },
  {
    title: "Asesoría real",
    description: "Te ayudamos a elegir talla, tipo de casco y equipo correcto.",
    image: "/images/asesoria.png",
  },
  {
    title: "Convenios empresariales",
    description:
      "Paquetes y precios especiales para repartidores, flotillas y compras institucionales.",
    image: "/images/convenio.png",
  },
];

const dualPaths = [
  {
    title: "Para motociclistas",
    image: "/images/forbikers.jpg",
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
    image: "/images/forcompany.jpg",
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
  { title: "Cascos certificados", image: "/images/cascos.jpg" },
  { title: "Intercomunicadores", image: "/images/intercomunicadores.jpg" },
  { title: "Guantes", image: "/images/guantes.jpg" },
  { title: "Impermeables", image: "/images/impermeable.jpg" },
  { title: "Botas (sobre pedido)", image: "/images/botas.jpg" },
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
  const whatsappGeneral = `${
    SITE_CONFIG.whatsapp.link
  }?text=${encodeURIComponent(SITE_CONFIG.whatsapp.messages.general)}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: SITE_CONFIG.name,
    url: "https://motoisla.mx",
    image: "https://motoisla.mx/logo.png",
    telephone: SITE_CONFIG.whatsapp.number,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Francisco Villa 6",
      addressLocality: SITE_CONFIG.city,
      addressRegion: "Campeche",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    areaServed: "Ciudad del Carmen, Campeche",
    hasMap: SITE_CONFIG.mapsUrl,
    sameAs: [SITE_CONFIG.social.facebook, SITE_CONFIG.social.instagram],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:00",
        closes: "16:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cascos y accesorios para motociclistas",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Cascos certificados",
        },
        {
          "@type": "OfferCatalog",
          name: "Guantes para moto",
        },
        {
          "@type": "OfferCatalog",
          name: "Intercomunicadores",
        },
        {
          "@type": "OfferCatalog",
          name: "Impermeables",
        },
        {
          "@type": "OfferCatalog",
          name: "Botas",
        },
      ],
    },
  };

  return (
    <div className="grid-accent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero full-width background */}
      <section className="relative isolate overflow-hidden border-b border-white/5 bg-white/5">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Moto Isla tienda y equipamiento"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/95 via-[#0B0B0B]/80 to-[#0B0B0B]/70" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2DD4BF] ring-1 ring-white/10">
              Cascos certificados • Asesoría en tienda
            </p>
            <h1 className="heading text-4xl font-bold leading-tight sm:text-5xl">
              Equípate para rodar seguro en Ciudad del Carmen
            </h1>
            <p className="max-w-2xl text-lg text-[#D1D5DB]">
              Cascos DOT/ECE 22.06, guantes, intercomunicadores e impermeables.
              Te ayudamos a elegir talla y equipo ideal.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/promos"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E53935] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#E53935]/30 transition hover:bg-[#C62828]"
              >
                Ver promociones
              </a>
              <a
                href={whatsappGeneral}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2DD4BF] px-6 py-3 text-sm font-semibold text-[#2DD4BF] transition hover:border-white hover:text-white"
              >
                Cotizar por WhatsApp
              </a>
            </div>
            <Link
              href="/convenios"
              className="inline-flex items-center text-sm font-semibold text-[#9CA3AF] transition hover:text-white"
            >
              ¿Eres empresa? Ver convenios →
            </Link>
            <p className="text-sm text-[#9CA3AF]">
              Visítanos: Calle Francisco Villa 6, a un costado del ADO.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pt-16">
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
          <div className="grid gap-0 md:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className="card relative flex min-h-[260px] flex-col items-center justify-center gap-3 rounded-none px-6 pb-4 pt-2 text-center shadow-none"
                style={{
                  boxShadow: "none",
                  borderRadius: 0,
                  backgroundColor: "transparent",
                }}
              >
                {idx === 1 && (
                  <>
                    <span
                      className="absolute inset-y-12 left-0 w-px bg-white/10"
                      aria-hidden
                    />
                    <span
                      className="absolute inset-y-12 right-0 w-px bg-white/10"
                      aria-hidden
                    />
                  </>
                )}
                <div className="flex flex-col items-center gap-3">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={200}
                    height={200}
                    className="h-48 w-48 rounded-md object-cover"
                  />
                  <h3 className="heading text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#D1D5DB]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dual path */}
        <section className="grid gap-6 lg:grid-cols-2">
          {dualPaths.map((path) => (
            <div
              key={path.title}
              className="card relative overflow-hidden p-6 bg-transparent"
            >
              <Image
                src={path.image}
                alt={path.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="absolute inset-0 z-0 object-cover"
                priority
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#0B0B0B]/90 via-[#0B0B0B]/75 to-[#0B0B0B]/70" />
              <div className="relative z-20 flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">
                    {path.title.includes("Empresas") ? "B2B" : "Bikers"}
                  </p>
                  <h3 className="heading text-2xl font-semibold text-white">
                    {path.title}
                  </h3>
                </div>
                <div className="h-10 w-10 rounded-full bg-white/10" />
              </div>
              <ul className="relative z-20 mt-4 space-y-2 text-sm text-[#D1D5DB]">
                {path.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#2DD4BF]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={path.cta.href}
                className="relative z-20 mt-5 inline-flex items-center text-sm font-semibold text-[#2DD4BF] transition hover:text-white"
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
              <div
                key={product.title}
                className="card relative overflow-hidden p-5"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, 50vw"
                  className="absolute inset-0 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/60 via-[#0B0B0B]/65 to-[#0B0B0B]/80" />
                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">
                      Producto
                    </p>
                    <h3 className="heading text-xl font-semibold text-white">
                      {product.title}
                    </h3>
                  </div>
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
              <div
                key={promo}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-[#E5E7EB]"
              >
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
      <section className="relative w-full overflow-hidden rounded-3xl border border-white/10">
        <div className="absolute inset-0 z-0">
          <LocationMap
            lat={SITE_CONFIG.geo.latitude}
            lng={SITE_CONFIG.geo.longitude}
            offsetXPercent={-0.22}
            className="h-full w-full"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/40" />
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#E53935]/15 via-transparent to-[#14B8A6]/15" />
        <div className="relative z-20 flex min-h-[420px] items-center">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl space-y-4">
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
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={whatsappGeneral}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#E53935] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#E53935]/30 transition hover:bg-[#C62828]"
                >
                  Escríbenos por WhatsApp
                </a>
                <a
                  href={SITE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-[#2DD4BF] transition hover:text-white"
                >
                  Ver en mapa →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
