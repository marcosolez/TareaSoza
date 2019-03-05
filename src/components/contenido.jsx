import React, { Component } from "react";
import { GetPersonas } from "./../services/personasServices";

class Contenido extends Component {
  state = {};
  render() {
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <h2>Listado de Personas</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Deporte</th>
                <th>Municipios</th>
              </tr>
            </thead>
            <tbody>
              {GetPersonas().map(per => (
                <tr>
                  <td>{per.id}</td>
                  <td>{per.Nombres}</td>
                  <td>{per.Apellidos}</td>
                  <td>{per.Deporte}</td>
                  <td>{per.Municipio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    );
  }
}

export default Contenido;
