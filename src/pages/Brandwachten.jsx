import React from "react";
export default function Brandwachten() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative w-full flex items-center justify-center text-center text-white"
        style={{ minHeight: "70vh" }}
      >
        {/* Achtergrondbeeld */}
        <div className="absolute inset-0">
          <img
            src="/a8fb9342-cbe8-4f79-aa86-e758615892f9.png" // zet dit bestand in je /public folder
            alt="Chrono4Solutions Brandwachten"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" /> {/* overlay voor leesbaarheid */}
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold">Brandwachten</h1>
          <p className="mt-6 text-lg md:text-xl">
            Ervaren en gecertificeerde inzet voor objectbeveiliging, preventierondes en
            toezicht bij risicowerkzaamheden. DBA-proof en verzekerd.
          </p>
          <a
            href="/contact"
            className="mt-10 inline-block rounded-lg bg-brand-primary px-6 py-3 font-semibold text-white shadow hover:bg-brand-dark transition"
          >
            Vraag beschikbaarheid
          </a>
        </div>
      </section>

      {/* Aanbod */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ["Object & evenementen", "Zaal, backstage, outdoor en tijdelijke objecten."],
            ["Hot work toezicht", "Las-/slijpwerk, brandgevaarlijke werkzaamheden, werkvergunningen."],
            ["Preventie & rondes", "Controle routes, nooduitgangen, BHV-afstemming en logboek."],
          ].map(([t, d]) => (
            <article key={t} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-brand-muted">{d}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Certificering & verzekering</h3>
            <p className="mt-2 text-brand-muted">
              Inzet door zelfstandige professionals met relevante certificaten.
              Aansprakelijkheid en bedrijfsaansprakelijkheid geregeld.
            </p>
          </article>
          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Werkwijze</h3>
            <p className="mt-2 text-brand-muted">
              Heldere briefing, aanspreekpunt op locatie, rapportage na afloop.
              Tarieven transparant; geen verborgen marges.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="w-screen bg-brand-primary py-16 text-center text-white md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold">Binnenkort inzet nodig?</h2>
        <p className="mx-auto mt-3 max-w-2xl">
          Stuur datum, locatie en scope – we reageren binnen 24 uur.
        </p>
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 font-semibold text-brand-primary shadow hover:bg-gray-50"
          >
            Neem contact op
          </a>
        </div>
      </section>
    </>
  );
}

