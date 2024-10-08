import React from 'react';
import './contact.css'; // Import contact page styles

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions or need further information, feel free to reach out to us using the form below.</p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
