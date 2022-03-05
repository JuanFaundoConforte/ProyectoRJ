import React from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useCart } from "../context/CartContext";
import { getFirestore } from "../Firebase/firebase";

const CartPage = () => {
  const { cart, removeItem, clear, subTotal, total } = useCart();
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [direction, setDirection] = React.useState("");
  let navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!name || !phone || !direction) {
      swal("Complete todos los datos para continuar");
      return false;
    }
    const newOrder = {
      buyer: {
        name,
        phone,
        direction,
      },
      item: cart,
      total: total(cart),
    };

    const db = getFirestore();
    db.collection("orders")
      .add(newOrder)
      .then((res) => {
        console.log("agregado", res.id);
        navigate(`/checkOut/${res.id}`);
        clear();
      })
      .catch((err) => console.log("hubo un error", err));
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
                      Subtotal: ${" "}
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
          <p>Total compra: {total(cart)}</p>
          <div>
            <button className="btn btn-danger" onClick={clear}>
              Borrar Todo
            </button>
          </div>
          <br></br>
          <hr></hr>         
          <div className="container">
          <h3>Complete el formulario para continuar con la compra</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    placeholder="Ingrese su nombre"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div class="form-group col-md-6">
                  <label htmlFor="phone">Telefono</label>
                  <input
                    name="phone"
                    type="number"
                    className="form-control"
                    id="phone"
                    placeholder="Ingrese su telefono"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="direction">Direccion</label>
                  <input
                    id="direction"
                    name="direction"
                    type="text"
                    className="form-control"
                    placeholder="Ingrese su Direccion"
                    value={direction}
                    onChange={(e) => setDirection(e.target.value)}
                  />
                </div>
              </div>
              <br></br>
              <button className="btn btn-success" type="submit">
                Confirmar Compra
              </button>
            </form>
          </div>
          <Link className="nav-link" to="/">
            Ir al Catalogo
          </Link>
        </div>
      </>
    );
  }
};

export default CartPage;
