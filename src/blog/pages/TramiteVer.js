import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import "react-quill/dist/quill.snow.css";
import AdaptarTexto from "../../shared/components/UIElements/AdaptarTexto";
import { useHttpClient } from "../../shared/hooks/http-hook";

import { AuthContext } from "../../shared/context/auth-context";
import "./Publicacion.css";

const TramiteVer = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const postId = useParams().postId;
  console.log("postId:", postId);
  const [loadedPost, setLoadedPost] = useState();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/tramites/${postId}`
        );

        setLoadedPost(responseData.post);
        console.log(responseData.post);
      } catch (err) {}
    };
    fetchPost();
  }, [sendRequest, postId]);

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner asOverlay />
      </div>
    );
  }

  if (!loadedPost && !error) {
    return (
      <div className="center">
        <Card>
          <h2>No se encontró publicación</h2>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />

      {!isLoading && loadedPost && (
        <div>
          <div className="titulo">
            <h2>{loadedPost.titulo}</h2>
          </div>
          <div className="publicacion">
            <div className="publicacion__content">
              {/* <div className="item__image"></div> */}
              <div className="publicacion__info">
                <AdaptarTexto htmlContent={loadedPost.informacion} />
              </div>
              {auth.isLoggedIn && (
                <Button to={`/publicacion/tramite/${postId}`}>EDITAR</Button>
              )}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default TramiteVer;
