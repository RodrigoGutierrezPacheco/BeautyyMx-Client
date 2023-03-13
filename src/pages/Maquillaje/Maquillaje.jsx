import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function Maquillaje() {


	const rostro=[
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

	const ojos =[
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

	const labios=[
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

	const mejillas=[
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

	const paletas=[
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

	const tamañoDeViaje=[
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

	const sets=[
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

	function rostro1(){
		window.location.href="/rostro"
	}

	function ojos1(){
		window.location.href="/ojos"
	}

	function labios1(){
		window.location.href="/labios"
	}

	function mejillas1(){
		window.location.href="/mejillas"
	}

	function paletas1(){
		window.location.href="/paletas"
	}

	function tamañoDeViaje1(){
		window.location.href="/tamaño-de-viaje"
	}

	function sets1(){
		window.location.href="/sets"
	}

  return (
		<div>
			<img className='portada' src="images/maquillajePortada.png" alt="" />
			
			<div className='boxVistaRapida'>
			<h1 className="title red mt">Rostro</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{rostro.map((lanzamiento)=>
				<Carousel.Item >
					<div className="boxProduct">
					 <img className="producto1" src="images/product1.jpg" alt="" />
					 <h1>{lanzamiento.marca}</h1>
					 <h3>NOMBRE DEL PRODUCTO</h3>
					 <h3 className="precio">$799.00MXN</h3>
					 {/* <h3>Codigo de producto: BT001</h3> */}
					 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button>
					</div>
				</Carousel.Item>
       )}
     </Carousel>
		 <motion.button onClick={rostro1} whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt">Ver Todos en Rostro</motion.button>
		 </div>

		 <div className='boxVistaRapida'>
			<h1 className="title red mt">Ojos</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{ojos.map((lanzamiento)=>
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
		 <motion.button onClick={ojos1} whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt" >Ver Todo en Ojos</motion.button>
		 </div>

		 <div className='boxVistaRapida'>
			<h1 className="title red mt">Labios</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{labios.map((lanzamiento)=>
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
		 <motion.button onClick={labios1} whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt" >Ver Todo en Labios</motion.button>
		 </div>
		 
		 <div className='boxVistaRapida'>
			<h1 className="title red mt">Mejillas</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{mejillas.map((lanzamiento)=>
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
		 <motion.button onClick={mejillas1} whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt" >Ver Todo en Mejillas</motion.button>
		 </div>

		 <div className='boxVistaRapida'>
			<h1 className="title red mt">Paletas</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{paletas.map((lanzamiento)=>
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
		 <motion.button onClick={paletas1} whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt" >Ver Todo en Paletas</motion.button>
		 </div>

		 <div className='boxVistaRapida'>
			<h1 className="title red mt">Tamaño de Viaje</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{tamañoDeViaje.map((lanzamiento)=>
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
		 <motion.button onClick={tamañoDeViaje1} whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt" >Ver Todo en Tamaño Viaje</motion.button>
		 </div>

		 <div className='boxVistaRapida'>
			<h1 className="title red mt">Sets</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{sets.map((lanzamiento)=>
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
		 <motion.button onClick={sets1} whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt" >Ver Todo en Sets</motion.button>
		 </div>
		</div>
  );
}