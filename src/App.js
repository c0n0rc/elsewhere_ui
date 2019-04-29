import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop.js';

// Views
import Header from './views/header.js';
import Home from './views/home/home.js';
import Login from './views/login.js';
import Trip from './views/trip/trip.js';
import Logout from './views/utils/logout.js';
import Unauthorized from './views/utils/unauthorized.js';
import NotFound from './views/utils/notFound.js';
import TripPreferences from './views/trip/tripPreferences.js';
import Footer from './views/footer.js';

// Authorization 
import { hasRole } from './utils/auth.js';
import { user } from './utils/roles.js';

class App extends Component {

  // Initialize constructor and set state
  constructor (props) {
    super(props)
    this.state = { user: user }
  }

  // Render components and set routes
  render() {
    console.debug('[App.js] Rendering');

    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className='container-fluid'>

            {/* Header */}
            <Header user={this.state.user}/>

            <Switch>

              {/* Home */}
              <Route exact={true} path='/' render={() => (
                <Home onUpdate={this.onUpdate.bind(this)} user={this.state.user}/>
              )}/>
              
              {/* Login */}
              <Route exact={true} path='/login' render={() => (
                hasRole(this.state.user, ['visitor', 'admin']) ? (
                  <Login onUpdate={this.onUpdate.bind(this)} user={this.state.user}/>
                ) : (
                  <Unauthorized />
                )
              )}/>
              
              {/* My Trips */}
              <Route exact={true} path='/trips' render={() => (
                hasRole(this.state.user, ['user', 'admin']) ? (
                 <Trip onUpdate={this.onUpdate.bind(this)} user={this.state.user}/>
                ) : (
                  <Redirect to="/login"/>
                )
              )}/>

              {/* New Trip */}
              <Route exact={true} path='/new_trip' render={() => (
                hasRole(this.state.user, ['user', 'admin']) ? (
                  <TripPreferences onUpdate={this.onUpdate.bind(this)} user={this.state.user}/>
                ) : (
                  <Redirect to="/login"/>
                )
              )}/>

              {/* Logout */}
              <Route exact={true} path='/logout' render={() => (
                hasRole(this.state.user, ['user', 'admin']) ? (
                  <Logout onUpdate={this.onUpdate.bind(this)} user={this.state.user}/>
                ) : (
                  <Redirect to="/login"/>
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
  onUpdate(user) {
    this.setState({
      'user': user
    });
  }

}

export default App;
