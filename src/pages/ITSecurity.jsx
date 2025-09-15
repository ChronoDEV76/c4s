import React from "react";
import Button from "../components/Button.jsx";

export default function ITSecurity() {
  return (
    <>
      {/* HERO – full-bleed */}
      <section className="relative w-screen min-h-[55vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2000&auto=format&fit=crop"
          alt="Cyber security"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative flex h-full items-center justify-center px-6 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">IT-Security (MKB)</h1>
            <p className="mt-4 text-white/90 md:text-lg">
              Quickscan, hardening en basis-monitoring zodat systemen, accounts en back-ups op orde zijn. NIS2-proof basis.
            </p>
            <div className="mt-8">
              <Button href="/contact">Plan een quickscan</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pakketten / scope */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ["Quickscan & advies", "Inventarisatie van risico’s, prioriteiten en een concreet 30-dagen actieplan."],
            ["Identity & toegang", "MFA overal, wachtwoordbeleid, rechtenopschoning en logging."],
            ["Endpoint & back-up", "Patchbeleid, versleuteling, hersteltest back-ups en basis EDR/SIEM-light."],
          ].map(([t, d]) => (
            <article key={t} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-brand-muted">{d}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Awareness & phishing</h3>
            <p className="mt-2 text-brand-muted">
              Korte sessies en realistische simulaties om gedrag te verbeteren. Materiaal klaar voor interne rollout.
            </p>
          </article>
          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Incident triage</h3>
            <p className="mt-2 text-brand-muted">
              Eerste analyse, containment en herstelcoördinatie. Heldere communicatie met management en leveranciers.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="w-screen bg-brand-primary py-16 text-center text-white md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold">Start met een quickscan</h2>
        <p className="mx-auto mt-3 max-w-2xl">Binnen één week inzicht in de grootste winstpunten en concrete acties.</p>
        <div className="mt-8">
          <a href="/contact" className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 font-semibold text-brand-primary shadow hover:bg-gray-50">
            Vraag een voorstel aan
          </a>
        </div>
      </section>
    </>
  );
}

