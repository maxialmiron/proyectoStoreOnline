import { useEffect, useState } from "react";

const Categories = () => {
  const CATEGORIES_URL = 'https://fakestoreapi.com/products/categories/';
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(CATEGORIES_URL)
      .then(response => response.json())
      .then(datos => {
        setCategories(datos);
        console.log("Datos cargados:", datos);
      })
      .catch(error => {
        console.error("Error:", error);
        setError("Error al cargar Categorias");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando Categorias...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="">
      <div className="grid grid-cols-4 gap-4">
        <ul>
          {categories.map((category) => (
            <li>
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Categories;