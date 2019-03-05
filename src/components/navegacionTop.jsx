import React, { Component } from "react";

class NavegacionTop extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">
          ADMINISTRACIÓN
        </a>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Buscar contenido"
          aria-label="Search"
        />

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="/">
              Cerrar Sesión
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavegacionTop;
