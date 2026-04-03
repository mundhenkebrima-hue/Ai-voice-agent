export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xl font-bold">
          Voice<span className="text-[#3b82f6]">AI</span> Pro
        </div>
        <p className="text-gray-600 text-sm text-center">
          © {new Date().getFullYear()} VoiceAI Pro. Alle Rechte vorbehalten.
        </p>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-300 transition-colors">Impressum</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Datenschutz</a>
          <a href="#" className="hover:text-gray-300 transition-colors">AGB</a>
        </div>
      </div>
    </footer>
  );
}
