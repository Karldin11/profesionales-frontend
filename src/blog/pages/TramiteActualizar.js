import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
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
import { VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./PostForm.css";

const ActualizarTramite = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const postId = useParams().postId;
  console.log("postId:", postId);
  const [loadedPost, setLoadedPost] = useState();
  const history = useHistory();

  const [formState, inputHandler, setFormData] = useForm(
    {
      titulo: {
        value: "",
        isValid: false,
      },

      resumen: {
        value: "",
        isValid: false,
      },

      informacion: {
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
          process.env.REACT_APP_BACKEND_URL + `/tramites/${postId}`
        );
        setLoadedPost(responseData.post);
        setFormData(
          {
            titulo: {
              value: responseData.post.titulo,
              isValid: true,
            },
            resumen: {
              value: responseData.post.resumen,
              isValid: true,
            },
            informacion: {
              value: responseData.post.informacion,
              isValid: true,
            },
          },
          true
        );
      } catch (err) {}
    };
    fetchPost();
  }, [sendRequest, postId, setFormData]);

  const postUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      console.log("actualizando" + postId);
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/tramites/${postId}`,
        "PATCH",
        JSON.stringify({
          titulo: formState.inputs.titulo.value,
          resumen: formState.inputs.resumen.value,
          informacion: formState.inputs.informacion.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      history.push("/");
      history.replace("administrar");
    } catch (err) {}
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
          <Input
            id="titulo"
            element="input"
            type="text"
            label="Titulo"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Por favor ingrese un título valido."
            onInput={inputHandler}
            initialValue={loadedPost.titulo}
            initialValid={true}
          />
          <label>Resumen</label>
          <ReactQuill
            id="resumen"
            initialValue={loadedPost.resumen}
            onChange={(value) => inputHandler("resumen", value, true)}
            value={formState.inputs.resumen.value}
          />
          <EditorToolbar />
          <ReactQuill
            id="informacion"
            theme="snow"
            onChange={(value) => inputHandler("informacion", value, true)}
            value={formState.inputs.informacion.value}
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

export default ActualizarTramite;
