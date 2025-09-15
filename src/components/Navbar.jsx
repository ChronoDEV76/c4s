import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

function useDarkMode() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return [dark, setDark];
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useDarkMode();

  const linkBase = "px-3 py-2 rounded-lg text-sm md:text-base transition";
  const linkInactive = "text-brand-muted hover:text-brand-dark hover:bg-[rgba(0,0,0,0.04)]";
  const linkActive = "text-brand-dark bg-[rgba(36,122,228,0.12)]";

  return (
    <header className="sticky top-0 z-50 border-b" style={{ borderColor: "var(--color-border)", backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.7)" }}>
      <nav className="container flex items-center justify-between py-3">
        <Link to="/" className="text-lg font-extrabold tracking-tight">Chrono4Solutions</Link>

        <div className="flex items-center gap-2">
          <button aria-label="Toggle dark mode" className="btn btn-ghost px-3 py-2" onClick={() => setDark(!dark)}>
            {dark ? "🌙" : "☀️"}
          </button>
          <button className="md:hidden btn btn-ghost px-3 py-2" onClick={() => setOpen(!open)} aria-label="Open menu">
            ☰
          </button>
        </div>
      </nav>

      <div className={`container pb-3 md:pb-0 ${open ? "block" : "hidden md:block"}`}>
        <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1">
          {[
            ["/evenementen-veiligheid", "Evenementen"],
            ["/brandwachten", "Brandwachten"],
            ["/it-security", "IT Security"],
            ["/over", "Over"],
            ["/contact", "Contact"],
          ].map(([to, label]) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

