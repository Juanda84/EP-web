import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import AgeGate from "@/components/AgeGate";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import SitePopupLoader from "@/components/SitePopupLoader";

export const dynamic = "force-dynamic";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eros Pereira — Comunidad privada",
  description:
    "Eros Pereira es una comunidad privada de estilo de vida alternativo. Membresía por invitación, discreción absoluta y experiencias de alto nivel.",
  robots: { index: false, follow: false },
  icons: { icon: "/images/favicon.png" },
  openGraph: {
    title: "Eros Pereira — Comunidad privada",
    description:
      "Comunidad privada de estilo de vida alternativo. Membresía por invitación, discreción absoluta y experiencias de alto nivel.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AgeGate />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsappButton />
        <SitePopupLoader />
      </body>
    </html>
  );
}
