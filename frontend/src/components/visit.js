import React, { useState } from 'react';
import './visit.css';

const Visit = () => {
  const [selectedVisit, setSelectedVisit] = useState(null);

  const visits = [
    {
      id: 1,
      title: "Archaeological Tour",
      description: "Explore the rich archaeological heritage of India, featuring artifacts, ancient relics, and historical insights from various eras.",
      details: `the mysteries of excavated artifacts, meticulously reconstructed relics, and cutting-edge technology, these exhibitions breathe life into the remnants of forgotten cultures. From the weathered stones of ancient temples to the delicate pottery of long-lost cities, each exhibit tells a tale of human ingenuity, creativity.In the realm of archaeology, museums unveil the secrets of ancient civilizations, transporting visitors through the ages to uncover the mysteries of bygone eras. With painstakingly excavated artifacts, meticulously reconstructed relics, and cutting-edge technology, these exhibitions breathe life into the remnants of forgotten cultures. From the weathered stones of ancient temples to the delicate pottery of long-lost cities, each exhibit tells a tale of human ingenuity, creativity, and perseverance. As we wander through the galleries,.`,
      location: "National Museum of India",
      image: "/images/archaeology2.jpg" // Add the relevant image
    },
    {
      id: 2,
      title: "Scientific Exploration",
      description: "Discover the scientific marvels of India, from ancient astronomical tools to modern scientific achievements.",
      details: `Illuminating the wonders of the natural world, scientific museums delve into the fascinating realms of science and technology, sparking curiosity and awe in visitors of all ages. Through interactive exhibits, immersive displays, and cutting-edge visualizations, these institutions reveal the intricacies of the universe, from the smallest subatomic particles to the vast expanse of cosmic wonders.Illuminating the wonders of the natural world, scientific museums delve into the fascinating realms of science and technology, sparking curiosity and awe in visitors of all ages. Through interactive exhibits, immersive displays, and cutting-edge visualizations, these institutions reveal the intricacies of the universe, from the smallest subatomic particles to the vast expanse of cosmic wonders. With hands-on experiments, live demonstrations, and innovative installations,`,
      Location: "Nehru planetarium",
      image: "/images/scientific.jpeg" // Add the relevant image
    },
    {
      id: 3,
      title: "Chemistry Wonders",
      description: "Dive into the world of chemistry and learn about the contributions of Indian chemists to the field.",
      details: `Chemistry wonders await around every corner, revealing the magic that unfolds when elements combine and bonds form. In this fascinating realm, the building blocks of life transform into incredible substances, from the shimmering beauty of crystals to the vibrant hues of pigments. Witness the mesmerizing dance of molecules, as they interact and react, giving rise to astonishing phenomena like luminescence, magnetism, and superconductivity. As we delve into the wonders of chemistry, we uncover the secrets of our world and the universe, discovering the incredible potential that lies within the intricate web of atomic connections, inspiring innovation, and awe-inspiring curiosity.`,
      Location : "National Scienc centre]",
      image: "/images/chemistry.jpeg" // Add the relevant image
    },
    {
      id: 4,
      title: "Cultural Heritage Tour",
      description: "Experience the diverse cultural heritage of India through its art, music, dance, and traditions.",
      details: `A cultural heritage tour is a journey through the soul of a nation, where the past comes alive in vibrant colors, sounds, and traditions. As we wander through historic streets, visit ancient monuments, and experience timeless customs, we connect with the people and events that shaped the present. From the intricate carvings on a centuries-old temple to the rhythmic beats of a traditional dance, every moment is a testament to the rich tapestry of human creativity and expression. Through this immersive experience, we not only discover the treasures of a bygone era but also gain a deeper understanding of the values, beliefs, and stories that continue to inspire and define a community, leaving us with unforgettable memories and a newfound appreciation for the diversity of human culture.`,
        location:"cannaught place", 
      image: "/images/cultural.jpeg" // Add the relevant image
    },
  ];

  const handleCardClick = (visit) => {
    setSelectedVisit(visit);
  };

  const closeModal = () => {
    setSelectedVisit(null);
  };

  return (
    <section className="visit">
      <div className="container">
        <h2>Plan Your Visit</h2>
        <div className="visit-list">
          {visits.map((visit) => (
            <div key={visit.id} className="visit-item" onClick={() => handleCardClick(visit)}>
              {visit.image && <img src={visit.image} alt={visit.title} className="visit-image" />}
              <h3>{visit.title}</h3>
              <p>{visit.description}</p>
            </div>
          ))}
        </div>

        {selectedVisit && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-button" onClick={closeModal}>&times;</span>
              <div className="modal-body">
                <div className="modal-text">
                  <h3>{selectedVisit.title}</h3>
                  <p>{selectedVisit.details}</p>
                  <p>Location <br/>{selectedVisit.location}</p>
                </div>
                <div className="modal-image">
                  <img src={selectedVisit.image} alt={selectedVisit.title} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Visit;
