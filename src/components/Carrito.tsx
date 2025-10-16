
const Carrito = ({productosEnCarrito, productosEliminados}) => {
  return(
    <div>
        <h1>Carrito</h1>
        {productosEnCarrito.map((producto, indice) => (
            <div key={indice}>
            <img src={producto.image} alt={producto.title} height={80} width={80} />
            <p> {producto.title} : {producto.price}$ </p>
            <button onClick={() => productosEliminados(indice)}>Eliminar</button>
            </div>
        ))}
    </div>
  );
}

export default Carrito;