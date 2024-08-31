// src/components/Contact.js
import React from 'react';
import './Contact.css'; // Import the custom CSS for styling
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa'; // Correct import for icons

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Please fill out the form below to get in touch with us.</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name"><FaUser className="icon" /> Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email"><FaEnvelope className="icon" /> Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message"><FaCommentDots className="icon" /> Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Write your message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
