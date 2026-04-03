"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Wie schnell ist der Voice Agent einsatzbereit?",
    a: "In der Regel ist Ihr individueller Voice Agent innerhalb von 48 Stunden konfiguriert und live. Für Enterprise-Projekte mit tiefer Integration planen wir gemeinsam einen Zeitrahmen.",
  },
  {
    q: "Klingt der Agent wirklich natürlich?",
    a: "Ja – wir nutzen modernste KI-Stimmsynthese, die menschlicher klingt als je zuvor. Die meisten Anrufer bemerken keinen Unterschied zu einem echten Mitarbeiter.",
  },
  {
    q: "Kann ich den Agent mit meinem bestehenden System verbinden?",
    a: "Absolut. Wir bieten Integrationen für CRM-Systeme (HubSpot, Salesforce), Kalender (Google, Outlook), E-Commerce (Shopify, WooCommerce) und mehr per API.",
  },
  {
    q: "Was passiert, wenn der Agent eine Frage nicht beantworten kann?",
    a: "Der Agent erkennt automatisch, wenn eine Anfrage menschliche Unterstützung erfordert, und leitet das Gespräch nahtlos an einen Mitarbeiter weiter oder nimmt eine Rückrufliste auf.",
  },
  {
    q: "Ist die Nutzung DSGVO-konform?",
    a: "Ja. Alle Daten werden ausschließlich auf europäischen Servern verarbeitet. Wir bieten einen AVV und sind vollständig DSGVO-konform.",
  },
  {
    q: "Kann ich kündigen, wenn es mir nicht gefällt?",
    a: "Selbstverständlich. Alle Pakete sind monatlich kündbar. Außerdem bieten wir 14 Tage kostenlose Testphase ohne Risiko.",
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
