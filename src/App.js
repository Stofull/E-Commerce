import "./styles/modal.css";
import React from "react";
import Navbar from "./components/Navbar";
import TitleSection from "./components/TitleSection";
import CarouselSection from "./components/CarouselSection";
import Footer from "./components/Footer";
import GradientSeparator from "./components/GradientSeperator";


import CursorFollow from "./CursorFollow";
import "./styles/App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <CursorFollow />
      <Navbar />
      <div className="flex-grow">
        <TitleSection />
        <GradientSeparator />
        <CarouselSection />
        <GradientSeparator />
      </div>
      <Footer />
    </div>
  );
}

export default App;
