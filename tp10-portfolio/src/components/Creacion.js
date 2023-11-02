const Creacion = ({creacion}) => {
    return (
        <div className="card" style={{width: 500, maxHeight: 400}}>
            <img className="card-img-top" style={{maxHeight: 200, width: '80%', margin: '3%', alignSelf: 'center'}} src={creacion.Imagen} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{creacion.Titulo}</h5>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#exampleModal" + creacion.Id}>Ver más</button>
            </div>
        </div>
    );
}

export default Creacion;