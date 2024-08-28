import React from 'react';
import './Exhibitions.css';

const Exhibitions = () => {
  const exhibitions = [
    {
      id: 1,
      title: "Ancient Egypt: Treasures of the Pharaohs",
      description: "Explore the wonders of ancient Egyptian civilization through artifacts and interactive displays.",
      date: "June 1 - August 31, 2023",
    },
    {
      id: 2,
      title: "Modern Art Masterpieces",
      description: "A curated collection of 20th century art from renowned artists around the world.",
      date: "July 15 - October 15, 2023",
    },
    {
      id: 3,
      title: "Dinosaurs: Giants of the Mesozoic",
      description: "Step back in time and witness life-sized dinosaur replicas and fossil exhibits.",
      date: "August 1 - November 30, 2023",
    },
  ];

  return (
    <section className="exhibitions">
      <div className="container">
        <h2>Current Exhibitions</h2>
        <div className="exhibition-list">
          {exhibitions.map((exhibition) => (
            <div key={exhibition.id} className="exhibition-item">
              <h3>{exhibition.title}</h3>
              <p>{exhibition.description}</p>
              <p className="exhibition-date">Dates: {exhibition.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;
