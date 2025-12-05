import { Route, Routes } from "react-router-dom";
import Carrito from "./components/Carrito";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import ProtectedRoute from "./components/ProtectedRoute";
import SearchResults from "./components/SearchResults";
import Admin from "./pages/Admin";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      <Routes>
        <Route path="/proyectoStoreOnline" element={<Home/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/busqueda" element={<SearchResults/>} />
        <Route path="/productos/:id" element={<ProductDetail/>} />
        <Route
          path="/carrito"
          element={
            <ProtectedRoute>
              <Carrito/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin/>
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;