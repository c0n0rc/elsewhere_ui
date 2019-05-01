import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Styles
import '../../styles/tripItinerary.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.less'

// Big Calendar
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
const localizer = BigCalendar.momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(BigCalendar)

class TripItinerary extends Component {

  // Initialize constructor and set state
  constructor (props) {
    console.debug('[tripItinerary.js] Constructing');

    super(props);
    
    var midnight = moment().startOf('day').toString();

    this.state = {
      events: [
        {
          start: new Date(moment(midnight).add(8, 'hours')),
          end: new Date(moment(midnight).add(9, 'hours')),
          title: "Breakfast at Bagel Pub",
          allDay: false
        },        
        {
          start: new Date(moment(midnight).add(10, 'hours')),
          end: new Date(moment(midnight).add(12, 'hours')),
          title: "A Walk in Prospect Park",
          allDay: false
        },
        {
          start:new Date(moment(midnight).add(13, 'hours')),
          end: new Date(moment(midnight).add(14, "hours")),
          title: "Lunch at Dutch Boy",
          allDay: false
        },
        {
          start: new Date(moment(midnight).add(15, "hours")),
          end: new Date(moment(midnight).add(18, "hours")),
          title: "Tour the Brooklyn Museum",
          allDay: false
        },
        {
          start: new Date(moment(midnight).add(19, "hours")),
          end: new Date(moment(midnight).add(20, "hours")),
          title: "Dinner at Puerto Viejo",
          allDay: false
        },
        {
          start: new Date(moment(midnight).add(21, "hours")),
          end: new Date(moment(midnight).add(23 , "hours")),
          title: "Drinks at Crown Inn",
          allDay: false
        }
      ]
    }

    // Bind BigCalendar events
    this.moveEvent = this.moveEvent.bind(this);
  }

  // Handle event moving
  moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
    const { events } = this.state;

    const idx = events.indexOf(event)
    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const updatedEvent = { ...event, start, end, allDay }
    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents,
    })

  }

  // Handle event resizing 
  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

  }

  // Fetch trip info on mount
  componentDidMount() {
    console.debug('[tripItinerary.js] Component did mount');

    // Fetch trip
    fetch('http://localhost:3003/api/v1/trip', {
      json: true,
      method: 'GET',
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
            console.error('[tripItinerary.js] GET http://localhost:3003/api/v1/trip error: ' + result.status + ' ' + JSON.stringify(result.error));
          } else {
            console.log('[tripItinerary.js] GET http://localhost:3003/api/v1/trip success');
          }
        },
        (error) => {
          console.error('[tripItinerary.js] GET http://localhost:3003/api/v1/trip error: ' + error);
        }
      )
  }

  // Handle new search
  handleSearchClick = (event) => {

  }

  // Handle new event
  handleEventClick = (event) => {

  }

  // Render component
  render() {
    console.debug('[tripItinerary.js] Rendering');

    return (
      <Row className='trip'>
        <Col>
          <Row className='filler-100'/>
          <Row>
            <Col className='itinerary-container'>
              <Row className='itinerary-header'>
                <Col md={{ span: 4 }}>
                  <form className='form-group itinerary-search'>
                    <input type='text'
                      className='form-control purple-input-field'
                      id='search'
                      placeholder='Search trip events'
                      onChange={this.onChange}
                    />
                  </form>
                </Col>
                <Col md={{ span: 1 }}>
                  <button type='button' className='btn btn-outline-secondary med-purple-btn' onClick={this.handleSearchClick}>Search</button>
                </Col>
                <Col md={{ span: 2, offset: 5 }}>
                  <button type='button' className='btn btn-outline-secondary med-purple-btn add-events-btn' onClick={this.handleEventClick}>Add Events</button>
                </Col>
              </Row>
              <Row className='itinerary-body'>
                <Col md={{ span: 8, offset: 2 }} className='itinerary-body-col'>
                  <DragAndDropCalendar
                    localizer={localizer}
                    selectable
                    resizable
                    startAccessor='start'
                    endAccessor='end'
                    events={this.state.events}
                    defaultView={BigCalendar.Views.DAY}
                    onEventDrop={this.moveEvent}
                    onEventResize={this.resizeEvent}
                    onSelectSlot={this.newEvent}
                  />
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

export default withRouter(TripItinerary)
