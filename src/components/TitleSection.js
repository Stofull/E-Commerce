import React from "react";

const TitleSection = () => {
  return (
    
    <div className="titlebg">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-red-600 text-4xl font-bold mb-4">
        Welcome to Our E-commerce Site
      </h1>
      <div className="flex space-x-4">
      <button className="bg-orange-500 hover:bg-orange-700 active:bg-black text-white font-bold py-2 px-4 rounded-full">
          Get Started
        </button>
        <button className="bg-black hover:bg-black active:bg-orange-800 text-white font-bold py-2 px-4 rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default TitleSection;
