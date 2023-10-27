import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';

const Home = () => {
    return (
        <main className="flex-shrink-0">
        <header className="py-5">
                <div className="container px-5 pb-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xxl-5">
                            <div className="text-center text-xxl-start">
                                <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div class="text-uppercase">Diseño &middot; Desarrollo &middot; Innovación</div></div>
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
                                scrollButtons
                                aria-label="visible arrows tabs example"
                                sx={{
                                [`& .${tabsClasses.scrollButtons}`]: {
                                    '&.Mui-disabled': { opacity: 0.3 },
                                },
                                }}
                            >
                                <div class="card" style={{width: '25rem'}}>
                                    <img class="card-img-top" src=".../100px180/" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
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