import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-control prev" onClick={handlePrev}>
        &#8249; {/* Left arrow */}
      </button>
      <div className="carousel-slides">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Product ${index}`}
            className={`carousel-image ${
              index === currentIndex ? "active" : ""
            }`}
          />
        ))}
      </div>
      <button className="carousel-control next" onClick={handleNext}>
        &#8250; {/* Right arrow */}
      </button>
    </div>
  );
};

export default Carousel;
