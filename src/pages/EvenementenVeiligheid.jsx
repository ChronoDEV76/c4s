import React from "react";
import Button from "../components/Button.jsx";
import { Section, Container } from "../components/Section.jsx";
import Card from "../components/Card.jsx";

export default function EvenementenVeiligheid() {
  return (
    <>
      {/* HERO – full-bleed */}
      <section className="relative w-full flex items-center text-center text-white" style={{ minHeight: "60vh" }}>
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=2000&auto=format&fit=crop"
            alt="Evenement veiligheid"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold">Evenementenveiligheid</h1>
            <p className="mt-6 text-lg md:text-xl opacity-90">
              Directe inzet van brandwachten en locatiebeheer. DBA-proof, transparant en zonder tussenlagen.
            </p>
            <div className="mt-10">
              <Button href="/contact">Vraag beschikbaarheid</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* DIENSTEN */}
      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Brandwachten", "Ervaren en gecertificeerd voor zaal, backstage en outdoor-inzet."],
              ["Locatiebeheer", "Operationele aansturing en coördinatie met één aanspreekpunt."],
              ["Ad-hoc inzet", "Snel opschalen via onze zelfstandige pool, ook last-minute."],
            ].map(([title, desc]) => (
              <Card key={title}>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2" style={{ color: "rgb(var(--brand-muted))" }}>
                  {desc}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

