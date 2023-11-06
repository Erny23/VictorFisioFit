import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

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
                <Navbar expand="md" fixed='top' className="bg-body-tertiary">
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
                </Navbar>
            </section>
        </header>
    </>
  )
}

export default Header