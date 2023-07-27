import React, { useState, useContext, useEffect } from "react";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import AdaptarTexto from "../../shared/components/UIElements/AdaptarTexto";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { AuthContext, AdminContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import Avatar from "../../shared/components/UIElements/Avatar";

import "./item.css";

const IdiomasItem = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const administrator = useContext(AdminContext);

  const showDeleteWarningHandler = () => {
    console.log("Boton de delete funciona");
    setShowConfirmModal(true);
  };

  useEffect(() => {
    console.log(showConfirmModal);
  }, [showConfirmModal]);

  const cancelDeleteHandler = async () => {
    setShowConfirmModal(false);
    console.log("canceló eliminación");
  };
  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/idiomas/${props.id}`,
        "DELETE"
      );
      console.log("entró a request");
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
            <Avatar
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
              <Button to={`/publicacion/idiomas/${props.id}`}>EDITAR</Button>
            )}
            <Button to={`/idiomas/${props.id}`}>VER DETALLES</Button>
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

export default IdiomasItem;
