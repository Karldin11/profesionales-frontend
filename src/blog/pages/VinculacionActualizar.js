import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, {
  modules,
  formats,
} from "../../shared/components/UIElements/EditorToolbar";

import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./PostForm.css";

const ActualizarVinculacion = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const postId = useParams().postId;
  console.log("postId:", postId);
  const [loadedPost, setLoadedPost] = useState();
  const history = useHistory();

  const [formState, inputHandler, setFormData] = useForm(
    {
      carrera: {
        value: "",
        isValid: false,
      },

      departamento: {
        value: "",
        isValid: false,
      },

      datosContacto: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    const fetchPost = async () => {
      try {
        console.log(postId);
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/vinculacion/post/${postId}`
        );
        setLoadedPost(responseData.post);

        setFormData(
          {
            carrera: {
              value: responseData.post.carrera,
              isValid: true,
            },
            departamento: {
              value: responseData.post.departamento,
              isValid: true,
            },
            datosContacto: {
              value: responseData.post.datosContacto,
              isValid: true,
            },
          },
          true
        );

        console.log(responseData.post);
      } catch (err) {}
    };
    fetchPost();
  }, [sendRequest, postId, setFormData]);

  const postUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      console.log("actualizando" + postId);
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/vinculacion/post/${postId}`,
        "PATCH",
        JSON.stringify({
          carrera: formState.inputs.carrera.value,
          departamento: formState.inputs.departamento.value,
          datosContacto: formState.inputs.datosContacto.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      history.push("/");
      history.replace("vinculacion");
    } catch (err) {}
  };

  const selectHandler = (event) => {
    const selectedValue = event.target.value;
    inputHandler("departamento", selectedValue, true);
  };

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
        <form className="post-form" onSubmit={postUpdateSubmitHandler}>
          <label>Carrera</label>
          <ReactQuill
            id="carrera"
            initialValue={loadedPost.carrera}
            onChange={(value) => inputHandler("carrera", value, true)}
            value={formState.inputs.carrera.value}
          />

          <label>Departamento</label>

          <select
            id="departamento"
            label="departamento"
            errorText="Por favor seleccione un departamento."
            initialValue={loadedPost.departamento}
            initialValid={true}
            onChange={selectHandler}
          >
            <option value="">Seleccione un departamento</option>
            <option value="sistemas">Sistemas y Computación</option>
            <option value="CEA">CEA</option>
            <option value="metal">Metal Mecánica</option>
            <option value="tierra">Ciencias de la tierra</option>
            <option value="electricidad">Electricidad y electrónica</option>
            <option value="quimica">Química y bioquímica</option>
            <option value="industrial">Industrial</option>
            <option value="graduados">Centro de graduados</option>
            {/* Agrega más opciones según tus necesidades */}
          </select>

          <label>Informacion de contacto</label>
          <EditorToolbar />
          <ReactQuill
            id="datosContacto"
            theme="snow"
            onChange={(value) => inputHandler("datosContacto", value, true)}
            value={formState.inputs.datosContacto.value}
            modules={modules}
            formats={formats}
          />
          <Button type="submit" disabled={!formState.isValid}>
            Actualizar
          </Button>
        </form>
      )}
    </React.Fragment>
  );
};

export default ActualizarVinculacion;
