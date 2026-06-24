import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import {Auth0Provider} from "@auth0/auth0-react";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        authorizationParams={{
            // redirect_uri: is de pagina waarnaar Auth0 terugkeert na inloggen — meestal de homepage, hier de profielpagina.
            redirect_uri: window.location.origin,
            audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        }}
      >
        <App/>
      </Auth0Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);