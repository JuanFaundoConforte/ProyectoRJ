import React from "react";
import swal from "sweetalert";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeItem, clear } = useCart();

  const confirmar = () => {
    swal("COMPRA CONFIRMADA", "Confirmaste la compra");
  };

  return (
    <div className="text-center">
      <h3>Carrito de compra</h3>
      {cart.map((compras) => {
        return (
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{compras.item.name}</h5>
                <p className="card-text">{compras.item.description}</p>
                <h6 className="card-text">Cantidad: {compras.quantity}</h6>
                <button
                  className="btn btn-danger"
                  onClick={() => removeItem(compras.item.id)}
                >
                  Eliminar Producto
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <br></br>
      <div>
        <button className="btn btn-danger" onClick={clear}>
          Borrar Todo
        </button>
      </div>

      <br></br>
      <div>
        <button className="btn btn-success" onClick={confirmar}>
          Confirmar Compra
        </button>
      </div>
    </div>
  );
};

export default CartPage;
