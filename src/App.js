import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop.js';

// Views
import Header from './views/header.js';
import Home from './views/home/home.js';
import Login from './views/login.js';
import Trip from './views/trip/trip.js';
import Success from './views/success.js';
import TripPreferences from './views/tripPreferences.js';
import Footer from './views/footer.js';


class App extends Component {

  // Set state
  state = {}

  // Render components and set routes
  render() {
    console.debug('[App.js] Rendering');

    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className='container-fluid'>

            {/* Header */}
            <Header />
            
            {/* Home */}
            <Route exact={true} path='/' render={() => (
              <Home />
            )}/>
            
            {/* Login */}
            <Route exact={true} path='/login' render={() => (
              <Login />
            )}/>
            
            {/* My Trips */}
            <Route exact={true} path='/trips' render={() => (
              <Trip />
            )}/>

            {/* New Trip */}
            <Route exact={true} path='/new_trip' render={() => (
              <TripPreferences />
            )}/>

            {/* Trip Created */}
            <Route exact={true} path='/success' render={() => (
              <Success />
            )}/>

            {/* Footer */}
            <Footer />

          </div>       
        </ScrollToTop> 
      </BrowserRouter>
    );
  }
}

export default App;
