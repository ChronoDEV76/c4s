import React from "react";

export function Section({ className = "", children }) {
  return <section className={`section ${className}`}>{children}</section>;
}

export function Container({ className = "", children }) {
  return <div className={`container ${className}`}>{children}</div>;
}

