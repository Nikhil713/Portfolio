import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './pages/home/home'
import Projects from './pages/projects/projects'


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
      </div>
    )
  }
}   
