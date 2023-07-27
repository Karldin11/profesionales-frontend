import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext, AdminContext } from "../../context/auth-context";

import "./NavLinks.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);
  const administrator = useContext(AdminContext);

  return (
    <ul className="nav-links">
      {auth.isLoggedIn && administrator.isAdmin && (
        <li className="normal">
          <NavLink to="/administrar">Administrar</NavLink>
        </li>
      )}
      <button className="highlighted">
        <NavLink to="/" exact>
          Inicio
        </NavLink>
      </button>
      <button className="highlighted">
        <NavLink to="/titulacion">Titulación</NavLink>
      </button>
      <button className="highlighted">
        <NavLink to="/idiomas">Idiomas</NavLink>
      </button>
      <button className="highlighted">
        <NavLink to="/tramites">Trámites</NavLink>
      </button>
      <button className="highlighted">
        <NavLink to="/directorio">Directorio</NavLink>
      </button>

      {auth.isLoggedIn && (
        <button className="salir" onClick={auth.logout}>
          Salir
        </button>
      )}
    </ul>
  );
};

export default NavLinks;
