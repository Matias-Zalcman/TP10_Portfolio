const Contacto = () =>
{
    return (
        <form>
            <p>Contacto:</p>
            <div class="row">
                <div class="col">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mail"/>
                </div>
                <div class="col">
                    <input type="text" class="form-control" id="exampleInputText1" placeholder="Nombre completo"/>
                </div>
            </div>
            <div class="row">
                <textarea class="form-control msj" placeholder="Mensaje"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    );
}

export default Contacto;