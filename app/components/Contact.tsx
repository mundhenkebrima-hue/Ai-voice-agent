"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#080810]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#3b82f6] text-sm font-semibold uppercase tracking-wider">Kontakt</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-gray-400">
            Vereinbaren Sie jetzt eine kostenlose Demo und sehen Sie live, wie Ihr Voice Agent arbeitet.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#0d2414] border border-green-500/20 rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold mb-2">Vielen Dank!</h3>
            <p className="text-gray-400 text-sm">
              Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#0d0d14] border border-white/5 rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-gray-400 mb-1.5">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Max Mustermann"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#3b82f6]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5">E-Mail *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="max@unternehmen.de"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#3b82f6]/50 transition-colors"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-gray-400 mb-1.5">Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+49 123 456789"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#3b82f6]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5">Unternehmen</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Musterfirma GmbH"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#3b82f6]/50 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1.5">Nachricht</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Beschreiben Sie kurz Ihren Use Case..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#3b82f6]/50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold py-4 rounded-full transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              Demo anfragen →
            </button>
            <p className="text-center text-gray-600 text-xs">
              Wir antworten innerhalb von 24 Stunden. Keine Verpflichtungen.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
