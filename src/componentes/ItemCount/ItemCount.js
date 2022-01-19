import React from "react";
import ItemCountResta from "../iocons/ItemCountResta";
import ItemCountSuma from "../iocons/ItemCountSuma";
import "./ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = React.useState(initial);

  const agregar = () => {
    if (count === 0) {
      alert("Debe Seleccionar la cantidad");
    } else {
      alert("Se agrego producto al carrito");
    }
  };

  const sumar = () => {
    if (count === stock) {
      setCount(stock);
      alert("Se alcanzo la Cantidad Maxima Disponible");
    } else {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count === initial) {
      setCount(initial);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <input
        readonly
        className="form-control count"
        value={count}
        disabled
      ></input>
      <button className="btn" onClick={restar}>
        <ItemCountResta />
      </button>
      <button className="btn" onClick={sumar}>
        <ItemCountSuma />
      </button>
      <br></br>
      <button className="btn btn-secondary" onClick={agregar}>
        Agregar al Carrito
      </button>
    </div>
  );
}

export default ItemCount;
