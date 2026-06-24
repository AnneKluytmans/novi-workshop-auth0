import React from 'react';
import logo from '../assets/banana-01.png';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

  return (
    <nav>
      <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
      </Link>

      {!isAuthenticated ? (
          <button onClick={() => loginWithRedirect()}>
              Inloggen / Registreren
          </button>
        ) : (
          <div>
              <button onClick={() => logout({
                  logoutParams: {returnTo: window.location.origin}
              })}>
                  Uitloggen
              </button>
              <button onClick={() => navigate('/profile')}>
                  Profiel
              </button>
          </div>

      )
      }

    </nav>
  );
}

export default NavBar;