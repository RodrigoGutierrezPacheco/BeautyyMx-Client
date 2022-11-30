import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/beautyymx' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://www.instagram.com/beautyymx/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/in/rodrigogutierrezpacheco/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/RodrigoGutierrezPacheco' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Beautyy Mx
              </h6>
              <p>
								Somos una tienda dedicada a la venta de maquillaje y cuidado para la piel
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Productos</h6>
              <p>
                <a href='/rostro' className='text-reset'>
                  Rostro
                </a>
              </p>
              <p>
                <a href='/ojos' className='text-reset'>
                  Ojos
                </a>
              </p>
              <p>
                <a href='/labios' className='text-reset'>
                  Labios
                </a>
              </p>
              <p>
                <a href='/paletas' className='text-reset'>
                  Paletas
                </a>
              </p>
							<p>
                <a href='/cuidado-de-la-piel' className='text-reset'>
                  Cuidado de la Piel
                </a>
              </p>
							<p>
                <a href='/minis' className='text-reset'>
                  Minis
                </a>
              </p>
							<p>
                <a href='/accesorios' className='text-reset'>
                  Accesorios
                </a>
              </p>
            </MDBCol>

            {/* <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol> */}

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Cuernavaca,Mor.
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                beautyymx@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 55 777 123 456
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: '#ffbaba' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          BeautyyMx
        </a>
      </div>
    </MDBFooter>
  );
}