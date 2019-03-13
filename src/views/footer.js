import React, { Component } from 'react';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Footer extends Component {

  // Set state 
  state = {}

  // Render component
  render() {
    return (
      <div className="fixed-bottom">
        <Col md={{ span: 12 }}>
          FOOTER
        </Col>
      </div>
    );
  }
}

export default Footer;
