import { useState } from "react";
import { useProductsContext } from "../context/ProductsContext";
import ProductCard from "./ProductCard";

const Products = () => {
  const { products, loading, error } = useProductsContext();

  const productosPorPagina = 8;
  const [paginaActual, setPaginaActual] = useState(1);

  if (loading) return "Cargando productos...";
  if (error) return error;

  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosActuales = products.slice(indicePrimerProducto, indiceUltimoProducto);

  const totalPaginas = Math.ceil(products.length / productosPorPagina);
  const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Productos
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {productosActuales.map((product) => (
          <ProductCard product={product}></ProductCard>
        ))}
      </div>

      <div className="flex justify-center gap-2 my-8">
        {Array.from({ length: totalPaginas }, (_, indice) => (
          <button
            key={indice + 1}
            className={`px-4 py-2 rounded ${paginaActual === indice + 1
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            onClick={() => cambiarPagina(indice + 1)}
          >
            {indice + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;