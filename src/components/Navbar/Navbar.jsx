import './Navbar.css'
import '../../pages/HomePage/HomePage.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { CloseButton } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import ReactDOM from 'react-dom';
import { Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'animate.css';
import { slide as Menu } from 'react-burger-menu'

function CollapsibleExample() {

	let subtitle;
	const [modalIsOpen, setIsOpen] = React.useState(false);


	function openModal() {
		setIsOpen(true);
	}

	function openMenu() {
		setIsOpen(true);
		const modal = document.querySelector('.modal');
		modal.classList.add("animate__animated", "animate__backInDown")
	}

	function home() {
		window.location.href = "/"
	}

	function closeModal() {
		setIsOpen(false);
	}

	function loNuevo() {
		window.location.href = "/lo-nuevo"
	}
	function loMasVendido() {
		window.location.href = "/lo-mas-vendido"
	}
	function maquillaje() {
		window.location.href = "/maquillaje"
	}
	function cuidadoParaLaPiel() {
		window.location.href = "/cuidado-para-la-piel"
	}
	function descuentos() {
		window.location.href = "/descuentos"
	}
	function labios() {
		window.location.href = "/labios"
	}
	function minis() {
		window.location.href = "/minis"
	}
	function ojos() {
		window.location.href = "/ojos"
	}
	function paletas() {
		window.location.href = "/paletas"
	}
	function rostro() {
		window.location.href = "/rostro"
	}
	function todosLosProductos() {
		window.location.href = "/todos-los-productos"
	}
	function puntosDeVenta() {
		window.location.href = "/puntos-de-venta"
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = '#f00';
	}
	return (
		<nav className='flex nav celular'>
			<motion.img whileTap={{ scale: 1.2 }} whileHover={{ scale: 1.1 }} onClick={openModal} className='celular menu animate__animated animate__bounce' src="images/menu.png" alt="" />
			<motion.div className='animate__animated animate__slideInLeft'>
				<div className='animate__animated animate__backInLeft'>
					<Modal show={modalIsOpen} className='animate__animated animate__backInLeft'>
						<div className='flex1'>
							<motion.img whileHover={{ scale: 1.1 }} onClick={closeModal} className='x' src="images/x.png" alt="" />
							<div className='start1'>
								<motion.img whileHover={{ scale: 1.1 }} onClick={home} className='logoMenu' src="images/logoBeauty1.png" alt="" />
							</div>
							<div className='flex w-[100%] ml-2'>
								<div start1>
									{/* <motion.h1 whileHover={{scale:1.1}} whileTap={{scale:1.2}} onClick={loNuevo} className='textoModal'>Lo Nuevo</motion.h1>
					<motion.h1 whileHover={{scale:1.1}} whileTap={{scale:1.2}} onClick={loMasVendido} className='textoModal'>Lo mas Vendido</motion.h1>
					<motion.h1 whileHover={{scale:1.1}} whileTap={{scale:1.2}} onClick={maquillaje} className='textoModal'>Maquillaje</motion.h1>
					<motion.h1 whileHover={{scale:1.1}} whileTap={{scale:1.2}} onClick={cuidadoParaLaPiel} className='textoModal'>Cuidado de la Piel</motion.h1>
					<motion.h1 whileHover={{scale:1.1}} whileTap={{scale:1.2}} onClick={descuentos} className='textoModal'>Descuentos</motion.h1>
					<motion.h1 whileHover={{scale:1.1}} whileTap={{scale:1.2}} onClick={labios} className='textoModal'>Labios</motion.h1>
					<motion.h1 whileHover={{scale:1.1}} whileTap={{scale:1.2}} onClick={minis} className='textoModal'>Minis</motion.h1>
					<motion.h1 whileHover={{scale:1.1}} whileTap={{scale:1.2}} onClick={ojos} className='textoModal'>Ojos</motion.h1>
					<motion.h1 whileHover={{scale:1.1}} whileTap={{scale:1.2}} onClick={paletas} className='textoModal'>Paletas</motion.h1>
					<motion.h1 whileHover={{scale:1.1}} whileTap={{scale:1.2}} onClick={rostro} className='textoModal'>Rostro</motion.h1> */}
									<h1 onClick={home} className='textoModal red'>Inicio</h1>
									<hr className='hr w-full' />
									<h1 onClick={todosLosProductos} className='textoModal red'>Todos los Productos</h1>
									<hr className='hr' />
									<h1 onClick={puntosDeVenta} className='textoModal red'>Puntos de Venta</h1>
									<hr className='hr' />
									{/* <h1 onClick={puntosDeVenta} className='textoModal red'>Redes</h1>
									<hr className='hr' /> */}
									{/* <motion.h1 whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }} onClick={puntosDeVenta} className='textoModal red'>Preguntas frecuentes</motion.h1>
									<hr className='hr' /> */}
								</div>
							</div>
						</div>
					</Modal>
				</div>
			</motion.div>
			<motion.img onClick={home} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }} className='logo celular' src="images/logoBeauty1.png" alt="" />
		</nav>
	);
}



export default CollapsibleExample;
