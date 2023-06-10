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
		{/* <div className="mt">
		 <h1 className="title">LOS MEJORES PRODUCTOS AL MEJOR PRECIO</h1>
		 <motion.button onClick={productos} whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button mt">Ver todos</motion.button>
		</div> */}
		<div className="nosotros">
			<h1 className="title red width marginr marginl">Bienvenidos a Beautyymx, tu destino para el mejor maquillaje original en línea!</h1>
			<h3
			 className="width marginr marginl margint">En Beautyymx, nos enorgullece ofrecerte una amplia selección de productos de maquillaje auténtico y de alta calidad. Nuestro objetivo es brindarte una experiencia de compra excepcional, donde puedas encontrar los productos que realcen tu belleza y te hagan sentir segura y empoderada.</h3>
			<h3 className="width marginr marginl">Explora nuestra tienda en línea y descubre marcas reconocidas y populares, así como productos exclusivos que no encontrarás en ningún otro lugar. Trabajamos directamente con proveedores confiables para garantizar la autenticidad de todos nuestros productos.</h3>
			<h3 className="width marginr marginl">¡Gracias por visitar Beautyymx! Disfruta de tu experiencia de compra y encuentra los productos de maquillaje original que te harán lucir radiante.</h3>
			<motion.button onClick={puntosDeVenta} whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button mb">Puntos de Venta</motion.button>
		</div>
		<div className="lanzamientos">
			<h1 className="title">Recién Llegados</h1>
			<div className='boxVistaRapida1'>
			<Carousel interval={3000} indicators={false} variant="dark">
			{lanzamientos.map((lanzamiento)=>
				<Carousel.Item >
					<div className="boxProduct1">
					 <img className="producto1" src="images/product1.jpg" alt="" />
					 <h1>{lanzamiento.marca}</h1>
					 <h3>NOMBRE DEL PRODUCTO</h3>
					 <h3 className="precio">$799.00MXN</h3>
					 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button>
					</div>
				</Carousel.Item>
       )}
     </Carousel>
		 {/* <motion.button  whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt" >Ver Todo en Tamaño Viaje</motion.button> */}
		 </div>
		 {/* <div>
			<h1 className="title mt1">CATALOGO POR CATEGORÍAS</h1>
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
		 </div> */}
		</div>
		</div>
    
  );
}

export default HomePage;
