import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Collections.css';

const Collections = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const images = [
    { src: '/images/artifact1.jpeg', alt: 'Ancient artifact' },
    { src: '/images/artifact2.jpeg', alt: 'Historical painting' },
    { src: '/images/artifact3.jpeg', alt: 'Intricate sculpture' },
    { src: '/images/background.jpeg', alt: 'Museum exhibit' },
  ];

  return (
    <div className="collections">
      <h1>Our Collections</h1>
      <p>Discover the rich cultural heritage of India through our extensive collections</p>
      <div className="collections-background">
        
      </div>
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="collections-description">
        <h2>Preserving Our Heritage</h2>
        <p>
          The National Museum of India houses a vast collection of artifacts, 
          paintings, and sculptures that showcase the country's rich history 
          and diverse cultural traditions. Our collections span thousands of 
          years, from prehistoric times to the modern era, offering visitors 
          a unique glimpse into India's past and present.
        </p>
      </div>
    </div>
  );
};

export default Collections;