import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const CarouselSection = () => {
  const images = [
    "https://media.wired.com/photos/63728604691ed08cc4b98976/16:9/w_2095,h_1178,c_limit/Nike-Swoosh-News-Gear.jpg",
    "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp",
    "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp",
    "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp",
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
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
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
