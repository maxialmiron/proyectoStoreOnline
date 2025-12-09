import { useState, useEffect, createContext, useContext } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const API = "https://6931e23a11a8738467d0dfd8.mockapi.io/api/v1/products";
  
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const respuesta = await fetch(API);
      
      if (!respuesta.ok) 
        throw new Error(`Error HTTP: ${respuesta.status}`);
      
      const datos = await respuesta.json();
      setProducts(datos);

    } catch (error) {
      console.error("Error al cargar productos:", error);
      setError(error.message || "Error al cargar los productos");

    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (product) => {
    try {
      setError(null);

      const response = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      const newProduct = await response.json();
      console.log("Producto agregado: ", newProduct);
      
      if (!response.ok) 
        throw new Error(`Error HTTP: ${response.status}`);

      //Agregar el nuevo producto a la lista
      setProducts([...products, newProduct]);

    } catch (error) {
      console.error("Error al agregar:", error);
      const errorMSg = "Hubo un problema al agregar el producto.";
      setError(errorMSg);
    }
  };

  const editProduct = async (product) => {
    try {
      setError(null);

      const response = await fetch(`${API}/${product.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (!response.ok) 
        throw new Error(`Error HTTP: ${response.status}`);

      const productoActualizado = await response.json();
      setProducts(products.map(p => 
        p.id === productoActualizado.id ? productoActualizado : p
      ));

    } catch (error) {
      console.error("Error al editar:", error);
      const errorMsg = "Hubo un problema al editar el producto.";
      setError(errorMsg);
    }
  };

  const deleteProduct = async (id) => {

      try {
        setError(null);

        const response = await fetch(`${API}/${id}`, {
            method: "DELETE",
          }
        );

        if (!response.ok) 
          throw new Error("Error al eliminar");  

        // Filtra y crea un nuevo array sin el producto eliminado
        setProducts(products.filter(p => p.id !== id));
      } 
      catch (error) {
      console.error(error.message);
      const errorMsg = "Hubo un problema al eliminar el producto.";
      setError(errorMsg);
      }
  };

  return (
    <ProductsContext.Provider value={{ 
      products,
      loading,
      error, 
      loadProducts, 
      addProduct, 
      editProduct, 
      deleteProduct 
    }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);