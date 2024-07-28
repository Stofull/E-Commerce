import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import img1 from './img/image1.jpg';
import img2 from './img/image2.jpg';
import img3 from './img/image3.jpg';

const images = [
  img1,
  img2,
  img3,
];

const CarouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="relative flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="min-w-full h-64 md:h-96 flex-shrink-0 flex items-center justify-center relative overflow-hidden"
            onHoverStart={() => setShowOverlay(true)}
            onHoverEnd={() => setShowOverlay(false)}
          >
            <AnimatePresence>
              {showOverlay && (
                <motion.div
                  className="absolute left-0 top-0 bottom-0 right-0 z-10 flex justify-center items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
                  <motion.h1
                    className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75"
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                    exit={{ y: 10 }}
                  >
                    <span>Explore Now</span>
                    <Image src="/arrow.svg" alt="Arrow" width={16} height={16} />
                  </motion.h1>
                </motion.div>
              )}
            </AnimatePresence>
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              layout="fill"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        ))}
      </motion.div>
      
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-200"
        onClick={handlePrev}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-200"
        onClick={handleNext}
      >
        &#10095;
      </button>
    </div>
  );
};

export default CarouselSection;
