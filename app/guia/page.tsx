import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Guía del motociclista | Moto Isla",
  description:
    "Consejos y artículos para rodar más seguro y elegir mejor tu equipo en Ciudad del Carmen.",
};

const posts = [
  {
    title: "¿De verdad un casco puede salvarte la vida?",
    href: "/guia/casco-salva-vida",
    status: "Publicado",
    description:
      "Una conversación honesta entre motociclistas sobre riesgos reales y por qué el casco importa.",
    image: "/images/articles/article-1-horizontal.jpg",
    date: "5 de enero de 2026",
  },
  {
    title: "La moto no es el problema: por qué su uso crece y por qué necesitamos aprender a convivir mejor",
    href: "/guia/moto-no-es-problema",
    status: "Publicado",
    description:
      "Por qué hay más motos, cómo cambia la movilidad y qué debemos hacer para convivir mejor en la calle.",
    image: "/images/articles/article-2-vertical.jpg",
    date: "7 de enero de 2026",
  },
  {
    title: "Cómo elegir la talla correcta de tu casco",
    status: "Próximamente",
  },
  {
    title: "Cuándo cambiar tu casco",
    status: "Próximamente",
  },
  {
    title: "DOT vs ECE 22.06: lo que importa de verdad",
    status: "Próximamente",
  },
  {
    title: "Equipo esencial para repartidores (sin gastar de más)",
    status: "Próximamente",
  },
  {
    title: "Checklist para lluvia en Ciudad del Carmen",
    status: "Próximamente",
  },
  {
    title: "Cómo cuidar tu casco y mica",
    status: "Próximamente",
  },
];

export default function GuiaPage() {
  const whatsappLink = `${SITE_CONFIG.whatsapp.link}?text=${encodeURIComponent(
    SITE_CONFIG.whatsapp.messages.general,
  )}`;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="space-y-6">
        <h1 className="heading text-4xl font-bold">Guía del motociclista</h1>
        <p className="text-lg text-[#D1D5DB]">
          Tips directos para rodar más seguro y elegir mejor tu equipo.
        </p>
        <div className="flex gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#E53935] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#C62828]"
          >
            Preguntar en WhatsApp
          </a>
          <Link
            href="/promos"
            className="inline-flex items-center justify-center rounded-full border border-[#2DD4BF] px-6 py-3 text-sm font-semibold text-[#2DD4BF] transition hover:border-white hover:text-white"
          >
            Ver promociones
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <div key={post.title} className="card p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">
              {post.status}
            </p>
            {post.image && (
              <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={450}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            )}
            <h3 className="mt-4 heading text-xl font-semibold text-white">{post.title}</h3>
            <p className="mt-2 text-sm text-[#D1D5DB]">
              {post.description ??
                `Este artículo estará disponible pronto con recomendaciones específicas para ${SITE_CONFIG.city}.`}
            </p>
            {post.date && (
              <p className="mt-3 text-xs text-[#9CA3AF]">Publicado: {post.date}</p>
            )}
            {post.href ? (
              <Link
                href={post.href}
                className="mt-4 inline-flex w-fit items-center rounded-full border border-[#2DD4BF] px-4 py-2 text-xs font-semibold text-[#2DD4BF] transition hover:border-white hover:text-white"
              >
                Leer artículo
              </Link>
            ) : (
              <button
                type="button"
                className="mt-4 inline-flex w-fit items-center rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-[#9CA3AF]"
              >
                Avísame cuando esté listo
              </button>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
