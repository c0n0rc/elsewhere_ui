import React, { Component } from 'react';
import validator from 'validator';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

// Styles
import '../styles/registration.css';

class Registration extends Component {

  // Initialize constructor and set state
  constructor (props) {
    super(props);
    
    this.state = {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      password: '',
      isValid: {
        fname: false,
        lname: false,
        email: false,
        phone: false,
        password: false,
        form: false
      },
      errorMessages: {
        fname: '',
        lname: '',
        email: '',
        phone: '',
        password: ''
      },
    }
  
  }

  // Handle input changes
  onChange = (event) => {
    this.handleUserInput(event);
  }

  // Set states
  // Ref: https://learnetto.com/blog/how-to-do-simple-form-validation-in-reactjs
  handleUserInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: validator.trim(value)}, () => this.validateField(name, value));
  } 

  // Validate each input field
  validateField = (name, value) => {
    let isValid = this.state.isValid;
    let errorMessages = this.state.errorMessages;

    switch(name) {
      
      case 'fname':
        // First name cannot be empty
        if (value.length === 0) {
          isValid.fname = false;
          errorMessages.fname = 'Required field.';
        // Name can only contain letters
        } else if (!validator.isAlpha(value)) {
          isValid.fname = false;
          errorMessages.fname = 'Field can only contain letters and spaces.';
        } else {
          isValid.fname = true;
          errorMessages.fname = '';
        }
        break;
      
      case 'lname':
        // Last name cannot be empty
        if (value.length === 0) {
          isValid.lname = false;
          errorMessages.lname = 'Required field.';
        // Name can only contain letters
        } else if (!validator.isAlpha(value)) {
          isValid.lname = false;
          errorMessages.lname = 'Field can only contain letters and spaces.';
        } else {
          isValid.lname = true;
          errorMessages.lname = '';
        }
        break;

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
      
      case 'phone':
        // Phone number can be empty
        if (value.length === 0) {
          isValid.phone = true;
          errorMessages.phone = '';
        } else if(!validator.isMobilePhone(value, ['en-US'])) {
          isValid.phone = false;
          errorMessages.phone = 'Invalid phone number.';
        } else {
          isValid.phone = true;
          errorMessages.phone = '';
        }
        break;
      
      case 'password':
        // Password cannot be empty
        if (value.length === 0) {
          isValid.password = false;
          errorMessages.password = 'Required field.';
        // Password must be between 8-16 characters
        } else if (value.length < 8 || value.length > 16) {
          isValid.password = false;
          errorMessages.password = 'Password must between 8-16 characters.';
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

    this.isFormValid();

  }

  // Add 'has-error' class to invalid form fields
  hasError = (error) => {
    return error.length > 0 ? 'has-error' : '';
  }

  // Check if all input fields are valid. Disable submit accordingly
  isFormValid = () => {
    var valid = this.state.isValid.fname && this.state.isValid.lname && this.state.isValid.email && this.state.isValid.phone && this.state.isValid.password;
    this.setState({'formValid': valid});
  }

  // Render component
  render() {
    return (
      <Row>

        <Col md={{ span: 12 }}>
          <Row className='filler-400'/>
        </Col>

        <Col md={{ span: 3, offset: 3 }} className='top-pad-20'>
          <Row className='info-container'>
            <Col md={{ span: 12 }} className='info'>
              Personalized trips with adaptive itineraries brought to you by a virtual, real-time travel concierge. 
              <br/>
              <br/>
              More traveling,
              <br/>
              less planning.
            </Col>
          </Row>
        </Col>

        <Col md={{ span: 6 }} className='top-pad-20'>
            <Row className='registration-text' id='registration-heading'>
              <Col md={{ span: 12 }}>
                Register
              </Col>
            </Row>
            <Row className='registration-text'>
              <Col md={{ span: 12 }}>
                to start your journey.
              </Col>
            </Row>
            <div className='form-group'>

              <Row>
                <Col md={{ span: 4 }}>
                  <input type='name' className={`form-control purple-input-field ${this.hasError(this.state.errorMessages.fname)}`} id='name-reg-input' placeholder='first name' name='fname' onChange={this.onChange} value={this.state.fname}/>
                </Col>
                {this.state.errorMessages.fname.length > 0 &&
                  <Col md={{ span: 6 }} className='error-message'>
                    <div className='fas fa-exclamation-circle pad-right-10'/>
                    {this.state.errorMessages.fname}
                  </Col>
                }
              </Row>

              <Row>
                <Col md={{ span: 4 }}>
                  <input type='name' className={`form-control purple-input-field ${this.hasError(this.state.errorMessages.lname)}`} id='name-reg-input' placeholder='last name' name='lname' onChange={this.onChange} value={this.state.lname}/>
                </Col>
                {this.state.errorMessages.lname.length > 0 &&
                  <Col md={{ span: 6 }} className='error-message'>
                    <div className='fas fa-exclamation-circle pad-right-10'/>
                    {this.state.errorMessages.lname}
                  </Col>
                }
              </Row>

              <Row>
                <Col md={{ span: 4 }}>
                  <input type='email' className={`form-control purple-input-field ${this.hasError(this.state.errorMessages.email)}`} id='email-reg-input' placeholder='email' name='email' onChange={this.onChange} value={this.state.email}/>
                </Col>
                {this.state.errorMessages.email.length > 0 &&
                  <Col md={{ span: 6 }} className='error-message'>
                    <div className='fas fa-exclamation-circle pad-right-10'/>
                    {this.state.errorMessages.email}
                  </Col>
                }
              </Row>

              <Row>
                <Col md={{ span: 4 }}>
                  <input type='phone' className={`form-control purple-input-field ${this.hasError(this.state.errorMessages.phone)}`} id='phone-reg-input' placeholder='phone number (optional)' name='phone' onChange={this.onChange} value={this.state.phone}/>
                </Col>
                {this.state.errorMessages.phone.length > 0 &&
                  <Col md={{ span: 6 }} className='error-message'>
                    <div className='fas fa-exclamation-circle pad-right-10'/>
                    {this.state.errorMessages.phone}
                  </Col>
                }              
              </Row>
            
              <Row>
                <Col md={{ span: 4 }}>
                  <input type='password' className={`form-control purple-input-field ${this.hasError(this.state.errorMessages.password)}`} id='password-reg-input' placeholder='password' name='password' onChange={this.onChange}/>
                </Col>
                {this.state.errorMessages.password.length > 0 &&
                  <Col md={{ span: 6 }} className='error-message'>
                    <div className='fas fa-exclamation-circle pad-right-10'/>
                    {this.state.errorMessages.password}
                  </Col>
                }
              </Row>

            </div>
            <Row>
              <Col md={{ span: 3 }}>
                <Button className='fas fa-arrow-right sml-purple-icon-button fa-2x' disabled={!this.state.formValid}/>
              </Col>
            </Row>
        </Col>

        <Col md={{ span: 12 }}>
          <Row className='filler-100'/>
        </Col>

      </Row>
    );
  }
}

export default Registration;