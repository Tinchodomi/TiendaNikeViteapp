import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import Checkout from "./components/Checkout/Checkout";
//import NavBar2 from "./components/NavBar/NavBar2";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:idCategoria"
              element={<ItemListContainer />}
            />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="*" element={<h2> Sitio en Construcción </h2>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
