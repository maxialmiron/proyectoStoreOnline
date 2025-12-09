import { useSearch } from "../context/SearchContext";
import { useProductsContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";

const Busqueda = () => {
  const { busqueda } = useSearch();
  const { products } = useProductsContext();

  const productosFiltrados = products.filter((product) =>
    product.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Productos
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productosFiltrados.length > 0 ? (
            <>
              {productosFiltrados.map((product) => (
                <div key={product.id} className="group relative">
                  <img
                    alt={product.nombre}
                    src={product.imagen}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link to={`/productos/${product.id}`}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.nombre}
                        </Link>
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ${product.precio}
                    </p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p>No hay productos que coincidan con la búsqueda.</p>
          )}
      </div>
    </div>
  );
};

export default Busqueda;