
import React, { Component } from "react";
//import { connect } from 'react-redux'
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <div >
          <Header />
        </div>
      </div >
    );
  }
}

export default (App);