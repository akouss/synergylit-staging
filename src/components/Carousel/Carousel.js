import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";

// * Images
import img1 from "../../assets/img1-o.jpg";
import img2 from "../../assets/img2-o.jpg";
import img3 from "../../assets/img3-o.jpg";
import img4 from "../../assets/img4-o.jpg";
import img5 from "../../assets/img5-o.jpg";

// import img1 from "../../assets/img1.jpeg";
// import img2 from "../../assets/img2.jpeg";
// import img3 from "../../assets/img3.jpeg";
// import img4 from "../../assets/img4.jpeg";
// import img5 from "../../assets/img5.jpeg";

const info = [
  {
    image: img1,
    title: "First slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    image: img2,
    title: "Second slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    image: img3,
    title: "Third slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    image: img4,
    title: "Fourth slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    image: img5,
    title: "Fifth slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
];

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
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
