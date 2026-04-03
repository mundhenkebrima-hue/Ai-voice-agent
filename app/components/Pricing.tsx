const plans = [
  {
    name: "Starter",
    price: "197",
    period: "/ Monat",
    desc: "Ideal für Einzelbetriebe wie Friseure oder kleine Studios.",
    features: [
      "1 KI-Rezeptionist",
      "bis zu 300 Minuten / Monat",
      "Terminbuchung inklusive",
      "Google Calendar Integration",
      "SMS-Erinnerungen",
      "E-Mail-Support",
    ],
    cta: "Jetzt starten",
    highlight: false,
    note: null,
  },
  {
    name: "Professional",
    price: "397",
    period: "/ Monat",
    desc: "Für Praxen, Salons & Hotels mit höherem Anrufvolumen.",
    features: [
      "1 KI-Rezeptionist",
      "bis zu 1.000 Minuten / Monat",
      "Terminbuchung + Stornierung",
      "Alle Kalender-Integrationen",
      "SMS & WhatsApp Erinnerungen",
      "Individuelle Stimme & Name",
      "Priority Support",
    ],
    cta: "Demo buchen",
    highlight: true,
    note: "Meist gewählt",
  },
  {
    name: "Praxis / Klinik",
    price: "Auf Anfrage",
    period: "",
    desc: "Für Arztpraxen, Zahnarztpraxen und größere Betriebe.",
    features: [
      "Mehrere Standorte",
      "Unbegrenzte Minuten",
      "Praxis-Software Integration",
      "DSGVO-Datenschutzpaket",
      "Persönlicher Ansprechpartner",
      "Onboarding & Schulung",
    ],
    cta: "Kontakt aufnehmen",
    highlight: false,
    note: null,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#3b82f6] text-sm font-semibold uppercase tracking-wider">Preise</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Günstiger als ein Azubi
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ein Rezeptionist auf Minijob-Basis kostet Sie mindestens 520 € im Monat –
            und ist nicht 24/7 verfügbar. Unser KI-Rezeptionist schon.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-b from-[#1e3a5f] to-[#0d1424] border-[#3b82f6]/50 shadow-[0_0_40px_rgba(59,130,246,0.15)]"
                  : "bg-[#0d0d14] border-white/5 hover:border-white/10"
              }`}
            >
              {plan.note && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#3b82f6] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  {plan.note.toUpperCase()}
                </div>
              )}

              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>

              <div className="flex items-end gap-1 mb-8">
                {plan.price !== "Auf Anfrage" && (
                  <span className="text-gray-400 text-lg">€</span>
                )}
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-gray-400 text-sm mb-1">{plan.period}</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <span className="text-[#3b82f6] text-base flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center font-semibold py-3 rounded-full transition-all ${
                  plan.highlight
                    ? "bg-[#3b82f6] hover:bg-[#2563eb] text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                    : "border border-white/10 hover:border-white/30 text-gray-300 hover:text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-8">
          14 Tage kostenlos testen · Keine Einrichtungsgebühr · Monatlich kündbar
        </p>
      </div>
    </section>
  );
}
