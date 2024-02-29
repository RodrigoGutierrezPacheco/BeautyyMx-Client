import '../../pages/HomePage/HomePage.css'
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Accordion } from 'react-bootstrap';
import { style } from '@mui/system';
import { motion } from 'framer-motion';


export default function Footer() {
 
	function puntos (){
		window.location.href = "/puntos-de-venta"
	}

  return (
   <footer className='celular'>
			<div className="wrap mt1">
			<div className="box ml">
				<img className="logoFooter" src="images/envio.png" alt="" />
				<h1 className="textoFooter">ENVÍOS A TODA LA REPÚBLICA MEXICANA DESDE $129.00MXN</h1>
			</div>
			<div className="box">
				<motion.img whileTap={{scale:1.1}} onClick={puntos} className="logoFooter" src="images/ubicacion.png" alt="" />
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
        <Accordion.Header><a className='red'>¿Donde puedo realizar mi compra?</a></Accordion.Header>
        <Accordion.Body>
					<p className='justify'>Puedes realizar tu pedido en cualquiera de nuestros puntos de venta o en nuestro local, tambien puedes contactarnos para pedir tus productos favoritos.</p>
					<motion.button onClick={puntos} whileHover={{scale:1.1}} whileTap={{scale:1.1}} className="button">Puntos de Venta</motion.button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><a className='red'>¿Donde está mi pedido?</a></Accordion.Header>
        <Accordion.Body>
					<p>Puedes checar el estatus de tu envio en las paginas oficiales de las paqueterias.</p>
					<div className='space-arround'>
						<motion.img whileTap={{scale:1.1}} className='envio' src="images/dhl.png" alt="" />
						<motion.img whileTap={{scale:1.1}} className='envio' src="images/fedex.png" alt="" />
						<motion.img whileTap={{scale:1.1}} className='envio' src="images/99minutos.jpg" alt="" />
					</div>
        </Accordion.Body>
      </Accordion.Item>
			<Accordion.Item eventKey="2">
        <Accordion.Header><a className='red'>¿Que días realizan envíos?</a></Accordion.Header>
        <Accordion.Body>
					<p>Los envios se realizan los dias viernes antes de las 6pm, pagando el envio rapido se realiza el envio el mismo dia.</p>
        </Accordion.Body>
      </Accordion.Item>
			<Accordion.Item eventKey="3">
        <Accordion.Header><a className='red'>Preguntas frecuentes</a></Accordion.Header>
        <Accordion.Body>
					<div>
						<div>
							<p className='black'>¿Cuáles son los métodos de pago aceptados?</p>
							<p className="red">-Aceptamos varios métodos de pago, como tarjetas de crédito y débito (Visa, Mastercard, American Express), PayPal y transferencias bancarias.</p>
						</div>
						<div>
							<p className='black'>¿Cuánto tiempo tarda en llegar mi pedido?</p>
							<p className="red">-El tiempo de entrega varía según tu ubicación y el método de envío seleccionado. Normalmente, nuestros envíos tardan entre 2 y 5 días hábiles en llegar a destino.</p>
						</div>
						<div>
							<p className='black'>¿Hay opciones de envío express disponibles?</p>
							<p className="red">-Sí, ofrecemos envío express para aquellos clientes que deseen recibir sus productos de forma más rápida. Puedes seleccionar esta opción al momento de realizar tu compra.</p>
						</div>
						<div>
							<p className='black'>¿Puedo realizar devoluciones o cambios de productos?</p>
							<p className="red">-En caso de devolución exitosa, ofrecemos reembolsos completos del importe pagado. El reembolso se realiza utilizando el mismo método de pago utilizado al realizar la compra original.</p>
						</div>
						<div>
							<p className='black'>¿Cuál es la política de reembolso?</p>
							<p className="red">-En caso de devolución exitosa, ofrecemos reembolsos completos del importe pagado. El reembolso se realiza utilizando el mismo método de pago utilizado al realizar la compra original.</p>
						</div>
						<div>
							<p className='black'>¿Los productos son originales o auténticos?</p>
							<p className="red">-Garantizamos la autenticidad de nuestros productos. Trabajamos directamente con las mejores marcas de maquillaje y solo ofrecemos productos originales y de alta calidad.</p>
						</div>
						<div>
							<p className='black'>¿Cómo puedo contactar al servicio al cliente?</p>
							<p className="red">-Puedes comunicarte con nuestro servicio al cliente a través de varios canales, como por teléfono, correo electrónico o chat en vivo. Todos nuestros detalles de contacto se encuentran en nuestra página web.</p>
						</div>
						<div>
							<p className='black'>¿Hay descuentos o promociones disponibles?</p>
							<p className="red">-Sí, ofrecemos descuentos y promociones periódicas en diversos productos. Te recomendamos visitar nuestra página web o suscribirte a nuestro boletín de noticias para mantenerte actualizado sobre nuestras ofertas.</p>
						</div>
						<div>
							<p className='black'>¿Cuál es la duración de los productos una vez abiertos?</p>
							<p className="red">-La duración de los productos de maquillaje una vez abiertos puede variar según el tipo de producto. Generalmente, recomendamos seguir las indicaciones del envase o consultar con nuestro personal para obtener información más precisa.</p>
						</div>
						<div>
							<p className='black'>¿Los productos son aptos para todo tipo de piel?</p>
							<p className="red">-Contamos con una amplia variedad de productos adecuados para diferentes tipos de piel. Nuestro personal capacitado puede ayudarte a elegir los productos más adecuados según tus necesidades y tipo de piel.</p>
						</div>
					</div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
		</div>

			<div className='start'>
				<h1 className='black'>Redes Sociales</h1>
				<div className='redes1'>

				 <a className='mr' href="https://www.facebook.com/beautyymx"><img className='pngFooter mr' src="images/facebook.png" alt="" /></a>
					<a className='mr' href="https://www.instagram.com/beautyymx/"><img className='pngFooter mr' src="images/instagram.png" alt="" /></a>
					<a className='mr' href="https://www.tiktok.com/@beautyymx"><img className='pngFooter ' src="images/tiktok.png" alt="" /></a>
			</div>
		</div>

		<div className='start'>
			<h1 className='black'>Metodos de Pago</h1>
			<div className='redes1'>
				<img className='pngFooter mr' src="images/tarjeta-de-credito.png" alt="" />
				<img className='pngFooter mr' src="images/dinero.png" alt="" />
			</div>
		</div>
		<h1 className='black final'>Copyright © 2024 Beautyy-Mx</h1>
	 </footer>
  );
}