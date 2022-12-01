import React from 'react'
import { RollerSkatingRounded, TimesOneMobiledata } from '@mui/icons-material';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';

const Ojos = () => {
	{/* <h1>Ojos</h1>
	<ul>
		<li>Paletas de sombras</li>
		<li>Mascara de pestañas</li>
		<li>Delineador de ojos</li>
		<li>Cejas</li>
		<li>Sombras y glitter</li>
		<li>Primer de ojos</li>
		<li>Corrector</li>
		<li>Pestañas postizas</li>
	</ul> */}
	let ojos= [
		{
			nombre:"Paletas de Sombras",
			detalle: "lorem ipsum",
			img:"images/juvias.jpg",
			link:"/paletas-sombras",
		},
		{
			nombre:"Mascara de Pestañas",
			detalle: "lorem ipsum",
			img:"images/juvias.jpg",
			link:"/mascara-pestañas"
		},
		{
			nombre:"Delineador de Ojos",
			detalle: "lorem ipsum",
			img:"images/juvias.jpg",
			link:"/delineador-ojos"
		},
		{
			nombre:"Cejas",
			detalle: "lorem ipsum",
			img:"images/juvias.jpg",
			link:"/cejas"
		},
		{
			nombre:"Sombras y Glitters",
			detalle: "lorem ipsum",
			img:"images/juvias.jpg",
			link:"/sombras-glitters"
		},
		{
			nombre:"Primer de Ojos",
			detalle: "lorem ipsum",
			img:"images/juvias.jpg",
			link:"/primer-ojos"
		},
		{
			nombre:"Corrector",
			detalle: "lorem ipsum",
			img:"images/juvias.jpg",
			link:"/corrector"
		},
		{
			nombre:"Pestañas Postizas",
			detalle: "lorem ipsum",
			img:"images/juvias.jpg",
			link:"/pestañas-postizas"
		},
	]
	return (
		<div>
			<h1>Ojos</h1>
			<div className='wrap'>
			{ojos.map((item)=>(
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

export default Ojos