import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../images/heros/coordinacioneshero.jpeg";
import image2 from "../images/heros/carpeta.jpg";

import Button from "../shared/components/FormElements/Button";
import "../home/components/ITTCarousel.css";
import "../coordinaciones/pages/directorio.css";
import VinculacionPosts from "../blog/pages/VinculacionPosts";
import CoordinacionPosts from "../blog/pages/CoordinacionPosts";

const Directorio = () => {
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

      <div className="separar">
        <div className="center directorio-button">
          <Button to={`/coordinaciones`}>Coordinaciones</Button>
        </div>
        <div className="center directorio-button">
          <Button to={`/vinculacion`}>Vinculación</Button>
        </div>
      </div>
      <h2 className="directorio-title">Coordinaciones</h2>
      <CoordinacionPosts departamento={""} />
      <h2 className="directorio-title">Vinculación</h2>
      <VinculacionPosts departamento={""} />
    </React.Fragment>
  );
};

export default Directorio;
