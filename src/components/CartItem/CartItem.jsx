import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import "./CartItem.css";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);
  return (
    <div className="contenedorItemcart">
      <img className="contenedorImg" src={item.img} alt="" />

      <div className="contenedorCart2">
        <p> {item.nombre} </p>
        
        <p>Cantidad: {cantidad} </p>
        <p>Precio: {item.precio * cantidad} </p>
       
      </div>
      <button
          className="btnProducto"
          onClick={() => eliminarProducto(item.id)}
        >
          Eliminar
        </button>
    </div>
  );
};

export default CartItem;
