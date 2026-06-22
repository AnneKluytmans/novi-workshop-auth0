import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from "axios";
import {ENDPOINTS} from "../api/endpoints";

function SignIn() {
  const { login } = useContext(AuthContext);

  const projectId = import.meta.env.VITE_PROJECT_ID

  async function handleSubmit(e) {
    e.preventDefault();
      try {
          const result = await axios.post(ENDPOINTS.auth.login,
              {
                  email: "regular.user@example.com",
                  password: "regular123"
              } , {
                  headers: {
                      "novi-education-project-id": projectId
                  }
              })
          login(result.data);
      } catch (e){
          console.error(e);
      }
  }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={handleSubmit}>
        <p>*invoervelden*</p>
        <button type="submit">Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;