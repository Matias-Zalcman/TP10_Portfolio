import { useContext } from 'react';
import FavoritoContext from "../context/favoritoContext";

const Creacion = ({creacion, screen = "Creaciones"}) => {
    const favorito = useContext(FavoritoContext);

    return (
        <div className="card" style={favorito.favorito.find((c) => c.Id === creacion.Id)?{width: 500, maxHeight: 400, borderColor: 'green'}:{width: 500, maxHeight: 400}}>
            <img className="card-img-top" style={{maxHeight: 200, width: '80%', margin: '3%', alignSelf: 'center'}} src={creacion.Imagen} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{creacion.Titulo} {favorito.favorito.find((c) => c.Id === creacion.Id)?<i style={{color: 'green'}} className="bi bi-star-fill"></i>:""}</h5>
                {screen === "Home"? "" : <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#exampleModal" + creacion.Id}>Ver más</button>}
            </div>
        </div>
    );
}

export default Creacion;