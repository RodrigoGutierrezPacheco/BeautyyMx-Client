import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import './Producto.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { motion } from 'framer-motion';
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

export default function Productos() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const handleImageLoaded = () => {
    setLoading(false);
  };

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get('https://gist.githubusercontent.com/RodrigoGutierrezPacheco/6fdcbaee593f135f4d9a062bfeba3de7/raw/1eefbd634c3a49219d38ea5208754261d994880a/gistfile1.txt')
      .then(response => {
        setData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const filteredProducts = data ? data.filter(item => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const lowerCaseBrandFilter = brandFilter.toLowerCase();

    const matchesSearchTerm = Object.values(item).some(value => {
      if (typeof value === 'string') {
        return value.toLowerCase().includes(lowerCaseSearchTerm);
      }
      return false;
    });

    const matchesBrandFilter = item.marca && item.marca.toLowerCase() === lowerCaseBrandFilter || lowerCaseBrandFilter === '';

    return matchesSearchTerm && matchesBrandFilter;
  }) : [];

  const pageCountFiltered = Math.ceil(filteredProducts.length / filteredProducts.length);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayProducts = filteredProducts.map(item => (
    <div className="boxProduct" key={item.codigo}>
      <div className="contenedor-imagen">
        <img onClick={() => handleOpen(item)} className="imagen-producto" src={`https://drive.google.com/uc?export=view&id=${item.id}`} alt="imagen del producto" />
      </div>
      <h1 className="descripcion marginl marginr truncate-text">
        {item.marca}
      </h1>
      <p className='contenedor-descripcion marginr marginl'>{item.descripcion}</p>
      <h3 className="precio">${item.precio}.00MXN</h3>
      <p className="subtitle">{item.codigo} - {item.contenido}</p>
      <motion.button
        whileTap={{ scale: 1.2 }}
        whileHover={{ scale: 1.1 }}
        className="button1"
        onClick={() => handleOpen(item)}
      >
        Ver Producto
      </motion.button>
    </div>
  ));

  return (
    <div>
      <img className="portada" src="images/productos.png" alt="" />
      <div className='flex marginb'>
        <h1>Encontrar por Marca</h1>
        <select className='filtro' value={brandFilter} onChange={e => setBrandFilter(e.target.value)}>
          <option value="">Todas las marcas</option>
          <option value="Anastasia Beverly Hills">Anastasia Beverly Hills</option>
          <option value="AOA">AOA</option>
          {/* Resto de las opciones */}
        </select>
      </div>
      <h1>{brandFilter ? brandFilter : "Todas las marcas"}</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Buscar tus productos..."
        className='buscador'
      />
      <div className="column">
        <div className='boxVistaRapida marginr marginl'>
          {displayProducts}
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className="modal-content scrolleable" style={{ overflow: 'auto' }}>
            {selectedProduct && (
              <>
                <div className="row">
                  <h1 id="modal-title marginr marginl">{selectedProduct.marca}</h1>
                </div>
                <img className='img-producto marginr marginl' src={`https://drive.google.com/uc?export=view&id=${selectedProduct.id}`} alt="Imagen del producto" />
                <div className="row">
                  <h2 className='width-100'>{selectedProduct.descripcion}</h2>
                </div>
                <div className="row">
                  <h2>Descripcion:</h2>
                  <p>{selectedProduct.descripcion2}</p>
                </div>
                <div className="row">
                  <h2>Precio:</h2>
                  <p>${selectedProduct.precio}.00 MXN</p>
                </div>
                <div className="row">
                  <h2>Contenido:</h2>
                  <p>{selectedProduct.contenido}</p>
                </div>
                <div className="row">
                  <h2>Codigo:</h2>
                  <p>{selectedProduct.codigo}</p>
                </div>
              </>
            )}
            <motion.button whileHover={{ scale: 1.1 }} onClick={handleClose} whileTap={{ scale: 1.1 }} className=" margint marginb button1 marginr marginl">Cerrar</motion.button>
          </div>
        </Modal>

        {/* <ReactPaginate
          previousLabel={<img src="https://cdn-icons-png.flaticon.com/128/151/151846.png" alt="Siguiente" className="siguiente" />}
          nextLabel={<img src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="Siguiente" className="siguiente" />}
          previousClassName="boton-anterior"
          nextClassName="boton-siguiente"
          onPageChange={changePage}
          pageCount={pageCountFiltered}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
          currentPageClassName="paginaActual"
          pageRangeDisplayed={false}
          marginPagesDisplayed={false}
        /> */}
      </div>
    </div>
  );
}
