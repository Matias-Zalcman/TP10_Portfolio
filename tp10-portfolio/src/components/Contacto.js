const Contacto = () =>
{
    return (
        <form>
            <p>Contacto:</p>
            <div className="row">
                <div className="col">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mail"/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" id="exampleInputText1" placeholder="Nombre completo"/>
                </div>
            </div>
            <div className="row">
                <textarea className="form-control msj" placeholder="Mensaje"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
}

export default Contacto;