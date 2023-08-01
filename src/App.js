import React, { useCallback, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { AuthContext, AdminContext } from "./shared/context/auth-context";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Inicio from "./home/pages/Inicio";
import ShowPosts from "./blog/pages/ShowPosts";
import Coordinaciones from "./coordinaciones/pages/coordinaciones";
import Vinculacion from "./coordinaciones/pages/vinculacion";
import Contacto from "./contacto/Contacto";
import Auth from "../src/user/pages/Auth";
import Titulacion from "./titulacion/pages/titulacion";
import Idiomas from "./idiomas/pages/idiomas";
import Tramites from "./tramites/pages/tramites";
import NuevaIngles from "./blog/pages/IdiomasNuevo";
import VinculacionNuevo from "./blog/pages/VinculacionNuevo";
import NuevoTramite from "./blog/pages/TramiteNuevo";
import Administrar from "./blog/components/Administrar";
import IdiomasPosts from "./blog/pages/IdiomasPosts";
import ActualizarIdiomas from "./blog/pages/IdiomasActualizar";
import TramitesPosts from "./blog/pages/TramitesPosts";
import ActualizarTramite from "./blog/pages/TramiteActualizar";
import "./App.css";
import TramiteVer from "./blog/pages/TramiteVer";
import IdiomasVer from "./blog/pages/IdiomasVer";
import VinculacionActualizar from "./blog/pages/VinculacionActualizar";
import VinculacionPosts from "./blog/pages/VinculacionPosts";
import Directorio from "./directorio/Directorio";
import CoordinacionNueva from "./blog/pages/CoordinacionNueva";
import CoordinacionPosts from "./blog/pages/CoordinacionPosts";
import CoordinacionActualizar from "./blog/pages/CoordinacionActualizar";
import PostNuevo from "./blog/pages/PostNuevo";
import PostActualizar from "./blog/pages/PostActualizar";
import PostVerWrapper from "./blog/pages/PostVerWrapper";
import ChatbotApp from "./shared/components/Chatbot/ChatbotApp";
import ShowUsers from "./user/pages/ShowUsers";
import NuevoUsuario from "./user/pages/NuevoUsuario";
import ActualizarUsuario from "./user/pages/ActualizarUsuario";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const adminProfile = useCallback(() => {
    setIsAdmin(true);
  }, []);

  let routes;

  if (isLoggedIn && isAdmin) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Inicio />
        </Route>

        <Route path="/directorio" exact>
          <Directorio />
        </Route>
        <Route path="/vinculacion" exact>
          <Vinculacion />
        </Route>
        <Route path="/coordinaciones" exact>
          <Coordinaciones />
        </Route>
        <Route path="/titulacion" exact>
          <Titulacion />
        </Route>
        <Route path="/idiomas" exact>
          <Idiomas />
        </Route>
        <Route path="/idiomas/:postId" exact>
          <IdiomasVer />
        </Route>
        <Route path="/tramites" exact>
          <Tramites />
        </Route>
        <Route path="/tramites/:postId" exact>
          <TramiteVer />
        </Route>
        <Route path="/contacto" exact>
          <Contacto />
        </Route>
        <Route path="/administrar" exact>
          <Administrar />
        </Route>
        <Route path="/publicacion/:postId" exact>
          <PostVerWrapper />
        </Route>
        <Route path="/publicacion/posts/new" exact>
          <PostNuevo />
        </Route>
        <Route path="/publicacion/posts/lista" exact>
          <ShowPosts seccion={""} />
        </Route>
        <Route path="/publicacion/posts/:postId" exact>
          <PostActualizar />
        </Route>
        <Route path="/publicacion/coordinacion/new" exact>
          <CoordinacionNueva />
        </Route>

        <Route path="/publicacion/coordinacion/lista" exact>
          <CoordinacionPosts departamento={""} />
        </Route>
        <Route path="/publicacion/coordinacion/:postId" exact>
          <CoordinacionActualizar />
        </Route>
        <Route path="/publicacion/idiomas/new" exact>
          <NuevaIngles />
        </Route>
        <Route path="/publicacion/idiomas/lista" exact>
          <IdiomasPosts />
        </Route>
        <Route path="/publicacion/idiomas/:postId" exact>
          <ActualizarIdiomas />
        </Route>
        <Route path="/publicacion/vinculacion/new" exact>
          <VinculacionNuevo />
        </Route>
        <Route path="/publicacion/vinculacion/lista" exact>
          <VinculacionPosts departamento={""} />
        </Route>
        <Route path="/publicacion/vinculacion/:postId" exact>
          <VinculacionActualizar />
        </Route>
        <Route path="/publicacion/tramite/new" exact>
          <NuevoTramite />
        </Route>
        <Route path="/publicacion/tramite/lista" exact>
          <TramitesPosts />
        </Route>
        <Route path="/publicacion/tramite/:postId" exact>
          <ActualizarTramite />
        </Route>
        <Route path="/users/new" exact>
          <NuevoUsuario />
        </Route>
        <Route path="/users/lista" exact>
          <ShowUsers />
        </Route>
        <Route path="/users/:userId" exact>
          <ActualizarUsuario />
        </Route>

        <Route path="/auth" exact>
          <Auth />
        </Route>

        <Redirect to="/" />
      </Switch>
    );
  } else if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Inicio />
        </Route>

        <Route path="/directorio" exact>
          <Directorio />
        </Route>
        <Route path="/vinculacion" exact>
          <Vinculacion />
        </Route>
        <Route path="/coordinaciones" exact>
          <Coordinaciones />
        </Route>
        <Route path="/titulacion" exact>
          <Titulacion />
        </Route>
        <Route path="/idiomas" exact>
          <Idiomas />
        </Route>
        <Route path="/idiomas/:postId" exact>
          <IdiomasVer />
        </Route>
        <Route path="/tramites" exact>
          <Tramites />
        </Route>
        <Route path="/tramites/:postId" exact>
          <TramiteVer />
        </Route>
        <Route path="/contacto" exact>
          <Contacto />
        </Route>
        <Route path="/administrar" exact>
          <Administrar />
        </Route>
        <Route path="/publicacion/:postId" exact>
          <PostVerWrapper />
        </Route>
        <Route path="/publicacion/posts/new" exact>
          <PostNuevo />
        </Route>
        <Route path="/publicacion/posts/lista" exact>
          <ShowPosts seccion={""} />
        </Route>
        <Route path="/publicacion/posts/:postId" exact>
          <PostActualizar />
        </Route>
        <Route path="/publicacion/coordinacion/new" exact>
          <CoordinacionNueva />
        </Route>

        <Route path="/publicacion/coordinacion/lista" exact>
          <CoordinacionPosts departamento={""} />
        </Route>
        <Route path="/publicacion/coordinacion/:postId" exact>
          <CoordinacionActualizar />
        </Route>
        <Route path="/publicacion/idiomas/new" exact>
          <NuevaIngles />
        </Route>
        <Route path="/publicacion/idiomas/lista" exact>
          <IdiomasPosts />
        </Route>
        <Route path="/publicacion/idiomas/:postId" exact>
          <ActualizarIdiomas />
        </Route>
        <Route path="/publicacion/vinculacion/new" exact>
          <VinculacionNuevo />
        </Route>
        <Route path="/publicacion/vinculacion/lista" exact>
          <VinculacionPosts departamento={""} />
        </Route>
        <Route path="/publicacion/vinculacion/:postId" exact>
          <VinculacionActualizar />
        </Route>
        <Route path="/publicacion/tramite/new" exact>
          <NuevoTramite />
        </Route>
        <Route path="/publicacion/tramite/lista" exact>
          <TramitesPosts />
        </Route>
        <Route path="/publicacion/tramite/:postId" exact>
          <ActualizarTramite />
        </Route>

        <Route path="/auth" exact>
          <Auth />
        </Route>

        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Inicio />
        </Route>

        <Route path="/directorio" exact>
          <Directorio />
        </Route>
        <Route path="/vinculacion" exact>
          <Vinculacion />
        </Route>
        <Route path="/coordinaciones" exact>
          <Coordinaciones />
        </Route>
        <Route path="/titulacion" exact>
          <Titulacion />
        </Route>
        <Route path="/idiomas" exact>
          <Idiomas />
        </Route>
        <Route path="/idiomas/:postId" exact>
          <IdiomasVer />
        </Route>
        <Route path="/tramites" exact>
          <Tramites />
        </Route>
        <Route path="/tramites/:postId" exact>
          <TramiteVer />
        </Route>
        <Route path="/contacto" exact>
          <Contacto />
        </Route>

        <Route path="/publicacion/:postId" exact>
          <PostVerWrapper />
        </Route>

        <Route path="/publicacion/posts/lista" exact>
          <ShowPosts seccion={""} />
        </Route>

        <Route path="/publicacion/coordinacion/lista" exact>
          <CoordinacionPosts departamento={""} />
        </Route>

        <Route path="/publicacion/idiomas/lista" exact>
          <IdiomasPosts />
        </Route>

        <Route path="/publicacion/vinculacion/lista" exact>
          <VinculacionPosts departamento={""} />
        </Route>
        <Route path="/publicacion/vinculacion/:postId" exact>
          <VinculacionActualizar />
        </Route>

        <Route path="/publicacion/tramite/lista" exact>
          <TramitesPosts />
        </Route>

        <Route path="/auth" exact>
          <Auth />
        </Route>

        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
      }}
    >
      <AdminContext.Provider
        value={{
          isAdmin: isAdmin,
          adminProfile: adminProfile,
        }}
      >
        <Router>
          <header>
            <MainNavigation />
          </header>
          <main>{routes}</main>
          <footer>
            <ChatbotApp />
            <Contacto />
          </footer>
        </Router>
      </AdminContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
