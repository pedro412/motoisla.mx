import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: {
    default: "Moto Isla | Cascos y accesorios en Ciudad del Carmen",
    template: "%s | Moto Isla",
  },
  description:
    "Cascos certificados, accesorios e indumentaria para motociclistas en Ciudad del Carmen. Asesoría en tienda, promociones y convenios.",
  metadataBase: new URL("https://motoisla.mx"),
  icons: {
    icon: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Moto Isla | Cascos y accesorios en Ciudad del Carmen",
    description:
      "Cascos certificados, accesorios e indumentaria para motociclistas en Ciudad del Carmen. Asesoría en tienda, promociones y convenios.",
    siteName: SITE_CONFIG.name,
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Moto Isla tienda y equipamiento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moto Isla | Cascos y accesorios en Ciudad del Carmen",
    description:
      "Cascos certificados, accesorios e indumentaria para motociclistas en Ciudad del Carmen. Asesoría en tienda, promociones y convenios.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${oswald.variable} font-sans bg-[#0B0B0B] text-white antialiased`}
      >
        <div className="min-h-screen bg-[#0B0B0B] text-white">
          <Header />
          <main className="pb-24">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
