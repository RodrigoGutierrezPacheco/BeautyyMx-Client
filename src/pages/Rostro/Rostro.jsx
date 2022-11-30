import { RollerSkatingRounded, TimesOneMobiledata } from '@mui/icons-material';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';

function GroupExample() {
	// <h1>Rostro</h1>
	// <ul>
	// 	<li>Base de maquillaje</li>
	// 	<li>CC & BB creams</li>
	// 	<li>Correctores</li>
	// 	<li>Primers para rostro</li>
	// 	<li>Polvos y sprays fijadores</li>
	// 	<li>Contorno y broncer</li>
	// 	<li>Iluminadores</li>
	// 	<li>Paletas</li>
	// </ul>
	let rostro = [
		{
			nombre:"Base de Maquillaje",
			precio:199.00,
			detalle:"lorem ipsu",
			img:"images/jawbreaker.jpg"
		},
		{
			nombre:"CC & BB Creams",
			precio:199.00,
			detalle:"lorem ipsu",
			img:"images/jawbreaker.jpg"
		},
		{
			nombre:"Correctores",
			precio:199.00,
			detalle:"lorem ipsum eprmee{okmvtrñkm}  .",
			img:"images/jawbreaker.jpg"
		},
		{
			nombre:"Primers para Rostro",
			precio:199.00,
			detalle:"lorem ipsu",
			img:"images/jawbreaker.jpg"
		},
		{
			nombre:"Polvos y Sprays fijadores",
			precio:199.00,
			detalle:"lorem ipsu",
			img:"images/jawbreaker.jpg"
		},
		{
			nombre:"Contorno y Bronzers",
			precio:199.00,
			detalle:"lorem ipsu",
			img:"images/jawbreaker.jpg"
		},
		{
			nombre:"Iluminadores",
			precio:199.00,
			detalle:"lorem ipsu",
			img:"images/jawbreaker.jpg"
		},
		{
			nombre:"Iluminadores",
			precio:199.00,
			detalle:"lorem ipsu",
			img:"images/jawbreaker.jpg"
		},
		{
			nombre:"Paletas",
			precio:199.00,
			detalle:"lorem ipsu",
			img:"images/jawbreaker.jpg"
		},
	]
  return (
		<div>
			<h1>Rostro</h1>
			<div className='wrap'>
			{rostro.map((item)=>(
				 <Card className='card-wrap'>
				 <Card.Img variant="top" src={item.img} />
				 <Card.Body>
					 <Card.Title>{item.nombre}</Card.Title>
					 <Card.Text>
						{item.detalle}
					 </Card.Text>
					 <div className='button-end'>
					 <Button className='button' variant='outline' style={{color:'black',backgroundColor:'pink',margin:'black',fontWeight:'500',}}>Ver Mas</Button>
					 </div>
				 </Card.Body>
			 </Card>
			))}
			</div>
		</div>
  );
}

export default GroupExample;