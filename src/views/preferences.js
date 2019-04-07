import React, { Component } from 'react';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Preferences extends Component {

  // Render component
  render() {
    return (
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          PREFERENCES
        </Col>
      </Row>
    );
  }
}

export default Preferences;
