const Cv = ({foto, nombre, titulacion, certificado, nivelSql, aptitudes, lenguajes }) => {
    return(
        <div class="container px-1 my-5">
                <div class="text-center mb-5">
                    <img src={foto} alt="..." style={{ borderRadius: "50%", width: "15%"}}></img>
                    <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">{nombre}</span></h1>
                </div>
                <div class="row gx-9 justify-content-center">
                    <div class="col-lg-12 col-xl-11 col-xxl-10">
                        <section>
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h2 class="text-primary fw-bolder mb-0">Educación</h2>    
                            </div>
                            <div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    <div class="row align-items-center gx-5">
                                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div class="bg-light p-4 rounded-4">
                                                <div class="text-primary fw-bolder mb-2">2019 - 2023</div>
                                                <div class="small fw-bolder">Estudiante</div>
                                                <div class="small text-muted">Informática</div>
                                                <div class="small text-muted">ORT Almagro</div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8">
                                            <div><ul><li>Bachiller en informática con certificación en diseño y <tr><td></td></tr> desarrollo de aplicaciones web y móviles</li></ul></div>
                                            <div><ul><li>Titulación: {titulacion}</li></ul></div>
                                            <div><ul><li>Proyecto Final: Desarrollo de aplicación móvil para la <tr><td></td></tr> localización de DEA (Desfibrilador Externo Automático).<tr><td></td></tr> Lo desarrolle en equipo. Dentro del proyecto me <tr><td></td></tr> encargué de crear el diseño y prototipo de las pantallas y la creación de la Base de Datos. Actualmente me <tr><td></td></tr> encuentro desarrollándolo.</li></ul></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h2 class="text-secondary fw-bolder mb-4">Licencias y certificaciones</h2>
                            <div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    <div class="row align-items-center gx-5">
                                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div class="bg-light p-4 rounded-4">
                                                <div class="text-secondary fw-bolder mb-2">2022</div>
                                                <div class="mb-2">
                                                    <div class="small fw-bolder">SQL ({nivelSql}) <tr><td></td></tr> Certificate</div>
                                                    <div class="small text-muted">HackerRank</div>
                                                </div>
                                                <div class="fst-italic">
                                                    <div class="small text-muted"></div>
                                                    <div class="small text-muted"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8"><a className = "btn btn-outline-secondary" href={certificado}>Mostrar credencial  <i class="bi bi-box-arrow-up-right"></i></a></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div class="pb-5"></div>
                        <section>
                            <div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    <div class="mb-5">
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-tools"></i></div>
                                            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Aptitudes</span></h3>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-3 mb-4">
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">{aptitudes[0]}</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">{aptitudes[1]}</div></div>
                                            <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">{aptitudes[2]}</div></div>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-3">
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">{aptitudes[3]}</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">{aptitudes[4]}</div></div>
                                            <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">{aptitudes[5]}</div></div>
                                        </div>
                                    </div>
                                    <div class="mb-0">
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-code-slash"></i></div>
                                            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Lenguajes</span></h3>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-3 mb-4">
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">{lenguajes[0]}</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">{lenguajes[1]}</div></div>
                                            <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">{lenguajes[2]}</div></div>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-3">
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">{lenguajes[3]}</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">{lenguajes[4]}</div></div>
                                            <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">{lenguajes[5]}</div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
    )
    }

export default Cv;