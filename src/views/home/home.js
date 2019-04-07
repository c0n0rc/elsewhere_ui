import React, { Component } from 'react';

// Views
import Landing from './landing.js'
import Registration from './registration.js'


class Home extends Component {

  // Render component
  render() {
    return (
      <div>
        <Landing/>
        <Registration/>
      </div>
    );
  }
}

export default Home;
