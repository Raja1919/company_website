import React from 'react';
import './services.css'; // Import services page styles

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <section className="service-item">
        <h2>Custom Fabrication</h2>
        <p>We offer tailored fabrication solutions to meet your unique specifications and requirements.</p>
      </section>
      <section className="service-item">
        <h2>Prototype Development</h2>
        <p>Our team can help you bring your ideas to life with rapid prototype development and testing.</p>
      </section>
      <section className="service-item">
        <h2>Structural Engineering</h2>
        <p>Expert structural engineering services to ensure the integrity and durability of your projects.</p>
      </section>
      <section className="service-item">
        <h2>Consultation Services</h2>
        <p>Get professional advice and insights to optimize your fabrication processes and project outcomes.</p>
      </section>
    </div>
  );
};

export default Services;
