import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F6F8FC] text-brand-dark">
      <Navbar />
      <main className="flex-1">
        <Outlet /> {/* hier komen de child-routes */}
      </main>
      <Footer />
    </div>
  );
}


