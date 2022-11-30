import { RollerSkatingRounded, TimesOneMobiledata } from '@mui/icons-material';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

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
			detalle:"lorem ipsu"
		},
		{
			nombre:"CC & BB Creams",
			precio:199.00,
			detalle:"lorem ipsu"
		},
		{
			nombre:"Correctores",
			precio:199.00,
			detalle:"lorem ipsu"
		},
		{
			nombre:"Primers para Rostro",
			precio:199.00,
			detalle:"lorem ipsu"
		},
		{
			nombre:"Polvos y Sprays fijadores",
			precio:199.00,
			detalle:"lorem ipsu"
		},
		{
			nombre:"Contorno y Bronzers",
			precio:199.00,
			detalle:"lorem ipsu"
		},
		{
			nombre:"Iluminadores",
			precio:199.00,
			detalle:"lorem ipsu"
		},
		{
			nombre:"Iluminadores",
			precio:199.00,
			detalle:"lorem ipsu"
		},
		{
			nombre:"Paletas",
			precio:199.00,
			detalle:"lorem ipsu"
		},
	]
  return (
		<div>
			<h1>Rostro</h1>
			{rostro.map((item)=>(
				 <CardGroup>
				 <Card>
					 <Card.Img variant="top" src="" />
					 <Card.Body>
						 <Card.Title>{item.nombre}</Card.Title>
						 <Card.Text>
							 This is a wider card with supporting text below as a natural lead-in
							 to additional content. This content is a little bit longer.
						 </Card.Text>
					 </Card.Body>
					 <Card.Footer>
						 <small className="text-muted">Last updated 3 mins ago</small>
					 </Card.Footer>
				 </Card>
			 </CardGroup>
			))}
		</div>
  );
}

export default GroupExample;