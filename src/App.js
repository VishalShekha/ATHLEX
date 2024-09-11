import React from "react";
import bootstrap from 'bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Login from "./Pages/Login"
import Sports from "./Pages/Sports"
import SignUp from "./Pages/SignUp";
import CricketBat from "./Pages/CricketBat";
import Bats from "./Pages/Bats"
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom-theme.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import CricketBat from "./Pages/CricketBat";
import Home from "./Pages/Home";

function App() {
  return (
    
    <div>
    <Navbar/>
    {/* <CricketBat/>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-8 col-md-6 col-lg-4">
          <Login/>
          <SignUp/>
       
    <CricketBats/>
    <Sports/> */}
      <Router>
            
                <Routes>
                    {/* Route for Home Page */}
                    <Route path="/" element={<Home />} />

                    {/* Route for About Page */}
                    <Route path="/bats" element={<Bats/>} />

                    {/* Route for Contact Page */}
                    <Route path="/CricketBat" element={<CricketBat/>} />
                    
                    <Route path="/Login" element={<Login/>} />
                    {/* Route for Products Page */}
                    <Route path="/signup" element={<SignUp />} />

                    {/* 404 Not Found Route */}
                    <Route path="/Sports" element={<Sports />} />
                </Routes>
        
        </Router>
    <Footer/>
    </div>
  );
}

export default App;
