import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';

// Views
import Landing from './landing.js'
import Registration from './registration.js'


class Home extends Component {

  // Render component
  render() {
    console.debug('[home.js] Rendering');

    return (
      <div className='home'>
        <Landing/>
        <Row className='filler-400'/>
        <Registration/>
        <Row className='filler-100'/>
      </div>
    );
  }
}

export default Home;
