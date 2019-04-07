import React, { Component } from 'react';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Signup extends Component {

  // Render component
  render() {
    return (
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          SIGNUP
        </Col>
      </Row>
    );
  }
}

export default Signup;
