import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductoDetalle = ({agregarProducto}) => {

    const PRODUCTOS_URL = 'https://fakestoreapi.com/products/';
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        fetch(PRODUCTOS_URL + id)
            .then(respuesta => respuesta.json())
            .then(dato => setProducto(dato));
    }, [id]);

    if (!producto) return <p> Cargando ... </p>

    return (
        <>
            <ProductCard producto={producto} agregarProducto={agregarProducto}/>
        </>
    );
}

export default ProductoDetalle;