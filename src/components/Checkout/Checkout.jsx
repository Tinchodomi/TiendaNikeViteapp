import  { useContext,useState } from "react";
import "./Checkout.css";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc,doc, getDoc } from "firebase/firestore";
import { CarritoContext } from "../../context/CarritoContext";



const Checkout = () => {
  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const manejadorFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirm) {
      setError("Por favor complete todos los campos");
      return;
    }

    if (email !== emailConfirm) {
      setError("Los campos del email no coinciden");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: carrito.reduce(
        (total, producto) => total + producto.item.precio * producto.cantidad,
        0
      ),
      nombre,
      apellido,
      telefono,
      email,
      fecha: new Date(),
    };

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "inventario", productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;
        //Data es un metodo que permite acceder a la info del Doc
        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            vaciarCarrito();
          })

          .catch((error) => {
            console.log("Error al generar la orden", error);
            setError("Se produjo un error al generar la orden");
          });
      })

      .catch((error) => {
        console.error("Error al actualizar el stock", error);
        setError("Se produjo un error al actualizar el stock de productos ");
      });
  };

  return (
    <div className="checkoutDiv">
      <form onSubmit={manejadorFormulario}>
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {producto.item.nombre} x {producto.cantidad} : $
              {producto.item.precio * producto.cantidad}
            </p>
          </div>
        ))}

        <p>Total Compra: ${total}</p>

        <hr />

        <div className="formDiv">
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="formDiv">
          <label htmlFor="">Apellido</label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className="formDiv">
          <label htmlFor="">Telefono</label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className="formDiv">
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="formDiv">
          <label htmlFor="">EmailConfirm</label>
          <input
            type="email"
            value={emailConfirm}
            onChange={(e) => setEmailConfirm(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="btnProducto" type="submit">
        
          Finalizar Compra
        </button>
       
        {ordenId && (
        <strong className="">
          Gracias por tu compra! tu numero de Orden es: {ordenId}
        </strong>
      )}
      </form>
     


     
    </div>
  );
};

export default Checkout;
