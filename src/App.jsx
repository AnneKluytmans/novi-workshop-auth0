import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import './App.css';

function App() {
  // const { isAuth, status } = useContext(AuthContext);
  //
  // if (status === "pending") {
  //    return <p>Loading...</p>
  // }
  return (
    <>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          {/*<Route path="/profile" element={isAuth ? <Profile /> : <Navigate to="/" />} />*/}
        </Routes>
      </div>
    </>
  );
}

export default App;
