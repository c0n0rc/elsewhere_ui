import React, { Component } from 'react';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

class Login extends Component {

  // Set state 
  state = {}

  // Render component
  render() {
    return (
      <div>
        
        {/* Email input */}
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Username"
                aria-label="Username"
              />
            </InputGroup>
          </Col>
        </Row>

        {/* Password input */}
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Password</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Password"
                aria-label="Password"
              />
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Button active="false" href='/' block disabled>Login</Button>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Login;
