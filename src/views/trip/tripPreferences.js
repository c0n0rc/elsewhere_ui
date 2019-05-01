import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// DatePicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Styles
import '../../styles/tripPreferences.css';


class TripPreferences extends Component {

  // Initialize constructor and set state
  constructor (props) {
    console.debug('[tripPreferences.js] Constructing');

    super(props);
    
    this.state = {
      btn1Selected: false,
      btn2Selected: false,
      btn3Selected: false,
      btn4Selected: false,
      btn5Selected: false,
      btn6Selected: false,
      btn7Selected: false,
      btn8Selected: false,
      btn9Selected: false,
      btn10Selected: false,
      btn11Selected: false,
      btn12Selected: false,
      btn13Selected: false,
      btn14Selected: false,
      btn15Selected: false,
      btn16Selected: false,
      btn17Selected: false,
      startDate: new Date()      
    }
  
    this.handleDateChange = this.handleDateChange.bind(this);

  }

  handleDateChange(date) {
    this.setState({
      startDate: date
    });
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
            // @TODO: Finalize names
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
    this.props.history.push('/my_trip');
  }

  // Recolor each selection
  handleSelectClick = (event) => {
    var buttonID = event.target.id;
    this.setState({ [buttonID]: !this.state[buttonID]});
  }

  // Render component
  render() {
    console.debug('[tripPreferences.js] Rendering');

    let btn1Class = this.state.btn1Selected ? 'selected-btn' : 'unselected-btn';
    let btn2Class = this.state.btn2Selected ? 'selected-btn' : 'unselected-btn';
    let btn3Class = this.state.btn3Selected ? 'selected-btn' : 'unselected-btn';
    let btn4Class = this.state.btn4Selected ? 'selected-btn' : 'unselected-btn';
    let btn5Class = this.state.btn5Selected ? 'selected-btn' : 'unselected-btn';
    let btn6Class = this.state.btn6Selected ? 'selected-btn' : 'unselected-btn';
    let btn7Class = this.state.btn7Selected ? 'selected-btn' : 'unselected-btn';
    let btn8Class = this.state.btn8Selected ? 'selected-btn' : 'unselected-btn';
    let btn9Class = this.state.btn9Selected ? 'selected-btn' : 'unselected-btn';
    let btn10Class = this.state.btn10Selected ? 'selected-btn' : 'unselected-btn';
    let btn11Class = this.state.btn11Selected ? 'selected-btn' : 'unselected-btn';
    let btn12Class = this.state.btn12Selected ? 'selected-btn' : 'unselected-btn';
    let btn13Class = this.state.btn13Selected ? 'selected-btn' : 'unselected-btn';
    let btn14Class = this.state.btn14Selected ? 'selected-btn' : 'unselected-btn';
    let btn15Class = this.state.btn15Selected ? 'selected-btn' : 'unselected-btn';
    let btn16Class = this.state.btn16Selected ? 'selected-btn' : 'unselected-btn';
    let btn17Class = this.state.btn17Selected ? 'selected-btn' : 'unselected-btn';

    return (
      <Row className='trips'>
        <Col md={{ span: 10, offset: 2 }}>
          <Row className='filler-50'/>
          <Row className='filler-100'/>
          <Row className='heading'>
            Your Journey
          </Row>
          <Row className='filler-20'/>
          <form>
            <div className='form-group'>
              <Row>
                <Col md={{ span: 3 }}>
                  <label className='purple-input-label'>Trip Date:</label>
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleDateChange}
                    className='purple-date-field'
                  />
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
                  <button type='button' id='btn1Selected' className={`btn btn-outline-secondary sml-select-btn ${btn1Class}`} onClick={this.handleSelectClick}>solo</button>
                  <button type='button' id='btn2Selected' className={`btn btn-outline-secondary sml-select-btn ${btn2Class}`} onClick={this.handleSelectClick}>couple</button>
                  <button type='button' id='btn3Selected' className={`btn btn-outline-secondary sml-select-btn ${btn3Class}`} onClick={this.handleSelectClick}>friends</button>
                  <button type='button' id='btn4Selected' className={`btn btn-outline-secondary sml-select-btn ${btn4Class}`} onClick={this.handleSelectClick}>family</button>
                </Col>
              </Row>
              <Row className='filler-20'/>
              <Row>
                <Col md={{ span: 6 }}>
                  <label className='purple-input-label'>Add your must see / must do activities:</label>
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
                  <button type='button' id='btn5Selected' className={`btn btn-outline-secondary sml-select-btn ${btn5Class}`} onClick={this.handleSelectClick}>museums</button>
                  <button type='button' id='btn6Selected' className={`btn btn-outline-secondary sml-select-btn ${btn6Class}`} onClick={this.handleSelectClick}>hiking</button>
                  <button type='button' id='btn7Selected' className={`btn btn-outline-secondary sml-select-btn ${btn7Class}`} onClick={this.handleSelectClick}>bars</button>
                  <button type='button' id='btn8Selected' className={`btn btn-outline-secondary sml-select-btn ${btn8Class}`} onClick={this.handleSelectClick}>parks</button>
                </Col>
              </Row>
              <Row>
                <Col style={{ marginLeft: '10px' }}>
                  <button type='button' id='btn9Selected' className={`btn btn-outline-secondary sml-select-btn ${btn9Class}`} onClick={this.handleSelectClick}>food tours</button>
                  <button type='button' id='btn10Selected' className={`btn btn-outline-secondary sml-select-btn ${btn10Class}`} onClick={this.handleSelectClick}>concerts</button>
                  <button type='button' id='btn11Selected' className={`btn btn-outline-secondary sml-select-btn ${btn11Class}`} onClick={this.handleSelectClick}>shopping</button>
                  <button type='button' id='btn12Selected' className={`btn btn-outline-secondary sml-select-btn ${btn12Class}`} onClick={this.handleSelectClick}>fine dining</button>
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
                  <button type='button' id='btn13Selected' className={`btn btn-outline-secondary sml-select-btn ${btn13Class}`} onClick={this.handleSelectClick}>light</button>
                  <button type='button' id='btn14Selected' className={`btn btn-outline-secondary sml-select-btn ${btn14Class}`} onClick={this.handleSelectClick}>moderate</button>
                  <button type='button' id='btn15Selected' className={`btn btn-outline-secondary sml-select-btn ${btn15Class}`} onClick={this.handleSelectClick}>busy</button>
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
                  <button type='button' id='btn16Selected' className={`btn btn-outline-secondary sml-select-btn ${btn16Class}`} onClick={this.handleSelectClick}>outdoor</button>
                  <button type='button' id='btn17Selected' className={`btn btn-outline-secondary sml-select-btn ${btn17Class}`} onClick={this.handleSelectClick}>indoor</button>
                </Col>
              </Row>
              <Row className='filler-20'/>
              <Row>
                <Col md={{ span: 6 }}>
                  <button type='button' className='btn btn-outline-secondary med-purple-btn' onClick={this.handleSubmitClick}>Create Trip</button>
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
