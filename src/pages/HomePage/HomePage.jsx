import "./HomePage.css";
import Carousel from 'react-bootstrap/Carousel';
import { color, style } from "@mui/system";
import styleFunctionSx from "@mui/system/styleFunctionSx";
import { dark } from "@mui/material/styles/createPalette";

function HomePage() {
 
	const lanzamientos=[
		{
			marca:"Marca1",
			nombre:"Nombre 1",
			precio:"$100.00"
		},
		{
			marca:"Marca2",
			nombre:"Nombre 3",
			precio:"$100.00"
		},
		{
			marca:"Marca3",
			nombre:"Nombre 3",
			precio:"$100.00"
		},
		{
			marca:"Marca3",
			nombre:"Nombre 3",
			precio:"$100.00"
		},
		{
			marca:"Marca3",
			nombre:"Nombre 3",
			precio:"$100.00"
		},
		{
			marca:"Marca3",
			nombre:"Nombre 3",
			precio:"$100.00"
		},
		{
			marca:"Marca3",
			nombre:"Nombre 3",
			precio:"$100.00"
		}
]

console.log(lanzamientos)

  return (
    <div>
	  <Carousel indicators={false} variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/inicio.png"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/productos.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/puntosVenta.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
		<div className="mt">
		 <h1 className="title">LOS MEJORES PRODUCTOS AL MEJOR PRECIO</h1>
		 <button className="button mt">!Conocelos¡</button>
		</div>
		<div className="lanzamientos">
			<h1 className="title">Recien Llegados</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{lanzamientos.map((lanzamiento)=>
				<Carousel.Item >
					<div className="boxProduct">
					 <img className="producto1" src="images/product1.jpg" alt="" />
					 <h1>{lanzamiento.marca}</h1>
					 <h3>NOMBRE DEL PRODUCTO</h3>
					 <h3 className="precio">$799.00MXN</h3>
					 {/* <h3>Codigo de producto: BT001</h3> */}
					 <button className="button1">Ver Producto</button>
					</div>
				</Carousel.Item>
       )}
     </Carousel>
		 <div>
			<h1 className="title mt1">CATALOGO POR CATEGORIAS</h1>
			<Carousel indicators={false} variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/inicio.png"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/productos.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/puntosVenta.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
		 </div>
		</div>

		<div className="nosotros mt1">
			<h1 className="title red">ACERCA DE NOSOTROS</h1>
			<h3 color="white">SOMOS UNA EMPRESA DEDICADA A LA VENTA DE MAQUILLAJE 100% ORIGINA, DE ALTA CALIDAD Y DE LAS MEJORES MARCAS. CONTAMOS CON ENVIO A TODAS LAS PARTES DE MEXICO. CON DISTINTOS PUNTOS DE VENTA EN CUERNAVACA MORELOS PODEMOS ENVIAR TODO A DONDE TU QUIERAS ETC ETC.</h3>
			<button className="button mb">PUNTOS DE VENTA</button>
		</div>

		<div className="wrap mt1">
			<div className="box ml">
				<img className="logoFooter" src="images/envio.png" alt="" />
				<h1 className="textoFooter">ENVIO GRATIS EN LA COMPRA DE $2000.00MXN</h1>
			</div>
			<div className="box">
				<img className="logoFooter" src="images/ubicacion.png" alt="" />
				<h1 className="textoFooter">UBICANOS EN NUESTROS DISTINTOS PUNTOS DE VENTA</h1>
			</div>
			<div className="box ml">
				<img className="logoFooter" src="images/pago.png" alt="" />
				<h1 className="textoFooter">ACEPTAMOS DIFERENTES METODOS DE PAGO</h1>
			</div>
			<div className="box">
				<img className="logoFooter" src="images/maquillaje.png" alt="" />
				<h1 className="textoFooter">APARTA TUS PRODUCTOS FAVORITOS</h1>
			</div>
		</div>
		</div>
    
  );
}

export default HomePage;
