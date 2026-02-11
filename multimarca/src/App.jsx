import { Routes, Route } from "react-router-dom";
import Layout from "./components/Pages/Layout.jsx";
import Home from "./components/Pages/Home.jsx";
import Tienda from "./components/Pages/Tienda.jsx";
import Marcas from "./components/Pages/Marcas.jsx";
import SobreNosotros from "./components/Pages/SobreNosotros.jsx";
import ProductDetail from "./components/Pages/ProductDetail.jsx";
import Carrito from "./components/Pages/Carrito.jsx";
import Perfil from "./components/Pages/Perfil.jsx";
import NotFound from "./components/Pages/NotFound.jsx";
import "./components/styles/base.css"; 

export default function App(){
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/marcas" element={<Marcas />} />
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

