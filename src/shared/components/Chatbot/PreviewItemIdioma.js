import React, { useEffect, useState } from "react";

import "react-quill/dist/quill.snow.css";

import ErrorModal from "../UIElements/ErrorModal";
import LoadingSpinner from "../UIElements/LoadingSpinner";
import AdaptarTexto from "../UIElements/AdaptarTexto";
import { useHttpClient } from "../../hooks/http-hook";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const PreviewItemIdioma = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const postId = props.postId;
  console.log("postId:", postId);
  const [loadedPost, setLoadedPost] = useState();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/idiomas/${postId}`
        );

        setLoadedPost(responseData.post);
        console.log(responseData.post);
      } catch (err) {}
    };
    fetchPost();
  }, [sendRequest, postId]);

  if (!loadedPost && !error) {
    return (
      <div className="center">
        <h2>Lo siento, No se encontró publicación</h2>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      {loadedPost && (
        <div>
          <h2>{loadedPost.titulo}</h2>

          <AdaptarTexto htmlContent={loadedPost.resumen} />

          <NavLink to={`/idiomas/${postId}`}>Ver detalles </NavLink>
        </div>
      )}
    </React.Fragment>
  );
};

export default PreviewItemIdioma;
