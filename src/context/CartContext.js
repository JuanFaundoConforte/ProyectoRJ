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

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
