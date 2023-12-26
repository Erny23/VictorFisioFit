import NavClasTra from "./NavClasTra"

const Leccion1 = () => {
  return (
    <>
        <main id="mainTra">
          <section>
            <div className="row row-cols-2">
                <div className="col-4">
                    <NavClasTra/>
                </div>
                <div className="col-7">
                    <h1 style={{color:'white'}}>Entrenamiento1</h1>
                </div>
            </div>
          </section>
        </main>
    </>
  )
}

export default Leccion1