import React from "react";
import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <div className="contador">
        <button className="btnContador" onClick={decrementar}>
          {" "}
          -{" "}
        </button>
        <h6> {contador} </h6>
        <button className="btnContador" onClick={incrementar}>
          {" "}
          +{" "}
        </button>
      </div>
      <button className="btnProducto" onClick={() => funcionAgregar(contador)}>
        {" "}
        Agregar al Carrito{" "}
      </button>
    </>
  );
};

//Incrementar y decrementar van sin parentesis porque si no se ejecutarían al momento de renderizar el componente. Y solo queremos que se ejecute cuando el visitante haga click en los botones.

export default ItemCount;
