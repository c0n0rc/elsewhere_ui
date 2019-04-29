import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Styles
import '../../styles/message.css';


class Logout extends Component {

  // Render component
  render() {
    console.debug('[logout.js] Rendering');

    return (
      <Row className='logout'>
        <Col md={{ span: 12 }}>
          <Row className='filler-200'/>
          <Row>
            <Col md={{ span: 4, offset: 4 }} className='message-container'>
              <Row>
                <Col className='message-header'>
                  Logged out!
                </Col>
              </Row>
              <Row>
                <Col className='message-body'>
                  Until next time.
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className='filler-50'/>
          <Row className='filler-100'/>
        </Col>
      </Row>
    );
  }
}

export default Logout;
