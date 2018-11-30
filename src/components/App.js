import React, { Component } from 'react';
import Keys from './Keys';
import Logger from './Logger';
import '../styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Keys />
        <Logger />
      </div>
    );
  }
}

export default (App);