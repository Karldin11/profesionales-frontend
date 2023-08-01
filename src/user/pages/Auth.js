import React, { useContext } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { AuthContext, AdminContext } from "../../shared/context/auth-context";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Auth.css";

const Auth = () => {
  const auth = useContext(AuthContext);
  const administrator = useContext(AdminContext);

  // const [isLoginMode, setIsLoginMode] = useState(true);
  let history = useHistory();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
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

  // const switchModeHandler = () => {
  //   if (!isLoginMode) {
  //     setFormData(
  //       {
  //         ...formState.inputs,
  //         name: undefined,
  //       },
  //       formState.inputs.username.isValid && formState.inputs.password.isValid
  //     );
  //   } else {
  //     setFormData(
  //       {
  //         ...formState.inputs,
  //         name: {
  //           value: "",
  //           isValid: false,
  //         },
  //       },
  //       false
  //     );
  //   }
  //   setIsLoginMode((prevMode) => !prevMode);
  // };

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    // if (isLoginMode) {
    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/users/login`,
        "POST",
        JSON.stringify({
          username: formState.inputs.username.value,
          password: formState.inputs.password.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      if (responseData.user.role === "admin") {
        administrator.adminProfile();
      }

      // console.log(responseData.user.orders.length);
      // const quantity = responseData.user.orders.length;
      auth.login(responseData.user.id);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
    // } else {
    //   try {
    //     const responseData = await sendRequest(
    //       process.env.REACT_APP_BACKEND_URL + `/users/signup`,
    //       "POST",
    //       JSON.stringify({
    //         name: formState.inputs.name.value,
    //         username: formState.inputs.username.value,
    //         password: formState.inputs.password.value,
    //       }),
    //       {
    //         "Content-Type": "application/json",
    //       }
    //     );
    //     if (formState.inputs.username.value === "admin") {
    //       administrator.adminProfile();
    //     } else {
    //       administrator.editorProfile();
    //     }

    // console.log(responseData.user.orders.length);
    // const quantity = responseData.user.orders.length;
    // auth.login(quantity);
    //\\ auth.login(responseData.user.id, quantity);
    // } catch (err) {}
    // }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Card className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2>Inicio de Sesión </h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
          {/* {!isLoginMode && (
            <Input
              element="input"
              id="name"
              type="text"
              label="Nombre"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Ingrese un nombre"
              onInput={inputHandler}
            />
          )} */}

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
            Iniciar Sesión
          </Button>
          {/* {isLoginMode ? "Iniciar Sesión" : "Registrar"} */}
        </form>
        {/* <Button inverse onClick={switchModeHandler}></Button>
        Cambiar a {isLoginMode ? "Registrar" : "Iniciar Sesión"} */}
      </Card>
    </React.Fragment>
  );
};

export default Auth;
