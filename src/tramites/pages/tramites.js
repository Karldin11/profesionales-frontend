import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../images/heros/coordinacioneshero.jpeg";
import image2 from "../../images/heros/carpeta.jpg";
import "../../home/components/ITTCarousel.css";
import "./tramites.css";
import TramitesPosts from "../../blog/pages/TramitesPosts";

const Tramites = () => {
  return (
    <React.Fragment>
      <Carousel className="carousel-inner">
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="tramites-content">
        <div className="tramites-title">
          <h2>Trámites más comunes</h2>
        </div>{" "}
      </div>
      <div className="tramites-item-list">
        <TramitesPosts />
      </div>
    </React.Fragment>
  );
};

export default Tramites;
