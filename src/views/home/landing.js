import React, { Component } from 'react';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Images
import Background from '../../images/treetop_sky_bkground.jpeg';

// Styles
import '../../styles/landing.css';

// Set style
const backgroundStyle = {
  width: '100%',
  backgroundImage: 'url(' + Background + ')',
  backgroundSize: 'cover', 
};


class Landing extends Component {

  // Set state
  state = {}

  // Scroll to 'Register' section after clicking 'Get Started'
  handleClick = () => {
    var element = document.getElementById('email-reg-input');
    element.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
  }

  // Render component
  render() {
    return (
      <Row className='landing-background'>
        <Col md={{ span: 12 }} style={backgroundStyle}>
            <Row className='filler-200'/>
            <Row>
              <Col className='landing' md={{ span: 8, offset: 2 }}>
                <h1 className='landing-header'>
                  Let's go elsewhere.
                </h1>
                <p className='landing-paragraph'>
                  Experience travel seamlessly.
                </p>
                <button type='button' className='btn btn-outline-secondary med-purple-border-btn' onClick={this.handleClick}>Get Started</button>
              </Col>
            </Row>
            <Row className='filler-200'/>
            <Row className='filler-200'/>
        </Col>
      </Row>
    );
  }
}

export default Landing;
