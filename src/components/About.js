import React from 'react';
import Navbar from './Navbar';
import '../styles/about.css';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1>About Us</h1>
        <p>Welcome to our company! We are committed to delivering the best services to our clients.</p>
        <p>Our mission is to provide high-quality products that combine performance with value pricing, while establishing a successful relationship with our customers and our suppliers.</p>
        <p>We strive to continuously improve our products and services to meet our customers' needs, while maintaining a safe and healthy environment for our employees and the community.</p>
      </div>
    </>
  );
};

export default About;
