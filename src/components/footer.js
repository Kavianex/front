
import React from 'react';
import { 
  Linkedin, 
  Telegram, 
  Github,
  // House,
  // Envelope, 
  // Twitter, 
  // Google, 
  // Instagram, 
  // Facebook, 
} from 'react-bootstrap-icons';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, 
  // MDBIcon
 } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.linkedin.com/company/kavianex/' className='me-4 text-reset'>
            <Linkedin/>
          </a>
          {/* <a href='/' className='me-4 text-reset'>
            <Twitter/>
          </a>
          <a href='' className='me-4 text-reset'>
            <Google/>
          </a>
          <a href='https://instagram.com/kavianex' className='me-4 text-reset'>
            <Instagram/>
          </a>
          <a href='' className='me-4 text-reset'>
            <Facebook/>
          </a> */}
          <a href='https://t.me/kavianex' className='me-4 text-reset'>
            <Telegram/>
          </a>
          <a href='https://github.com/Kavianex' className='me-4 text-reset'>
            <Github/>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                {/* <MDBIcon icon="gem" className="me-3" /> */}
                Kavianex
              </h6>
              <p>
                At Kavianex, we believe in creating a fair and transparent trading environment that encourages liquidity and empowers traders. 
                </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Partnerships</h6>
              <p>
                <a href='/market-makers' className='text-reset'>
                Marker Makers
                </a>
              </p>
              <p>
                <a href='/brokers' className='text-reset'>
                  Brokers
                </a>
              </p>
              <p>
                {/* <a href={process.env.REACT_APP_API_HOST + "/docs"} className='text-reset'> */}
                <a href="/docs" className='text-reset'>
                  API docs
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/whitepaper' className='text-reset'>
                  Whitepaper
                </a>
              </p>
              <p>
                <a href='/academy' className='text-reset'>
                  Academy
                </a>
              </p>
              <p>
                <a href={process.env.REACT_APP_TESTNET_APPLICATION_HOST} className='text-reset'>
                  Testnet
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <a href='/faq' className='text-reset'>
                  FAQ
                </a>
              </p>
              <p>
                {/* <House/> */}
                Tallinn, Estonia
              </p>
              <p>
                {/* <Envelope/> */}
                {process.env.REACT_APP_INFO_EMAIL}
              </p>
              {/* <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        ©2023 Copyright:{' '}
        <a className='text-reset fw-bold' href='#'>
          {process.env.REACT_APP_INFO_EMAIL}
        </a>
      </div>
    </MDBFooter>
  );
}