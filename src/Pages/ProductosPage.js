import React from "react";
import ItemListContainer from "../componentes/ItemsLisConteiner/ItemListContainer";

const ProductosPage = () => {
  return (
    <div>
      <h3 className="text-center">Productos</h3>
      <div className="card-group justify-content-center">
        <ItemListContainer />
      </div>
    </div>
  );
};

export default ProductosPage;
