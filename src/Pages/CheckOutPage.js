import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../Firebase/firebase";
import { Link } from "react-router-dom";

const CheckOutPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    db.collection("orders")
      .doc(orderId)
      .get()
      .then((res) => setOrder({ ...res.data(), id: res.id }))
      .finally(() => setIsLoading(false));
  }, [orderId]);

  return (
    <div className="text-center">
      {isLoading ? (
        <div className="spinner-border m-5" role="status"></div>
      ) : (
        <div>
          <h3>GRACIAS POR TU COMPRA </h3>
          <h4>Tu Numero de compra es:</h4>
          <p>{order.id}</p>
          <h2>Total de la compra: $ {order.total}</h2>
          <Link className="nav-link" to="/">
            Volver al Inicio
          </Link>
        </div>
      )}
    </div>
  );
};

export default CheckOutPage;
