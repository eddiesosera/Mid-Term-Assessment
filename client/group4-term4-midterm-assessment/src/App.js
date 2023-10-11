import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from 'client/group4-term4-midterm-assessment/src/Pages/home.js';
import { NavBar } from 'client/group4-term4-midterm-assessment/src/Elements/navbar.js';
// require('dotenv/config')



function App() {
  const isLoggedIn = sessionStorage.getItem("loggedIn")
  useEffect(() => {
    if (!isLoggedIn || isLoggedIn === "") {
      sessionStorage.setItem("loggedIn", false)
    }
  })
  return (
    <div className="App">
      <NavBar />
      {/* <NavLink to={`/user/1`}>user  </NavLink>
      |
      <NavLink to={`/questions`}>  create questions</NavLink> */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;