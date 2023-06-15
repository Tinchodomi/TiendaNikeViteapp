
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../Logo/Logo";
import CartWidget from "../CartWidget/CartWidget";

function BasicExample() {
  return (
    <Navbar className="navBar" bg="light" expand="lg">
        
        <Link to={"/"}>
          <Logo />
        </Link>

        <Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav">
            <Nav className="miNav">
              <NavLink className="navlink" to={`/categoria/1`}>
                Hombre
              </NavLink>
              <NavLink className="navlink" to={`/categoria/2`}>
                Mujer
              </NavLink>
              <NavLink className="navlink" to={`/categoria/3`}>
                Niños
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Brand>
        
           
        <CartWidget/>
     
    </Navbar>
  );
}

export default BasicExample;
