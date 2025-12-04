import { Route, Routes } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Categories from "../pages/Categories";

export default function AppRoutes() {
  return (
      <Routes>
        <Route path="/proyectoStoreOnline" element={<Home/>} />
        <Route path="/products/:id" element={<ProductDetail addProduct={ () => console.log() }/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
  );
}
