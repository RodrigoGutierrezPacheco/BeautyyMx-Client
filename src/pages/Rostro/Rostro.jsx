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
			
			<div className='pink'>
			<h1 className="title red mt">Base de Maquillaje</h1>
			<div className='boxVistaRapida'>
			{baseDeMaquillaje.map((lanzamiento)=>
					<div className="boxProduct">
					 <img className="producto1" src="images/product1.jpg" alt="" />
					 <h1>{lanzamiento.marca}</h1>
					 <h3>NOMBRE DEL PRODUCTO</h3>
					 <h3 className="precio">$799.00MXN</h3>
					 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button>
					</div>
       )}
		 </div>
			 </div>

			<h1 className="title red mt">CC && BB Creams</h1>
		 <div className='boxVistaRapida'>
			{ccBB.map((lanzamiento)=>
					<div className="boxProduct">
					 <img className="producto1" src="images/product1.jpg" alt="" />
					 <h1>{lanzamiento.marca}</h1>
					 <h3>NOMBRE DEL PRODUCTO</h3>
					 <h3 className="precio">$799.00MXN</h3>
					 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button>
					</div>
       )}
		 </div>

      <div className="pink">

			<h1 className="title red mt">Correctores</h1>
		 <div className='boxVistaRapida'>
			{correctores.map((lanzamiento)=>
					<div className="boxProduct">
					 <img className="producto1" src="images/product1.jpg" alt="" />
					 <h1>{lanzamiento.marca}</h1>
					 <h3>NOMBRE DEL PRODUCTO</h3>
					 <h3 className="precio">$799.00MXN</h3>
					 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button>
					</div>
       )}
		 </div>
			 </div>

			<h1 className="title red mt">Primers para Rostro</h1>
		 <div className='boxVistaRapida'>
			{primersParaRostro.map((lanzamiento)=>
					<div className="boxProduct">
					 <img className="producto1" src="images/product1.jpg" alt="" />
					 <h1>{lanzamiento.marca}</h1>
					 <h3>NOMBRE DEL PRODUCTO</h3>
					 <h3 className="precio">$799.00MXN</h3>
					 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button>
					</div>
       )}
		 </div>

    <div className="pink">
			<h1 className="title red mt">Polvos y Sprays</h1>
		 <div className='boxVistaRapida'>
			{polvosYSprays.map((lanzamiento)=>
					<div className="boxProduct">
					 <img className="producto1" src="images/product1.jpg" alt="" />
					 <h1>{lanzamiento.marca}</h1>
					 <h3>NOMBRE DEL PRODUCTO</h3>
					 <h3 className="precio">$799.00MXN</h3>
					 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button>
					</div>
       )}
		 </div>
			 </div>

			<h1 className="title red mt">Contorno y Broncers</h1>
		 <div className='boxVistaRapida'>
			{contornoYBronzers.map((lanzamiento)=>
					<div className="boxProduct">
					 <img className="producto1" src="images/product1.jpg" alt="" />
					 <h1>{lanzamiento.marca}</h1>
					 <h3>NOMBRE DEL PRODUCTO</h3>
					 <h3 className="precio">$799.00MXN</h3>
					 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button>
					</div>
       )}
		 </div>

    <div className="pink">
			<h1 className="title red mt">Iluminadores</h1>
		 <div className='boxVistaRapida'>
			{ilumiadores.map((lanzamiento)=>
					<div className="boxProduct">
					 <img className="producto1" src="images/product1.jpg" alt="" />
					 <h1>{lanzamiento.marca}</h1>
					 <h3>NOMBRE DEL PRODUCTO</h3>
					 <h3 className="precio">$799.00MXN</h3>
					 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button>
					</div>
       )}
		 </div>
			 </div>

			<h1 className="title red mt">Paletas para Ojos</h1>
		 <div className='boxVistaRapida'>
			{paletasParaOjos.map((lanzamiento)=>
					<div className="boxProduct">
					 <img className="producto1" src="images/product1.jpg" alt="" />
					 <h1>{lanzamiento.marca}</h1>
					 <h3>NOMBRE DEL PRODUCTO</h3>
					 <h3 className="precio">$799.00MXN</h3>
					 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button>
					</div>
       )}
		 </div>
		</div>
  );
}

export default GroupExample;