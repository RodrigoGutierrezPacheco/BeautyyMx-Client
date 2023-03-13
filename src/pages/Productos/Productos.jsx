import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import './Producto.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { style } from '@mui/system';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Productos() {

	const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 const maquillaje = [
	{
		marca:"Marca 1",
		nombre:"Nombre 1",
		descripcion:"Descripcion 1",
		precio:"$100.00",
	},
	{
		marca:"Marca 2",
		nombre:"Nombre 1",
		descripcion:"Descripcion 1",
		precio:"$100.00",
		now : 20
	},
	{
		marca:"Marca 3",
		nombre:"Nombre 1",
		descripcion:"Descripcion 1",
		precio:"$100.00",
		now : 30
	},
	{
		marca:"Marca 4",
		nombre:"Nombre 1",
		descripcion:"Descripcion 1",
		precio:"$100.00",
		now : 40
	},
	{
		marca:"Marca 5",
		nombre:"Nombre 1",
		descripcion:"Descripcion 1",
		precio:"$100.00",
		now : 50
	},
 ]

 const cuidadoDeLaPiel = [
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

 const accesorios = [
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

 function maquillaje1(){
	window.location.href="/maquillaje"
 }

 function cuidadoDeLaPiel1(){
	window.location.href="/cuidado-de-la-piel"
 }

 function accesorios1(){
	window.location.href="/accesorios"
 }
 

  return (
		<div>
			<img className='portada' src="images/productos.png" alt="" />

		 <div className='boxVistaRapida'>
			<h1 className="title red">Maquillaje</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{maquillaje.map((lanzamiento)=>
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
		 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt" onClick={maquillaje1}>Ver Todo Maquillaje</motion.button>
		 </div>

		 <div className='boxVistaRapida'>
			<h1 className="title red mt">Cuidado de la Piel</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{maquillaje.map((lanzamiento)=>
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
		 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt" onClick={cuidadoDeLaPiel1} >Ver Todo Cudiado de la Piel</motion.button>
		 </div>

		 <div className='boxVistaRapida'>
			<h1 className="title red mt">Accesorios</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{maquillaje.map((lanzamiento)=>
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
		 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt" onClick={accesorios1}>Ver Todos Accesorios</motion.button>
		 </div>

		</div>
  );
}