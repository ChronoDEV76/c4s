import React from "react";
import { Link } from "react-router-dom";

export default function Button({ as = "a", variant = "primary", className = "", href = "#", to, children, ...props }) {
  const base = `btn ${variant === "primary" ? "btn-primary" : "btn-ghost"} ${className}`;

  if (as === "link" || to) {
    return (
      <Link to={to || href} className={base} {...props}>
        {children}
      </Link>
    );
  }
  if (as === "button") {
    return (
      <button className={base} {...props}>
        {children}
      </button>
    );
  }
  return (
    <a href={href} className={base} {...props}>
      {children}
    </a>
  );
}

