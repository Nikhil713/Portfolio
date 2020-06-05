import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './pages/home/home'
import Resume from './pages/resume/resume'


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
      </div>
    )
  }
}   
