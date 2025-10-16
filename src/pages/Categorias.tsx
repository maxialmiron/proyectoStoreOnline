import { useEffect, useState } from "react";

const Categorias = () => {
  const CATEGORIAS_URL = 'https://fakestoreapi.com/products/categories/';
  const [categorias, setCategorias] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setCargando(true);
    fetch(CATEGORIAS_URL)
      .then(response => response.json())
      .then(datos => {
        setCategorias(datos);
        console.log("Datos cargados:", datos);
      })
      .catch(error => {
        console.error("Error:", error);
        setError("Error al cargar Categorias");
      })
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p>Cargando Categorias...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="">
      <div className="grid grid-cols-4 gap-4">
        <ul>
          {categorias.map((categoria) => (
            <li>
              {categoria}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Categorias;