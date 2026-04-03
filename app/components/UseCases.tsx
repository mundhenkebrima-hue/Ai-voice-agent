const cases = [
  {
    emoji: "🍕",
    industry: "Restaurants & Gastronomie",
    use: "Tischreservierungen annehmen, Bestellungen entgegennehmen, Öffnungszeiten mitteilen – vollautomatisch.",
  },
  {
    emoji: "🛒",
    industry: "E-Commerce",
    use: "Bestellstatus abfragen, Retouren einleiten, Produktberatung und Up-Selling rund um die Uhr.",
  },
  {
    emoji: "🏥",
    industry: "Arztpraxen & Kliniken",
    use: "Terminbuchungen, Erinnerungen, Rezeptanfragen und Patientenanfragen automatisiert verwalten.",
  },
  {
    emoji: "🏠",
    industry: "Immobilien",
    use: "Besichtigungstermine vereinbaren, Interessenten qualifizieren und Erstinformationen liefern.",
  },
  {
    emoji: "🚗",
    industry: "Autowerkstätten & KFZ",
    use: "Werkstatttermine buchen, Kostenvoranschläge kommunizieren und Kunden über Fahrzeugstatus informieren.",
  },
  {
    emoji: "📞",
    industry: "Kundenservice allgemein",
    use: "FAQs beantworten, Tickets erstellen, Eskalationen weiterleiten – für jede Branche anpassbar.",
  },
];

export default function UseCases() {
  return (
    <section id="usecases" className="py-24 px-6 bg-[#080810]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#8b5cf6] text-sm font-semibold uppercase tracking-wider">Use Cases</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Für jede Branche geeignet
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Egal ob kleines Unternehmen oder großes Team – VoiceAI Pro passt sich Ihren Anforderungen an.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.industry}
              className="bg-[#0d0d14] border border-white/5 rounded-2xl p-6 hover:border-[#8b5cf6]/30 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{c.emoji}</div>
              <h3 className="font-semibold text-base mb-2 text-[#c4b5fd]">{c.industry}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{c.use}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
