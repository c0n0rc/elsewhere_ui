import React from 'react';
import ReactDOM from 'react-dom';

// Views
import App from './App';

// Styles
import './styles/common.css'
import './styles/buttons.css'

// Utils
import * as serviceWorker from './utils/serviceWorker';

// Set root for entire App
ReactDOM.render(
  <div>
    <link
      // Bootstrap CSS
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
      integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
      crossOrigin="anonymous"
    />
    <link
      // fontawesome iconography
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
      crossOrigin="anonymous"
    />
    <link
      // Google Fonts
      href="https://fonts.googleapis.com/css?family=Montserrat"
      rel="stylesheet"
    />
    <App />
  </div>,
  document.getElementById('root'),
);

// Opt-out of offline cache behavior
serviceWorker.unregister();
