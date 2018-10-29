import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

import NavbarTop from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <NavbarTop/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
