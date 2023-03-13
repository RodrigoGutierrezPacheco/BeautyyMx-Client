import { RollerSkatingRounded, TimesOneMobiledata } from '@mui/icons-material';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
function GroupExample() {
	let rostro = [
		{
			nombre:"Base de Maquillaje",
			precio:199.00,
			detalle:"lorem ipsu",
			img:"images/jawbreaker.jpg",
			link:"/base-maquillaje"
		},
		{
			nombre:"CC & BB Creams",
			precio:199.00,
			detalle:"lorem ipsu.........................",
			img:"images/jawbreaker.jpg",
			link:"/creams"
		},
		{
			nombre:"Correctores",
			precio:199.00,
			detalle:"lorem ipsum...........................",
			img:"images/jawbreaker.jpg",
			link:"/correctores"
		},
		{
			nombre:"Primers para Rostro",
			precio:199.00,
			detalle:"lorem ipsu",
			img:"images/jawbreaker.jpg",
			link:"/primers-rostro"
		},
		{
			nombre:"Polvos y Sprays fijadores",
			precio:199.00,
			detalle:"lorem ipsu",
			img:"images/jawbreaker.jpg",
			link:"/polvos-sprays-fijadores"
		},
		{
			nombre:"Contorno y Bronzers",
			precio:199.00,
			detalle:"lorem ipsu",
			img:"images/jawbreaker.jpg",
			link:"/contorno-bronzers"
		},
		{
			nombre:"Iluminadores",
			precio:199.00,
			detalle:"lorem ipsu",
			img:"images/jawbreaker.jpg",
			link:"/iluminadores"
		},
		{
			nombre:"Paletas",
			precio:199.00,
			detalle:"lorem ipsu",
			img:"images/jawbreaker.jpg",
			link:"/paletas"
		},
	]

	const baseDeMaquillaje=[
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		
	]

	const ccBB=[
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
	]

  const correctores=[
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
	]
	
	const primersParaRostro=[
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
	]

	const polvosYSprays=[
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
	]

	const contornoYBronzers=[
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
	]

	const ilumiadores=[
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
	]

	const paletasParaOjos=[
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00",
		},
	]
  return (
		<div>
			<img className='portada' src="images/rostro.png" alt="" />
			<div className='boxVistaRapida'>
			<h1 className="title red mt">Base de Maquillaje</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{baseDeMaquillaje.map((lanzamiento)=>
				<Carousel.Item >
					<div className="boxProduct">
					 <img className="producto1" src="images/product1.jpg" alt="" />
					 <h1>{lanzamiento.marca}</h1>
					 <h3>NOMBRE DEL PRODUCTO</h3>
					 <h3 className="precio">$799.00MXN</h3>
					 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button>
					</div>
				</Carousel.Item>
       )}
     </Carousel>
		 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt" >Ver Todos Accesorios</motion.button>
		 </div>

		 <div className='boxVistaRapida'>
			<h1 className="title red mt">CC && BB Creams</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{ccBB.map((lanzamiento)=>
				<Carousel.Item >
					<div className="boxProduct">
					 <img className="producto1" src="images/product1.jpg" alt="" />
					 <h1>{lanzamiento.marca}</h1>
					 <h3>NOMBRE DEL PRODUCTO</h3>
					 <h3 className="precio">$799.00MXN</h3>
					 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button>
					</div>
				</Carousel.Item>
       )}
     </Carousel>
		 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt" >Ver Todos Accesorios</motion.button>
		 </div>

		 <div className='boxVistaRapida'>
			<h1 className="title red mt">Correctores</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{correctores.map((lanzamiento)=>
				<Carousel.Item >
					<div className="boxProduct">
					 <img className="producto1" src="images/product1.jpg" alt="" />
					 <h1>{lanzamiento.marca}</h1>
					 <h3>NOMBRE DEL PRODUCTO</h3>
					 <h3 className="precio">$799.00MXN</h3>
					 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button>
					</div>
				</Carousel.Item>
       )}
     </Carousel>
		 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt" >Ver Todos Accesorios</motion.button>
		 </div>

		 <div className='boxVistaRapida'>
			<h1 className="title red mt">Primers para Rostro</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{primersParaRostro.map((lanzamiento)=>
				<Carousel.Item >
					<div className="boxProduct">
					 <img className="producto1" src="images/product1.jpg" alt="" />
					 <h1>{lanzamiento.marca}</h1>
					 <h3>NOMBRE DEL PRODUCTO</h3>
					 <h3 className="precio">$799.00MXN</h3>
					 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button>
					</div>
				</Carousel.Item>
       )}
     </Carousel>
		 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt" >Ver Todos Accesorios</motion.button>
		 </div>

		 <div className='boxVistaRapida'>
			<h1 className="title red mt">Polvos y Sprays</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{polvosYSprays.map((lanzamiento)=>
				<Carousel.Item >
					<div className="boxProduct">
					 <img className="producto1" src="images/product1.jpg" alt="" />
					 <h1>{lanzamiento.marca}</h1>
					 <h3>NOMBRE DEL PRODUCTO</h3>
					 <h3 className="precio">$799.00MXN</h3>
					 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button>
					</div>
				</Carousel.Item>
       )}
     </Carousel>
		 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt" >Ver Todos Accesorios</motion.button>
		 </div>

		 <div className='boxVistaRapida'>
			<h1 className="title red mt">Contorno y Broncers</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{contornoYBronzers.map((lanzamiento)=>
				<Carousel.Item >
					<div className="boxProduct">
					 <img className="producto1" src="images/product1.jpg" alt="" />
					 <h1>{lanzamiento.marca}</h1>
					 <h3>NOMBRE DEL PRODUCTO</h3>
					 <h3 className="precio">$799.00MXN</h3>
					 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button>
					</div>
				</Carousel.Item>
       )}
     </Carousel>
		 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt" >Ver Todos Accesorios</motion.button>
		 </div>

		 <div className='boxVistaRapida'>
			<h1 className="title red mt">Iluminadores</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{ilumiadores.map((lanzamiento)=>
				<Carousel.Item >
					<div className="boxProduct">
					 <img className="producto1" src="images/product1.jpg" alt="" />
					 <h1>{lanzamiento.marca}</h1>
					 <h3>NOMBRE DEL PRODUCTO</h3>
					 <h3 className="precio">$799.00MXN</h3>
					 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button>
					</div>
				</Carousel.Item>
       )}
     </Carousel>
		 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt" >Ver Todos Accesorios</motion.button>
		 </div>

		 <div className='boxVistaRapida'>
			<h1 className="title red mt">Paletas para Ojos</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{paletasParaOjos.map((lanzamiento)=>
				<Carousel.Item >
					<div className="boxProduct">
					 <img className="producto1" src="images/product1.jpg" alt="" />
					 <h1>{lanzamiento.marca}</h1>
					 <h3>NOMBRE DEL PRODUCTO</h3>
					 <h3 className="precio">$799.00MXN</h3>
					 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button>
					</div>
				</Carousel.Item>
       )}
     </Carousel>
		 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt" >Ver Todos Accesorios</motion.button>
		 </div>
		</div>
  );
}

export default GroupExample;