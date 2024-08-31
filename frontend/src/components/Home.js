import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import MuseumHalls from './Museumhalls';
const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to National Museum India</h1>
          <p>Discover the rich cultural heritage of India</p>
          <Link to="/visit" className="cta-button">Plan Your Visit</Link>
        </div>
      </section>

      <section className="highlights">
        <h2>Museum Highlights</h2>
        <div className="highlight-grid">
          <div className="highlight-item">
            <img src="/images/background.jpeg" alt="Ancient Artifacts" />
            <h3>Ancient Artifacts</h3>
            <p>Explore our collection of rare and ancient artifacts from across India.</p>
          </div>
          <div className="highlight-item">
            <img src="/images/background2.jpeg" alt="Art Gallery" />
            <h3>Art Gallery</h3>
            <p>Immerse yourself in the beauty of Indian art through the ages.</p>
          </div>
          <div className="highlight-item">
            <img src="/images/artifact3.jpeg" alt="Interactive Exhibits" />
            <h3>Interactive Exhibits</h3>
            <p>Experience history hands-on with our engaging interactive displays.</p>
          </div>
        </div>
      </section>

      <section className="featured-exhibition">
        <div className="featured-content">
          <h2>Featured Exhibition</h2>
          <h3>The Silk Road: Connecting Cultures</h3>
          <p>Journey through time and space as we explore the cultural exchanges along the ancient Silk Road.</p>
          <Link to="/exhibitions" className="secondary-button">Learn More</Link>
        </div>
      </section>

      <section className="visit-info">
        <h2>Plan Your Visit</h2>
        <div className="info-grid">
          <div className="info-item">
            <h3>Opening Hours</h3>
            <p>Tuesday - Sunday: 10:00 AM - 6:00 PM</p>
            <p>Closed on Mondays and national holidays</p>
          </div>
          <div className="info-item">
            <h3>Admission</h3>
            <p>Adults: ₹50</p>
            <p>Children (under 12): Free</p>
            <p>Students and Seniors: ₹25</p>
          </div>
          <div className="info-item">
            <h3>Location</h3>
            <p>Janpath, New Delhi, 110011</p>
            <Link to="/contact" className="text-link">Get Directions</Link>
          </div>
        </div>
      </section>
      <MuseumHalls/>
    </div>
  );
};

export default Home;