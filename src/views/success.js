import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Styles
import '../styles/success.css';


class Success extends Component {

  // Render component
  render() {
    console.debug('[success.js] Rendering');

    return (
      <Row className='success'>
        <Col md={{ span: 12 }}>
          <Row className='filler-200'/>
          <Row>
            <Col md={{ span: 4, offset: 4 }} className='success-container'>
              <Row>
                <Col className='success-header'>
                  Success!
                </Col>
              </Row>
              <Row>
                <Col className='success-message'>
                  We've texted your itinerary to your phone number on file.
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

export default Success;

