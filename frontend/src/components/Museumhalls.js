import React from 'react';
import './MuseumHalls.css';

const halls = [
  { hallName: 'Hall 1', topic: 'Indian Independence' },
  { hallName: 'Hall 2', topic: 'World War II' },
  { hallName: 'Hall 3', topic: 'Mahatma Gandhi' },
  { hallName: 'Hall 4', topic: 'Ancient Civilizations' },
  { hallName: 'Hall 5', topic: 'Medieval India' },
  { hallName: 'Hall 6', topic: 'Industrial Revolution' },
  { hallName: 'Hall 7', topic: 'Modern Art Movements' },
  { hallName: 'Hall 8', topic: 'Colonial History' },
  { hallName: 'Hall 9', topic: 'Global Conflicts' },
  { hallName: 'Hall 10', topic: 'Freedom Struggles Worldwide' },
];

const MuseumHalls = () => {
  return (
    <div className="museum-halls">
      <h1>Museum Halls and Topics</h1>
      <div className="halls-container">
        {halls.map((hall, index) => (
          <div key={index} className="hall">
            <h2>{hall.hallName}</h2>
            <p>{hall.topic}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MuseumHalls;
