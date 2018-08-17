import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js'
import Logo from './components/Logo/Logo.js'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Logo />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
