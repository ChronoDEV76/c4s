import React from "react";
export default function NotFound() {
  return (
    <div className="container py-20 text-center">
      <h1 className="text-3xl font-extrabold">Pagina niet gevonden</h1>
      <p className="mt-3" style={{ color: "rgb(var(--brand-muted))" }}>
        De opgevraagde pagina bestaat niet (404).
      </p>
      <a href="/" className="btn btn-primary mt-8">Naar home</a>
    </div>
  );
}

