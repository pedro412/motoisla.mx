import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "La moto no es el problema: por qué su uso crece y por qué necesitamos aprender a convivir mejor",
  description:
    "Por qué hay más motos, cómo cambia la movilidad y qué debemos hacer para convivir mejor entre autos y motociclistas.",
  alternates: {
    canonical: "/guia/moto-no-es-problema",
  },
  openGraph: {
    title:
      "La moto no es el problema: por qué su uso crece y por qué necesitamos aprender a convivir mejor",
    description:
      "Por qué hay más motos, cómo cambia la movilidad y qué debemos hacer para convivir mejor entre autos y motociclistas.",
    url: "https://motoisla.mx/guia/moto-no-es-problema",
    type: "article",
    images: [
      {
        url: "https://motoisla.mx/images/articles/article-2-vertical.jpg",
        width: 1200,
        height: 1600,
        alt: "Motociclista en ciudad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "La moto no es el problema: por qué su uso crece y por qué necesitamos aprender a convivir mejor",
    description:
      "Por qué hay más motos, cómo cambia la movilidad y qué debemos hacer para convivir mejor entre autos y motociclistas.",
    images: ["https://motoisla.mx/images/articles/article-2-vertical.jpg"],
  },
};

export default function MotoNoEsProblemaPage() {
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
          La moto no es el problema: por qué su uso crece y por qué necesitamos aprender a convivir mejor
        </h1>
        <p className="text-sm text-[#9CA3AF]">Publicado el 7 de enero de 2026 · {SITE_CONFIG.city}</p>
      </header>

      <div className="overflow-hidden rounded-3xl border border-white/10">
        <Image
          src="/images/articles/article-2-vertical.jpg"
          alt="Motociclista en ciudad"
          width={1200}
          height={1600}
          priority
          quality={75}
          sizes="(min-width: 1024px) 720px, 100vw"
          className="h-auto w-full object-cover"
        />
      </div>

      <article className="space-y-6 text-lg text-[#D1D5DB] leading-relaxed">
        <section className="space-y-4">
          <p>
            En los últimos años algo es evidente en las calles: cada vez hay más motos. Más repartidores,
            más estudiantes, más trabajadores… y cada vez más mujeres usando la moto como medio principal
            de transporte.
          </p>
          <p>
            Para muchos esto genera incomodidad, estrés o incluso enojo. Para otros, es simplemente una
            realidad inevitable.
          </p>
          <p>
            La pregunta no es si nos gusta o no. La pregunta es: ¿por qué está pasando y qué hacemos con
            eso?
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">
            1️⃣ ¿Realmente hay más motos? Sí, y los datos lo confirman
          </h2>
          <p>
            A nivel mundial y en México, la cantidad de motocicletas por habitante ha ido en aumento de
            forma constante. Esto se debe a factores muy claros:
          </p>
          <ul className="space-y-2 pl-5 text-lg text-[#D1D5DB] list-disc">
            <li>Costos más bajos frente al automóvil</li>
            <li>Tráfico cada vez más pesado</li>
            <li>Uso de la moto como herramienta de trabajo</li>
            <li>Trayectos urbanos cortos</li>
          </ul>
          <p>La moto ya no es solo recreación. Es movilidad real.</p>
          <p>Y cuando una solución funciona, la gente la adopta.</p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">
            2️⃣ ¿Por qué entonces el motociclismo se percibe como peligroso?
          </h2>
          <p>La percepción de peligro no nace de la nada.</p>
          <p>Los datos muestran que:</p>
          <ul className="space-y-2 pl-5 text-lg text-[#D1D5DB] list-disc">
            <li>Los motociclistas están más expuestos físicamente</li>
            <li>Un error tiene consecuencias más graves que en un auto</li>
            <li>Los accidentes en moto suelen llamar más la atención</li>
          </ul>
          <p>
            Pero aquí hay un punto clave: más motos no significa automáticamente más imprudencia. Significa
            más visibilidad del problema cuando algo sale mal.
          </p>
          <p>La moto no crea el riesgo, lo expone.</p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">
            3️⃣ India: cuando la moto no es opción, es necesidad
          </h2>
          <p>En países como India, la moto no se discute, se usa.</p>
          <p>¿Por qué?</p>
          <ul className="space-y-2 pl-5 text-lg text-[#D1D5DB] list-disc">
            <li>Es accesible</li>
            <li>Funciona mejor en ciudades saturadas</li>
            <li>Resuelve movilidad diaria para millones de personas</li>
          </ul>
          <p>La moto ahí no es símbolo de rebeldía ni de peligro. Es herramienta básica.</p>
          <p>
            Esto demuestra algo importante: el riesgo no desaparece, pero la necesidad de moverse pesa más.
          </p>
          <p>
            Y cuando la moto se vuelve inevitable, la conversación cambia: ya no es “si debería usarse”,
            sino cómo se usa mejor.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">
            4️⃣ Cada vez más mujeres en moto (y no es por moda)
          </h2>
          <p>
            En ciudades como {SITE_CONFIG.city}, cada vez es más común ver mujeres en moto. No porque sea
            tendencia, sino porque:
          </p>
          <ul className="space-y-2 pl-5 text-lg text-[#D1D5DB] list-disc">
            <li>El transporte público puede ser inseguro</li>
            <li>Hay acoso</li>
            <li>Hay dependencia de horarios</li>
            <li>Hay pérdida de tiempo</li>
          </ul>
          <p>La moto ofrece:</p>
          <ul className="space-y-2 pl-5 text-lg text-[#D1D5DB] list-disc">
            <li>Autonomía</li>
            <li>Control del trayecto</li>
            <li>Menor exposición</li>
            <li>Conveniencia</li>
          </ul>
          <p>
            Para muchas mujeres, la moto no es riesgo adicional, es una forma de reducirlo. Este cambio
            cultural es silencioso, pero irreversible.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">
            5️⃣ El conflicto real: convivencia entre autos y motos
          </h2>
          <p>Muchos conductores de auto tienen una mala percepción de las motos porque:</p>
          <ul className="space-y-2 pl-5 text-lg text-[#D1D5DB] list-disc">
            <li>Han tenido malas experiencias</li>
            <li>Han visto imprudencias reales</li>
            <li>Se sienten sorprendidos o invadidos</li>
          </ul>
          <p>Y hay que decirlo con honestidad: sí existen motociclistas que manejan mal.</p>
          <p>El problema es que:</p>
          <ul className="space-y-2 pl-5 text-lg text-[#D1D5DB] list-disc">
            <li>Cada imprudencia se generaliza</li>
            <li>El error de uno afecta a todos</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">
            6️⃣ Cómo se reduce el estrés del automovilista (de verdad)
          </h2>
          <p>No se reduce con discursos ni exigencias. Se reduce cuando el entorno se vuelve predecible.</p>
          <p>Cuando una moto:</p>
          <ul className="space-y-2 pl-5 text-lg text-[#D1D5DB] list-disc">
            <li>Respeta semáforos</li>
            <li>Usa direccionales</li>
            <li>No aparece de la nada</li>
            <li>No se pega al auto</li>
          </ul>
          <p>El conductor baja la guardia.</p>
          <p>
            Y algo muy importante: cederle el paso a una moto no atrasa el tráfico. Una moto acelera
            rápido, se va y libera espacio. Muchas veces, dejarla pasar reduce el conflicto para ambos.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">7️⃣ La responsabilidad es compartida</h2>
          <p>Si hay más motos, todos tenemos que adaptarnos:</p>
          <p>Motociclistas: manejar con criterio y entender que representan a todos.</p>
          <p>Automovilistas: reconocer que la moto va expuesta y entender que cooperar no les quita nada.</p>
          <p>La calle no es un campo de batalla. Es un espacio compartido.</p>
        </section>

        <section className="space-y-4">
          <h2 className="heading text-2xl font-semibold text-white">🧠 Conclusión</h2>
          <p>
            La moto no va a desaparecer, no es una moda y no es el problema en sí. Es una respuesta a la
            movilidad actual.
          </p>
          <p>
            Y si cada vez hay más motos, más mujeres conduciendo y más convivencia entre vehículos distintos,
            entonces el verdadero reto no es prohibir ni señalar, sino aprender a compartir mejor la calle.
          </p>
          <p>Porque una moto manejada con criterio educa más que mil discusiones.</p>
        </section>
      </article>

      <section className="card p-6 sm:p-8">
        <h2 className="heading text-2xl font-semibold text-white">¿Dudas sobre equipo de seguridad?</h2>
        <p className="mt-2 text-lg text-[#D1D5DB]">
          Escríbenos por WhatsApp y te orientamos con equipo certificado y asesoría real.
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
