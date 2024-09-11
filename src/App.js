import React from "react";
import bootstrap from 'bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Login from "./Pages/Login"
function App() {
  return (
    
    <div>
    <Navbar/>
    <Login/>
    <Footer/>
    </div>
  );
}

export default App;
