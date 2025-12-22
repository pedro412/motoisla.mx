import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Convenios | Moto Isla",
  description:
    "Convenios y paquetes de seguridad para repartidores, flotillas y compras institucionales en Ciudad del Carmen.",
};

const offering = [
  "Descuentos por volumen",
  "Paquetes por perfil (repartidor/flotilla)",
  "Atención directa y formal",
  "Abastecimiento y reposición",
  "Facturación según requerimiento",
];

const packages = [
  {
    name: "Repartidor Esencial",
    bullets: ["Casco certificado", "Impermeable", "Guantes"],
  },
  {
    name: "Repartidor Plus",
    bullets: ["Mejor casco / upgrade", "Guantes", "Impermeable", "Intercom (opcional)"],
  },
  {
    name: "Flotilla / Supervisión",
    bullets: ["Condiciones por volumen", "Reposiciones programadas", "Atención preferente"],
  },
];

const steps = [
  "Cuéntanos tu necesidad",
  "Te proponemos paquetes",
  "Acordamos condiciones",
  "Entrega y soporte",
];

export default function ConveniosPage() {
  const whatsappLink = `${SITE_CONFIG.whatsapp.link}?text=${encodeURIComponent(
    SITE_CONFIG.whatsapp.messages.convenios,
  )}`;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <h1 className="heading text-4xl font-bold">Convenios y paquetes de seguridad para tu equipo</h1>
          <p className="text-lg text-[#D1D5DB]">
            Soluciones para repartidores, flotillas y compras institucionales en Ciudad del Carmen.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#formulario-convenio"
              className="inline-flex items-center justify-center rounded-full bg-[#E53935] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#C62828]"
            >
              Solicitar convenio
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#2DD4BF] px-6 py-3 text-sm font-semibold text-[#2DD4BF] transition hover:border-white hover:text-white"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
        <div className="card p-6">
          <h3 className="heading text-2xl font-semibold text-white">Qué ofrecemos</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#D1D5DB]">
            {offering.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#2DD4BF]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.2em] text-[#9CA3AF]">Paquetes</p>
          <h2 className="heading text-3xl font-bold">Arma tu convenio</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {packages.map((pack) => (
            <div key={pack.name} className="card p-5">
              <h3 className="heading text-xl font-semibold text-white">{pack.name}</h3>
              <ul className="mt-3 space-y-2 text-sm text-[#D1D5DB]">
                {pack.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#F97316]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.2em] text-[#9CA3AF]">Proceso</p>
          <h2 className="heading text-2xl font-semibold text-white">Así trabajamos</h2>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-[#9CA3AF]">Paso {index + 1}</p>
              <p className="mt-2 font-semibold text-white">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="formulario-convenio" className="card p-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.2em] text-[#9CA3AF]">Solicitud</p>
          <h2 className="heading text-2xl font-semibold text-white">Solicitar convenio</h2>
          <p className="text-sm text-[#D1D5DB]">
            Llena el formulario y te contactamos por WhatsApp para cotizar y armar tu convenio.
          </p>
        </div>
        <form
          className="mt-6 grid gap-4 md:grid-cols-2"
          action={SITE_CONFIG.forms.endpoint}
          method="POST"
        >
          <input type="hidden" name="_subject" value="Solicitud de convenio | Moto Isla" />
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
            Empresa
            <input
              name="empresa"
              className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-[#2DD4BF]/40 focus:ring"
              placeholder="Nombre de la empresa"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#E5E7EB]">
            Número de colaboradores
            <input
              required
              name="colaboradores"
              type="number"
              min={1}
              className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-[#2DD4BF]/40 focus:ring"
              placeholder="Ej. 10"
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
            Necesidad principal
            <select
              name="necesidad"
              className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-[#2DD4BF]/40 focus:ring"
              defaultValue="Repartidores"
            >
              <option value="Repartidores">Repartidores</option>
              <option value="Flotilla">Flotilla</option>
              <option value="Institución">Institución</option>
              <option value="Otro">Otro</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#E5E7EB] md:col-span-2">
            Mensaje (opcional)
            <textarea
              name="mensaje"
              rows={3}
              className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-[#2DD4BF]/40 focus:ring"
              placeholder="Cuéntanos detalles de tu operación"
            />
          </label>
          <div className="flex flex-col gap-3 md:col-span-2">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#E53935] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#C62828] md:w-auto"
            >
              Enviar solicitud
            </button>
            <p className="text-xs text-[#9CA3AF]">
              Gracias. Te contactamos por WhatsApp para cotizar y armar tu convenio.
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}
