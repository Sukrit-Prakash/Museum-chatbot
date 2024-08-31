import React from 'react';
import './Collections.css';

const Collections = () => {
  const items = [
    { title: "Decorative Arts", imgSrc: "/images/decorative-arts.jpeg" },
    { title: "Paintings", imgSrc: "/images/paintingwall.jpg" },
    { title: "Arms & Armour", imgSrc: "/images/arm.jpg" },
    { title: "Anthropology", imgSrc: "/images/anthropology.jpeg" },
    { title: "Manuscript", imgSrc: "/images/manuscript.jpeg" },
    { title: "Jewellery", imgSrc: "/images/jewellery.jpg" },
    { title: "Central Asia Antiquity", imgSrc: "/images/CentralAsia.jpeg" },
    { title: "Archaeology", imgSrc: "/images/archaeology1.jpeg" },
  ];

  return (
    <div className="collections-container">
      <h1 className="collection-heading">Collections</h1>
      <div className="cards-container">
        {items.map((item, index) => (
          <div className="collection-card" key={index}>
            <img src={item.imgSrc} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
