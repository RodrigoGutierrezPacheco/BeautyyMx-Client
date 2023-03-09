import "./HomePage.css";
import Carousel from 'react-bootstrap/Carousel';

function HomePage() {
 
	const lanzamientos=[
		{
			marca:"Marca1",
			nombre:"Nombre 1",
			precio:"$100.00"
		},
		{
			marca:"Marca2",
			nombre:"Nombre 3",
			precio:"$100.00"
		},
		{
			marca:"Marca3",
			nombre:"Nombre 3",
			precio:"$100.00"
		},
		{
			marca:"Marca3",
			nombre:"Nombre 3",
			precio:"$100.00"
		},
		{
			marca:"Marca3",
			nombre:"Nombre 3",
			precio:"$100.00"
		},
		{
			marca:"Marca3",
			nombre:"Nombre 3",
			precio:"$100.00"
		},
		{
			marca:"Marca3",
			nombre:"Nombre 3",
			precio:"$100.00"
		}
]

console.log(lanzamientos)

  return (
    <div>
	  <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/inicio.png"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/productos.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/puntosVenta.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          <p>
            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
		<div className="mt">
		 <h1>Los mejores productos al mejor precio</h1>
		 <button className="button mt">!Conocelos¡</button>
		</div>
		<div className="lanzamientos">
			<h1 className="title">Recien Llegados</h1>
			<Carousel interval={900000}>
			{lanzamientos.map((lanzamiento)=>
				<Carousel.Item >
					<div className="boxProduct">
					 <img className="producto1" src="images/product1.jpg" alt="" />
					 <h1>{lanzamiento.marca}</h1>
					 <h3>NOMBRE DEL PRODUCTO</h3>
					 <h3 className="precio">$799.00MXN</h3>
					 {/* <h3>Codigo de producto: BT001</h3> */}
					 <button className="button1">Ver Producto</button>
					 <h1>.</h1>
					</div>
				</Carousel.Item>
)}
     </Carousel>
		</div>
		</div>
    
  );
}

export default HomePage;
