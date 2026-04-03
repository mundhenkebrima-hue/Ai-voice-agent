const testimonials = [
  {
    name: "Amir B.",
    role: "Inhaber, Barbershop Frankfurt",
    text: "Ich konnte früher nie ans Telefon, wenn jemand im Stuhl saß. Jetzt bucht die KI die Termine während ich arbeite. Mein Kalender ist voll und ich hab keinen Stress mehr.",
    stars: 5,
  },
  {
    name: "Dr. med. Julia H.",
    role: "Kinderärztin, München",
    text: "Unsere Rezeption war chronisch überlastet. Seit dem KI-Rezeptionisten werden Routineanfragen automatisch bearbeitet. Die Mitarbeiterinnen haben endlich Zeit für die Patienten im Wartezimmer.",
    stars: 5,
  },
  {
    name: "Melanie S.",
    role: "Inhaberin, Beauty Studio Hamburg",
    text: "Samstags war das Telefon nie besetzt – und genau dann rufen die meisten Kunden an. Jetzt werden Buchungen rund um die Uhr angenommen. Umsatz deutlich gestiegen.",
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
            Was unsere Kunden sagen
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
