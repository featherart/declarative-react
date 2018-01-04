import React, { Component } from 'react'
import logo from './owl.jpg'
import './App.css'
import Wizards from './Wizards'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Wizards</h1>
        </header>
        <div className="App-intro">
          <Wizards />
        </div>
      </div>
    );
  }
}

export default App;
