import React from "react";
export default function Footer() {
  return (
    <footer className="bg-brand-dark py-10 text-gray-200">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="font-semibold">Chrono4Solutions / ProSafetyMatch</p>
        <p className="mt-1">📞 06 28724654 · ✉️ info@chronosolutions.nl</p>
        <p className="mt-4 text-xs text-gray-400">© {new Date().getFullYear()} C4S. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  );
}

