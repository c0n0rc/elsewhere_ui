import React, { Component } from 'react';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Main extends Component {

  // Set state
  state = {}

  // Render component
  render() {
    return (
      <Row>
        <Col md={{ span: 12 }}>
          MAIN
        </Col>
      </Row>
    );
  }
}

export default Main;
