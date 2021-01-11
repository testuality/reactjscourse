
const Paginacion = (props) => {
    let btnPaginaAnterior = "";
    if (props.pagina > 1) {
        btnPaginaAnterior = (
            <button onClick={props.paginaAnterior} className="btn btn-info mr-1">&larr; Anterior</button>
        );
    }

    let btnPaginaSiguiente = "";
    if (props.numeroImagenes > 0) {
        btnPaginaSiguiente = (
            <button onClick={props.paginaSiguiente} className="btn btn-info mr-1">Siguiente &rarr;</button>
        );
    }

    return (
        <div className="py-3">
            {btnPaginaAnterior}
            {btnPaginaSiguiente}
        </div>
    );
}

export default Paginacion;