import React, { useState, useEffect, useRef } from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';
import jsPDF from 'jspdf';

export default function FinalizarCompra() {
    const form = useRef();
    const [cp, setCp] = useState(0)
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
        correo: ""
    });

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
        // sendEmail()
        // Lógica para procesar la compra con PayPal

        // Muestra una modal para confirmar el envío del mensaje de WhatsApp
        // Swal.fire({
        //     title: 'Compra realizada con exito!',
        //     text: 'Se enviará un mensaje a WhatsApp para confirmar tu compra. ¿Deseas continuar?',
        //     icon: 'success',
        //     showCancelButton: true,
        //     confirmButtonText: 'Aceptar',
        //     cancelButtonText: 'Cancelar'
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         // Una vez que el usuario acepta, construye el mensaje para WhatsApp
        //         const message = createWhatsAppMessage(orderDetails);

        //         // Genera el enlace de WhatsApp
        //         const whatsappLink = `https://wa.me/525638686467?text=${encodeURIComponent(message)}`;

        //         // Redirige al usuario al enlace de WhatsApp
        //         window.open(whatsappLink, '_blank');

        //         // Show a button in the modal to send the WhatsApp message
        //         Swal.fire({
        //             title: 'Pago Completado!',
        //             text: `Gracias por tu pago ${orderDetails.name}, en breve recibirás un correo a ${orderDetails.email} con la información solicitada y otro correo con la información de pago de PayPal`,
        //             showCancelButton: true,
        //             cancelButtonText: 'No, gracias',
        //             confirmButtonText: 'Enviar lista por WhatsApp',
        //             showLoaderOnConfirm: true,
        //             preConfirm: () => {
        //                 // Aquí podrías abrir el modal para enviar la información a WhatsApp
        //                 handleOpenWhatsAppModal();
        //             }
        //         });
        //     }
        // });
    };

    useEffect(() => {
        const savedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
        if (savedUserDetails) {
            setUserDetails(savedUserDetails);
        }
    }, []);

    return (
        <div className='celular px-5'>
            <h2 className='mb-5'>Finalizar compra</h2>
            <div className='datos-envio'>
                <span>Datos de envío:</span>
                <span>Recibe: {userDetails?.quienRecibe}</span>
                <span>Teléfono: {userDetails?.telefono}</span>
                <span>Calle: {userDetails?.calle}</span>
                <span>Número exterior: {userDetails?.numeroExterior}</span>
                <span>Número interior: {userDetails?.numeroInterior}</span>
                <span>Colonia: {userDetails?.colonia}</span>
                <span>Ciudad: {userDetails?.ciudad}</span>
                <span>Estado: {userDetails?.estado}</span>
                <span>Código postal: {userDetails?.cp}</span>
                <span>Referencias: {userDetails?.referencias}</span>
                <span>Correo electrónico: {userDetails?.correo}</span>
            </div>

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
                            <hr className="hr" />
                        </div>
                    </div>
                </div>
            ))}
            <span className='editar-orden' onClick={() => {
                window.location.href = '/datos-orden';
            }}>Editar orden</span>

            <div className='costos-finalizar'>
                <span>Costo de envio: ${userDetails?.costoEnvio}.00 MXN</span>
                <span>Subtotal: ${paypalAmount}.00 MXN</span>
                <span>Total: {`$${paypalAmount + userDetails?.costoEnvio}.00 MXN`}</span>
            </div>
            <div className='botones-paypal'>
                <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID, components: "buttons", currency: "MXN", locale: "es_MX" }}>
                    <PayPalButtons
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            // value: paypalAmount + costoEnvio,
                                            value: 0.1,
                                            currency_code: "MXN",
                                        },

                                        name: "Beautyy Mx",
                                        description: "",
                                    },
                                ],
                                application_context: {
                                    brand_name: "Beautyy Mx",
                                    name: "Beautyy Mx",
                                    description: "",
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
                                const name = details.payer.name.given_name;
                                const orderId = details.id;
                                const email = userDetails?.correo;
                                // Expresión regular para detectar dominios de correo electrónico de Outlook
                                const isOutlookEmail = email.includes('outlook') || email.includes('live') || email.includes('hotmail');
                                const serviceId = isOutlookEmail ? process.env.REACT_APP_EMAILJS_SERVICEID_OUTLOOK : process.env.REACT_APP_EMAILJS_SERVICEID_GMAIL;
                                const params = {
                                    user_name: userDetails?.quienRecibe,
                                    from: "beautyymx@gmail.com",
                                    userEmail: userDetails?.correo,
                                    telefonoContacto: userDetails?.telefono,
                                    user_orderId: orderDetails?.orderId,
                                    products: orderDetails.products.map(product => ({
                                        name: product.descripcion,
                                        quantity: product.quantity,
                                        price: product.precio,
                                        image: product.fotos
                                    })),
                                    subtotalAmount: userDetails?.total,
                                    totalAmount: userDetails?.total + userDetails?.costoEnvio,
                                    calle: userDetails?.calle,
                                    colonia: userDetails?.colonia,
                                    cp: userDetails?.cp,
                                    estado: userDetails?.estado,
                                    ciudad: userDetails?.ciudad,
                                    costoEnvio: userDetails?.costoEnvio,
                                    municipio: userDetails?.ciudad,
                                    referencias: userDetails?.referencias
                                }
                                emailjs.send(serviceId, process.env.REACT_APP_EMAILJS_TEMPLATE, params, process.env.REACT_APP_EMAILJS_PK).then(
                                    (response) => {
                                        Swal.fire({
                                            icon: 'success',
                                            title: 'Pago Completado!',
                                            text: `Gracias por tu pago ${name}, se enviará un correo electrónico con los detalles de tu compra a ${email}, aquí tienes tu ticket`,
                                            allowOutsideClick: false,
                                            allowEscapeKey: false,
                                            confirmButtonText: 'Descargar',
                                            confirmButtonColor: '#3085d6',
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                const pdf = new jsPDF();
                                                const imgUrl = 'https://i.postimg.cc/NjSkBHBz/beauty-ico.png';
                                                pdf.addImage(imgUrl, 'PNG', 10, 10, 50, 50);
                                                pdf.text(`¡Gracias por tu compra, ${userDetails?.quienRecibe}!`, 10, 70);
                                                pdf.text(`Pedido numero: #${orderDetails.orderId}`, 10, 80);
                                                pdf.text("Direccion de envio:", 10, 90)
                                                pdf.text(`Colonia: ${userDetails?.colonia}`, 10, 100)
                                                pdf.text(`Calle: ${userDetails?.calle}`, 10, 110)
                                                pdf.text(`Codigo postal: ${userDetails?.cp}`, 10, 120)
                                                pdf.text(`Estado: ${userDetails?.estado}`, 10, 130)
                                                pdf.text(`Municipio: ${userDetails?.ciudad}`, 10, 140)
                                                pdf.text(`Referencias: ${userDetails?.referencias}`, 10, 150)
                                                pdf.text(`Detalles de la compra:`, 10, 170);
                                                orderDetails.products.forEach((product, index) => {
                                                    const quantityText = product.quantity > 1 ? 'pzs' : 'pz';
                                                    pdf.text(`${index + 1}. ${product.descripcion} - ${product?.codigo} - ${product.quantity} ${quantityText} - Precio: $${product.precio}.00 MXN`, 10, 180 + index * 10);
                                                });
                                                pdf.text(`Costo de envio: $${userDetails?.costoEnvio}.00 MXN`, 10, 190 + orderDetails.products.length * 10);
                                                pdf.text(`Subotal: $${orderDetails.totalAmount}.00 MXN`, 10, 200 + orderDetails.products.length * 10);
                                                pdf.text(`Total: $${orderDetails.totalAmount + userDetails?.costoEnvio}.00 MXN`, 10, 210 + orderDetails.products.length * 10);
                                                pdf.save(`Detalle_Compra_${orderDetails.name}_${orderDetails.orderId}.pdf`);
                                            }
                                        });

                                    },
                                    (error) => {
                                        const params1 = {
                                            user_name: userDetails?.quienRecibe,
                                            from: "beautyymx@gmail.com",
                                            userEmail: userDetails?.correo,
                                            telefonoContacto: userDetails?.telefono,
                                            user_orderId: orderDetails?.orderId,
                                            products: orderDetails.products.map(product => ({
                                                name: product.descripcion,
                                                quantity: product.quantity,
                                                price: product.precio,
                                                image: product.fotos
                                            })),
                                            subtotalAmount: userDetails?.total,
                                            totalAmount: userDetails?.total + userDetails?.costoEnvio,
                                            calle: userDetails?.calle,
                                            colonia: userDetails?.colonia,
                                            cp: userDetails?.cp,
                                            estado: userDetails?.estado,
                                            ciudad: userDetails?.ciudad,
                                            costoEnvio: userDetails?.costoEnvio,
                                            municipio: userDetails?.ciudad,
                                            referencias: userDetails?.referencias
                                        }
                                        emailjs.send(serviceId, process.env.REACT_APP_EMAILJS_TEMPLATE, params1, process.env.REACT_APP_EMAILJS_PK)
                                        Swal.fire({
                                            icon: 'success',
                                            title: 'Pago Completado!',
                                            text: `Gracias por tu pago ${name}, por desgracia el sistema no podrá enviarte un correo electrónico con los detalles de tu compra, pero aquí tienes tu ticket.`,
                                            allowOutsideClick: false,
                                            allowEscapeKey: false,
                                            confirmButtonText: 'Descargar',
                                            confirmButtonColor: '#3085d6',
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                const pdf = new jsPDF();
                                                const imgUrl = 'https://i.postimg.cc/NjSkBHBz/beauty-ico.png';
                                                pdf.addImage(imgUrl, 'PNG', 10, 10, 50, 50);
                                                pdf.text(`¡Gracias por tu compra, ${orderDetails.name}!`, 10, 70);
                                                pdf.text(`Pedido numero: #${orderDetails.orderId}`, 10, 80);
                                                pdf.text(`Detalles de la compra:`, 10, 90);
                                                orderDetails.products.forEach((product, index) => {
                                                    const quantityText = product.quantity > 1 ? 'pzs' : 'pz';
                                                    pdf.text(`${index + 1}. ${product.descripcion} - ${product?.codigo} - ${product.quantity} ${quantityText} - Precio: $${product.precio}.00 MXN`, 10, 100 + index * 10);
                                                });
                                                pdf.text(`Total: $${orderDetails.totalAmount}.00 MXN`, 10, 110 + orderDetails.products.length * 10);
                                                pdf.save(`Detalle_Compra_${orderDetails.name}_${orderDetails.orderId}.pdf`);
                                            }
                                        });

                                    },
                                );
                                console.log("levando a pagina princial,")
                                setTimeout(() => {
                                    window.location.href = '/'
                                }, 5000)
                                localStorage.removeItem('cartItems');
                            })

                        }}
                        onCancel={() => {
                            Swal.fire({
                                icon: 'error',
                                title: 'Pago Cancelado',
                                text: 'Se ha cancelado el Pago con éxito',
                                confirmButtonColor: '#3085d6',
                            })
                        }}
                    />
                </PayPalScriptProvider>
            </div>
        </div>
    );
}
