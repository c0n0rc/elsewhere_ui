import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import validator from 'validator';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

// Images
import Background from '../images/treetop_mountain_bkground.jpeg';

// Styles
import '../styles/login.css';

// Set style
const backgroundStyle = {
  width: '100%',
  backgroundImage: 'url(' + Background + ')',
  backgroundSize: 'cover', 
};


class Login extends Component {

  // Initialize constructor and set state
  constructor (props) {
    super(props);
    
    this.state = {
      email: '',
      isValid: {
        email: false,
        password: false
      },
      errorMessages: {
        email: '',
        password: ''
      }
    }
  
  }

  // Handle input changes
  onChange = (event) => {
    this.handleUserInput(event);
  }

  // Set states
  // (Ref: https://learnetto.com/blog/how-to-do-simple-form-validation-in-reactjs)
  handleUserInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: validator.trim(value)});
  } 

  // Handle user submitting form
  handleSubmit = () => {
    // Validate form fields
    for (var key in this.state) {
      this.validateField(key, this.state[key]);
    }

    // Validate password (reference the field rather than storing this in state)
    this.validateField('password', this.password.value);

    // Can we submit? 
    if (this.isFormValid()) {

      // Validate user credentials @TODO
      // (Ref: https://reactjs.org/docs/faq-ajax.html)
      // 1. Check if user exists and password matches (Your username or password doesn't match what we have on file.)
      fetch('http://localhost:3003/user', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
          method: 'POST',
          body: JSON.stringify(
              {
                'email': this.state.email,
                'password': this.password.value
              }
            )
        })
        .then(res => res.json())
        .then(
          (result) => {
            console.log('result: ' + result);
          },
          (error) => {
            console.log('error: ' + error);

            // Redirect on success @TODO
            this.props.history.push('/trips');

            // Display error message on error @TODO
          }
        )

    }

  }

  // Validate given form field
  validateField = (name, value) => {
    let isValid = this.state.isValid;
    let errorMessages = this.state.errorMessages;

    switch(name) {

      case 'email':
        // Email cannot be empty
        if (value.length === 0) {
          isValid.email = false;
          errorMessages.email = 'Required field.';
        } else if (!validator.isEmail(value)) {
          isValid.email = false;
          errorMessages.email = 'Invalid email address.';
        } else {
          isValid.email = true;
          errorMessages.email = '';
        }
        break;

      case 'password':
        // Password cannot be empty
        if (value.length === 0) {
          isValid.password = false;
          errorMessages.password = 'Required field.';
        // Do not provide any further validation
        } else {
          isValid.password = true;
          errorMessages.password = '';
        }
        break;
      
      default:
        break;
    }

    this.setState({
      'isValid': isValid,
      'errorMessages': errorMessages
      });

  }

  // Add 'has-error' class to invalid form fields
  hasError = (error) => {
    return error.length > 0 ? 'has-error' : '';
  }

  // Check if all form fields are valid
  isFormValid = () => {
    return this.state.isValid.email && this.state.isValid.password;
  }

  // Render component
  render() {
    return (
      <Row>
        <Col md={{ span: 12 }} style={backgroundStyle}>
          <Row className='filler-200'/>
          <Row>
            <Col md={{ span: 2, offset: 5 }} className='login-container top-pad-20'>
              <Row>
                <Col md={{ span: 12 }} className='login-text'>
                  Welcome back.
                </Col>
              </Row>
              <div className='form-group'>
                <Row>
                  <Col md={{ span: 12 }}>
                    <input type='email'
                      className={`form-control purple-input-field ${this.hasError(this.state.errorMessages.email)}`}
                      id='email-reg-input'
                      placeholder='email'
                      name='email'
                      onChange={this.onChange}
                      value={this.state.email}
                    />
                  </Col>
                </Row>
                {this.state.errorMessages.email.length > 0 &&
                  <Row>
                    <Col md={{ span: 12 }} className='error-message'>
                      <div className='fas fa-exclamation-circle pad-right-10'/>
                      {this.state.errorMessages.email}
                    </Col>
                  </Row>
                }
                <Row>
                  <Col md={{ span: 12 }}>
                    <input type='password'
                      className={`form-control purple-input-field ${this.hasError(this.state.errorMessages.password)}`}
                      id='password-reg-input'
                      placeholder='password'
                      name='password'
                      ref={node => this.password = node}
                    />
                  </Col>
                </Row>
                {this.state.errorMessages.password.length > 0 &&
                  <Row>
                    <Col md={{ span: 12 }} className='error-message pad-right-10'>
                      <div className='fas fa-exclamation-circle pad-right-10'/>
                      {this.state.errorMessages.password}
                    </Col>
                  </Row>
                }
              </div>
              <Row>
                <Col md={{ span: 3 }}>
                  <Button className='fas fa-arrow-right sml-purple-icon-button fa-2x' onClick={this.handleSubmit}/>
                </Col>
              </Row>
            </Col>
            <Col md={{ span: 12 }}>
              <Row className='filler-50'/>
              <Row className='filler-100'/>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default withRouter(Login)
