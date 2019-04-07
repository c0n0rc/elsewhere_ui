import React, { Component } from 'react';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Trip extends Component {

  // Render component
  render() {
    return (
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          TRIP
        </Col>
      </Row>
    );
  }
}

export default Trip;
