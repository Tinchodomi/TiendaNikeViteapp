import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img,stock}) => {
  return (
    <div className="cardProducto">
      <img className="imgProducto" src={img} alt={nombre} />
      <h5 className="nombreProducto"> {nombre} </h5>
      <p className="precioProducto">${precio}</p>
      <p>Stock : {stock}</p>
      <Link className="btnProducto" to={`/item/${id}`}>
        {" "}
        Ver Detalles{" "}
      </Link>
    </div>
  );
};

export default Item;
