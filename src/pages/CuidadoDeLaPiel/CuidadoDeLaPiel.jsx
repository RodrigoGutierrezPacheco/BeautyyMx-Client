import React from 'react'
import { RollerSkatingRounded, TimesOneMobiledata } from '@mui/icons-material';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';

const CuidadoDeLaPiel = () => {
	{/* <h1>Cuidado de la piel</h1>
	<li>Hidratantes</li>
	<li>Limpiadores</li>
	<li>Protector solar</li>
	<li>Tratamientos</li>
	<li>Mascarillas</li>
	<li>Contorno de ojos</li> */}
	let cuidado = [
		{
			nombre:"Hidratantes",
			detalle:"Lorem Ipsum",
			img:"images/fouroscope.jpg",
			link:"/hidratantes"
		},
		{
			nombre:"Limpiadores",
			detalle:"Lorem Ipsum",
			img:"images/fouroscope.jpg",
			link:"/limpiadores"
		},

		{
			nombre:"Protector Solar",
			detalle:"Lorem Ipsum",
			img:"images/fouroscope.jpg",
			link:"/protector-solar"
		},
		{
			nombre:"Tratamientos",
			detalle:"Lorem Ipsum",
			img:"images/fouroscope.jpg",
			link:"/tratamientos"
		},
		{
			nombre:"Mascarillas",
			detalle:"Lorem Ipsum",
			img:"images/fouroscope.jpg",
			link:"/mascarillas"
		},
		{
			nombre:"Contorno de Ojos",
			detalle:"Lorem Ipsum",
			img:"images/fouroscope.jpg",
			link:"/contorno-ojos"
		},
	]
	return (
		<div>
			<h1>Cuidado de la Piel</h1>
			<div className='wrap'>
				{cuidado.map((item)=>(
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

export default CuidadoDeLaPiel