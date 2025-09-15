import React from "react";
export default function LoadingSpinner() {
  return (
    <div className="w-full py-20 text-center">
      <div className="inline-flex h-10 w-10 animate-spin items-center justify-center rounded-full border-2 border-brand-primary border-r-transparent" />
      <p className="mt-3 text-sm" style={{ color: "rgb(var(--brand-muted))" }}>Laden…</p>
    </div>
  );
}

