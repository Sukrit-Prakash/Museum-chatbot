// src/components/About.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'; // Import Carousel component from react-bootstrap
import './About.css'; // Your custom CSS file

const images = [
  { src: '', alt: 'Ancient artifact' },
  { src: 'path/to/image2.jpg', alt: 'Historical painting' },
  { src: 'path/to/image3.jpg', alt: 'Intricate sculpture' },
];

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2>About Us</h2>
        <p>Welcome to the National Museum India, where history and culture come to life.</p>

        {/* Carousel component from react-bootstrap */}
        <Carousel className="about-carousel">
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={image.src} alt={image.alt} />
              <Carousel.Caption>
                <h3>{image.alt}</h3>
                <p>Description for {image.alt}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default About;
