import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Creacion from '../components/Creacion';
import FavoritoContext from "../context/favoritoContext";

const Favoritos = () => {
    const [creaciones, setCreaciones] = useState([]);
    const favorito = useContext(FavoritoContext);

    const getCreaciones = () => axios.get('http://localhost:3000/creaciones.json').then(res => setCreaciones(res.data)).catch(error => console.log(error));

    useEffect(() => {
        getCreaciones();
    }, []);

    return (
        <div className="container text-center" style={{marginLeft: '10%', display: 'flex', flexDirection: 'column', minHeight: '60vh'}}>
            <div className="row justify-content-center" style={{width: '120%'}}>
                {creaciones.map(creacion => favorito.favorito.find((c) => c.Id === creacion.Id)?<div key={creacion.Id} className="col-4" style={{marginTop: '3%'}}><Creacion creacion={creacion}></Creacion></div>:"")}
            </div>
        </div>
    );
}

export default Favoritos;