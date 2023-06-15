import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";
import CartLogo from "../CartLogo/CartLogo";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <>
      <Link className="cartwid" to="/cart">
        <CartLogo />
        {cantidadTotal > 0 && <span> {cantidadTotal} </span>}
      </Link>
    </>
  );
};

export default CartWidget;
