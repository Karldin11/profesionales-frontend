import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../images/heros/coordinacioneshero.jpeg";
import image2 from "../../images/heros/carpeta.jpg";
import "../../home/components/ITTCarousel.css";
import "./directorio.css";
import VinculacionPosts from "../../blog/pages/VinculacionPosts";

const Vinculacion = () => {
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

      <div className="directorio-title">
        <h2>Sistemas y Computación</h2>
      </div>

      <div className="item-list">
        <VinculacionPosts departamento={"sistemas"} />
      </div>

      <div className="directorio-title">
        <h2>CEA</h2>
      </div>

      <div className="item-list">
        <VinculacionPosts departamento={"CEA"} />
      </div>

      <div className="directorio-title">
        <h2>Metal Mecánica</h2>
      </div>

      <div className="item-list">
        <VinculacionPosts departamento={"metal"} />
      </div>

      <div className="directorio-title">
        <h2>Ciencias de la Tierra</h2>
      </div>

      <div className="item-list">
        <VinculacionPosts departamento={"tierra"} />
      </div>

      <div className="directorio-title">
        <h2>Electricidad y electrónica</h2>
      </div>

      <div className="item-list">
        <VinculacionPosts departamento={"electricidad"} />
      </div>

      <div className="directorio-title">
        <h2>Química y bioquímica</h2>
      </div>

      <div className="item-list">
        <VinculacionPosts departamento={"quimica"} />
      </div>

      <div className="directorio-title">
        <h2>Industrial</h2>
      </div>

      <div className="item-list">
        <VinculacionPosts departamento={"industrial"} />
      </div>

      <div className="directorio-title">
        <h2>Centro de graduados</h2>
      </div>

      <div className="item-list">
        <VinculacionPosts departamento={"graduados"} />
      </div>
    </React.Fragment>
  );
};

export default Vinculacion;
