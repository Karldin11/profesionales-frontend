import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import Input from "../../shared/components/FormElements/Input";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "../../blog/pages/PostForm.css";

const ActualizarUsuario = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const userId = useParams().userId;
  const [loadedPost, setLoadedPost] = useState();
  const history = useHistory();

  const [formState, inputHandler, setFormData] = useForm(
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

  useEffect(() => {
    const fetchPost = async () => {
      try {
        console.log(userId);
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/users/${userId}`
        );
        setLoadedPost(responseData.user);

        setFormData(
          {
            name: {
              value: responseData.user.name,
              isValid: true,
            },
            role: {
              value: responseData.user.role,
              isValid: true,
            },
            username: {
              value: responseData.user.username,
              isValid: true,
            },
            password: {
              value: responseData.user.password,
              isValid: true,
            },
          },
          true
        );

        console.log(responseData.user);
      } catch (err) {}
    };
    fetchPost();
  }, [sendRequest, userId, setFormData]);

  const postUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      console.log("actualizando" + userId);
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/users/${userId}`,
        "PATCH",
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
      history.replace("admministracion");
    } catch (err) {}
  };

  const selectHandler = (event) => {
    const selectedValue = event.target.value;
    inputHandler("role", selectedValue, true);
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
          <h2>No se encontró </h2>
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
            id="name"
            element="input"
            type="text"
            initialValue={loadedPost.name}
            label="Nombre"
            validators={[[VALIDATOR_REQUIRE()]]}
            errorText="Por favor ingrese un nombre valido."
            onInput={inputHandler}
          />

          <label>Rol</label>

          <select
            id="role"
            label="rol"
            errorText="Por favor seleccione un rol"
            initialValue={loadedPost.role}
            initialValid={true}
            onChange={selectHandler}
          >
            <option value="">Seleccione un rol de usuario</option>
            <option value="admin">Administrador</option>
            <option value="editor">Editor</option>
          </select>

          <Input
            id="username"
            element="input"
            type="text"
            initialValue={loadedPost.username}
            label="Usuario"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Ingrese usuario valido"
            onInput={inputHandler}
          />

          <Input
            id="password"
            element="input"
            initialValue={loadedPost.password}
            type="password"
            label="Contraseña"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Ingrese una contraseña valida (6 caracteres como mínimo)"
            onInput={inputHandler}
          />

          <Button type="submit" disabled={!formState.isValid}>
            Actualizar
          </Button>
        </form>
      )}
    </React.Fragment>
  );
};

export default ActualizarUsuario;
