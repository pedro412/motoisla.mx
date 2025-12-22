import { SITE_CONFIG } from "@/lib/constants";

export function WhatsAppFloat() {
  const href = `${SITE_CONFIG.whatsapp.link}?text=${encodeURIComponent(
    SITE_CONFIG.whatsapp.messages.general,
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-black shadow-lg shadow-[#25D366]/40 transition hover:translate-y-[-2px] hover:shadow-xl sm:right-6"
      aria-label="Hablar por WhatsApp"
    >
      <span>WhatsApp</span>
    </a>
  );
}
