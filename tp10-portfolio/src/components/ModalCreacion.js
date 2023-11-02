const ModalCreacion = ({creacion}) => {
    return (
        <div className="modal fade" id={"#exampleModal" + creacion.Id} tabindex="-1" aria-labelledby={"exampleModalLabel" + creacion.Id} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id={"exampleModalLabel" + creacion.Id}>{creacion.Title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src={creacion.Imagen}/>
                        <p className="text-muted">{creacion.FechaInicio + " - " + creacion.FechaFin}</p>
                        <p>{creacion.Descripcion}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-danger">Agregar a favoritos</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalCreacion;