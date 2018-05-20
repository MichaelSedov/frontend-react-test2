import React, { Component } from 'react';
import Header from './components/Header';
import Routers from './routers/Routers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routers />
      </div>
    );
  }
}

export default App
