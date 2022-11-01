import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Producto.css'

const productos=[
	{
		titulo:"Producto",
		img:"images/productos-carreta.jpeg",
		info:"El mejor producto de todos",
		precio:"150"
	},
	{
		titulo:"Producto",
		img:"images/productos-carreta.jpeg",
		info:"El mejor producto de todos",
		precio:"150"
	},
	{
		titulo:"Producto",
		img:"images/productos-carreta.jpeg",
		info:"El mejor producto de todos",
		precio:"150"
	},
	{
		titulo:"Producto",
		img:"images/productos-carreta.jpeg",
		info:"El mejor producto de todos",
		precio:"150"
	},
	{
		titulo:"Producto",
		img:"images/productos-carreta.jpeg",
		info:"El mejor producto de todos",
		precio:"150"
	},
	{
		titulo:"Producto",
		img:"images/productos-carreta.jpeg",
		info:"El mejor producto de todos",
		precio:"150"
	},
	{
		titulo:"Producto",
		img:"images/productos-carreta.jpeg",
		info:"El mejor producto de todos",
		precio:"150"
	},
	{
		titulo:"Producto",
		img:"images/productos-carreta.jpeg",
		info:"El mejor producto de todos",
		precio:"150"
	},
	{
		titulo:"Producto",
		img:"images/productos-carreta.jpeg",
		info:"El mejor producto de todos",
		precio:"150"
	},
	{
		titulo:"Producto",
		img:"images/productos-carreta.jpeg",
		info:"El mejor producto de todos",
		precio:"150"
	},
	{
		titulo:"Producto",
		img:"images/productos-carreta.jpeg",
		info:"El mejor producto de todos",
		precio:"150"
	},
]

export default function Productos() {
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