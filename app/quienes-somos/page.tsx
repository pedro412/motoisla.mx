import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Quiénes somos | Moto Isla",
  description:
    "Moto Isla nace en Ciudad del Carmen para ofrecer equipo certificado, asesoría honesta y convenios para empresas y motociclistas.",
};

const team = [
  { name: "Pedro", role: "Atención en tienda", note: "Asesoría técnica y tallas." },
  { name: "Karina", role: "Convenios y flotillas", note: "Gestión de paquetes y precios." },
];

export default function QuienesSomosPage() {
  const whatsappLink = `${SITE_CONFIG.whatsapp.link}?text=${encodeURIComponent(
    SITE_CONFIG.whatsapp.messages.general,
  )}`;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <h1 className="heading text-4xl font-bold">Somos Moto Isla</h1>
          <p className="text-lg text-[#D1D5DB]">
            Moto Isla nace en Ciudad del Carmen con una idea clara: ofrecer equipo certificado,
            asesoría honesta y soluciones reales para quienes usan la moto todos los días.
          </p>
          <p className="text-lg text-[#D1D5DB]">
            Atendemos tanto a motociclistas como a empresas que dependen de la moto para operar,
            siempre con un enfoque en seguridad, calidad y cercanía.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://maps.google.com/?q=Calle+Francisco+Villa+6,+Ciudad+del+Carmen"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#E53935] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#C62828]"
            >
              Visítanos
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#2DD4BF] px-6 py-3 text-sm font-semibold text-[#2DD4BF] transition hover:border-white hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {team.map((person) => (
            <div key={person.name} className="card p-5">
              <div className="h-32 rounded-lg bg-gradient-to-br from-[#E53935]/20 via-[#0B0B0B] to-[#14B8A6]/20" />
              <h3 className="mt-3 heading text-xl font-semibold text-white">{person.name}</h3>
              <p className="text-sm text-[#D1D5DB]">{person.role}</p>
              <p className="text-xs text-[#9CA3AF]">{person.note}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
