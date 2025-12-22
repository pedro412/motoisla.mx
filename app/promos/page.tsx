import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Promociones | Moto Isla",
  description: "Descuentos y combos del mes. Válidos en tienda y por WhatsApp.",
};

const promos = [
  { title: "Descuento en cascos seleccionados", detail: "Stock limitado, consulta tallas." },
  { title: "Combo de seguridad (casco + guantes)", detail: "Arma tu combo según tu ruta." },
  { title: "Precio especial en intercomunicadores", detail: "Pregunta por modelos disponibles." },
];

const combos = [
  { title: "Combo repartidor", detail: "Casco certificado + impermeable + guantes." },
  { title: "Combo lluvia", detail: "Impermeable + guantes + mica antiempañante." },
  { title: "Combo comunicación", detail: "Intercom + instalación y prueba." },
];

export default function PromosPage() {
  const whatsappLink = `${SITE_CONFIG.whatsapp.link}?text=${encodeURIComponent(
    SITE_CONFIG.whatsapp.messages.general,
  )}`;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="space-y-6">
        <h1 className="heading text-4xl font-bold">Promociones Moto Isla</h1>
        <p className="text-lg text-[#D1D5DB]">
          Descuentos y combos del mes. Válidos en tienda y por WhatsApp.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[#E53935] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#C62828]"
        >
          Apartar por WhatsApp
        </a>
      </section>

      <section className="space-y-4">
        <h2 className="heading text-2xl font-semibold">Promos del mes</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {promos.map((promo) => (
            <div key={promo.title} className="card p-5">
              <h3 className="heading text-xl font-semibold text-white">{promo.title}</h3>
              <p className="mt-2 text-sm text-[#D1D5DB]">{promo.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading text-2xl font-semibold">Combos</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {combos.map((combo) => (
            <div key={combo.title} className="card p-5">
              <h3 className="heading text-xl font-semibold text-white">{combo.title}</h3>
              <p className="mt-2 text-sm text-[#D1D5DB]">{combo.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-6">
        <h2 className="heading text-2xl font-semibold text-white">Condiciones</h2>
        <p className="mt-3 text-sm text-[#D1D5DB]">
          Aplican hasta agotar existencias. Consulta tallas y disponibilidad antes de tu visita.
          Promos válidas en tienda y por WhatsApp. Combos armables según modelos en stock.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center justify-center rounded-full border border-[#2DD4BF] px-4 py-2 text-sm font-semibold text-[#2DD4BF] transition hover:border-white hover:text-white"
        >
          Apartar por WhatsApp
        </a>
      </section>
    </div>
  );
}
