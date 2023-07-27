import React from "react";
import { useHistory } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ImageUpload from "../../shared/components/FormElements/ImageUpload";

import ReactQuill from "react-quill";
import EditorToolbar, {
  modules,
  formats,
} from "../../shared/components/UIElements/EditorToolbar";
import "react-quill/dist/quill.snow.css";

import { VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./PostForm.css";

const NuevoTramite = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
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

      imagen: {
        value: null,
        isValid: false,
      },
    },
    false
  );

  const history = useHistory();

  const postSubmitHandler = async (event) => {
    console.log("postSubmit");
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("titulo", formState.inputs.titulo.value);
      formData.append("resumen", formState.inputs.resumen.value);
      formData.append("informacion", formState.inputs.informacion.value);
      formData.append("imagen", formState.inputs.imagen.value);
      console.log(formData);
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/tramites`,
        "POST",
        formData
      );
      history.push("/");
      history.replace("/tramites");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className="post-form" onSubmit={postSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <h1>Nueva publicación de Tramites</h1>

        <Input
          id="titulo"
          element="input"
          type="text"
          label="Titulo"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Por favor ingrese un título valido."
          onInput={inputHandler}
        />

        <label>Resumen</label>
        <ReactQuill
          id="resumen"
          onChange={(value) => inputHandler("resumen", value, true)}
          value={formState.inputs.resumen.value}
        />

        <label>Informacion</label>
        <EditorToolbar />
        <ReactQuill
          id="informacion"
          theme="snow"
          onChange={(value) => inputHandler("informacion", value, true)}
          value={formState.inputs.informacion.value}
          modules={modules}
          formats={formats}
        />

        <ImageUpload
          id="imagen"
          onInput={inputHandler}
          errorText="Proporcione una imagen "
        />

        <Button type="submit" disabled={!formState.isValid}>
          AGREGAR
        </Button>
      </form>
    </React.Fragment>
  );
};

export default NuevoTramite;
