import React from 'react'
import { RollerSkatingRounded, TimesOneMobiledata } from '@mui/icons-material';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';

const Paletas = () => {
	let paletas = [
		{
			nombre:"paleta 1",
			detalle:"lorem ipsum",
			img:"images/toofaced.jpg",
			link:"",
			precio:100.00,
		},
		{
			nombre:"paleta 1",
			detalle:"lorem ipsum",
			img:"images/toofaced.jpg",
			link:"",
			precio:100.00,
		},
		{
			nombre:"paleta 1",
			detalle:"lorem ipsum",
			img:"images/toofaced.jpg",
			link:"",
			precio:100.00,
		},
		{
			nombre:"paleta 1",
			detalle:"lorem ipsum",
			img:"images/toofaced.jpg",
			link:"",
			precio:100.00,
		},
		{
			nombre:"paleta 1",
			detalle:"lorem ipsum",
			img:"images/toofaced.jpg",
			link:"",
			precio:100.00,
		},
		{
			nombre:"paleta 1",
			detalle:"lorem ipsum",
			img:"images/toofaced.jpg",
			link:"",
			precio:100.00,
		},
		{
			nombre:"paleta 1",
			detalle:"lorem ipsum",
			img:"images/toofaced.jpg",
			link:"",
			precio:100.00,
		},
		{
			nombre:"paleta 1",
			detalle:"lorem ipsum",
			img:"images/toofaced.jpg",
			link:"",
			precio:100.00,
		},
		{
			nombre:"paleta 1",
			detalle:"lorem ipsum",
			img:"images/toofaced.jpg",
			link:"",
			precio:100.00,
		},
		{
			nombre:"paleta 1",
			detalle:"lorem ipsum",
			img:"images/toofaced.jpg",
			link:"",
			precio:100.00,
		},
		{
			nombre:"paleta 1",
			detalle:"lorem ipsum",
			img:"images/toofaced.jpg",
			link:"",
			precio:100.00,
		},
		{
			nombre:"paleta 1",
			detalle:"lorem ipsum",
			img:"images/toofaced.jpg",
			link:"",
			precio:100.00,
		},
	]
	return (
		<div>
			<h1>Paletas</h1>
			<div className='wrap'>
			{paletas.map((item)=>(
				<Card className='card-wrap'>
				<Card.Img variant="top" src={item.img} />
				<Card.Body>
					<Card.Title>{item.nombre}</Card.Title>
					<Card.Text>
					 {item.detalle}
					 <br />
					 <b>${item.precio}.00</b>
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

export default Paletas