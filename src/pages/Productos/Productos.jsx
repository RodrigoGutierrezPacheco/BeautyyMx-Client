import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import './Producto.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';



const productos=[
	{
		titulo:"Maquillaje",
		img:"images/elf.jpg",
		info:"El mejor producto de todos",
		info1:"Si es",
		precio:"150",
		disponible:"images/disponible.png"
	},
	{
		titulo:"Cuidado de la Piel",
		img:"images/juvias.jpg",
		info:"El mejor producto de todos1",
		precio:"150",
		disponible:"images/disponible.png"
	},
	{
		titulo:"Accesorios",
		img:"images/tarte.jpg",
		info:"El mejor producto de todos2",
		precio:"150",
		disponible:"images/disponible.png"
	},
	
	// {
	// 	titulo:"Paleta Jaw Breaker",
	// 	img:"images/jawbreaker.jpg",
	// 	info:"El mejor producto de todos",
	// 	precio:"150",
	// 	disponible:"images/disponible.png"
	// },
]

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Productos() {

	const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
		<div>
			<h1>Productos</h1>
			<div className='paginaProductos'>
				    <Card className='producto'>
						<CardActionArea href='/maquillaje'>
							<CardMedia
								component="img"
								image='images/fouroscope.jpg'
								alt="Maquillaje"
								className='productoImg'
							/>
							<CardContent className='contenidoProducto'>
								<Typography gutterBottom variant="h5" component="div">
									Maquillaje
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Conoce todos nuestros productos
								</Typography>
								<Typography variant="subtitle1" color="black">
								
								</Typography>
								<div className='disponibilidad'>
								<p href="">Disponibilidad:</p><img className='disponible' alt="" />
								</div>
							</CardContent>
						</CardActionArea>
					</Card>

					<Card className='producto'>
						<CardActionArea href='/cuidado-de-piel'>
							<CardMedia
								component="img"
								image='images/elf.jpg'
								alt="Cuidado de la Piel"
								className='productoImg'
							/>
							<CardContent className='contenidoProducto'>
								<Typography gutterBottom variant="h5" component="div">
									Cuidado de la Piel
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Conoce todos nuestros productos
								</Typography>
								<Typography variant="subtitle1" color="black">
								
								</Typography>
								<div className='disponibilidad'>
								<p href="">Disponibilidad:</p><img className='disponible' alt="" />
								</div>
							</CardContent>
						</CardActionArea>
					</Card>

					<Card className='producto'>
						<CardActionArea href='/accesorios'>
							<CardMedia
								component="img"
								image='images/espejo.jpg'
								alt="green iguana"
								className='productoImg'
							/>
							<CardContent className='contenidoProducto'>
								<Typography gutterBottom variant="h5" component="div">
									Accesorios
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Conoce todos nuestros productos
								</Typography>
								<Typography variant="subtitle1" color="black">
								
								</Typography>
								<div className='disponibilidad'>
								<p href="">Disponibilidad:</p><img className='disponible' alt="" />
								</div>
							</CardContent>
						</CardActionArea>
					</Card>
			</div>
		</div>
  );
}