import React from 'react';

const TitleSection = () => {
  return (
    <div className="titlebg">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our E-commerce Site</h1>
      <div className="flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default TitleSection;
