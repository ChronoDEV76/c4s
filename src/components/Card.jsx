import React from "react";

export default function Card({ className = "", children }) {
  return <article className={`card p-6 ${className}`}>{children}</article>;
}

