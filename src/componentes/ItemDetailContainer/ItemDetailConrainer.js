import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailConrainer = () => {
  const [producto, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const URL = `http://localhost:3001/productos/${productId}`;
    setIsLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setProducto(json))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [productId]);

  return (
    <div className="card-group text-center">
      {isLoading ? (
        <div className="spinner-border m-5" role="status"></div>
      ) : (
        <div>
          <ItemDetail key={producto.id} producto={producto} />
        </div>
      )}
    </div>
  );
};

export default ItemDetailConrainer;
