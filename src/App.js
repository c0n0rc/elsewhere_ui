import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop.js';

// Views
import Header from './views/header.js';
import Home from './views/home/home.js';
import Login from './views/login.js';
import Trip from './views/trip/trip.js';
import Success from './views/utils/success.js';
import Logout from './views/utils/logout.js';
import Unauthorized from './views/utils/unauthorized.js';
import NotFound from './views/utils/notFound.js';
import TripPreferences from './views/tripPreferences.js';
import Footer from './views/footer.js';

// Authorization 
import { hasRole } from './utils/auth.js';
import { user, admin, visitor } from './utils/roles.js';

class App extends Component {

  // Initialize constructor and set state
  state = {
    user: visitor
  }

  // Render components and set routes
  render() {
    console.debug('[App.js] Rendering');

    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className='container-fluid'>

            {/* Header */}
            <Header />

            <Switch>

              {/* Home */}
              <Route exact={true} path='/' render={() => (
                hasRole(this.state.user, ['user', 'admin']) ? (
                  <Redirect to="/trips"/>
                ) : (
                  <Home />
                )
              )}/>
              
              {/* Login */}
              <Route exact={true} path='/login' render={() => (
                hasRole(this.state.user, ['visitor', 'admin']) ? (
                  <Login />
                ) : (
                  <Unauthorized />
                )
              )}/>
              
              {/* My Trips */}
              <Route exact={true} path='/trips' render={() => (
                hasRole(this.state.user, ['user', 'admin']) ? (
                 <Trip />
                ) : (
                  <Unauthorized />
                )
              )}/>

              {/* New Trip */}
              <Route exact={true} path='/new_trip' render={() => (
                hasRole(this.state.user, ['user', 'admin']) ? (
                  <TripPreferences />
                ) : (
                  <Unauthorized />
                )
              )}/>

              {/* Trip Created */}
              <Route exact={true} path='/success' render={() => (
                <Success />
              )}/>

              {/* Logout */}
              <Route exact={true} path='/logout' render={() => (
                hasRole(this.state.user, ['user', 'admin']) ? (
                  <Logout />
                ) : (
                  <Unauthorized />
                )
              )}/>

              {/* Catch all */}
              <NotFound />
  
            </Switch>    

            {/* Footer */}
            <Footer />

          </div> 
        </ScrollToTop> 
      </BrowserRouter>
    );
  }

  // Set user state
  setUserState(user) {
    this.setState({
      'user': user
    });
  }

  // Get user state
  getUserState() {
    return this.state.user;
  }

}

export default App;
