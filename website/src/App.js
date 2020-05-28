import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'

export default class App extends React.Component {
  render() {
      return(
        <div>
          <Navbar />
          <Home />
        </div>
      )
  }
}   
