import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
const ProductCard = ({ product, addProduct: addProduct }) => {

  const navigate = useNavigate();
  const { agregarAlCarrito } = useContext(CarritoContext);
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);

  const handleAgregarAlCarrito = (product) => {
    for (let i = 0; i < cantidad; i++) {
      agregarAlCarrito(product);
    }
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  };

  return (
    <div className="max-w-sm rounded-2xl shadow-lg overflow-hidden bg-white hover:scale-[1.02] transition-transform">
      <Link to={`/productos/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain hover:scale-105 transition-transform"
        />
      </Link>

      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.title}
        </h2>
        <p className="text-sm text-gray-500 mt-1 capitalize">
          {product.category}
        </p>

        <p className="text-gray-600 text-sm mt-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-indigo-600">
            ${product.price}
          </span>
          <div className="flex items-center text-yellow-500">
            ⭐ {product.rating.rate} ({product.rating.count})
          </div>
        </div>

        <button
          onClick={() => handleAgregarAlCarrito(product)}
          className="mt-5 w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition-colors"
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;