import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ name, price, description }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{price}</h6>
        <p className="card-text">{description}</p>

        <ItemCount stock={6} initial={0} />
      </div>
    </div>
  );
};

export default ItemListContainer;
