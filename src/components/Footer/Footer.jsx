import '../../pages/HomePage/HomePage.css'
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Accordion } from 'react-bootstrap';
import { style } from '@mui/system';


export default function Footer() {
  return (
   <footer>
			<div className="wrap mt1">
			<div className="box ml">
				<img className="logoFooter" src="images/envio.png" alt="" />
				<h1 className="textoFooter">ENVÍO GRATIS EN LA COMPRA DE $2000.00MXN</h1>
			</div>
			<div className="box">
				<img className="logoFooter" src="images/ubicacion.png" alt="" />
				<h1 className="textoFooter">UBICANOS EN NUESTROS DISTINTOS PUNTOS DE VENTA</h1>
			</div>
			<div className="box ml">
				<img className="logoFooter" src="images/pago.png" alt="" />
				<h1 className="textoFooter">ACEPTAMOS DIFERENTES MÉTODOS DE PAGO</h1>
			</div>
			<div className="box">
				<img className="logoFooter" src="images/maquillaje.png" alt="" />
				<h1 className="textoFooter">APARTA TUS PRODUCTOS FAVORITOS</h1>
			</div>
		</div>
		<div>
		<Accordion className='accordion'>
      <Accordion.Item eventKey="0">
        <Accordion.Header><a className='red'>Ayuda con mi compra</a></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><a className='red'>¿Donde está mi pedido?</a></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
			<Accordion.Item eventKey="2">
        <Accordion.Header><a className='red'>Tengo una duda</a></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
			<Accordion.Item eventKey="3">
        <Accordion.Header><a className='red'>Contactanos</a></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
		</div>

			<div className='start'>
				<h1 className='black'>Redes Sociales</h1>
				<div className='redes1'>
				 <a className='mr' href="https://www.facebook.com/beautyymx"><img className='pngFooter mr' src="images/fb.png" alt="" /></a>
					<a className='mr' href="https://www.instagram.com/beautyymx/"><img className='pngFooter mr' src="images/instagram.png" alt="" /></a>
					<a className='mr' href="https://www.tiktok.com/@beautyymx"><img className='pngFooter ' src="images/tiktok.png" alt="" /></a>
			</div>
		</div>

		<div className='start'>
			<h1 className='black'>Metodos de Pago</h1>
			<div className='redes1'>
				<img className='pngFooter mr' src="images/tarjeta.png" alt="" />
				<img className='pngFooter mr' src="images/efectivo.png" alt="" />
			</div>
		</div>
		<h1 className='black final'>Copyright © 2023 Beautyy-Mx</h1>
	 </footer>
  );
}