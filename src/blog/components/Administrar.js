import React from "react";
import { NavLink } from "react-router-dom";

import "./Administrar.css";

function Administrar() {
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
      </ul>
    </div>
  );
}

export default Administrar;
