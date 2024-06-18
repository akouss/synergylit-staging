import { useState } from "react";
import { Carousel } from "react-bootstrap";

//* Data
import { info } from "../../data/carouseldata";

// * Style
import "./style.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className="mb-5"
      id="home"
      activeIndex={index}
      onSelect={handleSelect}
    >
      {info.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <div className="carousel-container">
            <img className="carousel-img" src={slide.image} alt={slide.title} />
            <div className="carousel-overlay"></div>
          </div>
          <Carousel.Caption className="carousel-caption">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
