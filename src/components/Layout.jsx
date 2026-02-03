import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { useState } from "react";

export default function RootLayout() {
  const [filter, setFilter] = useState("جميع المقالات");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar setFilter={setFilter} />

      <main className="grow pt-20">
        <Outlet context={{ filter, setFilter }} />
      </main>

      <Footer setFilter={setFilter} />
    </div>
  );
}
