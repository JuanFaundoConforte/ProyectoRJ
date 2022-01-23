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
      {isLoading ? <div class="spinner-border m-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div> : (
      producto.map((productos) => (
        <Item key={productos.id} producto={productos} />
      )))}
    </div>
  );
};

export default ItemListContainer;
