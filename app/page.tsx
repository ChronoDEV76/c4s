const KVK_NUMMER = "55666531";
const BTW_NUMMER = "NL001991086B79";

export default function Page() {
  return (
    <>
      <section
        className="hero-landing relative flex min-h-[100dvh] w-full flex-col overflow-hidden text-white"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(5,7,15,0.85), rgba(5,7,15,0.55), rgba(5,7,15,0.9)), url('/images/c4s-hero-bg.png')",
          backgroundSize: "var(--hero-size)",
          backgroundPosition: "var(--hero-pos)",
        }}
      >
        {/* global overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80" />

        {/* content */}
        <div className="relative z-10 flex flex-1 items-start pt-10 sm:items-center sm:pt-0">
          <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-6">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.5em] text-[#cfa663] sm:text-sm">
              Veiligheid, zonder tussenlagen
            </p>

            <h1 className="font-display text-[40px] font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              <span className="text-white">Chrono</span>
              <span className="text-[#cfa663]">4</span>
              <span className="text-white">Solutions</span>
            </h1>

            <p className="mx-auto mt-6 max-w-[46ch] text-[15px] font-semibold leading-relaxed text-white/95 sm:text-xl">
              Eén aanspreekpunt voor fysieke én digitale veiligheid — helder in
              scope, transparant in uitvoering en auditbaar in rapportage.
            </p>
          </div>
        </div>

        {/* footer */}
        <footer className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:px-6 sm:py-3">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm font-semibold text-white/95 sm:text-base">
              <span>KvK: {KVK_NUMMER}</span>
              <span className="text-white/60">|</span>
              <span className="ml-2">BTW: {BTW_NUMMER}</span>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
