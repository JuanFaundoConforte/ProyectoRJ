import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = (cantidad) => {
  const navigate = useNavigate();
  return (
    <button className="btn carrito" onClick={() => navigate(`/cart`)}>
      <RiShoppingCartLine className="carticon" />
    </button>
  );
};

export default CartWidget;
