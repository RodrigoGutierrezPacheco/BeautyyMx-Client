import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { motion } from 'framer-motion';
import Modal from '@mui/material/Modal';

function HomePage() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [shuffledProducts, setShuffledProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://gist.githubusercontent.com/RodrigoGutierrezPacheco/6fdcbaee593f135f4d9a062bfeba3de7/raw/1eefbd634c3a49219d38ea5208754261d994880a/gistfile1.txt')
      .then(response => {
        setData(response.data);
        console.log(response.data);
        const shuffled = response.data
          .filter(item => item.marca)
          .sort(() => 0.5 - Math.random())
          .slice(0, 15);
        setShuffledProducts(shuffled);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const filteredProducts = data
    ? data.filter(item => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const lowerCaseBrandFilter = brandFilter.toLowerCase();

        const matchesSearchTerm =
          item.descripcion &&
          item.descripcion.toLowerCase().includes(lowerCaseSearchTerm);
        const matchesBrandFilter =
          item.marca &&
          item.marca.toLowerCase() === lowerCaseBrandFilter;
        return matchesSearchTerm && matchesBrandFilter;
      })
    : [];

  const handleOpen = product => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const displayProducts = shuffledProducts.map(item => (
    <div className="boxProduct" key={item.codigo}>
      <div className="contenedor-imagen">
        <img
          onClick={() => handleOpen(item)}
          className="imagen-producto"
          src={`https://drive.google.com/uc?export=view&id=${item.id}`}
          alt="imagen del producto"
        />
      </div>
      <h1 className="descripcion marginl marginr truncate-text">
        {item.marca}
      </h1>
      <p className="contenedor-descripcion marginr marginl">
        {item.descripcion}
      </p>
      <h3 className="precio">${item.precio}.00MXN</h3>
      <p className="subtitle">
        {item.codigo} - {item.contenido}
      </p>
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

  const productos = () => {
    window.location.href = '/todos-los-productos';
  };

  const puntosDeVenta = () => {
    window.location.href = '/puntos-de-venta';
  };

	const ordinary = () =>{
		window.location.href= '/The-Ordinary'
	}
	const colourpop = () =>{
		window.location.href= '/Colourpop'
	}

	const huda = () =>{
		window.location.href= '/HudaBeauty'
	}

	const cerave = () =>{
		window.location.href= '/CeraVe'
	}

	const anastasia = () =>{
		window.location.href= '/Anastasia'
	}

  return (
    <div>
      <Carousel indicators={false} variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/inicio.png"
            alt="First slide"
          />
          <div className="">
            <motion.button
              whileTap={{ scale: 1.1 }}
              className="button"
            >
              Inicio
            </motion.button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/productos.png"
            alt="Second slide"
          />
          <div className="">
            <motion.button
              whileTap={{ scale: 1.1 }}
              onClick={productos}
              className="button"
            >
              Productos
            </motion.button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/puntosVenta.png"
            alt="Third slide"
          />
          <div className="">
            <motion.button
              whileTap={{ scale: 1.1 }}
              onClick={puntosDeVenta}
              className="button"
            >
              Puntos de Venta
            </motion.button>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="nosotros">
        <h1 className="title red width marginr marginl">
          Bienvenidos a Beautyymx, tu destino para el mejor maquillaje original en línea!
        </h1>
        <h3 className="bienvenida marginr marginl margint">
          En Beautyymx, nos enorgullece ofrecerte una amplia selección de productos de maquillaje auténtico y de alta calidad. Nuestro objetivo es brindarte una experiencia de compra excepcional, donde puedas encontrar los productos que realcen tu belleza y te hagan sentir segura y empoderada.
          <br className="marginb" />
          <br />
          Explora nuestra tienda en línea y descubre marcas reconocidas y populares, así como productos exclusivos que no encontrarás en ningún otro lugar. Trabajamos directamente con proveedores confiables para garantizar la autenticidad de todos nuestros productos.
          <br />
          <br />
          ¡Gracias por visitar Beautyymx! Disfruta de tu experiencia de compra y encuentra los productos de maquillaje original que te harán lucir radiante.
        </h3>
        <motion.button
          onClick={puntosDeVenta}
          whileTap={{ scale: 1.2 }}
          whileHover={{ scale: 1.1 }}
          className="button mb"
        >
          Puntos de Venta
        </motion.button>
      </div>
      <div>
        <h1>Algunos de nuestros productos más vendidos</h1>
        <div className="flex">
          {displayProducts.length > 0 ? (
            displayProducts
          ) : (
            <p>No hay productos disponibles de la marca "The Ordinary".</p>
          )}
        </div>
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
                <h1 id="modal-title" className="marginr marginl">
                  {selectedProduct.marca}
                </h1>
              </div>
              <img
                className="img-producto marginr marginl"
                src={`https://drive.google.com/uc?export=view&id=${selectedProduct.id}`}
                alt="Imagen del producto"
              />
              <div className="row">
                <h2 className="width-100">{selectedProduct.descripcion}</h2>
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
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={handleClose}
            whileTap={{ scale: 1.1 }}
            className="margint marginb button1 marginr marginl"
          >
            Cerrar
          </motion.button>
        </div>
      </Modal>
			<div>
				<h1 className='title margin-1 width marginr marginl'>Manejamos las mejores marcas</h1>
				<motion.img whileTap={{scale:1.1}} onClick={ordinary} className='marca' src="images/marca1.png" alt="" />
				<motion.img whileTap={{scale:1.1}} onClick={colourpop} className='marca' src="images/marca2.png" alt="" />
				<motion.img whileTap={{scale:1.1}} onClick={huda} className='marca' src="images/marca3.png" alt="" />
				<motion.img whileTap={{scale:1.1}} onClick={cerave} className='marca' src="images/marca4.png" alt="" />
				<motion.img whileTap={{scale:1.1}} onClick={anastasia} className='marca' src="images/marca5.png" alt="" />
			</div>
    </div>
  );
}

export default HomePage;
