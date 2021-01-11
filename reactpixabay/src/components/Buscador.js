import React, { Component } from "react";

class Buscador extends Component {

    busquedaRef = React.createRef();

    obtenerDatos = (event) => {
        event.preventDefault();
        this.props.datosBusqueda(this.busquedaRef.current.value);
    }

    render() {
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input
                            ref= {this.busquedaRef}
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Buscar..."/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" 
                            className="btn btn-lg btn-danger btn-block" 
                            value="Buscar"
                            />
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;