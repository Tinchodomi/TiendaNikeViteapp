import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <Logo />
      </Link>
      <nav className="nav">
        <ul>
          <li>
            <NavLink className="navlink" to={`/categoria/1`}>
              {" "}
              Hombre{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to={`/categoria/2`}>
              {" "}
              Mujer{" "}
            </NavLink>
          </li>

          <li>
            <NavLink className="navlink" to={`/categoria/3`}>
              {" "}
              Niños{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to={`/categoria/4`}>
              {" "}
              Destacados{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
