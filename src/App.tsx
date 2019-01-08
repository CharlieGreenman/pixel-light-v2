import React, { Component } from 'react';
import './App.scss';
import {ChooseSize} from "./common/ui/choose-size/choose-size";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChooseSize/>
      </div>
    );
  }
}

export default App;
