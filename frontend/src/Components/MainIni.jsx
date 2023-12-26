const MainIni = () => {
  return (
    <>
      <main id="mainIni">
        <section>
          <div id="bannerIni">
            <span id="span">
              <div id="bannerBox">
                <button className="btn btn-outline-light" type="submit">Tienda</button>
              </div>
            </span>
            <img src="imgInicio.jpg" alt="imgInicio"/>
          </div>
        </section>
        <section className="mb-5 py-3" style={{backgroundColor: 'white'}}>
          <div className="text-center">
            <p><strong>Nosotros</strong></p>
          </div>
          <div className="mx-3 text-center">
            <h2><strong>¿Por qué VictorFisioFit?</strong></h2>
            <h2><strong>Descubre nuestras ventajas unicas</strong></h2>
            <br />
                    <p>Es nuestro compromiso con tu salud. Ofrecemos entrenamientos efectivos y eficientes combinados con orientación nutricional para ayudarlo a alcanzar su máximo nivel de condición física.</p>
          </div>
          <br />
          <div className="mx-3 row row-cols-1 row-cols-sm-3">
            <div className="col">
              <h3>Entrenamiento personalizado</h3>
              <p>Los entrenadores expertos de VictorFisioFit son profesionales certificados del fitness dedicados a guiarlo hacia sus objetivos de salud.</p>
            </div>
            <div className="col">
              <h3>Instalaciones de última generación</h3>
              <p>Nuestras instalaciones de última generación están diseñadas para mejorar su experiencia de entrenamiento e impulsar su progreso.</p>
            </div>
            <div className="col">
              <h3>Comunidad de apoyo</h3>
              <p>Entrenarás junto a personas con ideas afines que se alientan e inspiran mutuamente para alcanzar sus objetivos de acondicionamiento físico.</p>
            </div>
          </div>
        </section>
        <section id="productosIni">
          <div className="text-center" style={{color:'white'}}>
            <h2><strong>Productos</strong></h2>
          </div>
          <div className="mx-2 row row-cols-2 row-cols-md-4 justify-content-center">
            <div className="col my-2">
              <div className="card h-100 text-bg-light">
                <div>
                  <img src="Proteina1.jpg" className="card-img-top" alt="" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Proteina Whey</h5>
                  <p className="card-text">$$$</p>
                </div>
              </div>
            </div>
            <div className="col my-2">
            <div className="card h-100 text-bg-light">
                <div>
                  <img src="PrendaGim1.jpg" className="card-img-top" alt="" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Ropa deportiva</h5>
                  <p className="card-text">$$$</p>
                </div>
              </div>
            </div>
            <div className="col my-2">
            <div className="card h-100 text-bg-light">
                <div>
                  <img src="Proteina2.png" className="card-img-top" alt="" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Proteina Isolate</h5>
                  <p className="card-text">$$$</p>
                </div>
              </div>
            </div>
            <div className="col my-2">
            <div className="card h-100 text-bg-light">
                <div>
                  <img src="PrendaGim2.jpg" className="card-img-top" alt="" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Ropa deportiva</h5>
                  <p className="card-text">$$$</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5">
          <div id="bannerIni">
            <span id="spanEnd">
              <div className="container" id="bannerBoxEnd">
                <h1><strong>¿Listo para iniciar tu revolución del fitness?</strong></h1>
                <p>Nunca ha habido un mejor momento que ahora. Sumérgete en tu viaje de fitness con StartFitter hoy.</p>
                <button className="btn btn-danger" type="submit"><strong>Empezar</strong></button>
              </div>
            </span>
            <img src="imgInicio2.jpg" alt="imgInicio"/>
          </div>
        </section>
      </main>
    </>
  )
}

export default MainIni