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
                        <Link to={'/'} className="navbar-brand" id="logo">VictorFisioFit</Link>
                        <Link to={'/Sesion'} href="#" style={{display:'flex', color:'white', alignItems: 'center'}}>
                            <i className='bx bxs-user' style={{color:'white'}}/>
                            <h6 style={{margin:0}}><strong>SigIn/LogIn</strong></h6>
                        </Link>
                    </div>
                </nav>
                <Navbar expand="md" fixed='top' className="bg-body-tertiary">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Link to={'/'}>Inicio</Link>
                            <Link to={'/Training'}>Training</Link>
                            <Link to={'/Productos'}>Productos</Link>
                            <Link to={'/Nosotros'}>Nosotros</Link>
                            <Link to={'/Contactos'}>Contactos</Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>
        </header>
    </>
  )
}

export default Header