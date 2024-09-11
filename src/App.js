import React from "react";
import bootstrap from 'bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Login from "./Pages/Login"
import Sports from "./Pages/Sports"
function App() {
  return (
    
    <div>
    <Navbar/>
    <Login/>
    <Sports/>
    <Footer/>
    </div>
  );
}

export default App;
