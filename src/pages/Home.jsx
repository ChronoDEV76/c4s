import React, { useEffect, useMemo, useRef, useState } from "react";
import Button from "../components/Button.jsx";

export default function Landing() {
  // lock scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, []);

  const TABS = useMemo(() => ["Brandwachten", "Evenementen", "IT-Security"], []);
  const [tab, setTab] = useState(0);
  const [paused, setPaused] = useState(false);
  const interactedRef = useRef(false);

  // respect reduced motion
  const prefersReduced = useMemo(
    () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches,
    []
  );

  // auto-rotate panels
  useEffect(() => {
    if (paused || prefersReduced) return;
    const id = setInterval(() => setTab((t) => (t + 1) % TABS.length), 6000);
    return () => clearInterval(id);
  }, [paused, prefersReduced, TABS.length]);

  const onUserPick = (i) => {
    interactedRef.current = true;
    setPaused(true); // auto-rotate pauzeren na interactie
    setTab(i);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[rgb(var(--bg))] text-[rgb(var(--brand-dark))]">
      {/* Background: video + overlay + subtle glow */}
      <div className="absolute inset-0 -z-10">
        <video
          key="hero-video"
          className="h-full w-full object-cover"
          src="/hero.mp4"           // zet /public/hero.mp4
          poster="/hero.jpg"        // fallback/poster
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />
        {!prefersReduced && (
          <div className="pointer-events-none absolute -left-40 top-1/2 h-[60vh] w-[60vh] -translate-y-1/2 rounded-full bg-[rgb(var(--brand-primary))]/20 blur-3xl animate-pulse" />
        )}
      </div>

      {/* Top bar */}
      <header className="flex items-center justify-between px-6 pt-5">
        <div className="text-white text-lg font-extrabold">Chrono4Solutions</div>
        <div className="hidden gap-2 md:flex">
          {TABS.map((t, i) => (
            <button
              key={t}
              onClick={() => onUserPick(i)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                tab === i
                  ? "bg-white text-[rgb(var(--brand-primary))]"
                  : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              {t}
            </button>
          ))}
          <button
            onClick={() => setPaused((p) => !p)}
            className="rounded-full px-4 py-2 text-sm bg-white/10 text-white/80 hover:bg-white/20"
            aria-pressed={paused}
          >
            {paused ? "▶︎ Play" : "⏸ Pause"}
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="relative mx-auto flex h-[calc(100vh-140px)] max-w-6xl items-center justify-center px-6">
        {/* Left: pitch + CTA */}
        <div className="max-w-xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            Onafhankelijk • DBA-proof • Verzekerd
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            Veiligheid die verkoopt:
            <span className="opacity-90"> minder risico, meer vertrouwen.</span>
          </h1>
          <p className="mt-5 text-lg opacity-90">
            Snel inzetbare <strong>brandwachten</strong> en <strong>IT-security</strong>.
            Eén aanspreekpunt, transparant tarief, rapportage na afloop.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Vraag beschikbaarheid</Button>
            <Button
              variant="ghost"
              href="tel:+31628724654"
              className="text-white border-white/30 hover:bg-white/10"
            >
              Bel direct: 06 28724654
            </Button>
          </div>

          {/* Mobile tabs + pause */}
          <div className="mt-6 flex gap-2 md:hidden">
            {TABS.map((t, i) => (
              <button
                key={t}
                onClick={() => onUserPick(i)}
                className={`rounded-full px-3 py-1.5 text-xs transition ${
                  tab === i
                    ? "bg-white text-[rgb(var(--brand-primary))]"
                    : "bg-white/10 text-white/80 hover:bg-white/20"
                }`}
              >
                {t}
              </button>
            ))}
            <button
              onClick={() => setPaused((p) => !p)}
              className="rounded-full px-3 py-1.5 text-xs bg-white/10 text-white/80 hover:bg-white/20"
              aria-pressed={paused}
            >
              {paused ? "▶︎" : "⏸"}
            </button>
          </div>
        </div>

        {/* Right: sliding panels */}
        <div className="relative ml-6 hidden w-[520px] max-w-full md:block">
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
            <div className="relative h-[360px] w-full overflow-hidden rounded-xl bg-black/70">
              <div
                className={`absolute inset-0 flex h-full w-[300%] transition-transform ${
                  prefersReduced ? "" : "duration-500 ease-out"
                }`}
                style={{ transform: `translateX(-${tab * 33.3333}%)` }}
              >
                <Panel>
                  <Badge>Brandwachten</Badge>
                  <Lines />
                  <p className="mt-3 text-sm text-white/80">
                    Objectbeveiliging, preventierondes en toezicht bij hot work. Gecertificeerd en verzekerd.
                  </p>
                  <MiniCTA href="/brandwachten">Meer over brandwachten →</MiniCTA>
                </Panel>

                <Panel>
                  <Badge>Evenementen</Badge>
                  <Grid />
                  <p className="mt-3 text-sm text-white/80">
                    Zaal, backstage en outdoor. Eén aanspreekpunt voor aansturing & rapportage.
                  </p>
                  <MiniCTA href="/evenementen-veiligheid">Naar evenementen →</MiniCTA>
                </Panel>

                <Panel>
                  <Badge>IT-Security</Badge>
                  <Cards />
                  <p className="mt-3 text-sm text-white/80">
                    Quickscan, MFA/identity en endpoint/patch. Praktisch & schaalbaar voor MKB.
                  </p>
                  <MiniCTA href="/it-security">IT-security aanpak →</MiniCTA>
                </Panel>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-4 -left-4 rotate-[-2deg]">
            <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow backdrop-blur">
              ✔ Reactie binnen 24 uur
            </div>
          </div>
        </div>
      </main>

      {/* Bottom bar */}
      <footer className="flex items-center justify-between px-6 pb-5 text-xs text-white/75">
        <div>Chrono4Solutions • Amsterdam, NL</div>
        <div className="hidden gap-4 md:flex">
          <a href="/over" className="hover:underline">Over</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
        </div>
      </footer>
    </div>
  );
}

/* ---------- tiny presentational pieces ---------- */
function Panel({ children }) {
  return <div className="flex h-full w-1/3 flex-none flex-col p-5 text-white">{children}</div>;
}
function Badge({ children }) {
  return (
    <span className="inline-flex w-max items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
      {children}
    </span>
  );
}
function MiniCTA({ href, children }) {
  return (
    <a
      href={href}
      className="mt-4 inline-block text-sm font-semibold text-white/90 underline underline-offset-4 hover:opacity-90"
    >
      {children}
    </a>
  );
}
function Lines() {
  return (
    <div className="mt-4 space-y-2">
      <div className="h-4 w-3/4 rounded bg-white/15" />
      <div className="h-4 w-2/3 rounded bg-white/12" />
      <div className="h-28 w-full rounded bg-white/10" />
    </div>
  );
}
function Grid() {
  return (
    <div className="mt-4 grid grid-cols-3 gap-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-16 rounded bg-white/12" />
      ))}
      <div className="col-span-3 h-16 rounded bg-white/10" />
    </div>
  );
}
function Cards() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-2">
      <div className="h-20 rounded bg-white/12" />
      <div className="h-20 rounded bg-white/12" />
      <div className="col-span-2 h-24 rounded bg-white/10" />
    </div>
  );
}

