import React, { Component } from 'react';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Account extends Component {

  // Set state 
  state = {
    temp: 'temp'
  }

  // Temp
  tempMethod = () => {
    console.log('just sayin!');
  }

  // Render component
  render() {
    return (
      <Row>
        <Col md={{ span: 12 }}>
          ACCOUNT
        </Col>
      </Row>
    );
  }
}

export default Account;
