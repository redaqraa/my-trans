import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TourSearch from "./components/TourSearch";
import Popular from "./components/Popular";
import Packages from "./components/Packages";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./assets/css/style.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <TourSearch />
        <Popular />
        <Packages />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;