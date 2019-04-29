import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';

// Views
import Landing from './landing.js'
import Registration from './registration.js'

// Authorization 
import { hasRole } from '../../utils/auth.js';


class Home extends Component {

  // Render component
  render() {
    console.debug('[home.js] Rendering');

    return (
      <div className='home'>
        <Landing user={this.props.user}/>

        {hasRole(this.props.user, ['visitor']) &&
          <div>
            <Row className='filler-400'/>
            <Registration/>
            <Row className='filler-100'/>
          </div>
        }

      </div>
    );
  }
}

export default Home;
