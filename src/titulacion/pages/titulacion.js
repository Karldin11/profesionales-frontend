import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../images/heros/titulacion.jpg";
import image2 from "../../images/heros/graduation.jpg";

import "../../styles/bootstrap-style.css";

import "../../home/components/ITTCarousel.css";
import ShowPostsTitulacionPrincipal from "../../blog/pages/ShowPostsTitulacionPrincipal";
import ShowPosts from "../../blog/pages/ShowPosts";

const Titulacion = () => {
  return (
    <React.Fragment>
      <div className="header">
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
      </div>
      <div>
        <ShowPostsTitulacionPrincipal seccion="titulacion" />
      </div>

      <div className="">
        <ShowPosts seccion={"titulacion-general"} />
      </div>
    </React.Fragment>
  );
};

export default Titulacion;
