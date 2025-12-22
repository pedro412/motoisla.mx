import Link from "next/link";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";

const whatsappHref = `${SITE_CONFIG.whatsapp.link}?text=${encodeURIComponent(
  SITE_CONFIG.whatsapp.messages.general,
)}`;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0B0B0B]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E53935]/90 text-lg font-semibold text-white">
            MI
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-[var(--font-oswald)] text-xl uppercase tracking-wide">
              Moto Isla
            </span>
            <span className="text-xs text-[#9CA3AF]">
              Ciudad del Carmen
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[#E5E7EB] md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#E53935] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#E53935]/30 transition hover:bg-[#C62828]"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <nav className="md:hidden">
        <div className="flex items-center gap-4 overflow-x-auto px-4 pb-3 text-sm text-[#E5E7EB]">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-white/5 px-3 py-1.5 transition hover:border-white/20 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap rounded-full bg-[#E53935] px-3 py-1.5 font-semibold text-white shadow-md shadow-[#E53935]/30 transition hover:bg-[#C62828]"
          >
            WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
}
