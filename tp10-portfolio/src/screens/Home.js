import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Creacion from '../components/Creacion';
import axios from 'axios';

const Home = () => {
    const [creaciones, setCreaciones] = React.useState([]);

    const getCreaciones = () => axios.get('http://localhost:3000/creaciones.json').then(res => setCreaciones(res.data)).catch(error => console.log(error));

    React.useEffect(() => {
        getCreaciones();
    }, []);

    return (
        <main className="flex-shrink-0">
        <header className="py-5">
                <div className="container px-5 pb-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xxl-5">
                            <div className="text-center text-xxl-start">
                                <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Diseño &middot; Desarrollo &middot; Innovación</div></div>
                                <div className="fs-3 fw-light text-muted">Podemos ayudarte a</div>
                                <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">Hacer tus ideas realidad</span></h1>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                    <Link to="/nosotros" className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder">Nosotros</Link>
                                    <Link to="/creaciones" className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder">Creaciones</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7">
                            <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                                <div className="profile bg-gradient-primary-to-secondary">
                                    <img className="profile-img" src="/profile.png" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5 align-items-center">
                        <h3 className="display-6 fw-bolder mb-5" style={{marginTop: '4%'}}><span className="text-gradient d-inline">Creaciones destacadas</span></h3>
                        <Box
                            sx={{
                                flexGrow: 1,
                                bgcolor: 'background.paper',
                            }}
                            >
                            <Tabs
                                variant="scrollable"
                                selectionFollowsFocus
                                scrollButtons
                                allowScrollButtonsMobile
                                aria-label="scrollable force tabs example"
                                sx={{
                                [`& .${tabsClasses.scrollButtons}`]: {
                                    '&.Mui-disabled': { opacity: 0.3 },
                                },
                                }}
                            >
                                { 
                                    creaciones.map(creacion => {
                                        if(creacion.Id >= 1 && creacion.Id <= 6)
                                        {
                                            return <Tab sx={{maxHeight: 500, marginRight: '1.1%'}} key={creacion.Id} data-bs-toggle="modal" data-bs-target={"#exampleModal" + creacion.Id} label={<Creacion creacion={creacion} screen="Home"></Creacion>} />
                                        }
                                        else{
                                            return ""
                                        }
                                    })
                                }
                            </Tabs>
                        </Box>
                    </div>
                </div>
            </header>
            <section className="bg-light py-5">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xxl-8">
                            <div className="text-center my-5">
                                <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">Sobre nosotros</span></h2>
                                <p className="lead fw-light mb-4">Somos Bryan Gitman y Matías Zalcman y podemos llevar las ideas a la realidad.</p>
                                <p className="text-muted">Como estudiantes de Informática en ORT, a lo largo de materias como EFSI, DAI, Programación y Proyecto Final pudimos desarrollar nuestra capacidad de resolución de problemas mediante soluciones informáticas como apps y páginas web, siempre cumpliendo con las consignas y destacándonos en nuestros resultados.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;