import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Styles
import '../../styles/message.css';


class NotFound extends Component {

  // Render component
  render() {
    console.debug('[notFound.js] Rendering');

    return (
      <Row className='notFound'>
        <Col md={{ span: 12 }}>
          <Row className='filler-200'/>
          <Row>
            <Col md={{ span: 4, offset: 4 }} className='message-container'>
              <Row>
                <Col className='message-header'>
                  Uh oh!
                </Col>
              </Row>
              <Row>
                <Col className='message-body'>
                  Page not found.
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

export default NotFound;
