export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#8b5cf6]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#60a5fa] text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse" />
          Ihr KI-Rezeptionist – nimmt jeden Anruf an
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
          Kein Anruf mehr{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]">
            verpasst.
          </span>
          <br />Kein Termin mehr verloren.
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Unser KI-Rezeptionist nimmt Anrufe an, führt echte Gespräche mit Ihren Kunden
          und bucht Termine direkt in Ihren Kalender – 24 Stunden am Tag, 7 Tage die Woche.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold px-8 py-4 rounded-full text-base transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
          >
            Kostenlose Demo buchen
          </a>
          <a
            href="#usecases"
            className="w-full sm:w-auto border border-white/10 hover:border-white/30 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-full text-base transition-all"
          >
            Für meine Branche →
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "24/7", label: "Erreichbar" },
            { value: "< 2s", label: "Antwortzeit" },
            { value: "0 €", label: "Verpasste Anrufe" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#3b82f6]">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
