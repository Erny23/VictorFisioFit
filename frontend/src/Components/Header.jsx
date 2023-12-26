import { Link } from 'react-router-dom';
//import Container from 'react-bootstrap/Container';
//import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
        <header>
            <section>
                <nav className="navbar fixed-top" data-bs-theme="dark" id="navbar-head" style={{backgroundColor:'rgb(187, 32, 37)', height: '74px'}}>
                    <div className="container">
                        <Link to={'/VictorFisioFit'} className="navbar-brand" style={{fontFamily: 'stencilla'}} id="logo">VictorFisioFit</Link>
                        <Link to={'/VictorFisioFit/Sesion'} href="#" style={{display:'flex', color:'white', alignItems: 'center', textDecoration: 'none'}}>
                            <i className='bx bxs-user' style={{color:'white'}}/>
                            <h6 style={{margin:0}}><strong>SigIn/LogIn</strong></h6>
                        </Link>
                    </div>
                </nav>
                {/*<Navbar expand="md" fixed='top' className="bg-body-tertiary">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Link to={'/VictorFisioFit'} style={{textDecoration: 'none'}}>Inicio</Link>
                            <Link to={'/VictorFisioFit/Training'} style={{textDecoration: 'none'}}>Training</Link>
                            <Link to={'/VictorFisioFit/Productos'} style={{textDecoration: 'none'}}>Productos</Link>
                            <Link to={'/VictorFisioFit/Nosotros'} style={{textDecoration: 'none'}}>Nosotros</Link>
                            <Link to={'/VictorFisioFit/Contactos'} style={{textDecoration: 'none'}}>Contactos</Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>*/}
                {/*<nav className="navbar navbar-expand-md bg-body-tertiary">
                  <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li>
                            <Link to={'/VictorFisioFit'} style={{textDecoration: 'none'}}>Inicio</Link>
                        </li>
                        <li>
                            <Link to={'/VictorFisioFit/Training'} style={{textDecoration: 'none'}}>Training</Link>
                        </li>
                        <li>
                            <Link to={'/VictorFisioFit/Productos'} style={{textDecoration: 'none'}}>Productos</Link>
                        </li>
                        <li>
                            <Link to={'/VictorFisioFit/Nosotros'} style={{textDecoration: 'none'}}>Nosotros</Link>
                        </li>
                        <li>
                            <Link to={'/VictorFisioFit/Contactos'} style={{textDecoration: 'none'}}>Contactos</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>*/}
                <nav className="navbar fixed-top navbar-expand-md bg-body-tertiary fixed-top">
                  <button className="navbar-toggler ms-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="offcanvas offcanvas-start" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                        <div className="offcanvas-header">
                          <h5 className="offcanvas-title" id="Logo" style={{fontFamily: 'stencilla'}}>VictorFisiofit</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                          <ul className="navbar-nav flex-grow-1 pe-3" style={{justifyContent: 'space-around'}}>
                              <li className='nav-link'>
                                  <Link to={'/VictorFisioFit'} style={{textDecoration: 'none', color:'black'}}><strong>Inicio</strong></Link>
                              </li>
                              <li className='nav-link'>
                                  <Link to={'/VictorFisioFit/Training'} style={{textDecoration: 'none', color:'black'}}><strong>Training</strong></Link>
                              </li>
                              <li className='nav-link'>
                                  <Link to={'/VictorFisioFit/Productos'} style={{textDecoration: 'none', color:'black'}}><strong>Productos</strong></Link>
                              </li>
                              <li className='nav-link'>
                                  <Link to={'/VictorFisioFit/Nosotros'} style={{textDecoration: 'none', color:'black'}}><strong>Nosotros</strong></Link>
                              </li>
                              <li className='nav-link'>
                                  <Link to={'/VictorFisioFit/Contactos'} style={{textDecoration: 'none', color:'black'}}><strong>Contactos</strong></Link>
                              </li>
                          </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </header>
    </>
  )
}

export default Header