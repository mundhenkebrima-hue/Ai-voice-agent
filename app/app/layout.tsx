import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VoiceAI Pro – Intelligente Sprachagenten für Ihr Unternehmen",
  description:
    "Automatisieren Sie Ihre Kundenkommunikation mit KI-gestützten Sprachagenten. 24/7 verfügbar, mehrsprachig und nahtlos integrierbar.",
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
