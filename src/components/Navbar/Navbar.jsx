import './Navbar.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CloseButton } from 'react-bootstrap';

function CollapsibleExample() {

	const [show, setShow] = useState(false);

  return (
		<nav className='flex nav'>
			<img onClick={()=>setShow(true)} className='menu' src="images/menu.png" alt="" />
			<Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100vh"
        aria-labelledby="example-custom-modal-styling-title"
				style={{width:"80vw"}}
				className="modal"
				>
						<div className='flex1'>
          <img  className='logoMenu' src="images/logoBeauty2.png" alt="" />
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