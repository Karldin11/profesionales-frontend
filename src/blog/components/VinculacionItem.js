import React, { useState, useContext } from "react";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import AdaptarTexto from "../../shared/components/UIElements/AdaptarTexto";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { AuthContext, AdminContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import Avatar from "../../shared/components/UIElements/Avatar";
import "./item.css";

const VinculacionItem = (props) => {
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
        process.env.REACT_APP_BACKEND_URL + `/vinculacion/post/${props.id}`,
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
          <div className="item__image">
            <Avatar
              image={process.env.REACT_APP_BACKEND_URL + `/${props.imagen}`}
              alt={props.carrera}
            />
          </div>
          <div className="item__info">
            <h3>
              <AdaptarTexto htmlContent={props.carrera} />
            </h3>

            <AdaptarTexto htmlContent={props.datosContacto} />
          </div>{" "}
          <div className="item__actions">
            {auth.isLoggedIn && (
              <Button to={`/publicacion/vinculacion/${props.id}`}>
                EDITAR
              </Button>
            )}

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

export default VinculacionItem;
