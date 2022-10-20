import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <h1 className="bienvenidx">Bienvenidx a</h1>
			<span className="beautyymx">Beautyy Mx</span>
			<hr />
			<h2 className="titulo-conocenos">Conocenos!</h2>
		 <div className="conocenos">
			<img className="conocenos-o" src="images/beauty-ico.png" alt="" />
			<span className="conocenos-t">Somos una empresa Mexicana dedicada a la venta de maquillaje y skincare de importación. Todos nuestros productos son 100% originales, ofreciendo una variedad de marcas en tendencia, de calidad y nuevas para su compra al por menor dentro de México.</span>
		 </div>
		 <hr />
			<h2>Productos</h2>
		 <div className="productos">
			<img className="productosCarreta" src="images/productos-carreta.jpeg" alt="" />
			<span>Encuentra con nosotros los últimos lanzamientos del mundo del maquillaje. Contamos con la mejor calidad y variedad en el estado de Morelos.</span>
		 </div>
		 <hr />
		 <div className="puntos">
			<h2>Puntos de Venta</h2>
			<img className="carreta" src="images/carreta.jpeg" alt="" />
			<span>Nos puedes encontrar en diferentes puntos dentro de Cuernavaca,Morelos.</span>
		 </div>
		</div>
    
  );
}

export default HomePage;
