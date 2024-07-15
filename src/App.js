import Navbar from "./Navbar";
import Home from "./Home";
import Reserve from "./Reserve";
import './App.css';
import React from "react";
import Handleclick from "./Handleclick";
function App() {
  return(
    <div className="App">
    <Navbar />
     <Home />
    <Reserve /> 
    <Handleclick />
    </div>
  );
}

export default App;
