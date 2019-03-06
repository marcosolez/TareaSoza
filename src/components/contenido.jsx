import React, { Component } from "react";
import { GetPersonas } from "./../services/personasServices";

class Contenido extends Component {
  state = {
    datos: GetPersonas()
  };
  handlerDlete = persona => {
    const datos = this.state.datos.filter(m => m.id !== persona.id);
    this.setState({ datos });
  };
  handlerAgregar = () => {
    const nueva = {
      id: Math.random() * 1000,
      Nombres: "Juan Jose",
      Apellidos: "Lopez Perez",
      Deporte: "Deporte",
      Municipio: "La Concepcion"
    };
    const nuevoDato = this.state.datos;
    nuevoDato.push(nueva);
    this.setState({ datos: nuevoDato });
  };

  render() {
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <h2>Listado de Personas</h2>
        <div className="table-responsive">
          <button onClick={this.handlerAgregar} className="btn btn-info">
            Agregar Nuevo
          </button>
          <br /> <br />
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>Identificador</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Deporte</th>
                <th>Municipio</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.datos.map(per => (
                <tr key={per.id}>
                  <td>{per.id}</td>
                  <td>{per.Nombres}</td>
                  <td>{per.Apellidos}</td>
                  <td>{per.Deporte}</td>
                  <td>{per.Municipio}</td>
                  <td>
                    <button
                      onClick={() => this.handlerDlete(per)}
                      className="btn btn-danger btn-sm"
                    >
                      Eliminar
                    </button>
                  </td>
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
