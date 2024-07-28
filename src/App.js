import "./styles/modal.css";
import React from "react";
import Navbar from "./components/Navbar";
import TitleSection from "./components/TitleSection";
import CarouselSection from "./components/CarouselSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <TitleSection />
        {/* <div className="h-16 bg-black"></div> */}
        <CarouselSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
