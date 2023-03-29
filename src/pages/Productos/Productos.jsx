import * as React from 'react';
import { useState,useEffect } from 'react';
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
import axios from 'axios';
import ReactPaginate from 'react-paginate';

export default function Productos() {
	const [data,setData] = useState([]);

	const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

	const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 16;
  const pagesVisited = pageNumber * productsPerPage;

	const pageCount = Math.ceil(data.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

	const displayProducts = data
	.slice(pagesVisited, pagesVisited + productsPerPage)
	.map(item => (
		<div className="boxProduct" key={item.codigo}>
			<img className="producto1" src="images/product1.jpg" alt="" />
			<p className='marca'>{item.marca}</p>
			<p className='descripcion'>Descripcion: <br />{item.descripcion}</p>
			<h3 className="precio">${item.precio}.00MXN</h3>
			<p>{item.codigo}</p>
			<motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1">Ver Producto</motion.button>
		</div>
	));



//  const maquillaje = [
// 	{
// 		marca:"Marca 1",
// 		nombre:"Nombre 1",
// 		descripcion:"Descripcion 1",
// 		precio:"$100.00",
// 	},
// 	{
// 		marca:"Marca 2",
// 		nombre:"Nombre 1",
// 		descripcion:"Descripcion 1",
// 		precio:"$100.00",
// 		now : 20
// 	},
// 	{
// 		marca:"Marca 3",
// 		nombre:"Nombre 1",
// 		descripcion:"Descripcion 1",
// 		precio:"$100.00",
// 		now : 30
// 	},
// 	{
// 		marca:"Marca 4",
// 		nombre:"Nombre 1",
// 		descripcion:"Descripcion 1",
// 		precio:"$100.00",
// 		now : 40
// 	},
// 	{
// 		marca:"Marca 5",
// 		nombre:"Nombre 1",
// 		descripcion:"Descripcion 1",
// 		precio:"$100.00",
// 		now : 50
// 	},
//  ]

//  const cuidadoDeLaPiel = [
// 	{
// 		marca:"Marca 1",
// 		nombre:"Nombre 1",
// 		descripcion:"Descripcion 1",
// 		precio:"$100.00"
// 	},
// 	{
// 		marca:"Marca 1",
// 		nombre:"Nombre 1",
// 		descripcion:"Descripcion 1",
// 		precio:"$100.00"
// 	},
// 	{
// 		marca:"Marca 1",
// 		nombre:"Nombre 1",
// 		descripcion:"Descripcion 1",
// 		precio:"$100.00"
// 	},
// 	{
// 		marca:"Marca 1",
// 		nombre:"Nombre 1",
// 		descripcion:"Descripcion 1",
// 		precio:"$100.00"
// 	},
// 	{
// 		marca:"Marca 1",
// 		nombre:"Nombre 1",
// 		descripcion:"Descripcion 1",
// 		precio:"$100.00"
// 	},
//  ]

//  const accesorios = [
// 	{
// 		marca:"Marca 1",
// 		nombre:"Nombre 1",
// 		descripcion:"Descripcion 1",
// 		precio:"$100.00"
// 	},
// 	{
// 		marca:"Marca 1",
// 		nombre:"Nombre 1",
// 		descripcion:"Descripcion 1",
// 		precio:"$100.00"
// 	},
// 	{
// 		marca:"Marca 1",
// 		nombre:"Nombre 1",
// 		descripcion:"Descripcion 1",
// 		precio:"$100.00"
// 	},
// 	{
// 		marca:"Marca 1",
// 		nombre:"Nombre 1",
// 		descripcion:"Descripcion 1",
// 		precio:"$100.00"
// 	},
// 	{
// 		marca:"Marca 1",
// 		nombre:"Nombre 1",
// 		descripcion:"Descripcion 1",
// 		precio:"$100.00"
// 	},
//  ]

 function maquillaje1(){
	window.location.href="/maquillaje"
 }

 function cuidadoDeLaPiel1(){
	window.location.href="/cuidado-de-la-piel"
 }

 function accesorios1(){
	window.location.href="/accesorios"
 }
 
 useEffect(()=>{
	axios.get('https://gist.githubusercontent.com/RodrigoGutierrezPacheco/6fdcbaee593f135f4d9a062bfeba3de7/raw/34c3117c7be90c9a01daf4ebb1c1dbf4cf1e4b90/beautyymx.json')
	.then(response => {
		setData(response.data)
		console.log(response.data)
	})
	.catch( error => {
		console.log(error)
	})
},[]);

  return (
		<div>
			<img className='portada' src="images/productos.png" alt="" />
		  <div className='boxVistaRapida'>
      {displayProducts}
			<ReactPaginate
       previousLabel={<img src="https://cdn-icons-png.flaticon.com/128/151/151846.png" alt="Siguiente" className='siguiente'/>}
			 nextLabel={<img src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="Siguiente" className='siguiente'/>}       
			 previousClassName={"boton-anterior"}
       nextClassName={"boton-siguiente"}
       onPageChange={changePage}
       pageCount={pageCount}
       containerClassName={"pagination"}
       subContainerClassName={"pages pagination"}
       activeClassName={"active"}
			 currentPageClassName={"paginaAcutal"}
			 pageRangeDisplayed={false}
       marginPagesDisplayed={false}			 
			 />

    </div>
		 {/* <div className='boxVistaRapida1'>
			<h1 className="title red">Maquillaje</h1>
			<Carousel interval={30000} indicators={false} variant="dark">
			{maquillaje.map((lanzamiento)=>
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
		 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt" onClick={maquillaje1}>Ver Todo en Maquillaje</motion.button>
		 </div> */}

		 {/* <div className='boxVistaRapida1'>
			<h1 className="title red mt">Cuidado de la Piel</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{maquillaje.map((lanzamiento)=>
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
		 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt" onClick={cuidadoDeLaPiel1} >Ver Todo Cudiado de la Piel</motion.button>
		 </div> */}

		 {/* <div className='boxVistaRapida1'>
			<h1 className="title red mt">Accesorios</h1>
			<Carousel interval={3000} indicators={false} variant="dark">
			{maquillaje.map((lanzamiento)=>
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
		 <motion.button whileTap={{scale:1.2}} whileHover={{scale:1.1}} className="button1 mt" onClick={accesorios1}>Ver Todo en Accesorios</motion.button>
		 </div> */}

		</div>
  );
}