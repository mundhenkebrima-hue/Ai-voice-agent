const cases = [
  {
    emoji: "✂️",
    industry: "Friseursalon & Barbershop",
    potential: "Sehr hoch",
    potentialColor: "text-green-400",
    use: "Terminbuchungen während Sie schneiden, Preisauskünfte, Wartelistenanfragen – ohne den Kunden zu unterbrechen.",
    examples: ["Herrenhaarschnitt buchen", "Freie Termine abfragen", "Stornierungen aufnehmen"],
  },
  {
    emoji: "👶",
    industry: "Kinderarzt & Hausarzt",
    potential: "Sehr hoch",
    potentialColor: "text-green-400",
    use: "Praxistelefon rund um die Uhr besetzt. Termine vereinbaren, Rezeptanfragen aufnehmen, Triage bei dringenden Fällen.",
    examples: ["Termintbuchung", "Rezeptanfrage weiterleiten", "Öffnungszeiten & Adresse"],
  },
  {
    emoji: "💅",
    industry: "Nagelstudio & Beauty Salon",
    potential: "Sehr hoch",
    potentialColor: "text-green-400",
    use: "Buchungen für Maniküre, Wimpern, Massagen – der Agent kennt alle Dienstleistungen und bucht automatisch.",
    examples: ["Behandlung buchen", "Dauer & Preis mitteilen", "Storno & Umbuchung"],
  },
  {
    emoji: "🏨",
    industry: "Hotel & Pension",
    potential: "Hoch",
    potentialColor: "text-blue-400",
    use: "Zimmeranfragen beantworten, Verfügbarkeit prüfen, Direktbuchungen aufnehmen und an Ihr System weiterleiten.",
    examples: ["Zimmerverfügbarkeit", "Preise & Ausstattung", "Check-in Zeiten"],
  },
  {
    emoji: "🦷",
    industry: "Zahnarztpraxis",
    potential: "Hoch",
    potentialColor: "text-blue-400",
    use: "Rezeption entlasten: Termine buchen, Warteliste verwalten, Patienten über Behandlungskosten informieren.",
    examples: ["Kontrolltermin buchen", "Schmerztermin (dringend)", "Kassenleistungen erklären"],
  },
  {
    emoji: "🏃",
    industry: "Physiotherapie & Osteopathie",
    potential: "Hoch",
    potentialColor: "text-blue-400",
    use: "Ersttermine und Folgetermine buchen, Krankenkasseninfos geben, Absagen auffangen und Warteliste befüllen.",
    examples: ["Ersttermin vereinbaren", "Rezept einreichen", "Warteliste aufnehmen"],
  },
];

export default function UseCases() {
  return (
    <section id="usecases" className="py-24 px-6 bg-[#080810]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#8b5cf6] text-sm font-semibold uppercase tracking-wider">Branchen</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Perfekt für diese Branchen
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Überall dort, wo das Telefon klingelt während man beide Hände beschäftigt hat.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.industry}
              className="bg-[#0d0d14] border border-white/5 rounded-2xl p-6 hover:border-[#8b5cf6]/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="text-4xl">{c.emoji}</div>
                <span className={`text-xs font-semibold ${c.potentialColor} bg-white/5 px-2.5 py-1 rounded-full`}>
                  Potenzial: {c.potential}
                </span>
              </div>
              <h3 className="font-semibold text-base mb-2 text-white">{c.industry}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{c.use}</p>
              <div className="space-y-1.5">
                {c.examples.map((ex) => (
                  <div key={ex} className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="text-[#3b82f6]">→</span>
                    {ex}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
