import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const PuntosDeVenta = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (modal) => {
    setSelectedModal(modal);
    setShowModal(true);
  };

  const puntos = [
    {
      nombre: 'Plaza Cuernavaca',
      horarios: 'todo el dia',
      png: 'plazaCuernavaca',
      entreSemana: '9:00 - 19:30',
      sabado: '10:00 - 17:00',
      domingo: 'Cerrado',
      modal: 1,
			ubicacion: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15095.675630932092!2d-99.2289707!3d18.9349832!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddf3bdce41ec7%3A0x9e29afe1e55aa717!2sPlaza%20Cuernavaca!5e0!3m2!1ses-419!2smx!4v1686019070179!5m2!1ses-419!2smx"
    },
    {
      nombre: 'Espacio Pink',
      horarios: 'todo el dia',
      png: 'espacioPink',
      entreSemana: '9:00 - 19:30',
      sabado: '10:00 - 17:00',
      domingo: 'Cerrado',
      modal: 2,
			ubicacion:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.7875750764993!2d-99.21844582573512!3d18.940794456205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddf365df96dd1%3A0xabbcf2d353c76345!2sEspacio%20Pink!5e0!3m2!1ses-419!2smx!4v1686019134524!5m2!1ses-419!2smx"
    },
    {
      nombre: 'Puertas Abiertas - Forum',
      horarios: 'todo el dia',
      png: 'puertasAbiertas',
      entreSemana: '9:00 - 19:30',
      sabado: '10:00 - 17:00',
      domingo: 'Cerrado',
      modal: 3,
			ubicacion:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.1135056212092!2d-99.19867499999998!3d18.926369400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddf4c1bf29c75%3A0xdce0dcb0eadc0f32!2sPuertas%20Abiertas%20Cuernavaca!5e0!3m2!1ses-419!2smx!4v1686019164943!5m2!1ses-419!2smx"
    },
  ];

	const goto = (ubicacion) => {
		window.open(ubicacion,'_blank')
	}

  return (
    <div className='celular'>
      <img src="images/puntosVenta.png" alt="" className="portada" />
      <div className="puntos">
        {puntos.map((punto) => (
          <div key={punto.nombre}>
            <h1 className="title mb mt">{punto.nombre}</h1>
            <img className="imgPuntoVenta" src={`images/${punto.png}.png`} alt="" />
            <p>Horarios:</p>
            <div className="flexHorarios">
              <p>Lunes:</p>
              <p>{punto.entreSemana}</p>
            </div>
            <hr className="hr" />
            <div className="flexHorarios">
              <p>Martes:</p>
              <p>{punto.entreSemana}</p>
            </div>
            <hr className="hr" />
            <div className="flexHorarios">
              <p>Miércoles:</p>
              <p>{punto.entreSemana}</p>
            </div>
            <hr className="hr" />
            <div className="flexHorarios">
              <p>Jueves:</p>
              <p>{punto.entreSemana}</p>
            </div>
            <hr className="hr" />
            <div className="flexHorarios">
              <p>Viernes:</p>
              <p>{punto.entreSemana}</p>
            </div>
            <hr className="hr" />
            <div className="flexHorarios">
              <p>Sábado:</p>
              <p>{punto.sabado}</p>
            </div>
            <hr className="hr" />
            <div className="flexHorarios">
              <p>Domingo:</p>
              <p>{punto.domingo}</p>
            </div>
            <motion.button
              whileTap={{ scale: 1.1 }}
							onClick={() => goto(punto.ubicacion)}              
							className="button mb"
            >
              Ver Ubicación
            </motion.button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PuntosDeVenta;
