const features = [
  {
    icon: "📞",
    title: "Nimmt jeden Anruf an",
    desc: "Der KI-Rezeptionist geht sofort ran – ohne Warteschleife, ohne Mailbox. Kein Anruf bleibt unbeantwortet, egal wie viel los ist.",
  },
  {
    icon: "📅",
    title: "Bucht Termine direkt",
    desc: "Freie Zeiten abfragen, Termin bestätigen, in Ihren Kalender eintragen – vollautomatisch. Kompatibel mit Google Calendar, Calendly, Fresha & Co.",
  },
  {
    icon: "🗣️",
    title: "Klingt wie ein echter Mensch",
    desc: "Natürliche, flüssige Gespräche auf Deutsch. Kunden merken kaum, dass sie mit einer KI sprechen.",
  },
  {
    icon: "💬",
    title: "Beantwortet Kundenfragen",
    desc: "Preise, Öffnungszeiten, Wartezeiten, Anfahrt – Ihr Rezeptionist kennt alle Antworten und gibt sie sofort.",
  },
  {
    icon: "🔔",
    title: "Terminerinnerungen per SMS",
    desc: "No-Shows kosten Geld. Der Agent schickt automatisch Erinnerungen und senkt Ihre Ausfallrate spürbar.",
  },
  {
    icon: "⚡",
    title: "In 48h startklar",
    desc: "Kein technisches Know-how nötig. Wir richten alles ein – Sie müssen nur Ihre gewohnten Tools weiter nutzen.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#3b82f6] text-sm font-semibold uppercase tracking-wider">So funktioniert es</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Ihr Rezeptionist der nie krank wird
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Einmal eingerichtet läuft er vollautomatisch – und nimmt Ihnen die lästigen Telefonunterbrechungen ab.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-[#0d0d14] border border-white/5 rounded-2xl p-6 hover:border-[#3b82f6]/30 hover:bg-[#0d1424] transition-all duration-300"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-[#3b82f6] transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
