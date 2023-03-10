import { dark } from '@mui/material/styles/createPalette';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { motion } from 'framer-motion';


const Navbar2 = () => {

	function loNuevo(){
		window.location.href="/lo-nuevo"
	}
	function loMasVendido(){
		window.location.href="/lo-mas-vendido"
	}
	function maquillaje(){
		window.location.href="/maquillaje"
	}
	function cuidadoParaLaPiel(){
		window.location.href="/cuidado-para-la-piel"
	}
	function descuentos(){
		window.location.href="/descuentos"
	}
	function labios(){
		window.location.href="/labios"
	}
	function minis(){
		window.location.href="/minis"
	}
	function ojos(){
		window.location.href="/ojos"
	}
	function paletas(){
		window.location.href="/paletas"
	}
	function rostro(){
		window.location.href="/rostro"
	}
	function todosLosProductos(){
		window.location.href="/todos-los-productos"
	}
	function puntosDeVenta(){
		window.location.href="/puntos-de-venta"
	}

	return (
		<div className='navbar2'>
			<Carousel controls={false} indicators={false} variant="dark" interval={1500}>
				<Carousel.Item>
					<div className='flex2'>
					<motion.h1 whileHover={{scale:1.1}} whileTap={{scale:1.2}} onClick={loNuevo} className='textoModal'>Lo Nuevo</motion.h1>
					<motion.h1 whileHover={{scale:1.1}} whileTap={{scale:1.2}} onClick={loMasVendido} className='textoModal'>Lo mas Vendido</motion.h1>
					<motion.h1 whileHover={{scale:1.1}} whileTap={{scale:1.2}} onClick={maquillaje} className='textoModal'>Maquillaje</motion.h1>
					</div>
				</Carousel.Item>
				<Carousel.Item>
				<div className='flex2'>
				<motion.h1 whileHover={{scale:1.1}} whileTap={{scale:1.2}} onClick={cuidadoParaLaPiel} className='textoModal'>Cuidado de la Piel</motion.h1>
					<motion.h1 whileHover={{scale:1.1}} whileTap={{scale:1.2}} onClick={descuentos} className='textoModal'>Descuentos</motion.h1>
					<motion.h1 whileHover={{scale:1.1}} whileTap={{scale:1.2}} onClick={labios} className='textoModal'>Labios</motion.h1>
					</div>
				</Carousel.Item>
				<Carousel.Item>
				<div className='flex2'>
				<motion.h1 whileHover={{scale:1.1}} whileTap={{scale:1.2}} onClick={minis} className='textoModal'>Minis</motion.h1>
					<motion.h1 whileHover={{scale:1.1}} whileTap={{scale:1.2}} onClick={ojos} className='textoModal'>Ojos</motion.h1>
					<motion.h1 whileHover={{scale:1.1}} whileTap={{scale:1.2}} onClick={paletas} className='textoModal'>Paletas</motion.h1>
					</div>
				</Carousel.Item>
				<Carousel.Item>
				<div className='flex2'>
				<motion.h1 whileHover={{scale:1.1}} whileTap={{scale:1.2}} onClick={rostro} className='textoModal'>Rostro</motion.h1>
					<motion.h1 whileHover={{scale:1.1}} whileTap={{scale:1.2}} onClick={todosLosProductos} className='textoModal'>Todos los Productos</motion.h1>
					<motion.h1 whileHover={{scale:1.1}} whileTap={{scale:1.2}} onClick={puntosDeVenta} className='textoModal'>Puntos de Venta</motion.h1>
					</div>
				</Carousel.Item>
			</Carousel>
		</div>
	)
}

export default Navbar2