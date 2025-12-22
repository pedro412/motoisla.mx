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
  title: "Moto Isla | Equipo certificado y convenios en Ciudad del Carmen",
  description:
    "Equipo certificado, asesoría honesta y convenios para repartidores, flotillas y motociclistas en Ciudad del Carmen.",
  metadataBase: new URL("https://motoisla.mx"),
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Moto Isla | Equipo certificado y convenios en Ciudad del Carmen",
    description:
      "Equipo certificado, asesoría honesta y convenios para repartidores, flotillas y motociclistas en Ciudad del Carmen.",
    siteName: SITE_CONFIG.name,
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 768,
        height: 615,
        alt: "Moto Isla logo",
      },
    ],
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
