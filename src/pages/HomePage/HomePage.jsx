import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'
import { motion } from 'framer-motion'
import Modal from '@mui/material/Modal'

function HomePage() {
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [brandFilter, setBrandFilter] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [shuffledProducts, setShuffledProducts] = useState([])

  useEffect(() => {
    import('../../productos.json')
      .then(response => {
        setData(response.default)
        const shuffled = response.default
          .filter(item => item.marca)
          .sort(() => 0.5 - Math.random())
          .slice(0, 15)
        setShuffledProducts(shuffled)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const filteredProducts = data
    ? data.filter(item => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase()
        const lowerCaseBrandFilter = brandFilter.toLowerCase()

        const matchesSearchTerm = item.descripcion && item.descripcion.toLowerCase().includes(lowerCaseSearchTerm)
        const matchesBrandFilter = item.marca && item.marca.toLowerCase() === lowerCaseBrandFilter
        return matchesSearchTerm && matchesBrandFilter
      })
    : []

  const handleOpen = product => {
    setSelectedProduct(product)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  function capitalizeFirstLetter(string) {
    if (!string) return '' // Agregar esta línea para evitar errores con valores nulos o indefinidos
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const displayProducts = shuffledProducts.map(item => (
    <div className="boxProduct" key={item.codigo}>
      <div className="contenedor-imagen">
        <img onClick={() => handleOpen(item)} className="imagen-producto" src={item.fotos} alt="imagen del producto" />
      </div>
      <p className="contenedor-descripcion" data-text={capitalizeFirstLetter(item.descripcion)}></p>
      <h1 className="subtitle1 marginl marginr truncate-text">{item.marca}</h1>
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
  ))

  const productos = () => {
    window.location.href = '/todos-los-productos'
  }

  const puntosDeVenta = () => {
    window.location.href = '/puntos-de-venta'
  }

  const ordinary = () => {
    window.location.href = '/The-Ordinary'
  }
  const colourpop = () => {
    window.location.href = '/Colourpop'
  }

  const huda = () => {
    window.location.href = '/HudaBeauty'
  }

  const cerave = () => {
    window.location.href = '/CeraVe'
  }

  const anastasia = () => {
    window.location.href = '/Anastasia'
  }

  return (
    <div>
      <div className="celular">
        <Carousel indicators={false} variant="dark">
          <Carousel.Item>
            <div class="inicio-portada">
              <div class="contenido">
                <motion.button whileTap={{ scale: 1.1 }} class="button-portada">
                  Nosotros
                </motion.button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="inicio-portada">
              <div class="contenido">
                <motion.button whileTap={{ scale: 1.1 }} onClick={productos} class="button-portada">
                  Productos
                </motion.button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="inicio-portada">
              <div class="contenido">
                <motion.button whileTap={{ scale: 1.1 }} onClick={puntosDeVenta} class="button-portada">
                  Puntos de venta
                </motion.button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <div>
          <h1 className="title margint">Productos mas vendidos</h1>
          <div className="flex">{displayProducts.length > 0 ? displayProducts : <p></p>}</div>
        </div>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
          <div className="modal-content scrolleable" style={{ overflow: 'auto' }}>
            {selectedProduct && (
              <>
                <div className="row">
                  <h1 id="modal-title" className="marginr marginl">
                    {selectedProduct.marca}
                  </h1>
                </div>
                <img className="img-producto marginr marginl" src={selectedProduct.fotos} alt="Imagen del producto" />
                <div className="row contenedor-descripcion">
                  <h2 className="width-100">{selectedProduct.descripcion}</h2>
                </div>
                <div className="row">
                  <h2>Descripción:</h2>
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
                  <h2>Código:</h2>
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
          <h1 className="title margin-1 width marginr marginl">Manejamos las mejores marcas</h1>
          <div className="marcasPortada">
            <motion.img whileTap={{ scale: 1.1 }} className="marca1" src="images/marca1.png" alt="" />
            <motion.img whileTap={{ scale: 1.1 }} className="marca1" src="images/marca2.png" alt="" />
            <motion.img whileTap={{ scale: 1.1 }} className="marca1" src="images/marca3.png" alt="" />
            <motion.img whileTap={{ scale: 1.1 }} className="marca1" src="images/marca4.png" alt="" />
            <motion.img whileTap={{ scale: 1.1 }} className="marca1" src="images/marca5.png" alt="" />
          </div>
        </div>
        <div className="nosotros">
          <h1 className="title red width marginr marginl">
            Bienvenidos a Beautyymx, tu destino para el mejor maquillaje original en línea!
          </h1>
          <h3 className="bienvenida marginr marginl margint">
            En Beautyymx, nos enorgullece ofrecerte una amplia selección de productos de maquillaje auténtico y de alta
            calidad. Nuestro objetivo es brindarte una experiencia de compra excepcional, donde puedas encontrar los
            productos que realcen tu belleza y te hagan sentir segura y empoderada.
            <br className="marginb" />
            <br />
            Explora nuestra tienda en línea y descubre marcas reconocidas y populares, así como productos exclusivos que
            no encontrarás en ningún otro lugar. Trabajamos directamente con proveedores confiables para garantizar la
            autenticidad de todos nuestros productos.
            <br />
            <br />
            ¡Gracias por visitar Beautyymx! Disfruta de tu experiencia de compra y encuentra los productos de maquillaje
            original que te harán lucir radiante.
          </h3>
          <motion.button
            onClick={puntosDeVenta}
            whileTap={{ scale: 1.2 }}
            whileHover={{ scale: 1.1 }}
            className="button mb mt-3"
          >
            Puntos de Venta
          </motion.button>
        </div>
      </div>
      <div className="computadora">
        <img src="images/logoBeauty3.jpeg" alt="" />
        <h1>Vistas de computadora en mantenimiento, accede desde tu celular para mejorar la experiencia.</h1>
      </div>
    </div>
  )
}

export default HomePage
