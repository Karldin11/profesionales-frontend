import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../images/carousel-images/1.webp";
import image2 from "../../images/carousel-images/2.webp";
import image3 from "../../images/carousel-images/3.webp";
import "./ITTCarousel.css";
function ITTCarousel() {
  return (
    <Carousel className="carousel-inner">
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ITTCarousel;
