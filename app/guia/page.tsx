import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Guía del motociclista | Moto Isla",
  description: "Tips directos para rodar más seguro y elegir mejor tu equipo.",
};

const posts = [
  "Cómo elegir la talla correcta de tu casco",
  "Cuándo cambiar tu casco",
  "DOT vs ECE 22.06: lo que importa de verdad",
  "Equipo esencial para repartidores (sin gastar de más)",
  "Checklist para lluvia en Ciudad del Carmen",
  "Cómo cuidar tu casco y mica",
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
          <div key={post} className="card p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">Próximamente</p>
            <h3 className="heading text-xl font-semibold text-white">{post}</h3>
            <p className="mt-2 text-sm text-[#D1D5DB]">
              Este artículo estará disponible pronto con recomendaciones específicas para {SITE_CONFIG.city}.
            </p>
            <button
              type="button"
              className="mt-3 inline-flex w-fit items-center rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-[#9CA3AF]"
            >
              Avísame cuando esté listo
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
