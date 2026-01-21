import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ciudad del Carmen: el paraíso para inversionistas con visión",
  description:
    "Por qué Carmen puede reinventarse con industrias de nicho, turismo y motociclismo como motor estratégico.",
  alternates: {
    canonical: "/guia/ciudad-del-carmen-paraiso-inversionistas",
  },
  openGraph: {
    title: "Ciudad del Carmen: el paraíso para inversionistas con visión",
    description:
      "Por qué Carmen puede reinventarse con industrias de nicho, turismo y motociclismo como motor estratégico.",
    url: "https://motoisla.mx/guia/ciudad-del-carmen-paraiso-inversionistas",
    type: "article",
    images: [
      {
        url: "https://motoisla.mx/images/articles/article-3.jpg",
        width: 1200,
        height: 630,
        alt: "Ciudad del Carmen como destino estratégico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ciudad del Carmen: el paraíso para inversionistas con visión",
    description:
      "Por qué Carmen puede reinventarse con industrias de nicho, turismo y motociclismo como motor estratégico.",
    images: ["https://motoisla.mx/images/articles/article-3.jpg"],
  },
};

export default function CiudadDelCarmenInversionistasPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <Link href="/guia" className="text-sm font-semibold text-[#2DD4BF] transition hover:text-white">
          ← Volver a la revista
        </Link>
        <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">Revista Moto Isla</p>
        <h1 className="heading text-4xl font-bold">
          Ciudad del Carmen: el paraíso para inversionistas con visión
        </h1>
        <p className="text-sm text-[#9CA3AF]">Publicado el 10 de enero de 2026 · {SITE_CONFIG.city}</p>
      </header>

      <div className="overflow-hidden rounded-3xl border border-white/10">
        <Image
          src="/images/articles/article-3.jpg"
          alt="Ciudad del Carmen como destino estratégico"
          width={1200}
          height={630}
          priority
          quality={75}
          sizes="(min-width: 1024px) 720px, 100vw"
          className="h-auto w-full object-cover"
        />
      </div>

      <article className="space-y-6 text-lg text-[#D1D5DB] leading-relaxed">
        <section className="space-y-4">
          <p>
            Durante décadas, Ciudad del Carmen fue sinónimo de petróleo, contratos y una economía que
            giraba casi exclusivamente alrededor de una sola industria. Ese modelo funcionó… hasta que
            dejó de hacerlo.
          </p>
          <p>
            Hoy, Carmen se encuentra en un punto crítico de su historia:{" "}
            <strong>
              seguir esperando el regreso de un pasado que ya no volverá, o construir un futuro distinto,
              más diverso y sostenible
            </strong>
            . Para quienes saben leer los cambios, este momento no es una crisis: es una oportunidad.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">El fin de una era… y el inicio de otra</h2>
          <p>
            El petróleo no va a desaparecer de un día para otro, pero su papel como motor absoluto de la
            economía local ya no es el mismo. Menos derrama, más centralización y un mercado global que
            avanza hacia nuevas energías han cambiado las reglas del juego.
          </p>
          <p>
            Las ciudades que han logrado reinventarse entendieron algo clave:{" "}
            <strong>no se trata de sustituir una industria por otra, sino de diversificar</strong>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">Carmen como isla estratégica</h2>
          <p>Ciudad del Carmen tiene características únicas que muchas ciudades no pueden replicar:</p>
          <ul className="space-y-2 pl-5 text-lg text-[#D1D5DB] list-disc">
            <li>Es una isla, con identidad propia</li>
            <li>Está conectada por un punto clave entre el sur y el centro-norte del país</li>
            <li>Tiene carreteras largas, paisajes costeros y clima que permite actividad todo el año</li>
            <li>Posee historia industrial, marítima y cultural</li>
          </ul>
          <p>
            Estas condiciones la convierten en un lugar ideal para{" "}
            <strong>industrias de nicho</strong>, especialmente aquellas que combinan experiencia,
            comunidad y turismo.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">
            El motociclismo como industria real (no como hobby)
          </h2>
          <p>El motociclismo moderno no es solo vender motos. Es una industria completa que mueve:</p>
          <ul className="space-y-2 pl-5 text-lg text-[#D1D5DB] list-disc">
            <li>Turismo especializado</li>
            <li>Eventos nacionales e internacionales</li>
            <li>Hoteles, restaurantes y servicios</li>
            <li>Comercio de alto valor agregado</li>
            <li>Marca ciudad y proyección digital</li>
          </ul>
          <p>
            Las ciudades que han apostado por el motociclismo como parte de su identidad han logrado
            atraer inversión privada, marcas premium y visitantes con alto nivel de gasto.
          </p>
          <p>
            Para un motociclista que viaja largas distancias,{" "}
            <strong>las paradas son tan importantes como el destino</strong>. Ciudad del Carmen tiene
            todo para convertirse en una parada obligatoria en las rutas del Golfo y el sureste.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">Lo que buscan los inversionistas con visión</h2>
          <p>Los inversionistas que entienden el nuevo contexto no buscan únicamente volumen inmediato. Buscan:</p>
          <ul className="space-y-2 pl-5 text-lg text-[#D1D5DB] list-disc">
            <li>Lugares con identidad clara</li>
            <li>Comunidades auténticas</li>
            <li>Potencial de crecimiento orgánico</li>
            <li>Narrativas fuertes que se puedan contar</li>
          </ul>
          <p>
            Carmen no necesita competir con las grandes metrópolis. Su fortaleza está en ser distinta:{" "}
            <strong>exótica, isleña, estratégica y con carácter</strong>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">Nuevas industrias que pueden convivir</h2>
          <p>
            El motociclismo puede ser una de varias piezas clave dentro de una economía más balanceada:
          </p>
          <ul className="space-y-2 pl-5 text-lg text-[#D1D5DB] list-disc">
            <li>Turismo de experiencia</li>
            <li>Comercio especializado</li>
            <li>Gastronomía local con identidad</li>
            <li>Servicios creativos y digitales</li>
            <li>Eventos culturales y deportivos</li>
          </ul>
          <p>
            Cuando varias industrias pequeñas crecen juntas, la economía se vuelve más resistente y menos
            dependiente de un solo sector.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">El rol de los negocios locales</h2>
          <p>Las transformaciones reales no empiezan con anuncios oficiales. Empiezan con:</p>
          <ul className="space-y-2 pl-5 text-lg text-[#D1D5DB] list-disc">
            <li>Negocios que apuestan por calidad y marca</li>
            <li>Comunidad que se organiza</li>
            <li>Eventos pequeños pero constantes</li>
            <li>Contenido que muestra lo que hace único al lugar</li>
          </ul>
          <p>Cada proyecto bien hecho suma a la percepción de la ciudad.</p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">Conclusión: el momento es ahora</h2>
          <p>Ciudad del Carmen no es una ciudad en decadencia. Es una ciudad en transición.</p>
          <p>
            Para quienes siguen esperando que todo vuelva a ser como antes, el panorama se ve oscuro. Pero
            para quienes tienen visión, creatividad y disposición para construir algo nuevo,{" "}
            <strong>Carmen es tierra fértil</strong>.
          </p>
          <p>
            El futuro no lo define una sola industria. Lo definen las personas que se atreven a imaginar y
            a construir.
          </p>
          <p>
            En Moto Isla creemos en ese futuro. Y estamos convencidos de que Ciudad del Carmen puede
            convertirse en un referente de nuevas industrias, nuevas rutas y nuevas historias por contar.
          </p>
        </section>
      </article>
    </div>
  );
}
