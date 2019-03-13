import React from 'react';
import ReactDOM from 'react-dom';

// Views
import App from './App';

// Utils
import * as serviceWorker from './utils/serviceWorker';

// Set root for entire App
ReactDOM.render(
  <div>
    <link
      // Include current Bootstrap CSS
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
      integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
      crossOrigin="anonymous"
    />
    <App />
  </div>,
  document.getElementById('root'),
);

// Opt-out of offline cache behavior
serviceWorker.unregister();
