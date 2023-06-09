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

  const [selectedProduct, setSelectedProduct] = useState(null); // Nuevo estado para almacenar el producto seleccionado

  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 10;
  const pagesVisited = pageNumber * productsPerPage;
  const [searchTerm, setSearchTerm] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [productFilter, setProductFilter] = useState('');

	const handleOpen = (product) => { // Modificamos la función handleOpen para recibir el producto seleccionado
    setSelectedProduct(product); // Almacenamos el producto seleccionado en el estado
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get('https://gist.githubusercontent.com/RodrigoGutierrezPacheco/6fdcbaee593f135f4d9a062bfeba3de7/raw/ae3b4765becde13ac7d29419b0d26a1ae9defa06/gistfile1.txt')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

	const filteredProducts = data ? data.filter(item => {
		const lowerCaseSearchTerm = searchTerm.toLowerCase();
		const lowerCaseBrandFilter = brandFilter.toLowerCase();
		const lowerCaseProductFilter = productFilter.toLowerCase();
	
		const matchesSearchTerm = item.descripcion && item.descripcion.toLowerCase().includes(lowerCaseSearchTerm);
		const matchesBrandFilter = item.marca && item.marca.toLowerCase() === lowerCaseBrandFilter || lowerCaseBrandFilter === '';
		const matchesPriceFilter = item.precio && parseInt(item.precio) <= parseInt(priceFilter) || priceFilter === '';
		const matchesProductFilter = item.producto && item.producto.toLowerCase() === lowerCaseProductFilter || lowerCaseProductFilter === '';
	
		return matchesSearchTerm && matchesBrandFilter && matchesPriceFilter && matchesProductFilter;
	}) : [];
	
  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);
  const pageCountFiltered = Math.ceil(filteredProducts.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayProducts = filteredProducts
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map(item => (
      <div className="boxProduct" key={item.codigo}>
				<div className="contenedor-imagen">
        	<img className="imagen-producto" src={`https://drive.google.com/uc?export=view&id=${item.id}`} alt="imagen del producto" />
				</div>
        <p className="descripcion marginl marginr">
          {item.marca}
        </p>
				<p className='contenedor-descripcion marginr marginl'>{item.descripcion}</p>
        <h3 className="precio">${item.precio}.00MXN</h3>
        <p className="subtitle">{item.codigo} - {item.contenido}</p>
				<motion.button
          whileTap={{ scale: 1.2 }}
          whileHover={{ scale: 1.1 }}
          className="button1"
          onClick={() => handleOpen(item)} // Pasamos el producto seleccionado a la función handleOpen al hacer clic en el botón
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
					<option value="Benefit">Benefit</option>
          <option value="Bissú">Bissú</option>
          <option value="Carolina Herrera">Carolina Herrera</option>
          <option value="Cerave">Cerave</option>
          <option value="Colourpop">Colourpop</option>
          <option value="Coty">Coty</option>
          <option value="Danessa Myricks">Danessa Myricks</option>
          <option value="Diamond Beauty">Diamond Beauty</option>
          <option value="E.L.F">E.L.F</option>
					<option value="Fenty Beauty">Fenty Beauty</option>
          <option value="Glam Glow">Glam Glow</option>
          <option value="Glossier">Glossier</option>
          <option value="Good Molecules">Good Molecules</option>
          <option value="Huda Beauty">Huda Beauty</option>
          <option value="IM Natural ">IM Natural</option>
          <option value="Jeffree Star Cosmetics">Jeffree Star Cosmetics</option>
          <option value="Kaja Beauty">Kaja Beauty</option>
          <option value="Kiko Milano">Kiko Milano</option>
          <option value="Klean Color">Klean Color</option>
          <option value="L´Oreal">L´Oreal</option>
					<option value="Liquid Shadow Jeffree Star">Liquid Shadow Jeffree Star</option>
          <option value="Made by Mitchell">Made by Mitchell</option>
          <option value="Mario Badesc">Mario Badescu</option>
          <option value="Maybelline">Maybelline</option>
          <option value="Milk Makeup">Milk Makeup</option>
          <option value="Morphe">Morphe</option>
          <option value="Nars">Nars</option>
          <option value="Nature´s Bounty">Nature´s Bounty</option>
          <option value="NYX">NYX</option>
          <option value="P Louise">P Louise</option>
          <option value="Patrick Ta Beauty">Patrick Ta Beauty</option>
          <option value="Paula´s Choice">Paula´s Choice</option>
					<option value="Pears">Pears</option>
          <option value="Peripera">Peripera</option>
          <option value="Physician´s Formula">Physician´s Formula</option>
          <option value="Prosa">Prosa</option>
          <option value="Prosa delineador negro">Prosa delineador negro</option>
          <option value="RCMA">RCMA</option>
          <option value="Revolution Beauty">Revolution Beauty</option>
          <option value="Shu Uemura">Shu Uemura</option>
          <option value="Smashbox">Smashbox</option>
          <option value="Stila">Stila</option>
          <option value="Suva Beauty">Suva Beauty</option>
          <option value="Tarte">Tarte</option>
          <option value="Tatti Lashes">Tatti Lashes</option>
          <option value="The Ordinary">The Ordinary</option>
          <option value="Tintaline Bissú labios">Tintaline Bissú labios</option>
          <option value="Too Faced">Too Faced</option>
					<option value="Urban Decay">Urban Decay</option>
          <option value="Wedding Proof Spray Jeffree">Wedding Proof Spray Jeffree</option>
          <option value="Wet n Wild">Wet n Wild</option>
          {/* <option value=""></option> */}
          {/* Agrega más opciones de marcas aquí */}
        </select>
				</div>
				<h1 className='margint'>{brandFilter ? brandFilter : "Todas las marcas"}</h1>      
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Buscar tus productos..."
					className='buscador'
        />
				<div className="column">


        {/* <input
          type="number"
          value={priceFilter}
          onChange={e => setPriceFilter(e.target.value)}
          placeholder="Filtrar por precio máximo"
        /> */}

         {/* <select value={productFilter} onChange={e => setProductFilter(e.target.value)}>
          <option value="">Todos los productos</option>
        </select>  */}
				<div className='boxVistaRapida marginr marginl'>
        {displayProducts}
				</div>
				<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="modal-content scrolleable">
          {selectedProduct && (
            <>
						<div className="row">
              <h2 id="modal-title">{selectedProduct.descripcion}</h2>
						</div>
              <img className='img-producto marginr marginl' src={`https://drive.google.com/uc?export=view&id=${selectedProduct.id}`} alt="Imagen del producto" />
              <p>Marca: {selectedProduct.marca}</p>
							<p>Descripcion: {selectedProduct.descripcion}</p>
              <p>Precio: ${selectedProduct.precio}.00 MXN</p>
              <p>{selectedProduct.codigo} - {selectedProduct.contenido}</p>
            </>
          )}
					<motion.button whileHover={{scale:1.1}} onClick={handleClose} whileTap={{scale:1.1}} className=" margint marginb button1 marginr marginl">Cerrar</motion.button>
        </div>
      </Modal>

        <ReactPaginate
          previousLabel={<img src="https://cdn-icons-png.flaticon.com/128/151/151846.png" alt="Siguiente" className="siguiente" />}
          nextLabel={<img src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="Siguiente" className="siguiente" />}
          previousClassName="boton-anterior"
          nextClassName="boton-siguiente"
          onPageChange={changePage}
          pageCount={pageCountFiltered}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
          currentPageClassName="paginaAcutal"
          pageRangeDisplayed={false}
          marginPagesDisplayed={false}
        />
      </div>
    </div>
  );
}
