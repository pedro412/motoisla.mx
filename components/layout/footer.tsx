import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0B0B0B]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14">
              <Image
                src="/logo.png"
                alt={`${SITE_CONFIG.name} logo`}
                fill
                sizes="56px"
                className="rounded-full object-cover"
              />
            </div>
            <div className="leading-tight">
              <p className="font-[var(--font-oswald)] text-xl uppercase tracking-wide">
                Moto Isla
              </p>
              <p className="text-sm text-[#9CA3AF]">{SITE_CONFIG.city}</p>
            </div>
          </div>
          <p className="text-sm text-[#9CA3AF]">
            {SITE_CONFIG.address}
          </p>
          <a
            href={`${SITE_CONFIG.whatsapp.link}?text=${encodeURIComponent(SITE_CONFIG.whatsapp.messages.general)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2DD4BF] transition hover:text-white"
          >
            WhatsApp {SITE_CONFIG.whatsapp.number}
          </a>
        </div>

        <div>
          <h4 className="font-semibold text-white">Páginas</h4>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-[#9CA3AF]">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white">Contacto</h4>
          <div className="mt-3 space-y-2 text-sm text-[#9CA3AF]">
            <p>{SITE_CONFIG.address}</p>
            <p>WhatsApp: {SITE_CONFIG.whatsapp.number}</p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 text-[#2DD4BF] transition hover:text-white"
            >
              Ir a contacto
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white">Redes</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[#9CA3AF]">
            <a
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              Facebook
            </a>
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-[#6B7280] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. Todos los derechos reservados.</p>
          <Link href="/contacto" className="hover:text-white">
            Aviso de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
