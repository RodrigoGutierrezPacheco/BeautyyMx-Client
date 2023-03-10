import { dark } from '@mui/material/styles/createPalette';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const Navbar2 = () => {
	return (
		<div className='navbar2'>
			<Carousel controls={false} indicators={false} variant="dark" interval={1500}>
				<Carousel.Item>
					<div className='flex2'>
					<h1 className='textNavbar2'>Lo Nuevo</h1>
					<h1 className='textNavbar2'>Lo mas Vendido</h1>
					<h1 className='textNavbar2'>Lo Nuevo</h1>
					</div>
				</Carousel.Item>
				<Carousel.Item>
				<div className='flex2'>
					<h1 className='textNavbar2'>Maquillaje</h1>
					<h1 className='textNavbar2'>Cuidado de la Piel</h1>
					<h1 className='textNavbar2'>Descuentos</h1>
					</div>
				</Carousel.Item>
				<Carousel.Item>
				<div className='flex2'>
					<h1 className='textNavbar2'>Labios</h1>
					<h1 className='textNavbar2'>Minis</h1>
					<h1 className='textNavbar2'>Ojos</h1>
					</div>
				</Carousel.Item>
				<Carousel.Item>
				<div className='flex2'>
					<h1 className='textNavbar2'>Paletas</h1>
					<h1 className='textNavbar2'>Rostro</h1>
					<h1 className='textNavbar2'>Todos los Productos</h1>
					</div>
				</Carousel.Item>
				<Carousel.Item>
				<div className='flex2'>
					<h1 className='textNavbar2'>Lo Nuevo</h1>
					<h1 className='textNavbar2'>Lo Nuevo</h1>
					<h1 className='textNavbar2'>Lo Nuevo</h1>
					</div>
				</Carousel.Item>
			</Carousel>
		</div>
	)
}

export default Navbar2