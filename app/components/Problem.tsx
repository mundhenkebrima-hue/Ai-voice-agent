const problems = [
  {
    icon: "😤",
    title: "Kunden warten ewig",
    desc: "Lange Warteschleifen frustrieren Kunden und kosten Sie Umsatz.",
  },
  {
    icon: "💸",
    title: "Mitarbeiter ausgelastet",
    desc: "Ihr Team verliert Stunden mit wiederholenden Standardanfragen.",
  },
  {
    icon: "🌙",
    title: "Nicht erreichbar nachts",
    desc: "Außerhalb der Öffnungszeiten verlieren Sie potenzielle Kunden.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Kennen Sie diese Probleme?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Traditionelle Kundenkommunikation ist teuer, langsam und nicht skalierbar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-[#0d0d14] border border-white/5 rounded-2xl p-6 hover:border-red-500/20 transition-colors"
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-red-400">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Arrow / Solution intro */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#3b82f6]/10 to-[#8b5cf6]/10 border border-[#3b82f6]/20 rounded-2xl px-8 py-4">
            <span className="text-[#3b82f6] text-2xl">✓</span>
            <p className="text-white font-medium">
              VoiceAI Pro löst all das – vollautomatisch, ohne Mehraufwand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
