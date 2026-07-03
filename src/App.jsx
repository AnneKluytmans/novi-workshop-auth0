import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import './App.css';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <p>Laden.....</p>

  return (
    <>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
