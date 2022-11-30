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
            <Nav.Link style={{color:'black',fontWeight:'500' }} href="/">Inicio</Nav.Link>
            <Nav.Link style={{color:'black',fontWeight:'500' }} href="#pricing">¿Qiuienes somos?</Nav.Link>
            <NavDropdown className='black' title="Productos" id="black">
              <NavDropdown.Item style={{color:'black',fontWeight:'500' }} href="#action/3.1">Rostro</NavDropdown.Item>
              <NavDropdown.Item  style={{color:'black',fontWeight:'500' }} href="#action/3.2">
                Ojos
              </NavDropdown.Item>
              <NavDropdown.Item style={{color:'black',fontWeight:'500' }} href="#action/3.3">Labios</NavDropdown.Item>
              <NavDropdown.Item style={{color:'black',fontWeight:'500' }} href="#action/3.4">
                Paletas
              </NavDropdown.Item>
							<NavDropdown.Item style={{color:'black',fontWeight:'500' }} href="#action/3.4">
                Cuidado de la Piel
              </NavDropdown.Item>
							<NavDropdown.Item style={{color:'black',fontWeight:'500' }} href="#action/3.4">
                Tamaño de Viaje
              </NavDropdown.Item>
							<NavDropdown.Item style={{color:'black',fontWeight:'500' }} href="#action/3.4">
                Accesorios
              </NavDropdown.Item>
            </NavDropdown >
						<Nav.Link style={{color:'black',fontWeight:'500' }} href="#pricing">Descuentos</Nav.Link>
          </Nav>
          <Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;