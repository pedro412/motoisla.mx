"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";

const whatsappHref = `${SITE_CONFIG.whatsapp.link}?text=${encodeURIComponent(
  SITE_CONFIG.whatsapp.messages.general
)}`;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0B0B0B]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-14 w-14">
            <Image
              src="/logo.png"
              alt={`${SITE_CONFIG.name} logo`}
              fill
              sizes="48px"
              priority
              className="object-cover"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-[var(--font-oswald)] text-xl font-bold uppercase tracking-wide">
              Moto Isla
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
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          aria-controls="mobile-drawer"
          onClick={() => setIsOpen(true)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-white/30"
        >
          <span className="sr-only">Abrir menú</span>
          <span className="relative block h-5 w-5">
            <span className="absolute left-0 top-0 h-0.5 w-full bg-white" />
            <span className="absolute left-0 top-2 h-0.5 w-full bg-white" />
            <span className="absolute left-0 top-4 h-0.5 w-full bg-white" />
          </span>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          />
          <aside
            id="mobile-drawer"
            aria-label="Menú móvil"
            className="fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm border-l border-white/10 bg-[#0B0B0B] p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <span className="font-[var(--font-oswald)] text-lg uppercase tracking-wide text-white">
                Moto Isla
              </span>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-white/30"
              >
                ✕
              </button>
            </div>
            <div className="mt-6 border-t border-white/10 pt-6">
              <nav className="flex flex-col rounded-xl bg-black px-2 text-sm font-medium text-[#E5E7EB]">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-2 py-3 text-white transition hover:bg-white/5 border-b border-white/10 last:border-b-0"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#E53935] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#E53935]/30 transition hover:bg-[#C62828]"
            >
              WhatsApp
            </a>
          </aside>
        </div>
      )}
    </header>
  );
}
