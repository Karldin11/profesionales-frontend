import React, { useEffect, useState, useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import "react-quill/dist/quill.snow.css";
import AdaptarTexto from "../../shared/components/UIElements/AdaptarTexto";
import Button from "../../shared/components/FormElements/Button";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import "./Publicacion.css";

const PostVer = (props) => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const postId = props.postId;
  console.log("postId:", postId);
  const [loadedPost, setLoadedPost] = useState();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/posts/post/${postId}`
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
          <div className="publicacion separar">
            <div className="publicacion__content">
              {/* <div className="item__image"></div> */}
              <div className="publicacion__info">
                <AdaptarTexto htmlContent={loadedPost.informacion} />
              </div>
            </div>
            {auth.isLoggedIn && (
              <Button to={`/publicacion/posts/${postId}`}>EDITAR</Button>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default PostVer;
