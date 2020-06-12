import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './pages/home/home'
import Resume from './pages/resume/resume'
import Projects from './pages/projects/projects'
// import Contact from './pages/contact/contact'


export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projects" component={Projects} />
            {/* <Route exact path="/contact" component={Contact} /> */}
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
      </div>
    )
  }
}   
