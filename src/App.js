import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import Api from './api/Api';

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Route component={Api} />
      </div>
    );
  }
}

export default App;
