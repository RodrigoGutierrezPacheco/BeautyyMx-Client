import "./HomePage.css";
import Carousel from 'react-bootstrap/Carousel';
import { color, style } from "@mui/system";
import styleFunctionSx from "@mui/system/styleFunctionSx";
import { dark } from "@mui/material/styles/createPalette";
import { motion } from "framer-motion";

function HomePage() {
 
	const lanzamientos=[
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			precio:"$precio1.00MXN"
		},
		{
			marca:"Marca 2",
			nombre:"Nombre 2",
			precio:"$precio2.00MXN"
		},
		{
			marca:"Marca 3",
			nombre:"Nombre 3",
			precio:"$precio3.00MXN"
		},
		{
			marca:"Marca 4",
			nombre:"Nombre 4",
			precio:"$precio4.00MXN"
		}
]

 function productos(){
	window.location.href="/todos-los-productos"
 }

  return (
    <div>
	  <Carousel indicators={false} variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/inicio.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/productos.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/puntosVenta.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
		<div className="mt">
		 <h1 className="title">LOS MEJORES PRODUCTOS AL MEJOR PRECIO</h1>
		 <motion.button onClick={productos} whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button mt">!Conocelos¡</motion.button>
		</div>
		<div className="lanzamientos">
			<h1 className="title">Recien Llegados</h1>
			<Carousel interval={30000} indicators={false} variant="dark">
			{lanzamientos.map((lanzamiento)=>
				<Carousel.Item key={lanzamiento.nombre} >
					<div className="boxProduct1">
					<div className="boxProduct">
					 <img className="producto1" src="images/product1.jpg" alt="" />
					 <h1>{lanzamiento.marca}</h1>
					 <h3>{lanzamiento.nombre}</h3>
					 <h3 className="precio">$799.00MXN</h3>
					 {/* <h3>Codigo de producto: BT001</h3> */}
					 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button>
					</div>
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
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/productos.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/puntosVenta.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
		 </div>
		</div>

		<div className="nosotros mt1">
			<h1 className="title red">ACERCA DE NOSOTROS</h1>
			<h3 color="white">Somos una empresa dedicada a la venta de maquillaje 100% original, de alta calidar y de las mejores marcas. Contamos con envio a todas las partes de Mexico. Con distintos puntos de venta dentro de Cuernavaca, Morelos. Podemos enviar todo lo que tu quieras.</h3>
			<motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button mb">Puntos de Venta</motion.button>
		</div>

	
		</div>
    
  );
}

export default HomePage;
