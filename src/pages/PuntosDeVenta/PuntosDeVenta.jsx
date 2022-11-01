import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const PuntosDeVenta = () => {

	const puntos=[
		{
			nombre:"Plaza Cuernavaca",
			horarios:"todo el dia",
			img:"images/espacioPink.png"
		},
		{
			nombre:"Plaza Cuernavaca",
			horarios:"todo el dia",
			img:"images/espacioPink.png"
		},
		{
			nombre:"Plaza Cuernavaca",
			horarios:"todo el dia",
			img:"images/espacioPink.png"
		},
	]

	return (
		<div>
			<h1>Puntos de Venta</h1>
			<div className='puntos'>
				{puntos.map((punto)=>(
					<Card className="punto"  sx={{ maxWidth: '99%' }}>
					<CardActionArea>
						<CardMedia
							component="img"
							height="140"
							image={punto.img}
							alt="green iguana"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{punto.nombre}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Lizards are a widespread group of squamate reptiles, with over 6,000
								species, ranging across all continents except Antarctica
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				))}
			</div>
		</div>
	)
}

export default PuntosDeVenta