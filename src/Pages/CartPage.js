import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeItem, clear, subTotal } = useCart();

  const confirmar = () => {
    swal("COMPRA CONFIRMADA", "Confirmaste la compra");
  };
  if (cart.length === 0) {
    return (
      <div className="text-center">
        <h2>No hay productos en tu carrito</h2>
          <h5>Ve al catalogo para empezar a comprar</h5>
          <Link className="nav-link" to="/">
          Ir al Catalogo
        </Link>
        
      </div>
    );
  } else {
    return (
      <>
        <div className="text-center card-group">
          {cart.map((compras) => {
            return (
              <div className="col" key={compras.item.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{compras.item.name}</h5>
                    <p className="card-text">{compras.item.description}</p>
                    <h6 className="card-text">Cantidad: {compras.quantity}</h6>
                    <h6 className="card-text">
                      Subtotal: $ {" "}
                      {subTotal(compras.item.price, compras.quantity)}
                    </h6>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeItem(compras.item.id)}
                    >
                      x
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <br></br>
        </div>
        <div className="text-center">         

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
      </>
    );
  }
};

export default CartPage;
