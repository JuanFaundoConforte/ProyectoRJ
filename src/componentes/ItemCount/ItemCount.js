import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCountResta from "../iocons/ItemCountResta";
import ItemCountSuma from "../iocons/ItemCountSuma";
import "./ItemCount.css";

function ItemCount({ sumar, restar, onAdd, cantidad }) {
  const navigate = useNavigate();

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
      <div className="d-grid gap-2  mx-auto">
        <button className="btn btn-secondary" onClick={onAdd}>
          Agregar al Carrito
        </button>
        <button className="btn btn-secondary" onClick={() => navigate(`/cart`)}>
          Ir al Carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
