import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Productos from "./pages/Productos/Productos";
import PuntosDeVenta from "./pages/PuntosDeVenta/PuntosDeVenta";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import Maquillaje from "./pages/Maquillaje/Maquillaje";
import Rostro from "./pages/Rostro/Rostro";
import Ojos from "./pages/Ojos/Ojos";
import Labios from "./pages/Labios/Labios";
import Paletas from "./pages/Paletas/Paletas";
import CuidadoDeLaPiel from "./pages/CuidadoDeLaPiel/CuidadoDeLaPiel";
import Minis from "./pages/Minis/Minis";
import Accesorios from "./pages/Accerorios/Accesorios";
import Descuentos from "./pages/Descuentos/Descuentos";
import Puntos from "./pages/Puntos/Puntos";
import { Description } from "@mui/icons-material";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
				<Route path="/productos" element={<Productos/>}/>
				<Route  path="/puntos-de-venta" element={<PuntosDeVenta/>}/>
				<Route path="/rostro" element={<Rostro/>}/>
				<Route path="/ojos" element={<Ojos/>}/>
				<Route path="/labios" element={<Labios/>}/>
				<Route path="/paletas" element={<Paletas/>}/>
				<Route path="/cuidado-de-la-piel" element={<CuidadoDeLaPiel/>}/>
				<Route path="/minis" element={<Minis/>}/>
				<Route path="/accesorios" element={<Accesorios/>}/>
				<Route path="/descuentos" element={<Descuentos/>}/>
				<Route path="puntos-de-venta" element={<Puntos/>}/>


        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
			<Footer/>
    </div>
  );
}

export default App;
