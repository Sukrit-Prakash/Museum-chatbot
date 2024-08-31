import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About the National Museum of India</h1>
          <p>Preserving India's rich cultural heritage through art, artifacts, and exhibitions.</p>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <h2>Our History</h2>
        <div className="history-content">
          <div className="history-text">
            <p>In 1946, the idea of building a National Museum for India was proposed by the Gwyer Committee. Sir Maurice Gwyer, the former chief justice of India and vice chancellor of Delhi University, headed the committee. One of the members of the committee was Sir Mortimer Wheeler, then heading the Archaeological Survey of India (ASI), who is often cited as chief initiators of the National Museum as he advocated for the museum's development although reports indicate that he was concerned with unifying ASI site museums under the umbrella of a museum's branch rather than setting up a new museum. Sir Sobha Singh had contracted the project.</p>
            <p>Since its inception, the National Museum owed much of its original structure and organization to the example of the Indian Museum, Kolkata, as some of its first curators were former employees of the Indian Museum, such as C. Sivaramamurti, even though the National Museum aspired to displace the historic position the Indian Museum had come to acquire as the largest and grandest museum in India</p>
          </div>
          <div className='card_museum'>
          <img src="/images/museum_enter.JPG" alt="Museum History" className="history-image" />
          <h5>Museum Enterance</h5>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-section">
        {/* <h2>Mission & Vision</h2> */}
        <div className="mission-cards">
          <div className="card">
            <img src="/images/mission.jpg" alt="Mission" />
            <h3>Our Mission</h3>
            <p>TTo collect art objects of Historical, Cultural and Artistic significance for the purpose of display, protection, preservation and interpretation (research).</p>
          </div>
          
          <div className="card">
            <img src="/images/director.jpg" alt="Vision" />
            <h3>Director General</h3>
            <h4>Dr  B.R. Mani</h4>
          </div>
          <div className="card">
            <img src="/images/object.jpeg" alt="Values" />
            <h3>Object of the Month</h3>
            <p>Lakshmi is one of the most celebrated deities in India. Since the early historic times, Lakshmi has been revered as the goddess of prosperity and wealth in the Brahmanical, Buddhist, and Jain traditions.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;