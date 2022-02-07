import React from "react";

import ItemCountResta from "../iocons/ItemCountResta";
import ItemCountSuma from "../iocons/ItemCountSuma";
import "./ItemCount.css";

function ItemCount({ sumar, restar, onAdd, cantidad }) {
  return (
    <div>
      <input className="form-control count" value={cantidad} disabled></input>
      <button className="btn" onClick={restar}>
        <ItemCountResta />
      </button>
      <button className="btn" onClick={sumar}>
        <ItemCountSuma />
      </button>
      <br></br>
      <button className="btn btn-secondary" onClick={onAdd}>
        Agregar al Carrito
      </button>
    </div>
  );
}

export default ItemCount;
