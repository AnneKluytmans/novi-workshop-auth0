import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import {ENDPOINTS_SORTED} from "../api/endpoints";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  const [isAuth, toggleIsAuth] = useState({
    isAuth: false,
    user: null,
    status: "pending",
  });
  const navigate = useNavigate();

  useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
          void fetchUserData(token)
      } else {
       toggleIsAuth( {
         isAuth: false,
         user: null,
         status: "done",
       })
      }
  }, []);


  function login(userDetails) {
   localStorage.setItem("token", userDetails.token);
      toggleIsAuth({
          isAuth: true,
          user: {
              email: userDetails.user.email,
          },
          status: "done",
      });

   void fetchUserData(userDetails.token);
   navigate('/profile');
  }


  function logout() {
    localStorage.removeItem("token");
    toggleIsAuth({
      isAuth: false,
      user: null,
      status: "",
    });
    navigate('/');
  }

  const contextData = {
    user: isAuth.user,
    isAuth: isAuth.isAuth,
    status: isAuth.status,
    login: login,
    logout: logout,
  };

  async function fetchUserData(token) {
      const decoded = jwtDecode( token );
      const userId = decoded.userId;
    try {
      const result = await axios.get(
          ENDPOINTS_SORTED.users.byId(userId),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
      );
      console.log(result)
        toggleIsAuth({
            isAuth: true,
            user: {
                email: result.data.email,
                id: result.data.id,
            },
            status: "done",
        });

    } catch (e) {
      localStorage.removeItem("token");
      console.error(e);
        toggleIsAuth( {
            isAuth: false,
            user: null,
            status: "done",
        } );
    }
  }

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;