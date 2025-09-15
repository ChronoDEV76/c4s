// src/components/ErrorBoundary.jsx
import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="container py-16">
          <h1 className="text-2xl font-bold">Er ging iets mis</h1>
          <p className="mt-2" style={{ color: "rgb(var(--brand-muted))" }}>
            Probeer het opnieuw of ga terug naar de homepagina.
          </p>
          <a href="/" className="btn btn-primary mt-6">Terug naar home</a>
        </div>
      );
    }
    return this.props.children;
  }
}

