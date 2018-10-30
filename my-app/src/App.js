import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import NavbarTop from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SingIn';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <NavbarTop/>
            <Switch>
                <Route exact path='/' component={Dashboard}/>
                <Route path='/project/:id' component={ProjectDetails}/>
                <Route path='/signIn' component={SignIn}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
