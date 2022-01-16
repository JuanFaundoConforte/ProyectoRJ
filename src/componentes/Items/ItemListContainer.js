import React from "react";

const ItemListContainer = ({ name, price, description }) => {
  const agregar = () => {
    alert("Se agrego producto al carrito");
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{price}</h6>
        <p className="card-text">{description}</p>
        <button className="btn btn-secondary" onClick={agregar}>
          Agregar
        </button>
      </div>
    </div>
  );
};

export default ItemListContainer;
