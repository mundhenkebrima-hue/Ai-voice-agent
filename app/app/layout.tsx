import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KI-Rezeptionist – Kein Anruf mehr verpasst | Für Friseure, Arztpraxen & mehr",
  description:
    "Ihr KI-Rezeptionist nimmt Anrufe an, führt echte Gespräche und bucht Termine – 24/7. Perfekt für Friseure, Arztpraxen, Beauty Studios und Hotels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="bg-[#0a0a0f] text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
