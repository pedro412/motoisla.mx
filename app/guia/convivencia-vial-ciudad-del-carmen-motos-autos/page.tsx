import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const ARTICLE_TITLE = "Convivencia vial en Ciudad del Carmen: motos y autos";
const ARTICLE_DESCRIPTION =
  "Reflexion sobre convivencia vial en Ciudad del Carmen: responsabilidad compartida entre autos y motos, habitos que salvan vidas y la importancia de usar cascos certificados.";
const ARTICLE_PATH = "/guia/convivencia-vial-ciudad-del-carmen-motos-autos";
const ARTICLE_IMAGE = "https://motoisla.mx/images/articles/article-5.jpg";

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
        alt: "Convivencia vial entre motos y autos en Ciudad del Carmen",
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

export default function ConvivenciaVialCarmenPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <Link href="/guia" className="text-sm font-semibold text-[#2DD4BF] transition hover:text-white">
          ← Volver a la revista
        </Link>
        <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">Revista Moto Isla</p>
        <h1 className="heading text-4xl font-bold">
          Convivencia vial en Ciudad del Carmen: motos y autos, responsabilidad compartida
        </h1>
        <p className="text-sm text-[#9CA3AF]">Publicado el 22 de febrero de 2026 · {SITE_CONFIG.city}</p>
      </header>

      <div className="overflow-hidden rounded-3xl border border-white/10">
        <Image
          src="/images/articles/article-5.jpg"
          alt="Convivencia vial entre motos y autos en Ciudad del Carmen"
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
            En Ciudad del Carmen ocurrio un accidente que nos duele como comunidad. Hay una persona en estado
            critico, y antes que cualquier debate, lo primero es el respeto: por su vida, por su familia y por
            quienes hoy estan atravesando una situacion devastadora.
          </p>
          <p>
            Cuando pasa algo asi, suele repetirse el mismo patron: se divide la conversacion en bandos
            (motociclistas vs automovilistas) y se buscan culpables desde la emocion. Unos defienden, otros
            condenan, otros culpan a la victima, y muchos callan.
          </p>
          <p>
            Pero esa polarizacion no reduce el riesgo del siguiente accidente. Solo lo posterga.
          </p>
          <p>
            Este articulo no pretende dictar sentencia sobre un caso especifico. Pretende senalar un problema de
            fondo y una realidad que ya es evidente: el auge de las motos en Ciudad del Carmen apenas comienza, y
            nuestra forma de convivir en la calle tiene que evolucionar.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">
            El auge de las motos en Carmen: transporte, necesidad y una nueva realidad
          </h2>
          <p>
            Las motos dejaron de ser un gusto de fin de semana para muchas personas. Son transporte, son trabajo,
            son ahorro de tiempo y una necesidad creciente.
          </p>
          <p>
            En ciudades como CDMX la presencia masiva de motos lleva anos; aqui en la isla lo estamos viendo crecer
            con fuerza apenas ahora.
          </p>
          <p>
            Eso tiene una consecuencia directa: habra mas interaccion diaria entre autos y motos. Y si el
            comportamiento no mejora (velocidad, alcohol, distraccion, impaciencia, falta de prevision), habra mas
            incidentes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">
            Una verdad incomoda: en un impacto, el motociclista no tiene carroceria
          </h2>
          <p>
            Hay algo que no podemos ignorar: en una colision, quien va en moto esta expuesto de forma extrema. El
            cuerpo se convierte en la carroceria.
          </p>
          <p>
            Por eso, aunque la responsabilidad es compartida, no es simetrica: quien conduce un vehiculo mas pesado
            y rapido tiene un deber mayor de cuidado.
          </p>
          <p>
            Eso no exime al motociclista de manejar con criterio. Significa que, como sociedad, debemos aceptar que
            el margen de error es minimo cuando hay una moto involucrada.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">Responsabilidad compartida: lo que debemos corregir ya</h2>
          <h3 className="heading text-xl font-semibold text-white">Para automovilistas en Ciudad del Carmen</h3>
          <ul className="list-disc space-y-2 pl-5 text-lg text-[#D1D5DB]">
            <li>Cero alcohol y cero celular al volante: un segundo de distraccion es suficiente.</li>
            <li>Velocidad adecuada en zonas urbanas: la diferencia entre un susto y una tragedia suelen ser pocos km/h.</li>
            <li>Distancia y anticipacion: no ir pegados, no cerrar, no cambiar de carril sin espejo y direccional.</li>
            <li>Puntos ciegos: revisar antes de girar o incorporarse.</li>
            <li>Respeto real: una moto no estorba; es un usuario vulnerable de la via.</li>
          </ul>
          <h3 className="heading text-xl font-semibold text-white">Para motociclistas en Ciudad del Carmen</h3>
          <ul className="list-disc space-y-2 pl-5 text-lg text-[#D1D5DB]">
            <li>Paciencia y mentalidad defensiva: no vale la pena pelear el espacio.</li>
            <li>Conducir con margen: anticipar, evitar maniobras al limite, no confiar en que te vieron.</li>
            <li>Visibilidad: luces, posicion en carril y evitar quedar en puntos ciegos.</li>
            <li>Velocidad prudente: la isla no perdona el exceso.</li>
            <li>Equipo siempre: especialmente cascos certificados, porque en un impacto la diferencia puede ser la vida.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">
            Cascos certificados: una decision simple que cambia el resultado
          </h2>
          <p>
            No todo accidente se puede evitar, pero si se puede reducir el dano. El equipo no es un accesorio: es
            una herramienta de supervivencia.
          </p>
          <p>
            En Moto Isla insistimos en esto porque lo vemos todos los dias: un casco certificado bien ajustado y del
            tamano correcto es una de las decisiones mas importantes que puede tomar un motociclista.
          </p>
          <p>
            En Ciudad del Carmen, donde la convivencia vial esta cambiando rapido, esto es todavia mas relevante.
          </p>
          <p>Rodar con estilo esta bien. Rodar con proteccion es obligatorio.</p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">
            Dejar la guerra de bandos y construir cultura vial
          </h2>
          <p>En redes es facil opinar. En la calle es donde se pagan las consecuencias.</p>
          <p>
            Ciudad del Carmen necesita una cultura vial mas madura, porque el crecimiento de motos no se va a
            detener.
          </p>
          <p>Si queremos una ciudad mas segura, hay habitos que deben volverse norma:</p>
          <ul className="list-disc space-y-2 pl-5 text-lg text-[#D1D5DB]">
            <li>Cero alcohol y cero celular (auto y moto).</li>
            <li>Menos velocidad en ciudad.</li>
            <li>Distancia, direccionales y espejo siempre.</li>
            <li>No confrontar: ceder y llegar.</li>
            <li>Cascos certificados y equipo adecuado siempre.</li>
          </ul>
          <p>
            En Moto Isla creemos en una idea simple: la meta no es ganar el carril, es llegar a casa. Y eso depende
            de todos.
          </p>
        </section>
      </article>
    </div>
  );
}
