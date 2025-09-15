import React, { useState } from "react";
import Seo from "../components/Seo.jsx";

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    new FormData(e.currentTarget);
    // TODO: Koppel aan je backend of Formspree/Netlify
    setStatus("Bedankt! We nemen snel contact op.");
    e.currentTarget.reset();
  }

  return (
    <div className="container py-16">
      <Seo title="Contact — Chrono4Solutions" description="Neem contact op voor beschikbaarheid of een vrijblijvende intake." />
      <h1 className="text-3xl font-extrabold">Contact</h1>
      <p className="mt-2" style={{ color: "rgb(var(--brand-muted))" }}>
        Stuur je vraag of aanvraag — we reageren binnen 24 uur.
      </p>

      <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-2xl">
        <label className="grid gap-1">
          <span className="text-sm font-medium">Naam</span>
          <input name="name" required className="rounded-xl border p-3" placeholder="Naam" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">E-mail</span>
          <input name="email" type="email" required className="rounded-xl border p-3" placeholder="naam@bedrijf.nl" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Onderwerp</span>
          <input name="subject" className="rounded-xl border p-3" placeholder="Waarmee kunnen we helpen?" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Bericht</span>
          <textarea name="message" rows="5" required className="rounded-xl border p-3" placeholder="Beschrijf je aanvraag, datum/locatie/scope…" />
        </label>
        <button className="btn btn-primary mt-2" type="submit">Versturen</button>

        {status && <p className="text-sm text-green-600">{status}</p>}
      </form>
    </div>
  );
}
