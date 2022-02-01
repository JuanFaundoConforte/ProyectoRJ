import "./App.css";
import Navbar from "./componentes/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductosPage from "./Pages/ProductosPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import CartPage from "./Pages/CartPage";
import CategoryPage from "./Pages/CategoryPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
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
          <Route path=":categoryId" element={<CategoryPage />} />
        </Route>
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
