import React from 'react'
import { RollerSkatingRounded, TimesOneMobiledata } from '@mui/icons-material';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';


const Ojos = () => {

	let paletasDeSombra=[
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

	let mascaraDePestañas=[
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

	let delineadorDeOjos=[
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

	let cejas=[
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

	let sombrasYGlitters=[
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

	let primerDeOjos=[
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

	let corrector=[
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

	let pestañasPostizas=[
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
			<img src="images/ojosPortada.png" alt="" className="portada" />

			<div className='boxVistaRapida'>
			<h1 className="title red mt">Paleta de Sombras</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{paletasDeSombra.map((lanzamiento)=>
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
			<h1 className="title red mt">Mascara de Pestañas</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{mascaraDePestañas.map((lanzamiento)=>
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
			<h1 className="title red mt">Delineador de Ojos</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{delineadorDeOjos.map((lanzamiento)=>
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
			<h1 className="title red mt">Cejas</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{cejas.map((lanzamiento)=>
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
			<h1 className="title red mt">Sombras y Glitters</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{sombrasYGlitters.map((lanzamiento)=>
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
			<h1 className="title red mt">Primer de OJos</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{primerDeOjos.map((lanzamiento)=>
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
			<h1 className="title red mt">Corrector</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{corrector.map((lanzamiento)=>
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
			<h1 className="title red mt">Pestañas Postizas</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{pestañasPostizas.map((lanzamiento)=>
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

export default Ojos