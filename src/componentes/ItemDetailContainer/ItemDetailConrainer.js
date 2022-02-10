import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../Firebase/firebase";

const ItemDetailConrainer = () => {
  const [producto, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("productos");
    const selectedItem = itemCollection.doc(productId);

    setIsLoading(true);
    selectedItem
      .get()
      .then((response) => {
        if (!response.exists) console.log("no hay producto");
        setProducto({ ...response.data(), id: response.id });
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [productId]);

  return (
    <div className="card-group text-center">
      {isLoading ? (
        <div className="spinner-border m-5" role="status"></div>
      ) : (
        <div>
          <ItemDetail key={producto.id} producto={producto} />
        </div>
      )}
    </div>
  );
};

export default ItemDetailConrainer;
