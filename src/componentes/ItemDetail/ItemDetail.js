import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {
  return (
  
      <div className="card">
        <div className="card-body">
          <div className="img-container">
            <img
              className="card-img-top"
              src={producto.img}
              alt={producto.name}
            />
          </div>
          <h5 className="card-title">{producto.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">$ {producto.price}</h6>
          <p className="card-text">{producto.description}</p>
          <ItemCount stock={producto.stock} initial={0} />
        </div>
        <div class="card-footer text-muted">
          Cantidad Disponible: {producto.stock}
        </div>
      </div>
    
  );
};

export default ItemDetail;
