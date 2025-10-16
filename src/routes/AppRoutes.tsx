import { Route, Routes } from "react-router-dom";
import ProductoDetalle from "../components/ProductoDetalle";
import About from "../pages/About";
import Inicio from "../pages/Inicio";
import Moda from "../pages/Moda";
import Login from "../pages/Login";

export default function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/productos/:id" element={<ProductoDetalle agregarProducto={undefined}/>} />
        <Route path="/moda" element={<Moda/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
  );
}
