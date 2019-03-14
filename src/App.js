import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// Views
import Footer from './views/footer.js';
import Header from './views/header.js';
import Login from './views/login.js';
import Main from './views/main.js';
import Preferences from './views/preferences.js';
import Signup from './views/signup.js';
import Account from './views/account.js';

import './styles/common.css'

class App extends Component {

  // Set state
  state = {}

  // Render component
  render() {
    return (
      <BrowserRouter>
        <div className='container-fluid'>

          {/* Header */}
          <Header />
          
          {/* Landing */}
          <Route exact={true} path='/' render={() => (
            <Main />
          )}/>
          
          {/* Login */}
          <Route exact={true} path='/login' render={() => (
            <Login />
          )}/>

          {/* Sign up w/ preferences */}
          <Route exact={true} path='/signup' render={() => (
            <div>
              <Preferences />
              <Signup />
            </div>
          )}/>
          
          {/* Account settings */}
          <Route exact={true} path='/account' render={() => (
              <Account />
          )}/>

          {/* Footer */}
          <Footer />

        </div>       
      </BrowserRouter>
    );
  }
}

export default App;
