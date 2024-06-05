import React, { useState, useEffect, useRef } from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';
import jsPDF from 'jspdf';

export default function FinalizarCompra() {
    const form = useRef();
    const [cp, setCp] = useState(0)
    const [direccion, setDireccion] = useState({
        nombreRecibe: "",
        calle: "",
        numeroExterior: "",
        numeroInterior: "",
        colonia: "",
        ciudad: "",
        estado: "",
        cp: "",
        numeroContacto: "",
        correoContacto: "",
        referencias: ""
    })

    const handleInputChange = (event) => {
        console.log(event)
        const { name, value } = event.target;
        console.log(name)
        setDireccion({
            ...direccion,
            [name]: value
        });
    };

    // const sendEmail = (e) => {
    //     console.log("entrando funcion")
    //     // e.preventDefault();
    //     Swal.fire({
    //         icon: 'success',
    //         title: '¡Pago realizado con exito!',
    //         text: 'En breve nos pondremos en contacto contigo',
    //         confirmButtonColor: '#3085d6',
    //     })
    //     emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICEID, process.env.REACT_APP_EMAILJS_TEMPLATE, form.current, process.env.REACT_APP_EMAILJS_PUBLICKEY)
    //         .then((result) => {
    //             console.log(result)
    //             Swal.fire({
    //                 icon: 'success',
    //                 title: '¡Correo Enviado!',
    //                 text: 'En breve nos pondremos en contacto contigo',
    //                 confirmButtonColor: '#3085d6',
    //             })
    //             setTimeout(function () {
    //                 window.location.reload();
    //             }, 5000);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }


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
        console.log("Pago confirmado")
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

    const handleCpChange = (event) => {
        setCp(event.target.value);
        console.log(cp)
    };

    const costoEnvio = 129

    return (
        <div className='celular px-5'>
            <h2 className='mb-5'>Productos en el carrito:</h2>
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
            <div className='costo-envio'>
                <span>Costo de envio</span>
                <span className='ml-3'>{`$${costoEnvio}.00 MXN`}</span>
            </div>
            <div className='flex2'>
                <span>¿Dónde quieres recibir tu orden?</span>
                <div className='domicilio'>
                    <div className=''>
                        <span>Nombre de quién recibe</span>
                        <input
                            name='nombreRecibe'
                            value={direccion?.nombreRecibe}
                            onChange={handleInputChange}
                            className='cp'
                            type="text"
                            placeholder='Quién recibe'
                        />
                    </div>
                    <div className=''>
                        <span>Teléfono</span>
                        <input
                            name='numeroContacto'
                            value={direccion?.numeroContacto}
                            onChange={handleInputChange}
                            className='cp'
                            type="text"
                            placeholder='Teléfono'
                        />
                    </div>
                    <div className=''>
                        <span>Calle</span>
                        <input
                            name='calle'
                            value={direccion?.calle}
                            onChange={handleInputChange}
                            className='cp'
                            type="text"
                            placeholder='Calle'
                        />
                    </div>
                    <div className=''>
                        <span>Número Exterior</span>
                        <input
                            name='numeroExterior'
                            value={direccion?.numeroExterior}
                            onChange={handleInputChange}
                            className='cp'
                            type="text"
                            placeholder='Número Exterior'
                        />
                    </div>
                    <div className=''>
                        <span>Número Interior</span>
                        <input
                            name='numeroInterior'
                            value={direccion?.numeroInterior}
                            onChange={handleInputChange}
                            className='cp'
                            type="text"
                            placeholder='Número Interior'
                        />
                    </div>
                    <div className=''>
                        <span>Colonia</span>
                        <input
                            name='colonia'
                            value={direccion?.colonia}
                            onChange={handleInputChange}
                            className='cp'
                            type="text"
                            placeholder='Colonia'
                        />
                    </div>
                    <div className=''>
                        <span>Ciudad</span>
                        <input
                            name='ciudad'
                            value={direccion?.ciudad}
                            onChange={handleInputChange}
                            className='cp'
                            type="text"
                            placeholder='Ciudad'
                        />
                    </div>
                    <div className=''>
                        <span>Estado</span>
                        <input
                            name='estado'
                            value={direccion?.estado}
                            onChange={handleInputChange}
                            className='cp'
                            type="text"
                            placeholder='Estado'
                        />
                    </div>
                    <div className=''>
                        <span>Código Postal</span>
                        <input
                            name='cp'
                            value={direccion?.cp}
                            onChange={handleInputChange}
                            className='cp'
                            type="text"
                            placeholder='Código Postal'
                        />
                    </div>
                    <div className=''>
                        <span>Referencias</span>
                        <input
                            name='referencias'
                            value={direccion?.referencias}
                            onChange={handleInputChange}
                            className='cp'
                            type="text"
                            placeholder='Referencias'
                        />
                    </div>
                </div>
                <span>Total: {`$${paypalAmount + costoEnvio}.00 MXN`}</span>
            </div>
            <span className=''>{direccion?.calle === "" || direccion?.ciudad === "" || direccion?.colonia === "" || direccion?.cp === "" || direccion?.estado === "" || direccion?.nombreRecibe === "" || direccion?.numeroContacto === "" || direccion?.numeroInterior === "" ? "Completa todos los datos para poder continuar con la compra" : ""}</span>
            <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID, components: "buttons", currency: "MXN", locale: "es_MX" }}>
                <PayPalButtons
                    disabled={direccion?.calle === "" || direccion?.ciudad === "" || direccion?.colonia === "" || direccion?.cp === "" || direccion?.estado === "" || direccion?.nombreRecibe === "" || direccion?.numeroContacto === "" || direccion?.numeroInterior === ""}
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
                            console.log("DETALLES---------->", details)
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
                            const email = details.payer.email_address;

                            // Expresión regular para detectar dominios de correo electrónico de Outlook
                            const isOutlookEmail = email.includes('outlook') || email.includes('live') || email.includes('hotmail');
                            const serviceId = isOutlookEmail ? process.env.REACT_APP_EMAILJS_SERVICEID_OUTLOOK : process.env.REACT_APP_EMAILJS_SERVICEID_GMAIL;
                            console.log('Correo electrónico:', email);
                            const params = {
                                user_name: orderDetails?.name,
                                from: "beautyymx@gmail.com",
                                userEmail: email,
                                user_orderId: orderDetails?.orderId,
                                products: orderDetails.products.map(product => ({
                                    name: product.descripcion,
                                    quantity: product.quantity,
                                    price: product.precio,
                                    image: product.fotos
                                })),
                                totalAmount: orderDetails.totalAmount,
                                direccion: direccion
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
                                            pdf.text(`¡Gracias por tu compra, ${orderDetails.name}!`, 10, 70);
                                            pdf.text(`Pedido numero: #${orderDetails.orderId}`, 10, 80);
                                            pdf.text(`Detalles de la compra:`, 10, 90);
                                            orderDetails.products.forEach((product, index) => {
                                                const quantityText = product.quantity > 1 ? 'pzs' : 'pz';
                                                pdf.text(`${index + 1}. ${product.descripcion} - ${product?.codigo} - ${product.quantity} ${quantityText} - Precio: $${product.precio}.00 MXN`, 10, 100 + index * 10);
                                            });
                                            pdf.text(`Total: $${orderDetails.totalAmount + costoEnvio}.00 MXN`, 10, 110 + orderDetails.products.length * 10);
                                            pdf.save(`Detalle_Compra_${orderDetails.name}_${orderDetails.orderId}.pdf`);
                                        }
                                    });

                                },
                                (error) => {
                                    console.log('FAILED...', error);
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
    );
}
