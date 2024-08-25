import React from 'react';
import './footer.css'; // Import footer styles

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 Fabrication Co. All rights reserved.</p>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
