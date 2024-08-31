import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to the National Museum of India</h1>
          <p>Explore India's rich cultural heritage and historical treasures</p>
          <Link to="/visit" className="cta-button">Plan Your Visit</Link>
        </div>
      </section>

      <section className="about-museum">
        <div className="about-content">
          <img src="/images/museum.jpg" alt="Museum Front" className="about-image" />
          <div className="text-content">
            <h2>About the Museum</h2>
            <p>The National Museum of India showcases a vast collection of ancient artifacts, sculptures, and art that highlight India's rich history and culture.</p>
            <Link to="/about" className="text-link">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="highlights">
        <h2>Highlights</h2>
        <div className="highlight-grid">
          <div className="highlight-item">
            <img src="/images/art1.jpeg" alt="Gallery" />
            <h3>Art Gallery</h3>
            <p>Explore stunning artworks from different periods and regions.</p>
          </div>
          <div className="highlight-item">
            <img src="/images/artifact2.jpg" alt="Artifacts" />
            <h3>Ancient Artifacts</h3>
            <p>Delve into history with our extensive collection of artifacts.</p>
            
          </div>
          {/* <div className="highlight-item">
            <img src="/images/exhibition1.jpg" alt="Exhibition" />
            <h3>Special Exhibitions</h3>
            <p>Don't miss our current exhibitions, featuring rare and unique items.</p>
          </div> */}
        </div>
      </section>

      <section className="featured-exhibition">
        <div className="featured-content">
          <h2>Special Exhibition</h2>
          <h3>Exploring Past Special Exhibitions</h3>
          <p>The Exhibition Cell of the National Museum, New Delhi organises exhibitions of national and International level under the aegis of Festival of India, memorandum of understanding and Cultural Exchange Program.</p>
          <Link to="/exhibitions" className="secondary-button">Explore Now</Link>
        </div>
      </section>

      <section className="visit-info">
        <h2>Visit Us</h2>
        <div className="info-grid">
          <div className="info-item">
            <h3>Opening Hours</h3>
            <p>Tuesday - Sunday: 10:00 AM - 6:00 PM</p>
            <p>Closed on Mondays and public holidays</p>
          </div>
          <div className="info-item">
            <h3>Admission</h3>
            <p>Adults: ₹50 | Children: Free | Students: ₹25</p>
          </div>
          <div className="info-item">
            <h3>Location</h3>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5955516925937!2d77.21671597514208!3d28.61190777567607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd52c71ff0eb%3A0x20429f292fa5eecf!2sNational%20Museum%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1725045521093!5m2!1sen!2sin" 
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              title='Museum Location'
            />
          </div>
        </div>
      </section>
      <section className="LiveCount-container">
        <div className="LiveCount">
          <h4>Live Count</h4>
          <h4>25</h4>
        </div>
      </section>
    </div>
  );
};

export default Home;
