import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';

const PuntosDeVenta = () => {

	const puntos=[
		{
			nombre:"Plaza Cuernavaca",
			horarios:"todo el dia",
			png:"plazaCuernavaca",
			entreSemana: "9:00 - 19:30",
			sabado: "10:00 - 17:00",
			domingo: "Cerrado"
		},
		{
			nombre:"Espacio Pink",
			horarios:"todo el dia",
			png:"espacioPink",
			entreSemana: "9:00 - 19:30",
			sabado: "10:00 - 17:00",
			domingo: "Cerrado"
		},
		{
			nombre:"Puertas Abiertas",
			horarios:"todo el dia",
			png:"puertasAbiertas",
			entreSemana: "9:00 - 19:30",
			sabado: "10:00 - 17:00",
			domingo: "Cerrado"
		},
	]

	return (
		<div>
			<img src="images/puntosVenta.png" alt="" className="portada" />
			<div className='puntos'>
				{puntos.map((punto)=>(
					<div key={punto.nombre}>
					<h1 className='title mb mt'>{punto.nombre}</h1>
					<img className='imgPuntoVenta' src={`images/${punto.png}.png`} alt="" />
					<p>Horarios:</p>
					<div className='flexHorarios'>
						<p>Lunes:</p>
						<p>{punto.entreSemana}</p>
					</div>
					<hr className="hr" />
					<div className='flexHorarios'>
						<p>Martes:</p>
						<p>{punto.entreSemana}</p>
					</div>
					<hr className="hr" />
					<div className='flexHorarios'>
						<p>Miercoles:</p>
						<p>{punto.entreSemana}</p>
					</div>
					<hr className="hr" />
					<div className='flexHorarios'>
						<p>Jueves:</p>
						<p>{punto.entreSemana}</p>
					</div>
					<hr className="hr" />
					<div className='flexHorarios'>
						<p>Viernes:</p>
						<p>{punto.entreSemana}</p>
					</div>
					<hr className="hr" />
					<div className='flexHorarios'>
						<p>Sabado:</p>
						<p>{punto.sabado}</p>
					</div>
					<hr className="hr" />
					<div className='flexHorarios'>
						<p>Domingo:</p>
						<p>{punto.domingo}</p>
					</div>
					<motion.button whileTap={{scale:1.1}} className="button mb">Ver Ubicacion</motion.button>
					</div>
					))}
			</div>
		</div>
	)
}

export default PuntosDeVenta