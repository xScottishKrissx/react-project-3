import React, { Component } from 'react';
import './App.css';

import Header from './header/header.js';
import { Routes } from './routes/routes';

class App extends Component {
  render() {
    return (
      <div className=''>
      <Header />
      <Routes />
      </div>
    );
  }
}

export default App;
