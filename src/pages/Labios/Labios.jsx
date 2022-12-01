import React from 'react'
import { RollerSkatingRounded, TimesOneMobiledata } from '@mui/icons-material';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';

const Labios = () => {
	{/* <h1>Labios</h1>
	<ul>
	<li>Labial en barra</li>
	<li>Labial liquido</li>
	<li>Tinta de labios</li>
	<li>Glosses</li>
	<li>Delineador de labios</li>
	<li>Balzamos y tratamientos</li>
	<li></li>
	</ul> */}

	let labios = [
		{
			nombre:"Labial en barra",
			img:"images/rostro.jpg",
			detalle:"lorem ipsum",
			link:"/labial-barra"
		},
		{
			nombre:"Labial liquido",
			img:"images/rostro.jpg",
			detalle:"lorem ipsum",
			link:"/labial-liquido"
		},
		{
			nombre:"Tinta de Labios",
			img:"images/rostro.jpg",
			detalle:"lorem ipsum",
			link:"/tinta-labios"
		},
		{
			nombre:"Glosses",
			img:"images/rostro.jpg",
			detalle:"lorem ipsum",
			link:"/glosses"
		},
		{
			nombre:"Delineador de Labios",
			img:"images/rostro.jpg",
			detalle:"lorem ipsum",
			link:"/delineador-labios"
		},
		{
			nombre:"Balzamos y Tratamientos",
			img:"images/rostro.jpg",
			detalle:"lorem ipsum",
			link:"/balzamos-tratamientos"
		},
	]
	return (
		<div>
			<h1>Labios</h1>
			<div className='wrap'>
				{labios.map((item)=>(
					 <Card className='card-wrap'>
					 <Card.Img variant="top" src={item.img} />
					 <Card.Body>
						 <Card.Title>{item.nombre}</Card.Title>
						 <Card.Text>
							{item.detalle}
						 </Card.Text>
						 <div className='button-end'>
						 <Button href={item.link} className='button' variant='outline' style={{color:'black',backgroundColor:'pink',margin:'black',fontWeight:'500',}}>Ver Mas</Button>
						 </div>
					 </Card.Body>
				 </Card>
				))}
			</div>
		</div>
	)
}

export default Labios