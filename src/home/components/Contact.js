import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import "./Contact.css";

const Contact = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler] = useForm(
    {
      nombre: {
        value: "",
        isValid: false,
      },
      correo: {
        value: "",
        isValid: false,
      },
      tema: {
        value: "",
        isValid: false,
      },
      mensaje: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const history = useHistory();

  const placeSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("nombre", formState.inputs.nombre.value);
      formData.append("correo", formState.inputs.correo.value);
      formData.append("tema", formState.inputs.tema.value);
      formData.append("mensaje", formState.inputs.mensaje.value);
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/posts/`,
        "POST",
        formData
      );
      history.push("/");
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className="contact-form" onSubmit={placeSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input
          id="nombre"
          element="input"
          type="text"
          label="Nombre"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
        />
        <Input
          id="correo"
          element="input"
          label="Correo"
          validators={[VALIDATOR_EMAIL]}
          errorText="Please enter a valid email."
          onInput={inputHandler}
        />

        <Input
          id="tema"
          element="input"
          label="Tema"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid theme - more than 5 letters ."
          onInput={inputHandler}
        />

        <Input
          id="mensaje"
          element="textarea"
          label="Mensaje"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid message - more than 5 letters ."
          onInput={inputHandler}
        />

        <Button type="submit" disabled={!formState.isValid}>
          ENVIAR
        </Button>
      </form>
    </React.Fragment>
  );
};

export default Contact;
