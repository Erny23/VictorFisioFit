import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
        <footer className="py-5" style={{backgroundColor:'rgb(187, 32, 37)'}}>
            <section className="mx-3 row row-cols-1 row-cols-sm-2" id="footerSection2">
                <div className="col my-2">
                    <div>
                        <Link to='/VictorFisioFit' href='#' style={{fontFamily: 'stencilla'}} id="logoFooter">VictorFisioFit</Link>
                        <p>Servicio de entrenamiento personalizado</p>
                    </div>
                    <div>
                        <p>Libera tu potencial y redefine tus límites con nosotros. Nuestros entrenadores adaptan los entrenamientos a tu capacidad, asegurándote de que estés en forma hoy y sea innegablemente más fuerte mañana. Es nuestro compromiso con tu salud. Ofrecemos entrenamientos efectivos y eficientes combinados con orientación nutricional para ayudarlo a alcanzar su máximo nivel de condición física.</p>
                    </div>
                </div>
                <div className="col my-2">
                    <div>
                        <h3><strong>Obtener actualización</strong></h3>
                        <p>Manténgase a la vanguardia en su viaje de fitness con nuestros consejos y ofertas exclusivos.</p>
                    </div>
                    <div>
                    </div>
                    <br />
                    <div>
                        <div className="d-flex">
                            <label htmlFor="suscripcion"></label>
                            <input className="form-control" type="text" style={{borderRadius: '5px 0 0 5px'}} />
                            <button className="btn btn-light" id="suscripcion" type="submit" style={{borderRadius: '0 5px 5px 0'}}><strong>Suscribete</strong></button>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <section className="mx-3" style={{color:'white',borderBottom: 'solid', borderWidth: 'thin', paddingBottom: '25px'}}>
                <div className="row row-cols-2 row-cols-md-4">
                    <div className="col">
                        <h4><strong>Training</strong></h4>
                        <ul>
                            <li><a href="#">Funcionales</a></li>
                            <li><a href="#">Peso</a></li>
                            <li><a href="#">Spining</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4><strong>Productos</strong></h4>
                            <ul>
                                <li><a href="#">Ropa</a></li>
                                <li><a href="#">Calzado</a></li>
                                <li><a href="#">Accesorio</a></li>
                            </ul>
                    </div>
                    <div className="col">
                        <h4><strong>Nosotros</strong></h4>
                        <ul>
                            <li><a href="#">Vision</a></li>
                            <li><a href="#">Mision</a></li>
                            <li><a href="#">Equipo</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4><strong>Otros</strong></h4>
                        <ul>
                            <li><a href="#">Afiliados</a></li>
                            <li><a href="#">Desarrolladores</a></li>
                            <li><a href="#">Mas</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div className="text-center py-3" style={{color: 'white'}}>
                    <h6><em>Ernesto Fava</em></h6>
                </div>
            </section>
        </footer>
    </>
  )
}

export default Footer