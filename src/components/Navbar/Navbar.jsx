import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
      <Container>
				<div className='flex'>
        <Navbar.Brand href="#home"><img className='imgMenu' src="images/beauty-blanco.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle className='menu' aria-controls="responsive-navbar-nav" ><p className='hamburguer'>☰</p></Navbar.Toggle>
				</div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#pricing">¿Qiuienes somos?</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Maquillaje</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Paletas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Labiales</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Accesorios
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;