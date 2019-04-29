import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Styles
import '../../styles/trip.css';

// @TODO / TEMP
// Reference images for trip events
import EventOneBackground from '../../images/event_one_bkground.jpeg';
import EventTwoBackground from '../../images/event_two_bkground.jpg';
import EventThreeBackground from '../../images/event_three_bkground.jpeg';

// Set styles
const eventOneBackgroundStyle = {
  backgroundImage: 'url(' + EventOneBackground + ')',
  backgroundSize: 'cover',
  borderRadius: '0 8px 8px 0'
};

const eventTwoBackgroundStyle = {
  backgroundImage: 'url(' + EventTwoBackground + ')',
  backgroundSize: 'cover', 
  borderRadius: '8px'
};

const eventThreeBackgroundStyle = {
  backgroundImage: 'url(' + EventThreeBackground + ')',
  backgroundSize: 'cover',
  borderRadius: '8px'
};


class Trip extends Component {

  // Initialize constructor and set state
  constructor (props) {
    console.debug('[trip.js] Constructing');

    super(props);
    
    this.state = {

    }
  
  }

  // Fetch initial trip info on mount
  componentDidMount() {
    console.debug('[trip.js] Component did mount');

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
            console.error('[trip.js] POST http://localhost:3003/api/v1/trips error: ' + result.status + ' ' + JSON.stringify(result.error));
          } else {
            console.log('[trip.js] POST http://localhost:3003/api/v1/trips success');
          }
        },
        (error) => {
          console.error('[trip.js] POST http://localhost:3003/api/v1/trip error: ' + error);
        }
      )
  }

  // Handle input changes
  onChange = (event) => {
    this.handleUserInput(event);
  }

  // Redirect to '/new_trip' upon clicking 'Plan a new trip'
  handleNewTripClick = () => {
    this.props.history.push('/new_trip');
  }

  // Redirect to '/trip/:trip_id' upon clicking 'View trip'
  // @TODO
  handleViewTripClick = () => {
    this.props.history.push('/trip/:trip_id');
  }

  // Render component
  // @TODO Simplify
  render() {
    console.debug('[trip.js] Rendering');

    return (
      <Row className='trips'>
        <Col md={{ span: 12 }}>
          <Row className='filler-50'/>
          <Row className='filler-100'/>
          <Row>
            <Col md={{ span: 10, offset: 1 }} className='trip-heading'>
              My Trips
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 10, offset: 1 }} className='trip-subheading'>
              Current, upcoming & past trips
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <button type='button' className='btn btn-outline-secondary med-purple-border-btn' onClick={this.handleNewTripClick}>Plan a new trip</button>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 10, offset: 1 }} className='trips-container'>
              <Row className='trips-container-row'>
                
                <Col md={{ span: 3 }} className='event'>
                  <Row>
                    <Col md={{ span: 5 }} className='event-info'>
                      <div className='details-bold white'>You have</div>
                      <div className='details-bold white'>an upcoming trip to:</div>
                      <div className='destination-bold white' style={ { paddingTop: '8px'}}>New York,</div>
                      <div className='destination-bold white'>New York</div>
                      <div className='details-bold white' style={ { paddingTop: '8px'}}>Trip date(s):</div>
                      <div className='details white'>06/20/2019</div>
                      <div className='details-bold white' style={ { paddingTop: '5px'}}>Itinerary Status:</div>
                      <div className='details white'>In Progress</div>
                      <button type='button' className='btn btn-outline-secondary sml-white-btn' onClick={this.handleViewTripClick}>View Trip</button>
                    </Col>
                    <Col md={{ span: 7 }} className='event-background' style={eventOneBackgroundStyle}/>
                  </Row>
                </Col>

                <Col md={{ span: 3 }} className='event' style={eventTwoBackgroundStyle}>
                  <Row>
                    <Col md={{ span: 5 }} className='event-past-info'>
                      <div className='details-bold purple'>You took</div>
                      <div className='details-bold purple'>a trip to:</div>
                      <div className='destination-bold purple' style={ { paddingTop: '8px'}}>Brooklyn,</div>
                      <div className='destination-bold purple'>New York</div>
                      <div className='details-bold purple' style={ { paddingTop: '8px'}}>Trip date(s):</div>
                      <div className='details purple'>05/09/2018</div>
                      <div className='details-bold purple' style={ { paddingTop: '5px'}}>Itinerary Status:</div>
                      <div className='details purple'>Completed</div>
                      <button type='button' className='btn btn-outline-secondary sml-purple-border-btn' onClick={this.handleViewTripClick} style={ { marginLeft: '0px' } }>View Trip</button>
                    </Col>
                  </Row>
                </Col>

                <Col md={{ span: 3 }} className='event' style={eventThreeBackgroundStyle}>
                  <Row>
                    <Col md={{ span: 5 }} className='event-past-info'>
                      <div className='details-bold purple'>You took</div>
                      <div className='details-bold purple'>a trip to:</div>
                      <div className='destination-bold purple' style={ { paddingTop: '8px'}}>Queens,</div>
                      <div className='destination-bold purple'>New York</div>
                      <div className='details-bold purple' style={ { paddingTop: '8px'}}>Trip date(s):</div>
                      <div className='details purple'>04/11/2018</div>
                      <div className='details-bold purple' style={ { paddingTop: '5px'}}>Itinerary Status:</div>
                      <div className='details purple'>Completed</div>
                      <button type='button' className='btn btn-outline-secondary sml-purple-border-btn' onClick={this.handleViewTripClick} style={ { marginLeft: '0px' } }>View Trip</button>
                    </Col>
                  </Row>
                </Col>

              </Row>
            </Col>
          </Row>
          <Row className='filler-50'/>
        </Col>
      </Row>
    );
  }
}

export default withRouter(Trip)
