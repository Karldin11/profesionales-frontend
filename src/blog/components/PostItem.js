import React, { useState, useContext } from "react";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import AdaptarTexto from "../../shared/components/UIElements/AdaptarTexto";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { AdminContext } from "../../shared/context/auth-context";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import Icon from "../../shared/components/UIElements/Icon";
import "./item.css";

const PostItem = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);

  const administrator = useContext(AdminContext);

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };
  const cancelDeleteHandler = async () => {
    setShowConfirmModal(false);
  };
  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/posts/post/${props.id}`,
        "DELETE"
      );
      props.onDelete(props.id);
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}

      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="¿Deseas eliminar esta publicación?"
        footerClass="post-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCELAR
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              ELIMINAR
            </Button>
          </React.Fragment>
        }
      >
        <p>
          ¿Quieres eliminar esta publicación? Esta acción no podra ser deshecha.
        </p>
      </Modal>

      <li className="item">
        <div className="item__content">
          <div className="">
            <Icon
              image={process.env.REACT_APP_BACKEND_URL + `/${props.imagen}`}
              alt={props.titulo}
            />
          </div>
          <div className="item__info">
            <h2>{props.titulo}</h2>
            <AdaptarTexto htmlContent={props.resumen} />
          </div>

          <div className="item__actions">
            {auth.isLoggedIn && (
              <Button to={`/publicacion/posts/${props.id}`}>EDITAR</Button>
            )}

            <Button to={`/publicacion/${props.id}`}>VER DETALLES</Button>
            {auth.isLoggedIn && administrator.isAdmin && (
              <Button danger onClick={showDeleteWarningHandler}>
                ELIMINAR
              </Button>
            )}
          </div>
        </div>
      </li>
    </React.Fragment>
  );
};

export default PostItem;
