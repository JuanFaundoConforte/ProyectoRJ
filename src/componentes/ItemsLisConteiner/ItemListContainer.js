import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../Firebase/firebase";
import Item from "../Items/Items";


const ItemListContainer = () => {
  const [producto, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let itemCollection;
    if (categoryId) {
      itemCollection = db
        .collection("productos")
        .where("categoryId", "==", Number(categoryId));
    } else {
      itemCollection = db.collection("productos");
    }

    const getItems = async () => {
      setIsLoading(true);
      try {
        const response = await itemCollection.get();
        if (response.empty) {
          <p>No hay productos</p>;
        }
        setProducto(
          response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getItems();
  }, [categoryId]);

  if (error) {
    return <p>Ha ocurrido un error, intente nuevamente mas tarde</p>;
  } else
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4  text-center">
        {isLoading ? (
          <div className="spinner-border m-5" role="status"></div>
        ) : (
          producto.map((producto) => (
            <Item key={producto.id} producto={producto} />
          ))
        )}
      </div>
    );
};

export default ItemListContainer;
