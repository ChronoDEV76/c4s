import React from "react";
export default function OverOns() {
  return (
    <>
      {/* HERO – full-bleed */}
      <section className="relative w-screen min-h-[50vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2000&auto=format&fit=crop"
            alt="Team backstage"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative flex h-full items-center justify-center px-6 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Over Chrono4Solutions</h1>
            <p className="mt-4 text-white/90 md:text-lg">
              Wij bouwen aan een eerlijke markt: direct samenwerken met zelfstandige professionals,
              DBA-proof en zonder ruis.
            </p>
          </div>
        </div>
      </section>

      {/* Intro + pijlers */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Onze visie</h2>
            <p className="mt-4 text-gray-700">
              Veiligheid is mensenwerk. Door rechtstreeks te werken met ervaren brandwachten en
              locatiebeheerders ontstaat duidelijkheid, continuïteit en betrokkenheid op de vloer.
            </p>
            <p className="mt-4 text-gray-700">
              Met ProSafetyMatch koppelen we opdrachtgevers aan zelfstandige professionals:
              transparant, verzekerd en met heldere afspraken.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              ["DBA-proof", "We werken conform wetgeving en houden risico’s laag."],
              ["Zelfstandig & verzekerd", "Eigen verantwoordelijkheid en dekking."],
              ["Transparant", "Geen verborgen marges, duidelijke tarieven."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-gray-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

