import React from "react";
import { Link } from "react-router-dom";

import sep_logo from "../../../images/logos/logo-educacion.svg";
import tecnm_logo from "../../../images/logos/logo-tecnm.svg";
import itt_logo from "../../../images/logos/logo_TECT.svg";

import "./LogosHeader.css";

const LogosHeader = (props) => {
  return (
    <header className="logos-header">
      <ul className="logos-links">
        <li>
          <Link to="/">
            <img src={sep_logo} alt="logo SEP" height="60" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={tecnm_logo} alt="logo TECNM" height="60" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={itt_logo} alt="logo ITT" height="60" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default LogosHeader;
