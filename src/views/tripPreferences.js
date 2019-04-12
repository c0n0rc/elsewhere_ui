import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Styles
import '../styles/tripPreferences.css';


class TripPreferences extends Component {

  // Initialize constructor and set state
  constructor (props) {
    console.debug('[tripPreferences.js] Constructing');

    super(props);
    
    this.state = {
      btnSelected: false
    }
  
  }

  // Fetch initial trip info on mount
  componentDidMount() {
    console.debug('[tripPreferences.js] Component did mount');

    // Fetch initial trip info (past, current, future trips)
    fetch('http://localhost:3003/api/v1/trips', {
      json: true,
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
      // body: JSON.stringify(
      //     {
      //       'email': this.state.email,
      //       'password': this.password.value
      //     }
      //   )
      })
      .then(res => res.json())
      .then(
        (result) => {
          if (result.error) {
            console.error('[tripPreferences.js] POST http://localhost:3003/api/v1/trips error: ' + result.status + ' ' + JSON.stringify(result.error));
          } else {
            console.log('[tripPreferences.js] POST http://localhost:3003/api/v1/trips success');
          }
        },
        (error) => {
          console.error('[tripPreferences.js] POST http://localhost:3003/api/v1/trip error: ' + error);
        }
      )
  }

  // Handle submission
  handleSubmitClick = (event) => {
    // Redirect to '/success' on success
    this.props.history.push('/success');
  }

  // Recolor each selection
  handleSelectClick = (event) => {
    this.setState({btnSelected: !this.state.btnSelected})
  }

  // Render component
  // @TODO Simplify
  render() {
    console.debug('[tripPreferences.js] Rendering');

    let btnClass = this.state.btnSelected ? 'selected-btn' : 'unselected-btn';

    return (
      <Row className='trips'>
        <Col md={{ span: 10, offset: 2 }}>
          <Row className='filler-100'/>
          <Row className='heading'>
            Your Journey
          </Row>
          <Row className='filler-20'/>
          <form>
            <div className='form-group'>
              <Row>
                <Col md={{ span: 3 }}>
                  <label className='purple-input-label' for='tripDateInput'>Trip Date:</label>
                  <input type='text' className='form-control purple-input-field' id='tripDateInput' placeholder='MM/DD/YYYY' style={{ marginTop: '0' }}/>
                </Col>
              </Row>
              <Row className='filler-20'/>
              <Row>
                <Col>
                  <label className='purple-input-label' style={{ marginLeft: '10px' }}>What kind of trip are you taking?</label>
                </Col>
              </Row>
              <Row>
                <Col style={{ marginLeft: '10px' }}>
                  <button type='button' className={`btn btn-outline-secondary sml-select-btn ${btnClass}`} onClick={this.handleSelectClick}>solo</button>
                  <button type='button' className='btn btn-outline-secondary sml-select-btn' onClick={this.handleSelectClick}>couple</button>
                  <button type='button' className='btn btn-outline-secondary sml-select-btn' onClick={this.handleSelectClick}>friends</button>
                  <button type='button' className='btn btn-outline-secondary sml-select-btn' onClick={this.handleSelectClick}>family</button>
                </Col>
              </Row>
              <Row className='filler-20'/>
              <Row>
                <Col md={{ span: 6 }}>
                  <label className='purple-input-label' for='tripMustsInput1'>Add your must see / must do activities:</label>
                  <input type='text' className='form-control purple-input-field' id='tripMustsInput1' style={{ marginTop: '0' }}/>
                  <input type='text' className='form-control purple-input-field' id='tripMustsInput2'/>
                  <input type='text' className='form-control purple-input-field' id='tripMustsInput3'/>
                  <input type='text' className='form-control purple-input-field' id='tripMustsInput4'/>
                </Col>

              </Row>
              <Row className='filler-50'/>
              <Row className='heading'>
                We want to learn more about<i>&nbsp;you</i>.
              </Row>
              <Row className='subheading'>
                Select all that apply.
              </Row>
              <Row className='filler-20'/>
              <Row>
                <Col>
                  <label className='purple-input-label' style={{ marginLeft: '10px' }}>Activities that interest you:</label>
                </Col>
              </Row>
              <Row>
                <Col style={{ marginLeft: '10px' }}>
                  <button type='button' className='btn btn-outline-secondary sml-select-btn' onClick={this.handleSelectClick}>museums</button>
                  <button type='button' className='btn btn-outline-secondary sml-select-btn' onClick={this.handleSelectClick}>hiking</button>
                  <button type='button' className='btn btn-outline-secondary sml-select-btn' onClick={this.handleSelectClick}>bars</button>
                  <button type='button' className='btn btn-outline-secondary sml-select-btn' onClick={this.handleSelectClick}>parks</button>
                </Col>
              </Row>
              <Row>
                <Col style={{ marginLeft: '10px' }}>
                  <button type='button' className='btn btn-outline-secondary sml-select-btn' onClick={this.handleSelectClick}>food tours</button>
                  <button type='button' className='btn btn-outline-secondary sml-select-btn' onClick={this.handleSelectClick}>concerts</button>
                  <button type='button' className='btn btn-outline-secondary sml-select-btn' onClick={this.handleSelectClick}>shopping</button>
                  <button type='button' className='btn btn-outline-secondary sml-select-btn' onClick={this.handleSelectClick}>fine dining</button>
                </Col>
              </Row>
              <Row className='filler-20'/>
              <Row>
                <Col>
                  <label className='purple-input-label' style={{ marginLeft: '10px' }}>How packed do you like your day?</label>
                </Col>
              </Row>
              <Row>
                <Col style={{ marginLeft: '10px' }}>
                  <button type='button' className='btn btn-outline-secondary sml-select-btn' onClick={this.handleSelectClick}>light</button>
                  <button type='button' className='btn btn-outline-secondary sml-select-btn' onClick={this.handleSelectClick}>moderate</button>
                  <button type='button' className='btn btn-outline-secondary sml-select-btn' onClick={this.handleSelectClick}>busy</button>
                </Col>
              </Row>
              <Row className='filler-20'/>
              <Row>
                <Col>
                  <label className='purple-input-label' style={{ marginLeft: '10px' }}>Outdoor or indoor activites? </label>
                </Col>
              </Row>
              <Row>
                <Col style={{ marginLeft: '10px' }}>
                  <button type='button' className='btn btn-outline-secondary sml-select-btn' onClick={this.handleSelectClick}>outdoor</button>
                  <button type='button' className='btn btn-outline-secondary sml-select-btn' onClick={this.handleSelectClick}>indoor</button>
                </Col>
              </Row>
              <Row className='filler-20'/>
              <Row>
                <Col md={{ span: 6 }}>
                  <button type='button' className='btn btn-outline-secondary med-purple-border-btn' onClick={this.handleSubmitClick}>Create Trip</button>
                </Col>
              </Row>
            </div>
          </form>
          <Row className='filler-50'/>
        </Col>
      </Row>
    );
  }
}

export default withRouter(TripPreferences)
