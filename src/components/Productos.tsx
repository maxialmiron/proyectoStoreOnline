import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Productos = ({ agregarProducto }) => {

  const PRODUCTOS_URL = 'https://fakestoreapi.com/products/';
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setCargando(true);
    fetch(PRODUCTOS_URL)
      .then(response => response.json())
      .then(datos => {
        setProductos(datos);
        console.log("Datos cargados:", datos);
      })
      .catch(error => {
        console.error("Error:", error);
        setError("Error al cargar productos");
      })
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="">
      <div className="grid grid-cols-4 gap-4">
        {productos.map((producto) => (
          <ProductCard
            key={producto.id}
            agregarProducto={agregarProducto}
            producto={producto}
          />
        ))}
      </div>
    </div>
  );

}

export default Productos;