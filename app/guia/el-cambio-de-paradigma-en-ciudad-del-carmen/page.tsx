import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const ARTICLE_TITLE = "El cambio de paradigma en Ciudad del Carmen y lo que significa para el motociclismo";
const ARTICLE_DESCRIPTION =
  "Por qué el valor se mueve de lo físico a la confianza, la comunidad y el contenido en el motociclismo local.";
const ARTICLE_PATH = "/guia/el-cambio-de-paradigma-en-ciudad-del-carmen";
const ARTICLE_IMAGE = "https://motoisla.mx/images/articles/article-4-small.jpg";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  alternates: {
    canonical: ARTICLE_PATH,
  },
  openGraph: {
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: `https://motoisla.mx${ARTICLE_PATH}`,
    type: "article",
    images: [
      {
        url: ARTICLE_IMAGE,
        width: 1200,
        height: 630,
        alt: "Interior de tienda de motocicletas en Ciudad del Carmen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    images: [ARTICLE_IMAGE],
  },
};

export default function CambioParadigmaCarmenPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <Link href="/guia" className="text-sm font-semibold text-[#2DD4BF] transition hover:text-white">
          ← Volver a la revista
        </Link>
        <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">Revista Moto Isla</p>
        <h1 className="heading text-4xl font-bold">{ARTICLE_TITLE}</h1>
        <p className="text-sm text-[#9CA3AF]">Publicado el 15 de enero de 2026 · {SITE_CONFIG.city}</p>
      </header>

      <div className="overflow-hidden rounded-3xl border border-white/10">
        <Image
          src="/images/articles/article-4-small.jpg"
          alt="Interior de tienda de motocicletas en Ciudad del Carmen"
          width={1200}
          height={630}
          priority
          quality={75}
          sizes="(min-width: 1024px) 720px, 100vw"
          className="h-auto w-full object-cover"
        />
      </div>

      <article className="space-y-6 text-lg leading-relaxed text-[#D1D5DB]">
        <section className="space-y-4">
          <p>
            En los últimos meses, en Ciudad del Carmen, hemos visto algo que antes parecía impensable:
            negocios de años cerrando, marcas tradicionales desapareciendo y una sensación general de que
            “algo está cambiando”.
          </p>
          <p>Y no, no es solo una crisis económica pasajera. Es un cambio de paradigma.</p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">¿Qué está cambiando realmente?</h2>
          <p>Durante décadas, el valor estuvo en lo físico:</p>
          <ul className="list-disc space-y-2 pl-5 text-lg text-[#D1D5DB]">
            <li>Locales</li>
            <li>Inventarios</li>
            <li>Tradición</li>
            <li>Presencia constante</li>
          </ul>
          <p>Hoy, el valor se está moviendo hacia lo intangible:</p>
          <ul className="list-disc space-y-2 pl-5 text-lg text-[#D1D5DB]">
            <li>Confianza</li>
            <li>Criterio</li>
            <li>Comunidad</li>
            <li>Contenido</li>
            <li>Reputación digital</li>
          </ul>
          <p>Esto no significa que lo físico ya no importe. Significa que ya no es suficiente por sí solo.</p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">El motociclismo no es ajeno a este cambio</h2>
          <p>El motociclismo siempre ha sido más que motos y refacciones. Es identidad, cultura y forma de vida.</p>
          <p>Pero incluso aquí el paradigma cambió.</p>
          <p>Antes:</p>
          <ul className="list-disc space-y-2 pl-5 text-lg text-[#D1D5DB]">
            <li>Comprabas donde siempre</li>
            <li>Confiabas por costumbre</li>
            <li>Aprendías por prueba y error</li>
          </ul>
          <p>Hoy:</p>
          <ul className="list-disc space-y-2 pl-5 text-lg text-[#D1D5DB]">
            <li>Investigas antes de comprar</li>
            <li>Confías en quien explica, no solo en quien vende</li>
            <li>Valoras a quien comparte experiencia real</li>
          </ul>
          <p>El motociclista actual no busca solo una pieza. Busca criterio.</p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">
            ¿Qué pasa con las tiendas de motos en Ciudad del Carmen?
          </h2>
          <p>Las tiendas que solo venden productos compiten contra:</p>
          <ul className="list-disc space-y-2 pl-5 text-lg text-[#D1D5DB]">
            <li>Marketplaces</li>
            <li>Envíos</li>
            <li>Precio</li>
            <li>Volumen</li>
          </ul>
          <p>Las tiendas que construyen marca y comunidad compiten en otro terreno:</p>
          <ul className="list-disc space-y-2 pl-5 text-lg text-[#D1D5DB]">
            <li>Confianza</li>
            <li>Cercanía</li>
            <li>Experiencia</li>
            <li>Seguridad</li>
          </ul>
          <p>
            Y en un contexto donde rodar implica riesgos reales, la seguridad deja de ser discurso y se
            vuelve responsabilidad.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">
            Seguridad, calidad y realidad: lo que no pasa de moda
          </h2>
          <p>En Moto Isla creemos que este cambio no debe combatirse, sino entenderse.</p>
          <p>Por eso apostamos por:</p>
          <ul className="list-disc space-y-2 pl-5 text-lg text-[#D1D5DB]">
            <li>Contenido real, no perfecto</li>
            <li>Personas reales, no modelos</li>
            <li>Decisiones explicadas, no imposiciones</li>
            <li>Calidad visible, no promesas vacías</li>
          </ul>
          <p>Porque al final, rodar no es una moda. Y vender equipo no es solo una transacción.</p>
          <p>Es cuidar a quien va a volver a casa.</p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">El futuro del motociclismo local</h2>
          <p>El futuro no está en elegir entre lo digital o lo físico. Está en integrarlos con sentido.</p>
          <p>Tiendas que:</p>
          <ul className="list-disc space-y-2 pl-5 text-lg text-[#D1D5DB]">
            <li>Eduquen</li>
            <li>Comuniquen</li>
            <li>Escuchen</li>
            <li>Construyan comunidad</li>
          </ul>
          <p>Van a sobrevivir incluso en tiempos difíciles.</p>
          <p>Las demás, tarde o temprano, dependerán solo de la nostalgia.</p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">Una reflexión final</h2>
          <p>El cambio de paradigma ya está aquí. No es cómodo, pero es honesto.</p>
          <p>
            Y en Moto Isla elegimos ser parte de ese cambio: con los pies en la isla, la mirada en el
            futuro y el compromiso intacto con el motociclismo real.
          </p>
        </section>
      </article>
    </div>
  );
}
