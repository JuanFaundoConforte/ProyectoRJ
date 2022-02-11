import { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const newItem = { item, quantity };
    
    setCart((prevState) => [...prevState, newItem]);
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((element) => element.item.id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  const subTotal = (price, quantity) => {
    return quantity * price;
  };

  const total =(cart)=>{
    let total = 0;
    cart.forEach((element)=>{
      total += element.item.price * element.quantity;      
    });
    return total;
  }

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, subTotal, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
