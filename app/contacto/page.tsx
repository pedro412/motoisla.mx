import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto | Moto Isla",
  description:
    "Contacto directo por WhatsApp o formulario para cotizar cascos, intercomunicadores y más en Ciudad del Carmen.",
};

export default function ContactoPage() {
  const whatsappLink = `${SITE_CONFIG.whatsapp.link}?text=${encodeURIComponent(
    SITE_CONFIG.whatsapp.messages.general,
  )}`;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="space-y-4">
        <h1 className="heading text-4xl font-bold">Contacto</h1>
        <p className="text-sm text-[#D1D5DB]">{SITE_CONFIG.address}</p>
        <p className="text-sm text-[#D1D5DB]">WhatsApp: {SITE_CONFIG.whatsapp.number}</p>
        <div className="flex flex-wrap gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#E53935] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#C62828]"
          >
            WhatsApp directo
          </a>
          <a
            href="https://maps.google.com/?q=Calle+Francisco+Villa+6,+Ciudad+del+Carmen"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#2DD4BF] px-6 py-3 text-sm font-semibold text-[#2DD4BF] transition hover:border-white hover:text-white"
          >
            Ver mapa
          </a>
        </div>
      </section>

      <section className="card p-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.2em] text-[#9CA3AF]">Cotización rápida</p>
          <h2 className="heading text-2xl font-semibold text-white">Envíanos tu solicitud</h2>
        </div>
        <form
          className="mt-6 grid gap-4 md:grid-cols-2"
          action={SITE_CONFIG.forms.endpoint}
          method="POST"
        >
          <input type="hidden" name="_subject" value="Cotización rápida | Moto Isla" />
          <label className="flex flex-col gap-2 text-sm text-[#E5E7EB]">
            Nombre
            <input
              required
              name="nombre"
              className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-[#2DD4BF]/40 focus:ring"
              placeholder="Tu nombre"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#E5E7EB]">
            WhatsApp
            <input
              required
              name="whatsapp"
              className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-[#2DD4BF]/40 focus:ring"
              placeholder="Ej. 938 000 0000"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#E5E7EB]">
            Producto de interés
            <select
              name="producto"
              className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-[#2DD4BF]/40 focus:ring"
              defaultValue="Casco"
            >
              <option value="Casco">Casco</option>
              <option value="Intercom">Intercom</option>
              <option value="Guantes">Guantes</option>
              <option value="Impermeable">Impermeable</option>
              <option value="Botas">Botas</option>
              <option value="Otro">Otro</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#E5E7EB]">
            Mensaje
            <textarea
              name="mensaje"
              rows={3}
              className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-[#2DD4BF]/40 focus:ring"
              placeholder="¿Qué necesitas cotizar?"
            />
          </label>
          <div className="flex flex-col gap-3 md:col-span-2">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#E53935] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#C62828] md:w-auto"
            >
              Enviar
            </button>
            <a
              href={`${SITE_CONFIG.whatsapp.link}?text=${encodeURIComponent(
                SITE_CONFIG.whatsapp.messages.cotizacion,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-[#2DD4BF] px-6 py-3 text-sm font-semibold text-[#2DD4BF] transition hover:border-white hover:text-white md:w-auto"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </form>
      </section>
    </div>
  );
}
