import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../images/heros/coordinacioneshero.jpeg";
import image2 from "../../images/heros/carpeta.jpg";
import CoordinacionPosts from "../../blog/pages/CoordinacionPosts";
import "../../home/components/ITTCarousel.css";
import "./directorio.css";

const Coordinaciones = () => {
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
      <h1 className="directorio-title separar">Coordinaciones </h1>
      <div className="content center separar">
        <a
          className="directorio-link directorio-button"
          href="https://www.tijuana.tecnm.mx/reticulas/"
        >
          Retículas
        </a>
      </div>{" "}
      <div className="item-list">
        <CoordinacionPosts departamento={""} />
      </div>
    </React.Fragment>
  );
};

export default Coordinaciones;
