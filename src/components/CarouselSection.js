import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const CarouselSection = () => {
  const images = [
    { src: "https://i.imgur.com/Z62QZJS.jpeg", buttonText: "Learn More"},
    { src: "https://i.imgur.com/5v3PaA3.jpeg", buttonText: "Discover" },
    { src: "https://i.imgur.com/mhDhyp8.jpeg", buttonText: "Shop Now" },
    { src: "https://i.imgur.com/GsLgtOA.jpeg", buttonText: "See More" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
      >
        {images.concat(images.slice(0, 2)).map((image, index) => (
          <div key={index} className="carousel-item">
            <img
              src={image.src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="carousel-caption">
              <h3>{image.caption}</h3>
              <button className="carousel-button">{image.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="carousel-button left">
        <FaArrowLeft />
      </button>
      <button onClick={nextSlide} className="carousel-button right">
        <FaArrowRight />
      </button>
    </div>
  );
};

export default CarouselSection;
