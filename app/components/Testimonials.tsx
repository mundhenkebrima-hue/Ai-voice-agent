const testimonials = [
  {
    name: "Marcus W.",
    role: "Inhaber, Autohaus München",
    text: "Seitdem wir den Voice Agent nutzen, entgehen uns keine Anfragen mehr. Selbst nachts werden Termine gebucht. Absolut empfehlenswert!",
    stars: 5,
  },
  {
    name: "Sandra K.",
    role: "Praxismanagerin, Zahnarztpraxis Hamburg",
    text: "Unsere Rezeption wird massiv entlastet. 70% der Terminanfragen werden jetzt vollautomatisch bearbeitet. Die Patienten sind begeistert.",
    stars: 5,
  },
  {
    name: "Thomas R.",
    role: "E-Commerce Unternehmer",
    text: "Die Integration mit unserem Shopify-Store war reibungslos. Kunden bekommen sofort Antworten auf Bestellfragen – die Retourenquote ist gesunken.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#080810]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#3b82f6] text-sm font-semibold uppercase tracking-wider">Kundenstimmen</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Das sagen unsere Kunden
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#0d0d14] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-gray-500 text-xs mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
