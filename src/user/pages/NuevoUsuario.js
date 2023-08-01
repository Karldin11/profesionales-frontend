import React from "react";
import { useHistory } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "../../blog/pages/PostForm.css";

const NuevoUsuario = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },

      role: {
        value: "",
        isValid: false,
      },

      username: {
        value: "",
        isValid: false,
      },

      password: {
        value: "",
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
      //   const formData = new FormData();
      //   formData.append("name", formState.inputs.name.value);
      //   formData.append("role", formState.inputs.role.value);
      //   formData.append("username", formState.inputs.username.value);
      //   formData.append("password", formState.inputs.password.value);
      //   console.log(formData);
      //   await sendRequest(
      //     process.env.REACT_APP_BACKEND_URL + "/users/signup",
      //     "POST",
      //     formData
      //   );
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/users/signup`,
        "POST",
        JSON.stringify({
          name: formState.inputs.name.value,
          role: formState.inputs.role.value,
          username: formState.inputs.username.value,
          password: formState.inputs.password.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      history.push("/");
      history.replace("administrar");
    } catch (err) {
      console.log(err);
    }
  };
  const selectHandler = (event) => {
    const selectedValue = event.target.value;
    inputHandler("role", selectedValue, true);
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className="post-form" onSubmit={postSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <h1>Nuevo Usuario</h1>

        <Input
          id="name"
          element="input"
          type="text"
          label="Nombre"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Por favor ingrese un nombre valido."
          onInput={inputHandler}
        />

        <label>Rol</label>
        <br />

        <select
          id="role"
          label="rol"
          errorText="Por favor seleccione un rol de usuario."
          onChange={selectHandler}
        >
          <option value="">Seleccione un rol de usuario</option>
          <option value="admin">Administrador</option>
          <option value="editor">Editor</option>
        </select>
        <br />

        <Input
          id="username"
          element="input"
          type="text"
          label="Usuario"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Ingrese usuario valido"
          onInput={inputHandler}
        />

        <Input
          id="password"
          element="input"
          type="password"
          label="Contraseña"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText="Ingrese una contraseña valida (6 caracteres como mínimo)"
          onInput={inputHandler}
        />

        <Button type="submit" disabled={!formState.isValid}>
          AGREGAR
        </Button>
      </form>
    </React.Fragment>
  );
};

export default NuevoUsuario;
