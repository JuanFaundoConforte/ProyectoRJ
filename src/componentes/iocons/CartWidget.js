import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { cartQuantity } = useCart();
  return (
    <Link to= "/cart" className="nav-link active carrito">
      <RiShoppingCartLine className="carticon" /> ({cartQuantity})
    </Link>
  );
};

export default CartWidget;
