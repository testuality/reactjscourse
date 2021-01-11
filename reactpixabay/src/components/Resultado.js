import React, { Component } from "react";
import Imagen from "./Imagen";
import Paginacion from "./Paginacion";

class Resultado extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {this.props.imagenes.map(element => {
                        return (
                            <Imagen key={element.id} imagen={element} />
                        );
                    })}

                </div>
                <Paginacion 
                    paginaSiguiente={this.props.paginaSiguiente}
                    paginaAnterior={this.props.paginaAnterior}
                    pagina={this.props.pagina}
                    numeroImagenes={this.props.imagenes.length}/>
            </React.Fragment>
        );
    }
}

export default Resultado;