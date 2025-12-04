import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductDetail = ({ addProduct }) => {
  const PRODUCTS_URL = 'https://fakestoreapi.com/products/';
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(PRODUCTS_URL + id)
      .then(respuesta => respuesta.json())
      .then((dato) => setProduct(dato));
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  return (
    <>
      <ProductCard product={product} addProduct={addProduct} />
    </>
  );
};

export default ProductDetail;