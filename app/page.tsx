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
            <h1 className="font-display text-[40px] font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              <span className="text-white">Chrono</span>
              <span className="text-[#cfa663]">4</span>
              <span className="text-white">Solutions</span>
            </h1>


          </div>
        </div>

      </section>
    </>
  );
}
