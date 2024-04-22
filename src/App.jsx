import React from "react";
import './App.css';
import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "./Home";

const App = () => {

  return (
    <div className="App container-fluid w-100 m-0 p-0">
      <NavBar />
      <Home />
      <Footer />
    </div>
  )
}

export default App;