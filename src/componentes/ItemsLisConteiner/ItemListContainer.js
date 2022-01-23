import React from "react";
import { getProductos } from "../../productos";
import { useEffect, useState } from "react";
import Item from "../Items/Items";

const ItemListContainer = () => {
  const [producto, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProductos()
      .then((data) => {
        setProducto(data);
      })
      .catch((error) =>
        alert("Ha ocurrido un error, Intenete de nuevo Mas tarde.")
      )
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4" >
      {isLoading ? <div className="spinner-border m-5" role="status">
  <span className="visually-hidden">Loading...</span>
</div> : (
      producto.map((producto) => (
        <Item key={producto.id} producto={producto} />
      )))}
    </div>
  );
};

export default ItemListContainer;
