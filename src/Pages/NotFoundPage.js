import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-center">
      <h1>Error 404</h1>
      <p>No se encontro la pagina...</p>
      <Link to="/" className="nav-link">Volver a la Home</Link>
    </div>
  );
};

export default NotFoundPage;
