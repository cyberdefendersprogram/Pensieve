import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import pensieve from './pensieve.svg';
import './App.css';
import Mymenu from './Mymenu.js';
import PasswordForm from './Passwordform.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <img src={pensieve} className="App-logo" alt="logo" />
          <PasswordForm />

        </div>
      </div>
    );
  }
}

export default App;
