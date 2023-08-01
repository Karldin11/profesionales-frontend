import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext, AdminContext } from "../../shared/context/auth-context";
import "./Administrar.css";

function Administrar() {
  const auth = useContext(AuthContext);

  const administrator = useContext(AdminContext);
  return (
    <div className="admin">
      <ul className="admin-crear">
        <h2>Generales</h2>
        <li>
          <NavLink to="/publicacion/posts/new">
            Crear publicación general
          </NavLink>
        </li>
        <li>
          <NavLink to="/publicacion/posts/lista">
            Editar publicaciones generales
          </NavLink>
        </li>
        <h2>Idiomas</h2>
        <li>
          <NavLink to="/publicacion/idiomas/new">
            Crear publicación para coordinación de idiomas
          </NavLink>
        </li>
        <li>
          <NavLink to="/publicacion/idiomas/lista">
            Editar publicaciones sobre idiomas
          </NavLink>
        </li>
        <h2>Tramites</h2>
        <li>
          <NavLink to="/publicacion/tramite/new">
            Crear publicación sobre tramites
          </NavLink>
        </li>
        <li>
          <NavLink to="/publicacion/tramite/lista">
            Editar publicaciones de tramites
          </NavLink>
        </li>
        <h2>Directorio</h2>
        <li>
          <NavLink to="/publicacion/coordinacion/new">
            Agregar directorio de coordinación
          </NavLink>
        </li>
        <li>
          <NavLink to="/publicacion/coordinacion/lista">
            Editar coordinaciones
          </NavLink>
        </li>
        <li>
          <NavLink to="/publicacion/vinculacion/new">
            Agregar directorio de vinculación
          </NavLink>
        </li>
        <li>
          <NavLink to="/publicacion/vinculacion/lista">
            Editar departamentos de vinculación
          </NavLink>
        </li>
        {auth.isLoggedIn && administrator.isAdmin && <h2>Usuarios</h2>}
        <li>
          {auth.isLoggedIn && administrator.isAdmin && (
            <NavLink to="/users/new">Agregar Usuario</NavLink>
          )}
        </li>
        <li>
          {auth.isLoggedIn && administrator.isAdmin && (
            <NavLink to="/users/lista">Editar datos de Usuarios</NavLink>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Administrar;
