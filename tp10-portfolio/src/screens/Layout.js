import { useState, useEffect, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Contacto from '../components/Contacto';
import FavoritoContext from "../context/favoritoContext";
import Badge from '@mui/material/Badge';
import ModalCreacion from "../components/ModalCreacion";
import axios from 'axios';

const Layout = () => {
    const favorito = useContext(FavoritoContext);
    const [cantProyectos, setCantProyectos] = useState(0);
    const [creaciones, setCreaciones] = useState([]);

    const getCreaciones = () => axios.get('http://localhost:3000/creaciones.json').then(res => setCreaciones(res.data)).catch(error => console.log(error));

    const calcularCantProyectos = () => {
        let cant = 0;
        favorito.favorito.map(proyecto => cant++);
        setCantProyectos(cant);
    }

    useEffect(() => {
        getCreaciones();
    }, []);

    useEffect(() => {
        calcularCantProyectos();
    }, [favorito.favorito])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div className="container px-5">
                    <Link to="/" className="navbar-brand"><span className="fw-bolder text-primary">Bryan Gitman & Matías Zalcman</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="/nosotros" className="nav-link">Nosotros</Link></li>
                            <li className="nav-item"><Link to="/creaciones" className="nav-link">Creaciones</Link></li>
                            <li className="nav-item"><Link to="/favoritos" className="nav-link"><Badge badgeContent={cantProyectos} color="primary"><i className="bi bi-star-fill"></i></Badge></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
            <footer className="footer-container">
                <div className="container px-5">
                    <Contacto></Contacto>
                    <div className="row align-items-center justify-content-between flex-column flex-sm-row footer-text">
                    <div className="col-auto"><div className="small m-0">Copyright &copy; Bryan Gitman & Matías Zalcman 2023</div></div>
                    <div className="col-auto">
                        <p className="text-center">Bryan Gitman</p>
                        <div className="d-flex justify-content-center fs-2 gap-4 footer-links">
                        <a className="text-gradient" href="mailto:brygitman@gmail.com"><i className="bi bi-envelope-fill"></i></a>
                        <a className="text-gradient" href="https://ar.linkedin.com/in/bryangitman"><i className="bi bi-linkedin"></i></a>
                        <a className="text-gradient" href="https://github.com/BryanGitman"><i className="bi bi-github"></i></a>
                        </div>
                    </div>
                    <div className="col-auto">
                        <p className="text-center">Matías Zalcman</p>
                        <div className="d-flex justify-content-center fs-2 gap-4 footer-links">
                        <a className="text-gradient" href="mailto:mlzalcman@gmail.com"><i className="bi bi-envelope-fill"></i></a>
                        <a className="text-gradient" href="https://ar.linkedin.com/in/matizalcman"><i className="bi bi-linkedin"></i></a>
                        <a className="text-gradient" href="https://github.com/Matias-Zalcman"><i className="bi bi-github"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>

            {creaciones.map(creacion => <ModalCreacion key={creacion.Id} creacion={creacion}></ModalCreacion>)}
        </>
    );
}

export default Layout;