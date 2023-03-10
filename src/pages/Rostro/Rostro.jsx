import { RollerSkatingRounded, TimesOneMobiledata } from '@mui/icons-material';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';

function GroupExample() {
	let rostro = [
		{
			nombre:"Base de Maquillaje",
			precio:199.00,
			detalle:"lorem ipsu",
			img:"images/jawbreaker.jpg",
			link:"/base-maquillaje"
		},
		{
			nombre:"CC & BB Creams",
			precio:199.00,
			detalle:"lorem ipsu.........................",
			img:"images/jawbreaker.jpg",
			link:"/creams"
		},
		{
			nombre:"Correctores",
			precio:199.00,
			detalle:"lorem ipsum...........................",
			img:"images/jawbreaker.jpg",
			link:"/correctores"
		},
		{
			nombre:"Primers para Rostro",
			precio:199.00,
			detalle:"lorem ipsu",
			img:"images/jawbreaker.jpg",
			link:"/primers-rostro"
		},
		{
			nombre:"Polvos y Sprays fijadores",
			precio:199.00,
			detalle:"lorem ipsu",
			img:"images/jawbreaker.jpg",
			link:"/polvos-sprays-fijadores"
		},
		{
			nombre:"Contorno y Bronzers",
			precio:199.00,
			detalle:"lorem ipsu",
			img:"images/jawbreaker.jpg",
			link:"/contorno-bronzers"
		},
		{
			nombre:"Iluminadores",
			precio:199.00,
			detalle:"lorem ipsu",
			img:"images/jawbreaker.jpg",
			link:"/iluminadores"
		},
		{
			nombre:"Paletas",
			precio:199.00,
			detalle:"lorem ipsu",
			img:"images/jawbreaker.jpg",
			link:"/paletas"
		},
	]
  return (
		<div>
			<img className='rostroPortada' src="images/rostro.png" alt="" />
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
					 <Button href={item.link} className='button' variant='outline' style={{color:'black',backgroundColor:'pink',margin:'black',fontWeight:'500',}}>Ver Mas</Button>
					 </div>
				 </Card.Body>
			 </Card>
			))}
			</div>
		</div>
  );
}

export default GroupExample;