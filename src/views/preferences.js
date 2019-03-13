import React, { Component } from 'react';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Preferences extends Component {

  // Set state 
  state = {}

  // Render component
  render() {
    return (
      <Row>
        <Col md={{ span: 12 }}>
          PREFERENCES
        </Col>
      </Row>
    );
  }
}

export default Preferences;
