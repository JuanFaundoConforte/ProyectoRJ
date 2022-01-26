import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailConrainer = () => {
  const [producto, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const URL = "http://localhost:3001/productos";

  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setProducto(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {isLoading ? (
        <div className="spinner-border m-5" role="status"></div>
      ) : (
        producto.map((producto) => (
          <ItemDetail key={producto.id} producto={producto} />
        ))
      )}
    </div>
  );
};

export default ItemDetailConrainer;
