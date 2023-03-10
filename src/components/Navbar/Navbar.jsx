import './Navbar.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { CloseButton } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

function CollapsibleExample() {

	const customStyles = {
		content: {
		backgroundColor: "#C92C39",
		color:"white",
		fontSize:"100",
		width:"60vw",
		marginLeft:"10%",
		border:"5px solid black",
		transform: 'translate(-0%, -0%)',
		},
	};

	let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);	
  }

	function home(){
		window.location.href="/"
	}

	function closeModal(){
		setIsOpen(false);
	}

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
	function rosto(){
		window.location.href="/rostro"
	}
	function todosLosProductos(){
		window.location.href="/todos-los-productos"
	}
	function puntosDeVenta(){
		window.location.href="/puntos-de-venta"
	}

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
  return (
		<nav className='flex nav'>
			<motion.img animate={{duration:2}} whileTap={{scale:2}} onClick={openModal} className='menu' src="images/menu.png" alt="" />
		<motion.div>
			<Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example"
				overlayClassName="overlayModal"
				overFlow="hidden"
				>
      <div className='flex1'>
				 <motion.img whileHover={{scale:1.1}} onClick={closeModal} className='x' src="images/x.png" alt="" />
				<div className='start1'>
				 <motion.img whileHover={{scale:1.1}} onClick={home} className='logoMenu' src="images/logoBeauty2.png" alt="" />
				</div>
        <div className='white textoModal'>
				<div start1>
          <h1 onClick={loNuevo} className='textoModal'>Lo Nuevo</h1>
          <h1 onClick={loMasVendido} className='textoModal'>Lo Mas Vendido</h1>
          <h1 onClick={maquillaje} className='textoModal'>Maquillaje</h1>
          <h1 onClick={cuidadoParaLaPiel} className='textoModal'>Cuidado de la Piel</h1>
          <h1 onClick={descuentos} className='textoModal'>Descuentos</h1>
          <h1 onClick={labios} className='textoModal'>Labios</h1>
          <h1 onClick={minis} className='textoModal'>Minis</h1>
          <h1 onClick={ojos} className='textoModal'>Ojos</h1>
          <h1 onClick={paletas} className='textoModal'>Paletas</h1>
          <h1 onClick={rosto} className='textoModal'>Rostro</h1>
          <h1 onClick={todosLosProductos} className='textoModal'>Todos los productos</h1>
          <h1 onClick={puntosDeVenta} className='textoModal'>Puntos de Venta</h1>
				</div>
        </div>
			</div>
      </Modal>
		</motion.div>
			<img className='logo' src="images/logoBeauty1.png" alt="" />
		</nav>
  );
}



export default CollapsibleExample;
