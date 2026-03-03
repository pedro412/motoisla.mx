import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const ARTICLE_TITLE = "Moto Isla Podcast: historias reales de la comunidad biker en Ciudad del Carmen";
const ARTICLE_DESCRIPTION =
  "Conoce el Moto Isla Podcast: entrevistas, viajes, eventos y proyectos que documentan la cultura biker de Ciudad del Carmen.";
const ARTICLE_PATH = "/guia/moto-isla-podcast-comunidad-biker-ciudad-del-carmen";
const ARTICLE_IMAGE = "https://motoisla.mx/images/articles/article-6.jpg";
const YOUTUBE_CHANNEL = "https://www.youtube.com/@MotoIsla";

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
        alt: "Moto Isla Podcast con invitados de la comunidad biker",
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

export default function MotoIslaPodcastPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <Link href="/guia" className="text-sm font-semibold text-[#2DD4BF] transition hover:text-white">
          ← Volver a la revista
        </Link>
        <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">Revista Moto Isla</p>
        <h1 className="heading text-4xl font-bold">{ARTICLE_TITLE}</h1>
        <p className="text-sm text-[#9CA3AF]">Publicado el 3 de marzo de 2026 · {SITE_CONFIG.city}</p>
      </header>

      <div className="overflow-hidden rounded-3xl border border-white/10">
        <Image
          src="/images/articles/article-6.jpg"
          alt="Moto Isla Podcast con invitados de la comunidad biker"
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
            En Moto Isla no solo vendemos equipo: queremos construir comunidad. Por eso creamos el Moto Isla
            Podcast, una iniciativa para documentar y difundir la cultura biker de Ciudad del Carmen y, con el
            tiempo, del sur de Mexico y de todo el pais.
          </p>
          <p>
            Hoy ya tenemos 5 capitulos en YouTube y en Facebook vamos por el episodio 9. El objetivo es simple:
            darle espacio a las personas que ruedan, organizan, viajan, trabajan y viven la moto, para que su
            historia quede registrada con calidad y se comparta con la comunidad.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">¿Que es el Moto Isla Podcast?</h2>
          <p>Es una conversacion en formato entrevista donde hablamos de:</p>
          <ul className="list-disc space-y-2 pl-5 text-lg text-[#D1D5DB]">
            <li>
              Trayectorias como motociclista: como empezaste, en que ruedas hoy y que cambio en tu forma de rodar.
            </li>
            <li>Viajes y rutas: largas distancias, aprendizajes, logistica real y anecdotas.</li>
            <li>Anecdotario biker: lo bueno, lo dificil y lo que te enseno la carretera.</li>
            <li>Escena local: rodadas, cultura de grupos, convivencia vial y como mejorar como comunidad.</li>
            <li>Eventos y proyectos: rodadas organizadas, causas, iniciativas, talleres y negocios locales.</li>
          </ul>
          <p>
            La idea no es hacer polemica, sino construir un archivo vivo de la comunidad: experiencias reales que
            ayuden a otros, conecten personas y eleven el nivel del motociclismo local.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">¿Por que esto le conviene a la comunidad?</h2>

          <div className="space-y-2">
            <h3 className="heading text-xl font-semibold text-white">Visibilidad para bikers y motoclubes</h3>
            <p>
              Si tienes historia, disciplina, trayecto o proyecto, el podcast te da un espacio para contarlo con
              orden, contexto y alcance.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="heading text-xl font-semibold text-white">Promocion para eventos y negocios</h3>
            <p>
              Si organizas una rodada, un evento o tienes un proyecto (taller, accesorios, detailing, viajes, etc.),
              podemos darle difusion dentro del episodio de forma natural: que haces, por que lo haces y como te
              encuentra la gente.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="heading text-xl font-semibold text-white">Mejora de cultura y seguridad</h3>
            <p>
              Hablar de experiencias reales impacta mas que cualquier sermon. De aqui salen aprendizajes sobre
              equipo, habitos de conduccion y decisiones que si cambian resultados en la calle.
            </p>
            <p>
              Esto se alinea con lo que promovemos en tienda: rodar con seguridad, con criterio y con equipo
              adecuado, por ejemplo cascos certificados y proteccion real.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="heading text-xl font-semibold text-white">Identidad local: Ciudad del Carmen como punto biker</h3>
            <p>
              Si queremos mas eventos, mas colaboracion y mejor convivencia vial, primero hay que contar bien
              quienes somos y que esta pasando en la isla.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">Invitacion abierta: ¿quieres venir a grabar?</h2>
          <p>Si eres biker en Ciudad del Carmen, o vienes de paso, estas invitado.</p>
          <p>¿A quien buscamos?</p>
          <ul className="list-disc space-y-2 pl-5 text-lg text-[#D1D5DB]">
            <li>
              Motociclistas con viajes o recorridos relevantes, cortos o largos; lo importante es lo que aprendiste.
            </li>
            <li>Presidentes, miembros de motoclubes, organizadores de rodadas y lideres de comunidad.</li>
            <li>Gente que usa la moto para trabajar y tiene experiencia real en mensajeria, repartos o logistica.</li>
            <li>
              Emprendedores y proyectos ligados al motociclismo: eventos, talleres, refacciones, accesorios, turismo
              o fotografia.
            </li>
            <li>Personas con historias que valga la pena dejar registradas: disciplina, cambios de vida y anecdotas.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">Que si puedes traer a la mesa</h2>
          <ul className="list-disc space-y-2 pl-5 text-lg text-[#D1D5DB]">
            <li>Historia y contexto: lo que te formo como motociclista.</li>
            <li>Lecciones aprendidas: errores, aciertos y decisiones.</li>
            <li>Proyectos y proximos eventos: si quieres promocionar algo, se puede.</li>
          </ul>
          <p>
            Condicion logistica importante: por espacio, solo puedes venir con 1 acompanante o invitado.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">Donde encontrarnos</h2>
          <p>Si quieres proponer tu participacion, lo puedes hacer directo en Moto Isla:</p>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="font-semibold text-white">Moto Isla</p>
            <p>Calle Francisco Villa 6, a un costado del ADO, Ciudad del Carmen</p>
            <p>Lunes a viernes: 9:00 am - 7:00 pm</p>
            <p>Sabados y domingos: 9:00 am - 4:00 pm</p>
          </div>
          <p>Tambien puedes mandarnos mensaje por nuestras redes de Moto Isla con:</p>
          <ul className="list-disc space-y-2 pl-5 text-lg text-[#D1D5DB]">
            <li>Tu nombre y apodo, si aplica.</li>
            <li>Que moto traes o que tipo de rodada haces.</li>
            <li>Tu historia en 3 a 5 lineas.</li>
            <li>Si quieres promover un evento o proyecto, comparte fecha y descripcion.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">Como apoyar el proyecto</h2>
          <p>Si el podcast te aporta, ayudanos con esto:</p>
          <ul className="list-disc space-y-2 pl-5 text-lg text-[#D1D5DB]">
            <li>Suscribete en YouTube.</li>
            <li>Comparte el episodio que mas te gusto.</li>
            <li>Comenta a quien te gustaria ver invitado.</li>
            <li>Si tienes un grupo o club, etiqueta a tu banda y propongan un episodio.</li>
          </ul>
        </section>
      </article>

      <section className="card p-6 sm:p-8">
        <h2 className="heading text-2xl font-semibold text-white">Sigue el Moto Isla Podcast</h2>
        <p className="mt-2 text-lg text-[#D1D5DB]">
          Mira los episodios, suscribete y comparte historias reales de la comunidad biker.
        </p>
        <a
          href={YOUTUBE_CHANNEL}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center justify-center rounded-full bg-[#E53935] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#E53935]/30 transition hover:bg-[#C62828]"
        >
          Ir al canal de YouTube
        </a>
      </section>
    </div>
  );
}
