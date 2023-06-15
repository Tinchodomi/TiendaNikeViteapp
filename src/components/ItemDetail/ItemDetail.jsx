import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

//Importamos el CarritoContext:
import { CarritoContext } from "../../context/CarritoContext";
//Importamos el useContext:
import { useContext } from "react";

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  //1) Creamos un estado con la cantidad de productos agregados.
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  //useContext:
  const { agregarProducto } = useContext(CarritoContext);

  //2)Creamos una función manejadora de la cantidad:
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos Agregados:" + cantidad);

    //Ahora acá creo un objeto con el item y la cantidad:
    const item = { id, nombre, precio, img };
    agregarProducto(item, cantidad);
  };

  return (
    <div className="contenedorItem">
      <div className="contenedorItem1">
        <img className="imgItem" src={img} alt={nombre} />
      </div>
      <div className="contenedorItem2">
        <h2> {nombre} </h2>
        <p> ${precio} </p>
        {agregarCantidad > 0 ? (
          <Link className="btnDetail" to="/cart">
            {" "}
            Ir al carrito{" "}
          </Link>
        ) : (
          <ItemCount
            inicial={1}
            stock={stock}
            funcionAgregar={manejadorCantidad}
          />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
