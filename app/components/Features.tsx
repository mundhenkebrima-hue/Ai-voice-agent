const features = [
  {
    icon: "🎙️",
    title: "Menschlich klingende Stimme",
    desc: "Fortschrittliche Text-to-Speech-Technologie sorgt für natürliche, angenehme Gespräche – Ihre Kunden merken kaum den Unterschied.",
  },
  {
    icon: "🧠",
    title: "Echtes Sprachverständnis",
    desc: "Der Agent versteht Kontext, Dialekte und komplexe Anfragen dank modernster KI-Modelle.",
  },
  {
    icon: "🔗",
    title: "Nahtlose Integration",
    desc: "Verbinden Sie den Voice Agent mit Ihrem CRM, Kalender, Webshop oder anderen Systemen via API.",
  },
  {
    icon: "📊",
    title: "Live-Dashboard & Analysen",
    desc: "Verfolgen Sie alle Gespräche, Konversionsraten und häufige Anfragen in Echtzeit.",
  },
  {
    icon: "🌍",
    title: "Mehrsprachig",
    desc: "Kommunizieren Sie mit Kunden in Deutsch, Englisch, Französisch, Spanisch und vielen weiteren Sprachen.",
  },
  {
    icon: "⚡",
    title: "Sofort einsatzbereit",
    desc: "Innerhalb von 48 Stunden ist Ihr individueller Voice Agent live – kein langer Einrichtungsaufwand.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#3b82f6] text-sm font-semibold uppercase tracking-wider">Vorteile</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Alles, was Ihr Business braucht
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Unsere KI-Sprachagenten sind speziell für den deutschen Markt entwickelt und auf Ihre Branche zugeschnitten.
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
