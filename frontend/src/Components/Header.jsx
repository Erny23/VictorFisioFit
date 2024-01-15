import { useContext } from 'react';
import { Link } from 'react-router-dom';
//import Container from 'react-bootstrap/Container';
//import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from './Auth/authProvider'

const Header = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  return (
    <>
        <header>
            <section>
                <nav className="navbar fixed-top" data-bs-theme="dark" id="navbar-head" style={{backgroundColor:'rgb(187, 32, 37)', height: '74px'}}>
                    <div className="container">
                        <Link to={'/VictorFisioFit'} className="navbar-brand" style={{fontFamily: 'stencilla'}} id="logo">VictorFisioFit</Link>
                        {isAuthenticated ? false : (
                          <Link to={'/VictorFisioFit/Sesion'} href="#" style={{display:'flex', color:'white', alignItems: 'center', textDecoration: 'none'}}>
                            <i className='bx bxs-user' style={{color:'white'}}/>
                            <h6 style={{margin:0}}><strong>SigIn/LogIn</strong></h6>
                          </Link>
                        )}
                        {isAuthenticated ? (
                          <button className='btn btn-light'>
                            <Link to={'/VictorFisioFit/Sesion'} href="#" style={{display:'flex', color:'black', alignItems: 'center', textDecoration: 'none'}}>
                              <strong>{user}</strong>
                            </Link>
                          </button>
                        ) : false}
                    </div>
                </nav>
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
                              {isAuthenticated ? (
                                <li className='nav-link'>
                                  <Link to={'/VictorFisioFit/Training'} style={{textDecoration: 'none', color:'black'}}><strong>Training</strong></Link>
                                </li>
                              ) : false}
                              {isAuthenticated ? (
                                <li className='nav-link'>
                                  <Link to={'/VictorFisioFit/Productos'} style={{textDecoration: 'none', color:'black'}}><strong>Productos</strong></Link>
                                </li>
                              ) : false}
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