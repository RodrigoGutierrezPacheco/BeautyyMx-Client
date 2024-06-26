import { useState, useEffect } from "react";
import './FinalizarOrden.css';

export default function FinalizarOrden() {
    const [userDetails, setUserDetails] = useState({
        quienRecibe: "",
        telefono: "",
        calle: "",
        numeroExterior: "",
        numeroInterior: "",
        colonia: "",
        ciudad: "",
        estado: "",
        cp: "",
        referencias: "",
        correo: "",
        subtotal: 0,
        costoEnvio: 129,
        total: 0
    });
    const zonaExtendida = "62130"
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        if (userDetails?.cp !== "") {
            const newCostoEnvio = userDetails?.cp === zonaExtendida ? 200 : 129;
            setUserDetails(prevUserDetails => ({
                ...prevUserDetails,
                costoEnvio: newCostoEnvio,
                total: prevUserDetails.subtotal + newCostoEnvio
            }));
        }
    }, [userDetails?.cp, zonaExtendida, userDetails.subtotal]);


    useEffect(() => {
        // Cargar información del usuario desde localStorage si existe
        const savedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
        if (savedUserDetails) {
            setUserDetails(savedUserDetails);
        }

        // Cargar items del carrito desde localStorage
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(savedCartItems);

        // Calcular el subtotal y total
        const calculatedSubtotal = savedCartItems.reduce((total, item) => total + item.precio * item.quantity, 0);
        const calculatedTotal = calculatedSubtotal + userDetails?.costoEnvio;
        setUserDetails(prevState => ({
            ...prevState,
            subtotal: calculatedSubtotal,
            total: calculatedTotal
        }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar los campos
        for (const key in userDetails) {
            if (userDetails[key] === "" && key !== "numeroInterior") { // Allow numeroInterior to be empty
                alert(`El campo ${key} es obligatorio.`);
                return;
            }
        }

        // Guardar en localStorage
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        window.location.href = '/finalizar-compra';
    };

    const updateCartItemQuantity = (index, newQuantity) => {
        const updatedCartItems = cartItems.map((item, i) =>
            i === index ? { ...item, quantity: newQuantity } : item
        ).filter(item => item.quantity > 0);

        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

        const newSubtotal = updatedCartItems.reduce((total, item) => total + item.precio * item.quantity, 0);
        const newTotal = newSubtotal + userDetails.costoEnvio;
        setUserDetails({
            ...userDetails,
            subtotal: newSubtotal,
            total: newTotal
        });
    };

    const removeCartItem = (index) => {
        const updatedCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

        const newSubtotal = updatedCartItems.reduce((total, item) => total + item.precio * item.quantity, 0);
        const newTotal = newSubtotal + userDetails.costoEnvio;
        setUserDetails({
            ...userDetails,
            subtotal: newSubtotal,
            total: newTotal
        });
    };

    return (
        <div className="celular px-5">
            <h2 className="font-bold">Resumen de tu orden</h2>
            {/* <form className="form-orden" onSubmit={handleSubmit}>
                <div className="input-form">
                    <label>Quien Recibe:</label>
                    <input placeholder="Ingresa el Nombre de quien recibe" className="input-orden" type="text" name="quienRecibe" value={userDetails.quienRecibe} onChange={handleChange} />
                </div>
                <div className="input-form">
                    <label>Teléfono:</label>
                    <input placeholder="Ingresa tu Teléfono" className="input-orden" type="text" name="telefono" value={userDetails.telefono} onChange={handleChange} />
                </div>
                <div className="input-form">
                    <label>Calle:</label>
                    <input placeholder="Ingresa la Calle" className="input-orden" type="text" name="calle" value={userDetails.calle} onChange={handleChange} />
                </div>
                <div className="input-form">
                    <label>Número Exterior:</label>
                    <input placeholder="Ingresa el Número Exterior" className="input-orden" type="text" name="numeroExterior" value={userDetails.numeroExterior} onChange={handleChange} />
                </div>
                <div className="input-form">
                    <label>Número Interior:</label>
                    <input placeholder="Ingresa el Número Interior" className="input-orden" type="text" name="numeroInterior" value={userDetails.numeroInterior} onChange={handleChange} />
                </div>
                <div className="input-form">
                    <label>Colonia:</label>
                    <input placeholder="Ingresa la Colonia" className="input-orden" type="text" name="colonia" value={userDetails.colonia} onChange={handleChange} />
                </div>
                <div className="input-form">
                    <label>Ciudad:</label>
                    <input placeholder="Ingresa la Ciudad" className="input-orden" type="text" name="ciudad" value={userDetails.ciudad} onChange={handleChange} />
                </div>
                <div className="input-form">
                    <label>Estado:</label>
                    <input placeholder="Ingresa el Estado" className="input-orden" type="text" name="estado" value={userDetails.estado} onChange={handleChange} />
                </div>
                <div className="input-form">
                    <label>Código Postal:</label>
                    <input placeholder="Ingresa el Código Postal" className="input-orden" type="text" name="cp" value={userDetails.cp} onChange={handleChange} />
                    <span>{userDetails?.cp === zonaExtendida ? "El codigo postal ingresado es de zona extendida" : ""}</span>
                </div>
                <div className="input-form">
                    <label>Referencias:</label>
                    <input placeholder="Ingresa las Referencias de tu domicilio" className="input-orden" type="text" name="referencias" value={userDetails.referencias} onChange={handleChange} />
                </div>
                <div className="input-form">
                    <label>Correo:</label>
                    <input placeholder="Ingresa tu Correo electrónico" className="input-orden" type="email" name="correo" value={userDetails.correo} onChange={handleChange} />
                </div>
                <div>
                    {cartItems.map((item, index) => (
                        <div key={index}>
                            <div key={item.codigo} className="cart-item">
                                <img className="cart-item-image" src={item?.fotos} alt="Imagen del producto" />
                                <div className="cart-item-details">
                                    <div className="cart-item-row">
                                        <h2 className="cart-item-title">
                                            {item.marca}-{item.descripcion}
                                        </h2>
                                    </div>
                                    <div className="cart-item-row">
                                        <p className="cart-item-price">${item.precio}.00 MXN</p>
                                        <span className="cart-item-quantity">{item.quantity} {item?.quantity > 1 ? "pzs" : "pz"}</span>
                                    </div>
                                    <div className="cart-item-actions">
                                        <button type="button" onClick={() => updateCartItemQuantity(index, item.quantity + 1)}>+</button>
                                        <button type="button" onClick={() => updateCartItemQuantity(index, item.quantity - 1)}>-</button>
                                        <button type="button" onClick={() => removeCartItem(index)}>Eliminar</button>
                                    </div>
                                    <hr className="hr" />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="box-total">
                        <span>Subtotal: ${userDetails.subtotal}.00 MXN</span>
                        <span>Envío: ${userDetails.costoEnvio}.00 MXN</span>
                        <span>Total: ${userDetails.total}.00 MXN</span>
                    </div>
                </div>
                <button type="submit" className="boton-orden">Pasar al método de pago</button>
            </form> */}
            <div>
                {cartItems.map((item, index) => (
                    <div key={index}>
                        <div key={item.codigo} className="cart-item">
                            <img className="cart-item-image" src={item?.fotos} alt="Imagen del producto" />
                            <div className="cart-item-details">
                                <div className="cart-item-row">
                                    <h2 className="cart-item-title">
                                        {item.marca}-{item.descripcion}
                                    </h2>
                                </div>
                                <div className="cart-item-row">
                                    <p className="cart-item-price">${item.precio}.00 MXN</p>
                                    <span className="cart-item-quantity">{item.quantity} {item?.quantity > 1 ? "pzs" : "pz"}</span>
                                </div>
                                <div className="cart-item-actions">
                                    <button type="button" onClick={() => updateCartItemQuantity(index, item.quantity + 1)}>+</button>
                                    <button type="button" onClick={() => updateCartItemQuantity(index, item.quantity - 1)}>-</button>
                                    <button type="button" onClick={() => removeCartItem(index)}>Eliminar</button>
                                </div>
                                <hr className="hr" />
                            </div>
                        </div>
                    </div>
                ))}
                <div className="box-total">
                    <span>Subtotal: ${userDetails.subtotal}.00 MXN</span>
                    <span>Envío: ${userDetails.costoEnvio}.00 MXN</span>
                    <span>Total: ${userDetails.total}.00 MXN</span>
                </div>
            </div>
        </div>
    );
}
