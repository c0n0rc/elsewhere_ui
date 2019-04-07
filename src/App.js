import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop.js';

// Views
import Header from './views/header.js';
import Home from './views/home/home.js';
import Login from './views/login.js';
import Profile from './views/profile.js';
import Plan from './views/plan.js';
import Trip from './views/trip.js';
import Footer from './views/footer.js';


class App extends Component {

  // Set state
  state = {}

  // Render components and set routes
  render() {
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
            
            {/* Profile */}
            <Route exact={true} path='/profile' render={() => (
              <Profile />
            )}/>

            {/* Plan */}
            <Route exact={true} path='/plan' render={() => (
              <Plan />
            )}/>

            {/* Trip */}
            <Route exact={true} path='/my_trip' render={() => (
              <Trip />
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
