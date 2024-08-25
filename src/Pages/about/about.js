import React from 'react';
import './about.css'; // Import about page styles

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <section className="company-history">
        <h2>Our History</h2>
        <p>Founded in 2024, Fabrication Co. has quickly established itself as a leader in the fabrication industry. Our commitment to quality and innovation drives everything we do.</p>
      </section>
      <section className="mission-vision">
        <h2>Our Mission & Vision</h2>
        <p><strong>Mission:</strong> To deliver top-notch fabrication solutions that exceed our clients' expectations.</p>
        <p><strong>Vision:</strong> To be the preferred fabrication partner known for our excellence and reliability.</p>
      </section>
    </div>
  );
};

export default About;
