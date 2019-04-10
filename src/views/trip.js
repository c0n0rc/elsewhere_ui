import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import validator from 'validator';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

// Styles
import '../styles/trip.css';


class Trip extends Component {

  // Initialize constructor and set state
  constructor (props) {
    super(props);
    
    this.state = {

    }
  
  }

  // Fetch initial trip info on mount
  componentDidMount() {
    // Fetch initial trip info (past, current, future trips) @TODO 
    fetch('http://localhost:3003/api/v1/trips', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        method: 'GET'
      })
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result: ' + result);
        },
        (error) => {
          // Display error message on error @TODO
          console.log('error: ' + error);
        }
      )

  }

  // Handle input changes
  onChange = (event) => {
    this.handleUserInput(event);
  }

  // Render component
  render() {
    return (
      <Row>
        <Col md={{ span: 12 }}>
          <Row className='filler-400'/>
        </Col>
      </Row>
    );
  }
}

export default withRouter(Trip)
