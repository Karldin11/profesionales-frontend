import React from "react";
import { useHistory } from "react-router-dom";
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

import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./PostForm.css";

const VinculacionNuevo = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
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
      formData.append("carrera", formState.inputs.carrera.value);
      formData.append("departamento", formState.inputs.departamento.value);
      formData.append("datosContacto", formState.inputs.datosContacto.value);
      formData.append("imagen", formState.inputs.imagen.value);
      console.log(formData);
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/vinculacion`,
        "POST",
        formData
      );
      history.push("/");
      history.replace("directorio");
    } catch (err) {
      console.log(err);
    }
  };

  const selectHandler = (event) => {
    const selectedValue = event.target.value;
    inputHandler("departamento", selectedValue, true);
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className="post-form" onSubmit={postSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <h1>Nueva Vinculación</h1>

        <label>Carrera</label>
        <ReactQuill
          id="carrera"
          onChange={(value) => inputHandler("carrera", value, true)}
          value={formState.inputs.carrera.value}
        />

        <label>Departamento</label>
        <br />

        <select
          id="departamento"
          label="departamento"
          errorText="Por favor seleccione un departamento."
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
        <br />

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

export default VinculacionNuevo;
