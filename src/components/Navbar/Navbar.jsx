import './Navbar.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { CloseButton } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

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

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
  return (
		<nav className='flex nav'>
			<img onClick={openModal} className='menu' src="images/menu.png" alt="" />
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
				<img onClick={closeModal} className='x' src="images/x.png" alt="" />
				<img onClick={home} className='logoMenu' src="images/logoBeauty2.png" alt="" />
        <div className='white textoModal'>
          <h1 className='textoModal'>Lo Nuevo</h1>
          <h1 className='textoModal'>Lo Mas Vendido</h1>
          <h1 className='textoModal'>Maquillaje</h1>
          <h1 className='textoModal'>Cuidado de la Piel</h1>
          <h1 className='textoModal'>Descuentos</h1>
          <h1 className='textoModal'>Labios</h1>
          <h1 className='textoModal'>Minis</h1>
          <h1 className='textoModal'>Ojos</h1>
          <h1 className='textoModal'>Paletas</h1>
          <h1 className='textoModal'>Rostro</h1>
          <h1 className='textoModal'>Todos los productos</h1>
          <h1 className='textoModal'>Puntos de Venta</h1>
        </div>
			</div>
      </Modal>
			<img className='logo' src="images/logoBeauty1.png" alt="" />
		</nav>
  );
}



export default CollapsibleExample;
