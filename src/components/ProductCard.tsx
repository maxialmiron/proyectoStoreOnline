import { Link } from "react-router-dom";

const ProductCard = ({ producto, agregarProducto }) => {
  return (
    
    <div className="max-w-sm rounded-2xl shadow-lg overflow-hidden bg-white hover:scale-[1.02] transition-transform">
      
      <Link to={`/productos/${producto.id}`}>
        <img
          src={producto.image}
          alt={producto.title}
          className="w-full h-48 object-contain hover:scale-105 transition-transform"
        />
      </Link>

      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {producto.title}
        </h2>
        <p className="text-sm text-gray-500 mt-1 capitalize">
          {producto.category}
        </p>

        <p className="text-gray-600 text-sm mt-3 line-clamp-2">
          {producto.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-indigo-600">
            ${producto.price}
          </span>
          <div className="flex items-center text-yellow-500">
            ⭐ {producto.rating.rate} ({producto.rating.count})
          </div>
        </div>

        <button onClick={()=> agregarProducto(producto)} className="mt-5 w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition-colors">
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;