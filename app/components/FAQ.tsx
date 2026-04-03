"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Kann der KI-Rezeptionist wirklich Termine in meinen Kalender buchen?",
    a: "Ja – direkt und in Echtzeit. Wir verbinden ihn mit Ihrem bestehenden Kalender (Google Calendar, Calendly, Fresha, Treatwell, etc.). Der Kunde nennt seinen Wunschtermin, die KI prüft die Verfügbarkeit und trägt den Termin sofort ein.",
  },
  {
    q: "Klingt das nach einer Maschine? Merken meine Kunden den Unterschied?",
    a: "Die Stimme klingt natürlich und warm – kein roboterhafter Ton. Die meisten Kunden merken keinen Unterschied. Auf Wunsch können wir dem Rezeptionisten auch einen eigenen Namen geben, z.B. \"Hallo, hier ist Lena von Salon Bella.\"",
  },
  {
    q: "Was passiert, wenn jemand eine komplizierte Frage hat?",
    a: "Bei Fragen, die die KI nicht beantworten kann, nimmt sie Name und Rückrufnummer auf und informiert Sie per SMS oder E-Mail. So verlieren Sie keinen Anruf – und entscheiden selbst, wann Sie zurückrufen.",
  },
  {
    q: "Wie schnell ist der KI-Rezeptionist eingerichtet?",
    a: "In der Regel innerhalb von 48 Stunden. Wir lernen Ihr Angebot, Ihre Öffnungszeiten und Ihre Preise kennen – und konfigurieren alles für Sie. Sie müssen nichts Technisches tun.",
  },
  {
    q: "Ist das DSGVO-konform? Gerade für Arztpraxen wichtig.",
    a: "Ja. Alle Daten werden auf europäischen Servern verarbeitet. Wir stellen Ihnen einen Auftragsverarbeitungsvertrag (AVV) zur Verfügung. Das Paket \"Praxis / Klinik\" beinhaltet ein erweitertes Datenschutzpaket.",
  },
  {
    q: "Was kostet mich ein verpasster Anruf wirklich?",
    a: "Ein Friseurtermin bringt im Schnitt 40–80 €. Wenn täglich nur 3 Anrufe unbeantwortet bleiben, sind das über 100–200 € verlorener Umsatz pro Tag. Unser Rezeptionist kostet Sie weniger als 7 € pro Tag – und beantwortet jeden einzelnen Anruf.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#3b82f6] text-sm font-semibold uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Häufige Fragen
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[#0d0d14] border border-white/5 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/2 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-sm pr-4">{faq.q}</span>
                <span
                  className={`text-[#3b82f6] text-lg flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
