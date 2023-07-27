import "./HeroSection.css";
import React, { useContext } from "react";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import AdaptarTexto from "../../shared/components/UIElements/AdaptarTexto";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";
import Button from "../../shared/components/FormElements/Button";
import { AuthContext } from "../../shared/context/auth-context";

const HeroSection = (props) => {
  const { isLoading, error, clearError } = useHttpClient();

  const auth = useContext(AuthContext);
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />

      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <div className="header hero-section">
        <div className="container">
          <div className="row gy-4 tabla">
            <div className="col-lg-7 position-relative ">
              <h1 className="hero-section">{props.titulo}</h1>

              <AdaptarTexto htmlContent={props.informacion} />
              {auth.isLoggedIn && (
                <Button to={`/publicacion/posts/${props.id}`}>EDITAR</Button>
              )}
            </div>
            <div className="col-lg-5 d-flex formatos">
              <div className="content ps-0 ps-lg-5">
                <img
                  className="imagen-inicio"
                  src={process.env.REACT_APP_BACKEND_URL + `/${props.imagen}`}
                  alt={props.titulo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
