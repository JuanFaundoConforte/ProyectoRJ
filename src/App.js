import "./App.css";
import Navbar from "./componentes/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductosPage from "./Pages/ProductosPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import CartPage from "./Pages/CartPage";
import NotFoundPage from "./Pages/NotFoundPage";
import { CartProvider } from "./context/CartContext";
import CheckOutPage from "./Pages/CheckOutPage";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <br></br>
        <Routes>
          <Route path="/">
            <Route index element={<ProductosPage />} />
          </Route>
          <Route path="item">
            <Route index element={<ProductosPage />} />
            <Route path=":productId" element={<ProductDetailPage />} />
          </Route>
          <Route path="category">
            <Route path=":categoryId" element={<ProductosPage />} />
          </Route>
          <Route path="cart" element={<CartPage />} />
          <Route path="checkOut/:orderId" element={<CheckOutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
