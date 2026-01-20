export default function ContactOverlay() {
  return (
    <div className="glass-panel pointer-events-auto p-4 sm:p-5">
      <p className="text-xs uppercase tracking-[0.4em] text-[#cfa663]">
        Contact
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
     
      </h2>
      <p className="mt-3 text-xs text-slate-200/80 sm:text-sm">
        Specialist in fysieke en digitale beveiliging — van brand- en beveiligingsbeheer op locatie tot ondersteuning bij digitale beveiligingsvraagstukken.
      </p>

      <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
        <iframe
          title="Chrono4Solutions on Google Maps"
          className="h-[180px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Atoomweg%2063%203542AA%20Utrecht&output=embed"
        />

        <div className="p-3 text-left text-xs text-slate-200/85">
          <p className="text-sm font-semibold text-white">Chrono4Solutions</p>
          <p>Atoomweg 63</p>
          <p>3542AA Utrecht</p>
          <p className="mt-2"></p>
          <p>
            E:{" "}
            <a
              className="font-semibold text-white transition hover:text-[#cfa663]"
              href="mailto:info@chronosolutions.nl"
            >
              info@chronosolutions.nl
            </a>
          </p>
          <p className="mt-2">
            <a
              className="font-semibold text-white transition hover:text-[#cfa663]"
              href="/Algemene_Voorwaarden_C4S.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Algemene voorwaarden (PDF)
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
