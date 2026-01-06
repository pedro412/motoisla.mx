import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "¿De verdad un casco puede salvarte la vida?",
  description:
    "Una conversación honesta entre motociclistas sobre riesgos reales y por qué un casco certificado puede marcar la diferencia.",
  alternates: {
    canonical: "/guia/casco-salva-vida",
  },
  openGraph: {
    title: "¿De verdad un casco puede salvarte la vida?",
    description:
      "Una conversación honesta entre motociclistas sobre riesgos reales y por qué un casco certificado puede marcar la diferencia.",
    images: ["/images/articles/article-1-horizontal.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "¿De verdad un casco puede salvarte la vida?",
    description:
      "Una conversación honesta entre motociclistas sobre riesgos reales y por qué un casco certificado puede marcar la diferencia.",
    images: ["/images/articles/article-1-horizontal.jpg"],
  },
};

export default function CascoSalvaVidaPage() {
  const whatsappLink = `${SITE_CONFIG.whatsapp.link}?text=${encodeURIComponent(
    SITE_CONFIG.whatsapp.messages.general,
  )}`;

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <Link href="/guia" className="text-sm font-semibold text-[#2DD4BF] transition hover:text-white">
          ← Volver a la guía
        </Link>
        <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">Guía del motociclista</p>
        <h1 className="heading text-4xl font-bold">
          ¿De verdad un casco puede salvarte la vida?
        </h1>
        <p className="text-sm text-[#9CA3AF]">
          Publicado el 5 de enero de 2026 · {SITE_CONFIG.city}
        </p>
        <p className="text-lg text-[#D1D5DB]">Una conversación honesta entre motociclistas</p>
      </header>

      <div className="overflow-hidden rounded-3xl border border-white/10">
        <Image
          src="/images/articles/article-1-horizontal.jpg"
          alt="Motociclista con casco en ruta"
          width={1200}
          height={630}
          priority
          className="h-auto w-full object-cover"
        />
      </div>

      <article className="space-y-6 text-lg text-[#D1D5DB] leading-relaxed">
        <section className="space-y-4">
          <p>Si usas moto, seguro has escuchado frases como:</p>
          <p>“Ningún casco te va a salvar la vida”</p>
          <p>“El riesgo siempre está”</p>
          <p>“Lo mejor es manejar con precaución”</p>
          <p>Y siendo honestos… no son frases falsas.</p>
          <p>
            Los que andamos en moto sabemos algo desde el primer día: el riesgo es inminente ⚠️. No
            importa si manejas bien, despacio o con cuidado. Eso lo tenemos claro.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">
            Sabemos que un casco no garantiza la vida de nadie
          </h2>
          <p>Aquí queremos empezar siendo muy claros:</p>
          <p>Un casco no te garantiza que no te pase nada.</p>
          <p>No existe el equipo perfecto.</p>
          <p>
            Si hay un accidente fuerte, a alta velocidad, o un impacto directo, el riesgo siempre
            existe. Los motociclistas no vivimos engañados. Vivimos conscientes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">
            “En otros países ni les importa”… ¿seguro?
          </h2>
          <p>Aquí va algo personal.</p>
          <p>
            Mi papá, por ejemplo, me ha contado que cuando fue a Estados Unidos manejó moto usando
            gorra, porque —según él— allá “nadie dice nada”, que incluso hay quien dice que los
            policías piensan: “El que se quiera matar, que se mate”.
          </p>
          <p>Cuando escuché eso le dije algo muy claro: eso no es cierto.</p>
          <p>
            En muchos estados de EE.UU. sí multan por no usar casco. Y donde no es obligatorio, no
            significa que sea seguro, solo que la ley es distinta.
          </p>
          <p>
            Confundir “no me dijeron nada” con “no pasa nada” es uno de los errores más comunes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">
            “Entonces mejor manejo despacio”
          </h2>
          <p>Este es otro argumento muy frecuente. Y sí: manejar con precaución es clave.</p>
          <p>Pero aquí viene algo que casi nadie toma en cuenta:</p>
          <p>La mayoría de los accidentes en moto NO pasan a alta velocidad.</p>
          <ul className="space-y-2 pl-5 text-lg text-[#D1D5DB] list-disc">
            <li>En maniobras</li>
            <li>En retornos</li>
            <li>Al arrancar</li>
            <li>En semáforos</li>
            <li>En estacionamientos</li>
            <li>A pocos metros de casa</li>
          </ul>
          <p>Muchas veces la moto ni siquiera va rápido.</p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">
            Un golpe tonto puede dejar de ser gracioso en segundos
          </h2>
          <p>
            Una caída en parado, una resbalada, un mal apoyo… pueden parecer cosas “sin
            importancia”.
          </p>
          <p>El problema es que:</p>
          <ul className="space-y-2 pl-5 text-lg text-[#D1D5DB] list-disc">
            <li>La cabeza no está diseñada para impactos</li>
            <li>Un golpe seco puede causar daño cerebral</li>
            <li>Todo puede pasar en segundos</li>
          </ul>
          <p>
            Lo que empieza como una risa nerviosa puede terminar en hospital, cirugía o consecuencias
            de por vida. Y muchas veces, solo por no traer un buen casco.
          </p>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="heading text-2xl font-semibold text-white">
              Entonces… ¿para qué sirve realmente un casco?
            </h2>
            <p>Un casco certificado no evita el accidente. No elimina el riesgo. No te vuelve inmune.</p>
          <p>
            Pero sí hace algo muy importante: reduce brutalmente el impacto que recibe tu cerebro 🧠.
          </p>
            <p>Eso no es miedo. No es marketing. Es física.</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/articles/article-2-vertical.jpg"
              alt="Detalle de casco de motociclista"
              width={680}
              height={900}
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">
            ¿Y por qué criticamos el casco tipo “cachucha”?
          </h2>
          <p>Aquí queremos ser muy claros y respetuosos. No es algo personal.</p>
          <p>El problema es que:</p>
          <ul className="space-y-2 pl-5 text-lg text-[#D1D5DB] list-disc">
            <li>No cubre cara ni mandíbula</li>
            <li>Protege solo una parte del cráneo</li>
            <li>Absorbe menos impacto</li>
          </ul>
          <p>
            Y en una caída común, la cara y la barbilla suelen ser de las primeras zonas en golpear.
          </p>
          <p>Por eso no lo recomendamos.</p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">
            La conclusión real (sin exagerar)
          </h2>
          <ul className="space-y-2 pl-5 text-lg text-[#D1D5DB] list-disc">
            <li>El riesgo siempre existe</li>
            <li>Manejar bien es fundamental</li>
            <li>Ningún casco es invencible</li>
          </ul>
          <p>Pero también es verdad que un buen casco puede ser la diferencia entre levantarte o no ✅.</p>
          <p>
            No se trata de miedo. Se trata de probabilidades. Y usar un buen casco mejora esas
            probabilidades.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">Nuestro mensaje en Moto Isla</h2>
          <p>No creemos que la seguridad tenga que ser cara, incómoda ni impuesta.</p>
          <p>
            Creemos que entender el riesgo es parte de amar la moto 🏍️. Y si algún día quieres
            preguntar, probar o comparar sin que nadie te juzgue, aquí estamos.
          </p>
        </section>
      </article>

      <section className="card p-6 sm:p-8">
        <h2 className="heading text-2xl font-semibold text-white">¿Buscas un casco certificado?</h2>
        <p className="mt-2 text-lg text-[#D1D5DB]">
          Si quieres un casco certificado con protección real, escríbenos por WhatsApp y te
          asesoramos sin compromiso.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center justify-center rounded-full bg-[#E53935] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#E53935]/30 transition hover:bg-[#C62828]"
        >
          Escribir por WhatsApp
        </a>
      </section>
    </div>
  );
}
