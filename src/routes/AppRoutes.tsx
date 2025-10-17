import { Route, Routes } from "react-router-dom";
import ProductoDetalle from "../components/ProductoDetalle";
import About from "../pages/About";
import Inicio from "../pages/Inicio";
import Login from "../pages/Login";
import Categorias from "../pages/Categorias";

export default function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/proyectoStoreOnline" element={<Inicio/>} />
        <Route path="/productos/:id" element={<ProductoDetalle agregarProducto={undefined}/>} />
        <Route path="/categorias" element={<Categorias/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
  );
}
