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
import ManufacturesForm from "./Pages/ManufacturesForm";


function App() {
  return (
    
    <div>
    <Navbar/>
    <div className="container-xxl">
    <ManufacturesForm/>
    
    </div>
    <CricketBat/>
          <Login/>
          <SignUp/>
       
    <CricketBats/>
    <Sports/>
    <Footer/>
    </div>
  );
}

export default App;
