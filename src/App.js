import React, { Component } from "react";
import NavegacionTop from "./components/navegacionTop";
import NavegacionLateral from "./components/navegacionLateral";
import Contenido from "./components/contenido";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavegacionTop />

        <div className="container-fluid">
          <div className="row">
            <NavegacionLateral />
            <Contenido />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
