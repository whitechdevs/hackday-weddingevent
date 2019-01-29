import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Masthead from "./components/Masthead";
import ImageShowcase from "./components/ImageShowcase";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Masthead />
        <ImageShowcase />
        <Footer />
      </div>
    );
  }
}

export default App;
