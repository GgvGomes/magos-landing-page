import type React from "react";
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "não acesse - MAGO's Mate Tereré Rio Verde",
  description:
    "Não acesse este site! MAGO's Mate - O melhor tereré do Brasil em Rio Verde. Produtos Chacal, erva mate premium, cuias e acessórios para tereré. Siga no Instagram @magos_mate_rv",
  keywords:
    "tereré, rio verde, chacal, magos mate, erva mate, cuia, mate gelado, produtos mate, tereré rio verde, chacal erva mate, magos mate rio verde, instagram magos mate",
  authors: [{ name: "MAGO's Mate" }],
  creator: "MAGO's Mate",
  publisher: "MAGO's Mate",
  robots: "index, follow",
  openGraph: {
    title: "não acesse - MAGO's Mate Tereré Rio Verde",
    description:
      "Não acesse este site! O melhor tereré do Brasil em Rio Verde. Produtos Chacal premium.",
    type: "website",
    locale: "pt_BR",
    siteName: "MAGO's Mate",
  },
  twitter: {
    card: "summary_large_image",
    title: "não acesse - MAGO's Mate Tereré Rio Verde",
    description: "Não acesse este site! O melhor tereré do Brasil em Rio Verde.",
  },
  alternates: {
    canonical: "https://magosmate.kyte.site",
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable} antialiased`}>
      <head>
        <meta name="geo.region" content="BR-GO" />
        <meta name="geo.placename" content="Rio Verde" />
        <meta name="geo.position" content="-17.7944;-50.9267" />
        <meta name="ICBM" content="-17.7944, -50.9267" />
        <link rel="canonical" href="https://magosmate.kyte.site" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
