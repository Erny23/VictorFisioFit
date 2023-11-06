const MainCon = () => {
  return (
    <>
        <main id="mainCon">
          <section className="container py-3">
            <div>
              <h2 style={{color: 'white'}}><strong>Contacto</strong></h2>
            </div>
            <div>
              <p>Contáctenos hoy para asegurar un espacio en nuestro próximo programa.</p>
            </div>
            <div>
              <form action="#">
                <div>
                  <div>
                    <div className="d-flex">
                      <label htmlFor="nombreForm">Nombre</label>
                      <p className="mx-2">y</p>
                      <label htmlFor="apellidoForm">Apellido</label>
                      <span className="ms-2" style={{color: 'white'}}>(<em>requerido</em>)</span>
                    </div>
                    <div className="input-group input-group-lg">
                      <input type="text" aria-label="First name" id="nombreForm" required placeholder="Nombre" className="form-control"/>
                      <input type="text" aria-label="Last name" id="apellidoForm" required placeholder="Apellido" className="form-control"/>
                    </div>
                  </div>
                  <br />
                  <div>
                    <div className="d-flex">
                      <label htmlFor="emailForm">Correo electronico</label>
                      <span className="ms-2" style={{color: 'white'}}>(<em>requerido</em>)</span>
                    </div>
                    <br />
                    <div className="input-group input-group-lg">
                      <input type="email" aria-label="email" id="emailorm" required placeholder="email" className="form-control"/>
                    </div>
                  </div>
                  <br />
                  <div>
                    <div className="d-flex">
                      <label htmlFor="telefonoForm">Telefono</label>
                      <span className="ms-2" style={{color: 'white'}}>(<em>requerido</em>)</span>
                    </div>
                    <br />
                    <div className="input-group input-group-lg">
                      <input type="phone" aria-label="Telefono" id="telefonoForm" required placeholder="Telefono" className="form-control"/>
                    </div>
                  </div>
                  <br />
                  <div>
                    <div className="d-flex">
                      <label htmlFor="planForm">Que plan te interesa?</label>
                      <span className="ms-2" style={{color: 'white'}}>(<em>requerido</em>)</span>
                    </div>
                    <br />
                      <select className="form-select form-select-lg" aria-label="Large select example" id="planForm" required style={{borderRadius: '0'}}>
                        <option selected disabled value={''}>Seleccione una opcion</option>
                        <option value={"1"}>Plan inicial ($40/m)</option>
                        <option value={"2"}>Plan rendimiento ($60/m)</option>
                        <option value={"3"}>Plan elite ($80/m)</option>
                      </select>
                  </div>
                  <br />
                  <div>
                    <div >
                      <div>
                        <label htmlFor="messageForm">Mensaje</label>
                      </div>
                      <br />
                      <textarea placeholder="Comentanos tus dudas..." name="message" id="messageForm" rows="8"></textarea>
                    </div>
                  </div>
                  <button className="my-3 btn btn-light" type="submit" style={{borderRadius: '25px'}}><strong>Registra tu interes</strong></button>
                </div>
              </form>
            </div>
          </section>
        </main>
    </>
  )
}

export default MainCon