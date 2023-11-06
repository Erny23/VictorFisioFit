const MainPro = () => {
  return (
    <>
        <main id="mainPro">
            <h1 className="text-center py-3" style={{color: 'white'}}><strong>Productos</strong></h1>
            <section className="container py-3">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100" style={{maxWidth: '340px'}}>
                    <img src="termoRojo.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Termo Rojo 16oz</h5>
                      <p className="card-text"><em>marca</em></p>
                      <button type="button" className="btn btn-danger"><strong>Comprar</strong></button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100" style={{maxWidth: '340px'}}>
                    <img src="sudaderaRoja.jpeg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Sudadera Roja</h5>
                      <p className="card-text"><em>marca</em></p>
                      <button type="button" className="btn btn-danger"><strong>Comprar</strong></button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100" style={{maxWidth: '340px'}}>
                    <img src="tenisDeportivos.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Tenis Rojos</h5>
                      <p className="card-text"><em>marca</em></p>
                      <button type="button" className="btn btn-danger"><strong>Comprar</strong></button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="container">
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="banner1.jpg" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="banner2.png" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="banner3.jpg" className="d-block w-100" alt="..."/>
                  </div>
                </div>
              </div>
            </section>
            <section className="container py-3">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100" style={{maxWidth: '340px'}}>
                    <img src="termoRojo2.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Termo Rojo 22oz</h5>
                      <p className="card-text"><em>marca</em></p>
                      <button type="button" className="btn btn-danger"><strong>Comprar</strong></button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100" style={{maxWidth: '340px'}}>
                    <img src="conjuntoDeportivo.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Conjunto Deportivo</h5>
                      <p className="card-text"><em>marca</em></p>
                      <button type="button" className="btn btn-danger"><strong>Comprar</strong></button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100" style={{maxWidth: '340px'}}>
                    <img src="sudaderaNegra.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Sudadera Negra</h5>
                      <p className="card-text"><em>marca</em></p>
                      <button type="button" className="btn btn-danger"><strong>Comprar</strong></button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </main>
    </>
  )
}

export default MainPro