import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Images
import logo from '../images/header_logo.png';

// Styles
import '../styles/header.css';

// Set style
const logoStyle = {
  cursor: 'pointer'
};


class Header extends Component {

  // Initialize constructor and set state
  constructor (props) {
    super(props);
    
    this.state = {
      transparentHeader: true
    }
  }

  // Mount scroll events
  // Ref: https://gist.github.com/koistya/934a4e452b61017ad611
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleOnScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleOnScroll)
  }

  // Handle onScroll event
  handleOnScroll = (event) => {
    if (window.scrollY > 50) {
      this.setState({'transparentHeader': false});
    } else {
      this.setState({'transparentHeader': true});
    }
  }

  // Change the header color on scroll
  changeHeaderColor = () => {
    return this.state.transparentHeader ? 'header-background-trans' : 'header-background-color';
  }

  // Render component
  render() {

    // Set HTML
    return (
      <Row className={`header-row fixed-top ${this.changeHeaderColor()}`}>
        <Col md={{ span: 4 }}>
          <Link to='/'>
            <img src={logo} alt='Elsewhere Travels' style={logoStyle}/>
          </Link>
        </Col>
        <Col md={{ span: 5, offset: 3 }}>
          <Link to='/'>
            <button type='button' className='btn btn-outline-secondary sml-purple-no-border-btn'>Home</button>
          </Link>
          <Link to='/plan'>
            <button type='button' className='btn btn-outline-secondary sml-purple-no-border-btn'>Plan Your Trip</button>
          </Link>
          <Link to='/login'>
            <button type='button' className='btn btn-outline-secondary sml-purple-border-btn'>Login</button>
          </Link>
        </Col>
      </Row>
    );
  }
}

export default Header;
