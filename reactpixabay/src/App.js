import React, { Component } from "react";
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";

// https://youtu.be/hScR513gvNo?list=PLd6Igc0Cu9vUwgcEdFOfQN1m4nq6pU3iX&t=3508

class App extends Component {

  state = {
    termino: "",
    imagenes: []
  }

  scroll = () => {
    const element = document.querySelector(".jumbotron");
    element.scrollIntoView("smooth", "start");
  }

  paginaAnterior = () => {
    let anteriorPagina = this.state.pagina == 1 ? 1 : this.state.pagina -1;
    this.consultarApi(anteriorPagina);
  }

  paginaSiguiente = () => {
    let siguientePagina = this.state.pagina + 1;
    this.consultarApi(siguientePagina);
  }

  // Ver https://pixabay.com/api/docs/
  // API key 19801908-3dd9753abefb018f013d27df7
  consultarApi(pagina) {
    const url = `https://pixabay.com/api/?key=19801908-3dd9753abefb018f013d27df7&q=${this.state.termino}&image_type=photo&per_page=30&page=${pagina}`;
    let obj = this;
    fetch(url).then((response) => {
      response.json().then(function (data) {
        obj.setState({
          termino: obj.state.termino,
          pagina: pagina,
          imagenes: data.hits
        }, () => {obj.scroll();});
      });
    });
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino: termino
    },
      () => { this.consultarApi(1); }
    );

  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="lead text-center">Buscador de imagenes</div>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <div className="row justify-content-center">
          <Resultado 
            imagenes={this.state.imagenes} 
            paginaSiguiente={this.paginaSiguiente}
            paginaAnterior={this.paginaAnterior}
            pagina={this.state.pagina}/>
        </div>
      </div>
    );

  }
}

export default App;
