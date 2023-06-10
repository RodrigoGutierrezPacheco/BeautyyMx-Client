import "./HomePage.css";
import Carousel from 'react-bootstrap/Carousel';
import { color, style } from "@mui/system";
import styleFunctionSx from "@mui/system/styleFunctionSx";
import { dark } from "@mui/material/styles/createPalette";
import { motion } from "framer-motion";

function HomePage() {
 

 function productos(){
	window.location.href="/todos-los-productos"
 }

 function puntosDeVenta(){
	window.location.href="/puntos-de-venta"
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
				<div className="">
					<motion.button whileTap={{scale:1.1}} className="button ">Inicio</motion.button>
				</div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/productos.png"
          alt="Second slide"
        />
				<div className="">
					<motion.button whileTap={{scale:1.1}} onClick={productos} className="button ">Productos</motion.button>
				</div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/puntosVenta.png"
          alt="Third slide"
        />
				<div className="">
					<motion.button whileTap={{scale:1.1}} onClick={puntosDeVenta} className="button">Puntos de Venta</motion.button>
				</div>
      </Carousel.Item>
    </Carousel>
		<div className="nosotros">
			<h1 className="title red width marginr marginl">Bienvenidos a Beautyymx, tu destino para el mejor maquillaje original en línea!</h1>
			<h3 className="bienvenida marginr marginl margint">En Beautyymx, nos enorgullece ofrecerte una amplia selección de productos de maquillaje auténtico y de alta calidad. Nuestro objetivo es brindarte una experiencia de compra excepcional, donde puedas encontrar los productos que realcen tu belleza y te hagan sentir segura y empoderada.
			<br className="marginb" />
			<br />
			Explora nuestra tienda en línea y descubre marcas reconocidas y populares, así como productos exclusivos que no encontrarás en ningún otro lugar. Trabajamos directamente con proveedores confiables para garantizar la autenticidad de todos nuestros productos.
			<br />
			<br />
			¡Gracias por visitar Beautyymx! Disfruta de tu experiencia de compra y encuentra los productos de maquillaje original que te harán lucir radiante.</h3>
			<motion.button onClick={puntosDeVenta} whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button mb">Puntos de Venta</motion.button>
		</div>
		<div className="lanzamientos">
			<h1 className="title">Las Mejores Marcas</h1>
			<div className='boxVistaRapida1'>
			<Carousel interval={3000} indicators={false} variant="dark">
				<Carousel.Item >
					<div className="boxProduct1">
					 <img className="marca" src="images/marca1.png" alt="" />
					 {/* <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button> */}
					</div>
				</Carousel.Item>
				<Carousel.Item >
					<div className="boxProduct1">
					 <img className="marca" src="images/marca2.png" alt="" />
					 {/* <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button> */}
					</div>
				</Carousel.Item>
				<Carousel.Item >
					<div className="boxProduct1">
					 <img className="marca" src="images/marca3.png" alt="" />
					 {/* <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button> */}
					</div>
				</Carousel.Item>
     </Carousel>
		 {/* <motion.button  whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt" >Ver Todo en Tamaño Viaje</motion.button> */}
		 </div>
		</div>
		</div>
    
  );
}

export default HomePage;
