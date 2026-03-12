import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PT Siliwangi Sumber Makmur - Precision Blasting & Drilling",
  description:
    "PT Siliwangi Sumber Makmur. Penyedia jasa peledakan presisi dan pengeboran untuk pertambangan, quarry, dan konstruksi di seluruh Indonesia.",
  keywords: [
    "SSM",
    "Siliwangi Sumber Makmur",
    "peledakan",
    "pengeboran",
    "blasting",
    "drilling",
    "quarry",
    "pertambangan",
    "Nuskara",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="font-sans antialiased bg-neutral-950 text-neutral-300">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
