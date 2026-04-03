const problems = [
  {
    icon: "✂️",
    title: "Schere in der Hand, Telefon klingelt",
    desc: "Mitten im Haarschnitt, beim Behandeln, beim Einchecken – Sie können nicht jedes Mal rangehen. Der Anrufer legt auf und bucht woanders.",
  },
  {
    icon: "📵",
    title: "Außerhalb der Öffnungszeiten verlieren Sie Kunden",
    desc: "Die meisten Menschen rufen abends oder am Wochenende an. Wer dann nicht erreichbar ist, verliert diese Kunden an die Konkurrenz.",
  },
  {
    icon: "🔁",
    title: "Immer wieder dieselben Fragen",
    desc: "\"Was kostet ein Herrenhaarschnitt?\", \"Haben Sie Montag noch was frei?\", \"Wie lange muss ich warten?\" – Das kostet Sie täglich wertvolle Zeit.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Kennen Sie das?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Für Friseure, Arztpraxen und Dienstleister ist das Telefon oft mehr Last als Hilfe.
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

        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#3b82f6]/10 to-[#8b5cf6]/10 border border-[#3b82f6]/20 rounded-2xl px-8 py-4">
            <span className="text-[#3b82f6] text-2xl">✓</span>
            <p className="text-white font-medium">
              Ihr KI-Rezeptionist übernimmt jeden Anruf – egal ob 9 Uhr morgens oder 23 Uhr nachts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
