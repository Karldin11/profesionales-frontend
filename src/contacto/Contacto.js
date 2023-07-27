import React from "react";

import Tecnológico from "../images/ilustrativas/tecnologico.jpeg";
import "./Contacto.css";
import "../styles/bootstrap-style.css";

const Contacto = () => {
  return (
    <React.Fragment>
      <footer className="footer-contacto text-white text-center text-lg-start d-flex justify-content-center align-items-center">
        <div className="elementos container p-4 d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Dirección</h5>
              Instituto Tecnológico de Tijuana Calzada Del Tecnológico S/N,
              Fraccionamiento Tomas Aquino. Tijuana, Baja California. C.P. 22414
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 pb-1">Contacto</h5>

              <ul className="fa-ul" style={{ marginLeft: "0" }}>
                <li className="mb-3">
                  <span className="ms-2">www.tectijuana.edu.mx</span>
                </li>
                <li className="mb-3">
                  <span className="ms-2">profesionales@tectijuana.edu.mx</span>
                </li>
                <li className="mb-3">
                  <span className="ms-2">
                    Tel. 01 (664) 607-84-00 ext. 129 y 607-84-11
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <img
                src={Tecnológico}
                alt="login form"
                className="img-fluid img-sm"
              />
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Contacto;
