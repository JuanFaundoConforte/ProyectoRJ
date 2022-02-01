import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../componentes/ItemsLisConteiner/ItemListContainer";

const CategoryPage = () => {
  const [producto, setProducto] = useState([]);
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    const URL = `http://localhost:3001/category/${categoryId}`;
    setIsLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setCategory(json))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [categoryId]);

  useEffect(() => {
    const URL = `http://localhost:3001/productos/`;
    setIsLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setProducto(json))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="card-group justify-content-center">
      {isLoading ? (
        <div className="spinner-border m-5" role="status"></div>
      ) : (
        <div className="text-center">
          <h3>{category.name}</h3>
          <ItemListContainer key={producto.id} producto={producto} />
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
