import React, { Component } from 'react';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Header extends Component {

  // Set state
  state = {}

  // Render component
  render() {
    return (
      <Row>
        <Col md={{ span: 12 }}>
          HEADER
        </Col>
      </Row>
    );
  }
}

export default Header;
