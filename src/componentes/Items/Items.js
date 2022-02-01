import React from "react";
import "./Items.css";
import { useNavigate } from "react-router-dom";

const Item = ({ producto }) => {
  const navigate = useNavigate();
  return (
    <div className="col justify-content-center">
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
          <button
            className="btn btn-secondary"
            onClick={() => navigate(`/item/${producto.id}`)}
          >
            Ver Producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
