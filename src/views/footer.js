import React, { Component } from 'react';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Styles
import '../styles/footer.css';

class Footer extends Component {

  // Render component
  render() {
    return (
      <Row className='footer-row'>
        <Col md={{ span: 4, offset: 4 }} className='footer-icons'>
          <a href='https://www.instagram.com/elsewhere.travels/?hl=en' target='blank' rel='noopener'>
            <i className='fab fa-instagram fa-2x margin-20 med-purple-icon'></i>
          </a> 
          <a href='mailto:elsewheretravelsco@gmail.com?subject=Planning with Elsewhere Travels' target='blank' rel='noopener'>
            <i className='far fa-paper-plane fa-2x margin-20 med-purple-icon'></i>
          </a>
        </Col>
      </Row>
    );
  }
}

export default Footer;
