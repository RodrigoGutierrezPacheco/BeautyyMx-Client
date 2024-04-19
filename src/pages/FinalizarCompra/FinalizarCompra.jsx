import React, { useState, useEffect } from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import Swal from 'sweetalert2'



export default function FinalizarCompra() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const [paypalAmount, setPaypalAmount] = useState(0);

    useEffect(() => {
        setPaypalAmount(cartItems.reduce((total, item) => total + item.precio * item.quantity, 0));
    }, [cartItems]);

    const createWhatsAppMessage = (orderDetails) => {
        let message = `¡Hola! Mi nombre es ${orderDetails.name} y acabo de realizar una compra en tu tienda. Aquí está el resumen de la compra:\n`;

        // Agrega detalles de cada producto comprado
        orderDetails.products.forEach(item => {
            message += `- ${item.descripcion}: Cantidad: ${item.quantity}, Precio por unidad: $${item.precio}.00 MXN\n`;
        });

        // Agrega el total de la compra
        message += `Total de la compra: $${orderDetails.totalAmount}.00 MXN\n`;

        // Agrega la dirección de envío
        message += `Dirección de envío: ${orderDetails.calle}, ${orderDetails.coloniadelegacion}, ${orderDetails.municipio}, ${orderDetails.estado}, CP: ${orderDetails.cp}\n`;

        // Agrega el ID de transacción de PayPal
        message += `ID de transacción de PayPal: ${orderDetails.orderId}\n`;

        return message;
    };

    const handlePaypalPurchase = (orderDetails) => {
        // Lógica para procesar la compra con PayPal

        // Muestra una modal para confirmar el envío del mensaje de WhatsApp
        Swal.fire({
            title: 'Compra realizada con exito!',
            text: 'Se enviará un mensaje a WhatsApp para confirmar tu compra. ¿Deseas continuar?',
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Una vez que el usuario acepta, construye el mensaje para WhatsApp
                const message = createWhatsAppMessage(orderDetails);

                // Genera el enlace de WhatsApp
                const whatsappLink = `https://wa.me/525638686467?text=${encodeURIComponent(message)}`;

                // Redirige al usuario al enlace de WhatsApp
                window.open(whatsappLink, '_blank');

                // Show a button in the modal to send the WhatsApp message
                // Swal.fire({
                //   title: 'Pago Completado!',
                //   text: `Gracias por tu pago ${orderDetails.name}, en breve recibirás un correo a ${orderDetails.email} con la información solicitada y otro correo con la información de pago de PayPal`,
                //   showCancelButton: true,
                //   cancelButtonText: 'No, gracias',
                //   confirmButtonText: 'Enviar lista por WhatsApp',
                //   showLoaderOnConfirm: true,
                //   preConfirm: () => {
                //     // Aquí podrías abrir el modal para enviar la información a WhatsApp
                //     handleOpenWhatsAppModal();
                //   }
                // });
            }
        });
    };

    return (
        <div>
            <h2>Productos en el carrito:</h2>
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
                                <span className="cart-item-quantity">{item.quantity}</span>
                            </div>
                            <hr className="hr" />
                        </div>
                    </div>
                </div>
            ))}
            <span>Total: {paypalAmount}</span>
            <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID_TEST, components: "buttons", currency: "MXN", locale: "es_MX" }}>
                <PayPalButtons
                    createOrder={(data, actions) => {
                        console.log(data, actions)
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: cartItems.reduce((total, item) => total + item.precio * item.quantity, 0),
                                        currency_code: "MXN",
                                    },

                                    name: "Reto 1",
                                    description: "Reto que te ayudara a cumplir todas tus metas del mundo",
                                },
                            ],
                            application_context: {
                                brand_name: "Beautyy Mx",
                                name: "Reto 1",
                                description: "Reto 1 que ye ayudará a cumplir todas tus metas",
                                landing_page: "NO_PREFERENCE",
                                user_action: "PAY_NOW",
                            }
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                            const orderDetails = {
                                orderId: details.id,
                                name: details.payer.name.given_name,
                                lastName: details.payer.name.surname,
                                email: details.payer.email_address,
                                shippingAddress: details.purchase_units[0].shipping.address,
                                calle: details.purchase_units[0].shipping.address?.address_line_1,
                                coloniadelegacion: details.purchase_units[0].shipping.address?.address_line_2,
                                estado: details.purchase_units[0].shipping.address?.admin_area_1,
                                municipio: details.purchase_units[0].shipping.address?.admin_area_2,
                                cp: details.purchase_units[0].shipping.address?.postal_code,
                                products: cartItems,
                                numeroDeProductos: cartItems?.length,
                                productos: cartItems.map((producto) => { return producto?.codigo }),
                                totalAmount: cartItems.reduce((total, item) => total + item.precio * item.quantity, 0),
                            };
                            console.log(orderDetails)
                            handlePaypalPurchase(orderDetails);
                            const name = details.payer.name.given_name;
                            const orderId = details.id;
                            const email = details.payer.email_address;
                            // Swal.fire({
                            //     icon: 'success',
                            //     title: 'Pago Completado!',
                            //     text: `Gracias por tu pago ${name}, en breve recibirás un correo a ${email} con la información solicitada y otro correo con la información de pago de PayPal`,
                            //     confirmButtonColor: '#3085d6',
                            // })
                            // emailjs.send("service_n648gkj", "template_0wzy1rm", {
                            //   user_name: details.payer.name,
                            //   from: "ketochallengecuerna@gmail.com",
                            //   user_email: details.payer.email_address,
                            //   message: "confirmacion de compra",
                            // }, process.env.REACT_APP_EMAILJS_PUBLICKEY);

                        })
                    }}
                    onCancel={() => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Pago Cancelado',
                            text: 'Se ha cancelado la solicitud con exito',
                            confirmButtonColor: '#3085d6',
                        })
                    }}
                />
            </PayPalScriptProvider>
        </div>
    );
}
