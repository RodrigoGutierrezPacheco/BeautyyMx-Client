import React from 'react'
import { RollerSkatingRounded, TimesOneMobiledata } from '@mui/icons-material';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
const Labios = () => {

	let labialEnBarra=[
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
	]

	let labialLiquido=[
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
	]

	let tintaDeLabios=[
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
	]

	let glosses=[
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
	]

	let delineadorDeLabios=[
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
	]

	let balzamosYTratamientos=[
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
		{
			marca:"Marca 1",
			nombre:"Nombre 1",
			descripcion:"Descripcion 1",
			precio:"$100.00"
		},
	]
	return (
		<div>
		<img src="images/labiosPortada.png" alt="" className="portada" />

		<div className='boxVistaRapida'>
			<h1 className="title red mt">Labial en Barra</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{labialEnBarra.map((lanzamiento)=>
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
		 <motion.button  whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt">Ver Todos en Rostro</motion.button>
		 </div>

		 <div className='boxVistaRapida'>
			<h1 className="title red mt">Labial en Liquido</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{labialLiquido.map((lanzamiento)=>
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
		 <motion.button  whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt">Ver Todos en Rostro</motion.button>
		 </div>

		 <div className='boxVistaRapida'>
			<h1 className="title red mt">Tinta de Labios</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{tintaDeLabios.map((lanzamiento)=>
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
		 <motion.button  whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt">Ver Todos en Rostro</motion.button>
		 </div>

		 <div className='boxVistaRapida'>
			<h1 className="title red mt">Glosses</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{glosses.map((lanzamiento)=>
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
		 <motion.button  whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt">Ver Todos en Rostro</motion.button>
		 </div>

		 <div className='boxVistaRapida'>
			<h1 className="title red mt">Delineador de Labios</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{delineadorDeLabios.map((lanzamiento)=>
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
		 <motion.button  whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt">Ver Todos en Rostro</motion.button>
		 </div>

		 <div className='boxVistaRapida'>
			<h1 className="title red mt">Balzamos y Tratamientos</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{balzamosYTratamientos.map((lanzamiento)=>
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
		 <motion.button  whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt">Ver Todos en Rostro</motion.button>
		 </div>
		</div>
	)
}

export default Labios