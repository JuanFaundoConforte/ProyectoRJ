import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ItemDetail = ({ producto }) => {
  const [cantidad, setCantidad] = React.useState(0);
  const navigate = useNavigate();
  const {addItem} = useCart();

  const agregar = () => {
    if (cantidad === 0) {
      swal(
        "SELECCIONE CANTIDAD",
        "Debe seleccionar al menos uno para continuar",
        "warning"
      );
    } else {
      addItem(producto, cantidad);
      swal({
        title: "AGREGAO AL CARRITO",
        text: "Se agrego exitosamente el producto",
        icon: "success",
        buttons: ["Seguir Comprando", "Ir al Carrito"],
        dangerMode: false,
      }).then((sigueCompra) => {
        if (sigueCompra) {
          navigate(`/cart`);
        } else {
          navigate(`/`);
        }
      });
    }
  };
  const sumar = () => {
    if (cantidad === producto.stock) {
      setCantidad(producto.stock);
      swal("Se alcanzo la Cantidad Maxima Disponible");
    } else {
      setCantidad((prevState) => prevState + 1);
    }
  };

  const restar = () => {
    if (cantidad === 0) {
      setCantidad(0);
    } else {
      setCantidad((prevState) => prevState - 1);
    }
  };

  return (
    <div className="col">
      <div className="card ">
        <div className="card-body ">
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
          <ItemCount
            sumar={sumar}
            restar={restar}
            onAdd={agregar}
            cantidad={cantidad}
          />
        </div>
        <div className="d-grid gap-2  mx-auto"></div>
        <div className="card-footer text-muted">
          Cantidad Disponible: {producto.stock}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
