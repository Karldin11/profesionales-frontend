import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../images/carousel-images/2.webp";
import image2 from "../../images/carousel-images/3.webp";
import IdiomasPosts from "../../blog/pages/IdiomasPosts";
import "../../blog/pages/Publicacion.css";
import "../../home/components/ITTCarousel.css";

const Idiomas = () => {
  return (
    <React.Fragment>
      <div className="">
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
      <div className="">
        <div className="" data-aos="fade-up">
          <div className="section-header  titulo">
            <h2>Idiomas</h2>
          </div>

          <div className="">
            <IdiomasPosts />{" "}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Idiomas;
