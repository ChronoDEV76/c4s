import ContactOverlay from "./components/ContactOverlay";

export default function Page() {
  return (
    <>
      <section
        className="hero-landing relative min-h-[100dvh] w-full overflow-hidden text-white"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(5,7,15,0.85), rgba(5,7,15,0.55), rgba(5,7,15,0.9)), url('/images/c4s-hero-bg.png')",
          backgroundSize: "var(--hero-size)",
          backgroundPosition: "var(--hero-pos)",
        }}
      >
        {/* global overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80" />

        <div className="pointer-events-none absolute left-1/2 top-[6%] z-20 hidden -translate-x-1/2 sm:block">
          <h1 className="font-display text-5xl font-black tracking-tight text-white/90 sm:text-6xl md:text-7xl">
            <span className="text-white/90">Chrono</span>
            <span className="text-[#cfa663]">4</span>
            <span className="text-white/90">Solutions</span>
          </h1>
        </div>

        <div className="relative z-10 flex min-h-[100dvh] w-full">
          <aside className="mx-auto flex w-full max-w-sm flex-col items-center justify-center px-4 py-16 -translate-y-10 sm:-translate-x-6 sm:-translate-y-32 sm:mx-0 sm:max-w-[360px] sm:items-start sm:px-8">
            <div className="mb-6 text-center sm:hidden">
              <h1 className="font-display text-3xl font-black tracking-tight text-white/95">
                <span className="text-white">Chrono</span>
                <span className="text-[#cfa663]">4</span>
                <span className="text-white">Solutions</span>
              </h1>
            </div>
            <ContactOverlay />
          </aside>
          <div className="flex-1" />
        </div>
      </section>
    </>
  );
}
