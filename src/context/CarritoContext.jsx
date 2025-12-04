import { createContext, useState } from "react";

export const CarritoContext = createContext();
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.findIndex(item => item.id === producto.id);
    
    if (productoExistente !== -1) {
      const nuevoCarrito = [...carrito];
      const cantidadActual = nuevoCarrito[productoExistente].cantidad || 1;
      nuevoCarrito[productoExistente] = {
        ...nuevoCarrito[productoExistente],
        cantidad: cantidadActual + 1
      };
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const actualizarCantidad = (indice, nuevaCantidad) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito[indice] = { ...nuevoCarrito[indice], cantidad: nuevaCantidad };
    setCarrito(nuevoCarrito);
  };
  // Usamos filter() para crear un nuevo array que excluye el elemento
  // con el índice dado.
  const eliminarDelCarrito = (indiceAEliminar) => {
    setCarrito(carrito.filter((_, indice) => indice !== indiceAEliminar));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        actualizarCantidad,
        eliminarDelCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};