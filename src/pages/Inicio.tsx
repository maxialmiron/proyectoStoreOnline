import { useState } from "react";
import Carrito from "../components/Carrito";
import Productos from "../components/Productos";

const Inicio = () => {

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (indiceAEliminar) => {
    setCarrito(carrito.filter((_, indice) => indice != indiceAEliminar))
  };

  return (
    <>
      <Productos agregarProducto={agregarAlCarrito}/>
      <Carrito productosEnCarrito={carrito}
        productosEliminados={eliminarDelCarrito}/>
    </>
  );
}

export default Inicio;