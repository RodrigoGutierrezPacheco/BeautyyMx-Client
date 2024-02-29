import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import Button from '@mui/material/Button'
import './Producto.css'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Carousel from 'react-bootstrap/Carousel'
import { motion } from 'framer-motion'
import ProgressBar from 'react-bootstrap/ProgressBar'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import Alert from 'react-bootstrap/Alert'
import Swal from 'sweetalert2'
import LazyLoad from 'react-lazyload'

export default function Productos() {
  const [imageLoading, setImageLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  const [openCart, setOpenCart] = useState(false)
  const [pageNumber, setPageNumber] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [brandFilter, setBrandFilter] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [showAlert, setShowAlert] = useState(false)
  const [loadingImages, setLoadingImages] = useState(true)

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  const handleOpen = product => {
    setSelectedProduct(product)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleCartOpen = () => {
    setOpenCart(true)
  }

  const handleCartClose = () => {
    setOpenCart(false)
  }

  useEffect(() => {
    import('../../productos.json')
      .then(response => {
        setData(response.default)
      })
      .catch(error => {
        console.log(error)
      })

    const savedCartItems = localStorage.getItem('cartItems')
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = product => {
    const existingItem = cartItems.find(item => item.codigo === product.codigo)

    if (existingItem) {
      setCartItems(
        cartItems.map(item => {
          if (item.codigo === product.codigo) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
          return item
        })
      )
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }

    Swal.fire({
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        container: 'custom-swal-container',
        title: 'custom-swal-title',
        icon: 'custom-swal-icon'
      }
    })
  }

  const decreaseQuantity = item => {
    const updatedCartItems = cartItems.map(cartItem => {
      if (cartItem.codigo === item.codigo) {
        const newQuantity = cartItem.quantity - 1
        return {
          ...cartItem,
          quantity: newQuantity >= 0 ? newQuantity : 0
        }
      }
      return cartItem
    })

    const filteredCartItems = updatedCartItems.filter(item => item.quantity > 0)

    setCartItems(filteredCartItems)
  }

  const increaseQuantity = item => {
    const updatedCartItems = cartItems.map(cartItem => {
      if (cartItem.codigo === item.codigo) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1
        }
      }
      return cartItem
    })

    setCartItems(updatedCartItems)
  }

  const removeFromCart = product => {
    Swal.fire({
      title: 'Eliminar producto',
      text: '¿Deseas eliminar el producto del carrito?',
      icon: 'question',
      buttons: ['Cancelar', 'Aceptar'],
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        const updatedCart = cartItems.filter(item => item.codigo !== product.codigo)
        setCartItems(updatedCart)
        Swal.fire('Producto eliminado del carrito', {
          icon: 'success'
        })
      }
    })
  }

  const createMessage = () => {
    let message = 'Lista de compras:\n'
    let total = 0

    cartItems.forEach(item => {
      let itemTotal = item.precio * item.quantity
      total += itemTotal
      message += `${item.marca} - ${item.descripcion} - ${item.codigo} - Cantidad: ${item.quantity} - Total por artículo: ${itemTotal}\n`
    })

    message += `Precio total de todos los productos: $${total}.00 MXN`

    return message
  }

  const handleListSubmission = () => {
    if (cartItems.length > 0) {
      Swal.fire({
        title: '¿Deseas continuar con tu compra en WhatsApp?',
        text: 'Serás redirigido a WhatsApp para finalizar la compra.',
        icon: 'info',
        showCancelButton: true, // Mostrar botón de cancelar
        buttons: ['Cancelar', 'Aceptar']
      }).then(willContinue => {
        if (willContinue.isConfirmed) {
          window.open(`https://wa.me/525638686467?text=${encodeURIComponent(createMessage())}`)
        }
      })
    } else {
      Swal.fire({
        title: 'Carrito vacío',
        text: 'Por favor, agregue algunos productos a su carrito antes de enviar la lista.',
        icon: 'error'
      })
    }
  }

  const filteredProducts = data
    ? data.filter(item => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase()
        const lowerCaseBrandFilter = brandFilter.toLowerCase()

        const matchesSearchTerm = item.descripcion && item.descripcion.toLowerCase().includes(lowerCaseSearchTerm)
        const matchesBrandFilter =
          (item.marca && item.marca.toLowerCase() === lowerCaseBrandFilter) || lowerCaseBrandFilter === ''

        return matchesSearchTerm && matchesBrandFilter
      })
    : []

  const pageCountFiltered = Math.ceil(filteredProducts.length / filteredProducts.length)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const displayProducts = filteredProducts.map(item => (
    <div className="boxProduct" key={item.codigo}>
      <LazyLoad height={200} offset={100} once>
        <div className="contenedor-imagen">
          {loadingImages && <ProgressBar now={100} />}
          <LazyLoad>
            <img
              onClick={() => handleOpen(item)}
              className="imagen-producto margint"
              src={item?.fotos}
              alt="imagen del producto"
              onLoad={handleImageLoad}
            />
          </LazyLoad>
        </div>
      </LazyLoad>
      <p className="contenedor-descripcion" data-text={capitalizeFirstLetter(item.descripcion)}></p>
      <h1 className="subtitle1 marginl marginr truncate-text">{item.marca}</h1>
      <h3 className="precio">${item.precio}.00MXN</h3>
      <p className="">
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
      <br />
      <motion.button
        whileTap={{ scale: 1.2 }}
        whileHover={{ scale: 1.1 }}
        className="button1"
        onClick={() => addToCart(item)}
      >
        Agregar al Carrito
      </motion.button>
    </div>
  ))

  return (
    <div>
      <img className="portada" src="images/productos.png" alt="" />
      <div className="flex marginb">
        <h1>Encontrar por Marca</h1>
        <select className="filtro" value={brandFilter} onChange={e => setBrandFilter(e.target.value)}>
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
        </select>
      </div>
      <h1>{brandFilter ? brandFilter : 'Todas las marcas'}</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Buscar tus productos..."
        className="buscador marginb"
      />
      <div className="column">
        <div className="boxVistaRapida marginr marginl">{displayProducts}</div>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
          <div className="modal-content scrolleable" style={{ overflow: 'auto' }}>
            {selectedProduct && (
              <>
                <div className="row">
                  <h1 id="modal-title marginr marginl">{selectedProduct.marca}</h1>
                </div>
                <img className="img-producto marginr marginl" src={selectedProduct?.fotos} alt="Imagen del producto" />
                <div className="row">
                  <h2 className="width-100 mt-2">{selectedProduct.descripcion}</h2>
                </div>
                <div className="row mt-2">
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
              className=" margint marginb button1 marginr marginl"
            >
              Cerrar
            </motion.button>
          </div>
        </Modal>

        <Modal
          open={openCart}
          onClose={handleCartClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className="modal-content scrolleable" style={{ overflow: 'auto' }}>
            <h1 id="modal-title marginr marginl" className="title modal-title">
              Resumen de tu compra
            </h1>
            {cartItems.length === 0 ? (
              <p className="title" id="modal-description">
                El carrito está vacío.
              </p>
            ) : (
              <>
                {cartItems.map(item => (
                  <div key={item.codigo} className="cart-item">
                    <img className="cart-item-image" src={item?.fotos} alt="Imagen del producto" />
                    <div className="cart-item-details">
                      <div className="cart-item-row">
                        <h2 className="cart-item-title">
                          {item.marca}-{item.descripcion}
                        </h2>
                      </div>
                      <div className="cart-item-row">
                        <p className="cart-item-price">${item.precio}.00 MXN</p>
                        <img
                          src="images/menos.png"
                          className="cart-item-button"
                          onClick={() => decreaseQuantity(item)}
                          alt=""
                        />
                        <span className="cart-item-quantity">{item.quantity}</span>
                        <img
                          src="images/mas.png"
                          className="cart-item-button"
                          onClick={() => increaseQuantity(item)}
                          alt=""
                        />
                        <img
                          className="cart-item-remove"
                          onClick={() => removeFromCart(item)}
                          className="eliminar"
                          src="images/eliminar.png"
                          alt=""
                        />
                      </div>
                      <hr className="hr" />
                    </div>
                  </div>
                ))}
                <div className="cart-total">
                  <h2>Total:</h2>
                  <p>${cartItems.reduce((total, item) => total + item.precio * item.quantity, 0)}.00 MXN</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={handleListSubmission}
                  whileTap={{ scale: 1.1 }}
                  className="margint marginb button1 marginr marginl"
                >
                  Comprar
                </motion.button>
              </>
            )}
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={handleCartClose}
              whileTap={{ scale: 1.1 }}
              className="margint marginb button1 marginr marginl"
            >
              Cerrar
            </motion.button>
          </div>
        </Modal>
        <div className="cart-container">
          <img className="carrito" src="images/carrito.png" alt="" onClick={handleCartOpen} />
          <h1 className="carrito-length">{cartItems.reduce((total, item) => total + item.quantity, 0)}</h1>
        </div>
      </div>
    </div>
  )
}
