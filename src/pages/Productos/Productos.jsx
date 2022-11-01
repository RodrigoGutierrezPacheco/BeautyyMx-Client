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
		titulo:"Producto",
		img:"images/elf.jpg",
		info:"El mejor producto de todos",
		info1:"Si es",
		precio:"150"
	},
	{
		titulo:"Producto",
		img:"images/juvias.jpg",
		info:"El mejor producto de todos1",
		precio:"150"
	},
	{
		titulo:"Producto",
		img:"images/tarte.jpg",
		info:"El mejor producto de todos2",
		precio:"150"
	},
	{
		titulo:"Producto",
		img:"images/kyle.jpg",
		info:"El mejor producto de todos3",
		precio:"150"
	},
	{
		titulo:"Producto",
		img:"images/fouroscope.jpg",
		info:"El mejor producto de todos",
		precio:"150"
	},
	{
		titulo:"Producto",
		img:"images/huda.jpg",
		info:"El mejor producto de todos",
		precio:"150"
	},
	{
		titulo:"Producto",
		img:"images/toofaced.jpg",
		info:"El mejor producto de todos",
		precio:"150"
	},
	{
		titulo:"Producto",
		img:"images/jawbreaker.jpg",
		info:"El mejor producto de todos",
		precio:"150"
	},
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
			{productos.map((producto)=>(
				    <Card className='producto'>
						<CardActionArea>
							<CardMedia
								component="img"
								image={producto.img}
								alt="green iguana"
								className='productoImg'
							/>
							<CardContent className='contenidoProducto'>
								<Typography gutterBottom variant="h5" component="div">
									{producto.titulo}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{producto.info}
								</Typography>
								<Typography variant="subtitle1" color="black">
									{`$${producto.precio}.00`}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
			))}
			</div>
		</div>
  );
}