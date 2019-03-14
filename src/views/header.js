import React, { Component } from 'react';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Images
import logo from '../images/header_logo.png';

// Styles
import '../styles/header.css';

class Header extends Component {

  // Set state
  state = {}

  // Render component
  render() {

    // Set HTML
    return (
      <Row className='header-row fixed-top'>
        <Col md={{ span: 4 }}>
          <img src={logo} alt='Elsewhere Travels'/>
        </Col>
        <Col md={{ span: 3, offset: 5 }}>
          <button type="button" className="btn btn-outline-secondary header-btn header-btn-secondary">Sign in</button>
          <button type="button" className="btn btn-outline-secondary header-btn">Get Started</button>
        </Col>
      </Row>
    );
  }
}

export default Header;
