import React from "react";
import { useEffect, useState } from "react";
import Item from "../Items/Items";

const URL = "http://localhost:3001/productos";

const ItemListContainer = () => {
  const [producto, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setProducto(json))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4  text-center">
      {isLoading ? (
        <div className="spinner-border m-5" role="status"></div>
      ) : (
        producto.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))
      )}
    </div>
  );
};

export default ItemListContainer;
