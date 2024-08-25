import React from 'react';
import './home.css'; // Import home page styles

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Fabrication Co.</h1>
        <p>Innovative Solutions for Modern Manufacturing Needs</p>
        <a href="/services" className="cta-button">Explore Our Services</a>
      </section>
      <section className="about-preview">
        <h2>About Us</h2>
        <p>We provide high-quality fabrication services that are tailored to meet your specific needs. Learn more about our company and our commitment to excellence.</p>
        <a href="/about" className="cta-button">Learn More</a>
      </section>
    </div>
  );
};

export default Home;
