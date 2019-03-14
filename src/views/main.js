import React, { Component } from 'react';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Images
import Background from '../images/treetop_sky_bkground.jpeg';

// Styles
import '../styles/main.css';

const backgroundStyle = {
  width: '100%',
  backgroundImage: 'url(' + Background + ')',
  backgroundSize: 'cover',
};

class Main extends Component {

  // Set state
  state = {}

  // Render component
  render() {
    return (
      <Row>
        <Col md={{ span: 12 }} style={backgroundStyle}>
            <Row className='filler-200'/>
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <h1 className='landing-header'>
                  go elsewhere.
                </h1>
                <p className='landing-paragraph'>
                  Explore the world seamlessly with Elsewhere Travels.
                </p>
                <button type="button" className="btn btn-outline-secondary start-btn">Get Started</button>
              </Col>
            </Row>
            <Row className='filler-200'/>
            <Row className='filler-20'/>
        </Col>
      </Row>
    );
  }
}

export default Main;
