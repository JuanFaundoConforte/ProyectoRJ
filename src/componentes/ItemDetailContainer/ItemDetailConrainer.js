import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailConrainer = () => {
  const [producto, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const URL = "http://localhost:3001/productos/1";

  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setProducto(json))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="">
      {isLoading ? (
        <div className="spinner-border m-5" role="status"></div>
      ) : (
          <div>
            <h3>Detalle de Producto: {producto.name}</h3>
          <ItemDetail key={producto.id} producto={producto} />
          </div>
      )}
    </div>
  );
};

export default ItemDetailConrainer;
