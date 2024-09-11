import React from "react";
import bootstrap from 'bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Login from "./Pages/Login"
import Sports from "./Pages/Sports"
import SignUp from "./Pages/SignUp";
import CricketBats from "./Pages/bats";
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom-theme.css';
import CricketBat from "./Pages/CricketBat";


function App() {
  return (
    
    <div>
    <Navbar/>
    <CricketBat/>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-8 col-md-6 col-lg-4">
          <Login/>
          <SignUp/>
        </div>
      </div>
    </div>
    <CricketBats/>
    <Sports/>
    <Footer/>
    </div>
  );
}

export default App;
