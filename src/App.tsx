import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ChooseSize} from "./common/ui/choose-size/choose-size";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChooseSize/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
