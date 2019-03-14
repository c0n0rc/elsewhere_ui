import React, { Component } from 'react';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Styles
import '../styles/footer.css';

class Footer extends Component {

  // Set state 
  state = {}

  // Render component
  render() {
    return (
      <Row className='footer-row'>
        <Col md={{ span: 4, offset: 4 }} className='footer-icons'>
          <i className="fab fa-instagram fa-2x"></i>
        </Col>
      </Row>
    );
  }
}

export default Footer;
