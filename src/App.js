
import React, { Component } from "react";
//import { connect } from 'react-redux'
import Header from './components/Header';
import Index from './components/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <div >
          <Header/>
          <Index/>
        </div>
      </div >
    );
  }
}

export default (App);